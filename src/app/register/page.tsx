"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

const PRICES: Record<string, number> = {
  "Student Pass": 1499,
  "Professional Pass": 2999,
  "VIP Pass": 4999,
};

function loadRazorpay(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export default function RegisterPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    organization: "",
    city: "",
    ticketType: "Professional Pass",
    rsvpStatus: "attending",
  });
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    ticketNumber: string;
    qrUrl: string;
    emailSent: boolean;
    emailNote: string;
    amountPaid: number;
  } | null>(null);

  useEffect(() => {
    loadRazorpay();
  }, []);

  const price = PRICES[form.ticketType] || 0;

  const completeRegistration = async (payment: {
    razorpay_order_id?: string;
    razorpay_payment_id?: string;
    razorpay_signature?: string;
    demo?: boolean;
  }) => {
    const res = await fetch("/api/register/confirm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, ...payment }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Confirmation failed");
    setResult({
      ticketNumber: data.ticketNumber,
      qrUrl: data.qrUrl,
      emailSent: data.emailSent,
      emailNote: data.emailNote,
      amountPaid: data.amountPaid,
    });
    setDone(true);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const orderRes = await fetch("/api/register/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          ticketType: form.ticketType,
        }),
      });
      const order = await orderRes.json();
      if (!orderRes.ok) throw new Error(order.error || "Could not start payment");

      // Demo mode: no Razorpay keys — complete after user confirms
      if (order.demo) {
        await completeRegistration({ demo: true });
        return;
      }

      const ok = await loadRazorpay();
      if (!ok || !window.Razorpay) {
        throw new Error("Payment gateway failed to load. Please try again.");
      }

      const rzp = new window.Razorpay({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency || "INR",
        name: "DIGITAL MARKETING SUMMIT 2027",
        description: form.ticketType,
        order_id: order.orderId,
        prefill: {
          name: form.fullName,
          email: form.email,
          contact: form.mobile || undefined,
        },
        theme: { color: "#2563eb" },
        handler: async (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          try {
            setLoading(true);
            await completeRegistration(response);
          } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Payment received but confirmation failed");
          } finally {
            setLoading(false);
          }
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
            setError("Payment cancelled. You can try again when ready.");
          },
        },
      });

      rzp.open();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Registration failed");
      setLoading(false);
    }
  };

  if (done && result) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-green-700">Payment & RSVP Confirmed</h1>
          <p className="mt-2 text-slate-600">Thank you, {form.fullName}.</p>
          <p className="mt-4 font-mono text-lg font-semibold text-slate-900">{result.ticketNumber}</p>
          <p className="text-sm text-slate-500 mt-1">
            {form.ticketType} · ₹{(result.amountPaid / 100).toLocaleString("en-IN")}
          </p>
          <div className="mt-6 flex justify-center">
            <img src={result.qrUrl} alt="Entry QR code" width={200} height={200} className="rounded border border-slate-200" />
          </div>
          <p className="mt-3 text-xs text-slate-500">Show this QR at the registration desk on event day.</p>
          <p className="mt-4 text-sm text-slate-600">
            {result.emailSent
              ? "A confirmation email with your ticket details has been sent to " + form.email
              : "Confirmation email: " + result.emailNote + ". Add RESEND_API_KEY in Vercel to enable email."}
          </p>
          <Link href="/" className="mt-6 inline-block text-blue-600 text-sm font-medium">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="bg-[#0a1628] text-white py-4 px-4">
        <div className="max-w-xl mx-auto flex items-center gap-3">
          <Link href="/" className="text-slate-400 text-sm hover:text-white">
            Back
          </Link>
          <span className="font-semibold">Register & Pay</span>
        </div>
      </div>

      <form onSubmit={submit} className="max-w-xl mx-auto bg-white m-4 p-6 rounded-xl shadow space-y-4">
        <p className="text-sm text-slate-600">
          Complete your details and pay securely via Razorpay to confirm your seat for DIGITAL MARKETING SUMMIT 2027.
        </p>

        <div>
          <label className="block text-sm font-medium mb-1">Full Name *</label>
          <input
            required
            className="w-full border rounded-lg px-3 py-2"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email *</label>
          <input
            required
            type="email"
            className="w-full border rounded-lg px-3 py-2"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Mobile *</label>
          <input
            required
            className="w-full border rounded-lg px-3 py-2"
            value={form.mobile}
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Organisation</label>
          <input
            className="w-full border rounded-lg px-3 py-2"
            value={form.organization}
            onChange={(e) => setForm({ ...form, organization: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">City</label>
          <input
            className="w-full border rounded-lg px-3 py-2"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Pass *</label>
          <select
            className="w-full border rounded-lg px-3 py-2"
            value={form.ticketType}
            onChange={(e) => setForm({ ...form, ticketType: e.target.value })}
          >
            <option>Student Pass</option>
            <option>Professional Pass</option>
            <option>VIP Pass</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">RSVP *</label>
          <select
            className="w-full border rounded-lg px-3 py-2"
            value={form.rsvpStatus}
            onChange={(e) => setForm({ ...form, rsvpStatus: e.target.value })}
          >
            <option value="attending">Attending</option>
            <option value="maybe">Maybe</option>
            <option value="not_attending">Not attending</option>
          </select>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex justify-between items-center">
          <span className="text-sm text-slate-700">Amount to pay</span>
          <span className="text-xl font-bold text-blue-700">₹{price.toLocaleString("en-IN")}</span>
        </div>

        {error && <p className="text-red-600 text-sm bg-red-50 p-2 rounded">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white py-3 rounded-lg font-medium disabled:opacity-50"
        >
          {loading ? "Processing..." : `Pay ₹${price.toLocaleString("en-IN")} & Confirm`}
        </button>
        <p className="text-xs text-center text-slate-500">Secure payment powered by Razorpay</p>
      </form>
    </div>
  );
}
