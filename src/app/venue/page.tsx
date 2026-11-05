import Link from "next/link";

function Header({ active }: { active: string }) {
  const items = [
    { href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/agenda", label: "Agenda" },
    { href: "/speakers", label: "Speakers" }, { href: "/sponsors", label: "Sponsors" },
    { href: "/venue", label: "Venue" }, { href: "/tickets", label: "Tickets" }, { href: "/contact", label: "Contact" },
  ];
  return (
    <header className="bg-[#0a1628] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 text-white text-xs font-bold flex items-center justify-center">DMS</span>
          <span className="text-white font-semibold text-sm hidden sm:block">DMS 2027</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-5 text-sm text-slate-300">
          {items.map((n) => (
            <Link key={n.href} href={n.href} className={n.href === active ? "text-white font-medium" : "hover:text-white"}>{n.label}</Link>
          ))}
        </nav>
        <Link href="/register" className="bg-gradient-to-r from-blue-500 to-violet-600 text-white text-sm font-medium px-4 py-2 rounded-lg">RSVP</Link>
      </div>
    </header>
  );
}

export default function VenuePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header active="/venue" />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">Venue & Location</h1>

        <div className="mt-8 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
          <img
            src="https://ik.imgkit.net/3vlqs5axxjf/external/https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/153/352/276/ixgfi-exterior-0001-hor-clsc_O.jpg?tr=w-1200%2Cfo-auto"
            alt="Fairfield by Marriott Belagavi exterior"
            className="w-full h-64 md:h-80 object-cover bg-slate-200"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-slate-900">Fairfield by Marriott Belagavi</h2>
            <p className="mt-2 text-slate-600">Gogte Plaza, Belagavi, Karnataka 591113, India</p>
            <p className="mt-1 text-sm text-slate-500">20–21 February 2027 · Asia/Kolkata (IST)</p>
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <img
            src="https://cache.marriott.com/is/image/marriotts7prod/ixgfi-outdoor-pool-7927:Wide-Hor?wid=800&fit=constrain"
            alt="Fairfield Belagavi pool and grounds"
            className="w-full h-48 object-cover rounded-xl border border-slate-200 bg-slate-200"
          />
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/21/62/f7/ab/fairfield-by-marriott.jpg"
            alt="Fairfield by Marriott Belagavi"
            className="w-full h-48 object-cover rounded-xl border border-slate-200 bg-slate-200"
          />
        </div>

        <h2 className="mt-10 text-xl font-bold text-slate-900">Event spaces</h2>
        <ul className="mt-4 space-y-2 text-slate-700 text-sm">
          <li>• Main auditorium — 200 delegates, theatre-style seating</li>
          <li>• Stage with LED display and professional PA</li>
          <li>• Workshop room — 40–60 participants</li>
          <li>• Exhibition zone — 6–8 sponsor booths</li>
          <li>• Registration — 3 check-in counters with QR scanning</li>
          <li>• Networking area with lunch and refreshment breaks</li>
        </ul>
      </main>
      <footer className="bg-[#0a1628] text-slate-400 py-8 px-4 text-center text-sm">DIGITAL MARKETING SUMMIT 2027 · Belagavi</footer>
    </div>
  );
}
