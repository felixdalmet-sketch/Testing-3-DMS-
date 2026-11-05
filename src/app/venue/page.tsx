import Link from "next/link";

function Header({ active }: { active: string }) {
  const items = [
    { href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/agenda", label: "Agenda" },
    { href: "/speakers", label: "Speakers" }, { href: "/sponsors", label: "Sponsors" },
    { href: "/venue", label: "Venue" }, { href: "/tickets", label: "Tickets" }, { href: "/contact", label: "Contact" },
  ];
  return (
    <header className="bg-[#0a1a2e] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded bg-blue-600 text-white text-xs font-bold flex items-center justify-center">DMS</span>
          <span className="text-white font-semibold text-sm hidden sm:block">DMS 2027</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-5 text-sm text-slate-300">
          {items.map((n) => (
            <Link key={n.href} href={n.href} className={n.href === active ? "text-white font-medium" : "hover:text-white"}>{n.label}</Link>
          ))}
        </nav>
        <Link href="/register" className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded">RSVP</Link>
      </div>
    </header>
  );
}

export default function VenuePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header active="/venue" />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#102a43]">Venue & Location</h1>
        <p className="mt-2 text-amber-700 text-sm bg-amber-50 border border-amber-200 rounded px-3 py-2 inline-block">
          Proposed venue — confirm only after signed venue agreement.
        </p>
        <div className="mt-8 bg-white border border-slate-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-[#102a43]">Fairfield by Marriott Belagavi</h2>
          <p className="mt-2 text-slate-600">Gogte Plaza, Belagavi, Karnataka 591113, India</p>
          <p className="mt-1 text-sm text-slate-500">20–21 February 2027 · Asia/Kolkata (IST)</p>
        </div>
        <h2 className="mt-10 text-xl font-bold text-[#102a43]">Planning requirements</h2>
        <ul className="mt-4 space-y-2 text-slate-700 text-sm">
          <li>• Main auditorium — 200 delegates, theatre-style</li>
          <li>• Stage with LED display and professional PA</li>
          <li>• Workshop room — 40–60 participants</li>
          <li>• Exhibition — 6–8 sponsor booths</li>
          <li>• Registration — 3 check-in counters with QR scanning</li>
          <li>• Networking area + catering (lunch and two breaks daily)</li>
        </ul>
      </main>
      <footer className="bg-[#102a43] text-slate-400 py-8 px-4 text-center text-sm">DIGITAL MARKETING SUMMIT 2027 · Belagavi</footer>
    </div>
  );
}
