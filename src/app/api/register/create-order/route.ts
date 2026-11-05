import { NextRequest, NextResponse } from "next/server";

const PRICES: Record<string, number> = {
  "Student Pass": 149900,
  "Professional Pass": 299900,
  "VIP Pass": 499900,
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, ticketType } = body;

    if (!fullName || !email || !ticketType) {
      return NextResponse.json(
        { error: "Name, email and ticket type are required" },
        { status: 400 }
      );
    }

    const amount = PRICES[ticketType];
    if (!amount) {
      return NextResponse.json({ error: "Invalid ticket type" }, { status: 400 });
    }

    const keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    // Demo mode when keys are not configured (still returns order so UI can complete flow)
    if (!keyId || !keySecret) {
      const demoOrderId = "order_demo_" + Date.now();
      return NextResponse.json({
        success: true,
        demo: true,
        orderId: demoOrderId,
        amount,
        currency: "INR",
        keyId: keyId || "rzp_test_demo",
        ticketType,
        message: "Demo mode: add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in Vercel for live payments",
      });
    }

    const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
    const receipt = "dms27_" + Date.now().toString(36);

    const rzpRes = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        currency: "INR",
        receipt,
        notes: {
          fullName,
          email,
          ticketType,
          event: "DIGITAL MARKETING SUMMIT 2027",
        },
      }),
    });

    const order = await rzpRes.json();
    if (!rzpRes.ok) {
      console.error("Razorpay order error", order);
      return NextResponse.json(
        { error: order.error?.description || "Could not create payment order" },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      demo: false,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId,
      ticketType,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
