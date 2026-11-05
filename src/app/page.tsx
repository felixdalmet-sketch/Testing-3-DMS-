import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="font-semibold">DMS 2027</span>
          <Link href="/register" className="bg-blue-600 text-sm font-medium px-4 py-2 rounded">
            RSVP Now
          </Link>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-20">
        <p className="text-blue-400 text-sm uppercase tracking-widest mb-4">
          20-21 February 2027 · Belagavi, Karnataka
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
          The Future of Search, Social Media & AI Marketing
        </h1>
        <p className="mt-6 text-slate-300 text-lg max-w-xl">
          A two-day professional conference. Discover practical strategies, connect with experts, and transform how you grow.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/register" className="bg-white text-slate-900 font-semibold px-6 py-3 rounded">
            Confirm Your RSVP
          </Link>
          <Link href="/admin/login" className="border border-white/30 px-6 py-3 rounded text-sm">
            Admin Login
          </Link>
        </div>
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-slate-500 text-sm">
        DIGITAL MARKETING SUMMIT 2027 · Discover. Connect. Transform.
      </footer>
    </div>
  );
}
