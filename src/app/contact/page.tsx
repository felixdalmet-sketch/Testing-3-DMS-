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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header active="/contact" />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">Contact & Support</h1>
        <p className="mt-2 text-slate-600">Digital Marketing Summit 2027 Organising Committee</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="font-semibold text-slate-900">General enquiries</h2>
            <p className="mt-2 text-sm text-blue-600">info@dms2027</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="font-semibold text-slate-900">Registration support</h2>
            <p className="mt-2 text-sm text-blue-600">+91 9898765432</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="font-semibold text-slate-900">Sponsorship</h2>
            <p className="mt-2 text-sm text-blue-600">Sponsorship@dms2027</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <h2 className="font-semibold text-slate-900">Speakers</h2>
            <p className="mt-2 text-sm text-blue-600">speakers@dms2027</p>
          </div>
        </div>
      </main>
      <footer className="bg-[#0a1628] text-slate-400 py-8 px-4 text-center text-sm">DIGITAL MARKETING SUMMIT 2027</footer>
    </div>
  );
}
