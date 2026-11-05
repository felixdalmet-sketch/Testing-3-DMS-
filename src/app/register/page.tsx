"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [form, setForm] = useState({
    fullName: "", email: "", mobile: "", organization: "", city: "",
    ticketType: "Professional Pass", rsvpStatus: "attending",
  });
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [ticket, setTicket] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setTicket(data.ticketNumber || "DMS27-OK");
      setDone(true);
    } catch (err: any) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-green-700">RSVP Confirmed</h1>
          <p className="mt-2 text-slate-600">Thank you, {form.fullName}.</p>
          <p className="mt-4 font-mono text-lg">{ticket}</p>
          <Link href="/" className="mt-6 inline-block text-blue-600 text-sm">Back home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="bg-slate-950 text-white py-4 px-4">
        <div className="max-w-xl mx-auto flex items-center gap-3">
          <Link href="/" className="text-slate-400 text-sm">Back</Link>
          <span className="font-semibold">Confirm Your RSVP</span>
        </div>
      </div>
      <form onSubmit={submit} className="max-w-xl mx-auto bg-white m-4 p-6 rounded-lg shadow space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name *</label>
          <input required className="w-full border rounded px-3 py-2" value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email *</label>
          <input required type="email" className="w-full border rounded px-3 py-2" value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Mobile</label>
          <input className="w-full border rounded px-3 py-2" value={form.mobile}
            onChange={(e) => setForm({ ...form, mobile: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Pass *</label>
          <select className="w-full border rounded px-3 py-2" value={form.ticketType}
            onChange={(e) => setForm({ ...form, ticketType: e.target.value })}>
            <option>Student Pass</option>
            <option>Professional Pass</option>
            <option>VIP Pass</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">RSVP *</label>
          <select className="w-full border rounded px-3 py-2" value={form.rsvpStatus}
            onChange={(e) => setForm({ ...form, rsvpStatus: e.target.value })}>
            <option value="attending">Attending</option>
            <option value="maybe">Maybe</option>
            <option value="not_attending">Not attending</option>
          </select>
        </div>
        {error && <p className="text-red-600 text-sm bg-red-50 p-2 rounded">{error}</p>}
        <button type="submit" disabled={loading}
          className="w-full bg-slate-900 text-white py-3 rounded font-medium disabled:opacity-50">
          {loading ? "Submitting..." : "Confirm RSVP"}
        </button>
      </form>
    </div>
  );
}
