import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-2xl font-bold">DMS 2027 Admin</h1>
      <p className="mt-2 text-slate-600">Dashboard placeholder. Full modules can be added after deploy works.</p>
      <Link href="/" className="mt-4 inline-block text-blue-600">View public site</Link>
    </div>
  );
}
