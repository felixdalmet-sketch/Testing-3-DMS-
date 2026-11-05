"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo login - replace with real auth later
    if (email === "admin@dms2027.local" && password === "Admin@DMS2027!") {
      router.push("/admin");
    } else {
      setError("Invalid credentials. Use admin@dms2027.local / Admin@DMS2027!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <form onSubmit={submit} className="bg-white rounded-lg p-6 w-full max-w-md space-y-4">
        <h1 className="text-xl font-bold text-center">Admin Login</h1>
        <input type="email" required placeholder="Email" className="w-full border rounded px-3 py-2"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" required placeholder="Password" className="w-full border rounded px-3 py-2"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-slate-900 text-white py-2 rounded">Sign in</button>
        <Link href="/" className="block text-center text-sm text-blue-600">Back to site</Link>
      </form>
    </div>
  );
}
