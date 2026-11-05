import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const PRICES: Record<string, number> = {
  "Student Pass": 149900,
  "Professional Pass": 299900,
  "VIP Pass": 499900,
};

function uniqueTicket() {
  const part = crypto.randomBytes(4).toString("hex").toUpperCase();
  return `DMS27-${part}`;
}

function uniqueToken() {
  return crypto.randomBytes(16).toString("hex");
}

function qrImageUrl(token: string) {
  const payload = encodeURIComponent(
    JSON.stringify({
      event: "DMS2027",
      token,
    })
  );
  return `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${payload}`;
}

async function sendConfirmationEmail(opts: {
  to: string;
  fullName: string;
  ticketNumber: string;
  ticketType: string;
  amount: number;
  qrUrl: string;
  verificationToken: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("RESEND_API_KEY not set — skipping email to", opts.to);
    return { sent: false, reason: "RESEND_API_KEY not configured" };
  }

  const from =
    process.env.EMAIL_FROM ||
    "DIGITAL MARKETING SUMMIT 2027 <onboarding@resend.dev>";
  const amountInr = (opts.amount / 100).toLocaleString("en-IN");

  const html = `
  <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;color:#0f172a">
    <h1 style="color:#1e3a8a">RSVP & Payment Confirmed</h1>
    <p>Dear ${opts.fullName},</p>
    <p>Thank you for registering for <strong>DIGITAL MARKETING SUMMIT 2027</strong>.</p>
    <table style="width:100%;border-collapse:collapse;margin:16px 0">
      <tr><td style="padding:8px;border:1px solid #e2e8f0">Ticket number</td><td style="padding:8px;border:1px solid #e2e8f0"><strong>${opts.ticketNumber}</strong></td></tr>
      <tr><td style="padding:8px;border:1px solid #e2e8f0">Pass</td><td style="padding:8px;border:1px solid #e2e8f0">${opts.ticketType}</td></tr>
      <tr><td style="padding:8px;border:1px solid #e2e8f0">Amount paid</td><td style="padding:8px;border:1px solid #e2e8f0">₹${amountInr}</td></tr>
      <tr><td style="padding:8px;border:1px solid #e2e8f0">Dates</td><td style="padding:8px;border:1px solid #e2e8f0">20–21 February 2027</td></tr>
      <tr><td style="padding:8px;border:1px solid #e2e8f0">Venue</td><td style="padding:8px;border:1px solid #e2e8f0">Fairfield by Marriott Belagavi</td></tr>
    </table>
    <p>Your unique entry QR code:</p>
    <p><img src="${opts.qrUrl}" alt="Entry QR" width="200" height="200" /></p>
    <p style="font-size:12px;color:#64748b">Show this QR at the registration desk. Token: ${opts.verificationToken}</p>
    <p>We look forward to seeing you at the summit.</p>
    <p>— Organising Committee<br/>DIGITAL MARKETING SUMMIT 2027</p>
  </div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [opts.to],
      subject: `Confirmed — ${opts.ticketNumber} | DIGITAL MARKETING SUMMIT 2027`,
      html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Resend error", err);
    return { sent: false, reason: "Email provider error" };
  }
  return { sent: true };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      mobile,
      organization,
      city,
      ticketType,
      rsvpStatus,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      demo,
    } = body;

    if (!fullName || !email || !ticketType) {
      return NextResponse.json({ error: "Missing registration fields" }, { status: 400 });
    }

    const amount = PRICES[ticketType];
    if (!amount) {
      return NextResponse.json({ error: "Invalid ticket type" }, { status: 400 });
    }

    // Verify Razorpay signature when not in demo mode
    if (!demo) {
      const keySecret = process.env.RAZORPAY_KEY_SECRET;
      if (!keySecret || !razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
        return NextResponse.json({ error: "Payment verification failed" }, { status: 400 });
      }
      const expected = crypto
        .createHmac("sha256", keySecret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");
      if (expected !== razorpay_signature) {
        return NextResponse.json({ error: "Invalid payment signature" }, { status: 400 });
      }
    }

    const ticketNumber = uniqueTicket();
    const verificationToken = uniqueToken();
    const qrUrl = qrImageUrl(verificationToken);

    const emailResult = await sendConfirmationEmail({
      to: email,
      fullName,
      ticketNumber,
      ticketType,
      amount,
      qrUrl,
      verificationToken,
    });

    return NextResponse.json({
      success: true,
      ticketNumber,
      verificationToken,
      qrUrl,
      ticketType,
      amountPaid: amount,
      emailSent: emailResult.sent,
      emailNote: emailResult.sent
        ? "Confirmation email sent"
        : emailResult.reason || "Email not sent",
      attendee: {
        fullName,
        email,
        mobile: mobile || null,
        organization: organization || null,
        city: city || null,
        rsvpStatus: rsvpStatus || "attending",
      },
      paymentId: razorpay_payment_id || (demo ? "demo_payment" : null),
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Confirmation failed" }, { status: 500 });
  }
}
