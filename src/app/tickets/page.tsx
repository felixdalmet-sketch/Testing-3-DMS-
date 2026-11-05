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

const tickets = [
  { name: "Student Pass", price: "\u20b91,499", seats: "80 seats", benefits: ["Two-day access", "Keynotes & expert sessions", "Digital certificate", "Delegate kit", "Lunch & refreshments"] },
  { name: "Professional Pass", price: "\u20b92,999", seats: "100 seats", benefits: ["All Student benefits", "AI Marketing Workshop", "Priority registration", "Professional networking", "Event resources"] },
  { name: "VIP Pass", price: "\u20b94,999", seats: "20 seats", benefits: ["All Professional benefits", "Premium seating", "VIP networking", "Priority speaker Q&A", "Premium kit"] },
];

export default function TicketsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header active="/tickets" />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#102a43]">Ticket Details</h1>
        <p className="mt-2 text-slate-600">Planning prices. Total inventory: 200 passes. Final prices subject to organiser approval.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tickets.map((t) => (
            <div key={t.name} className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col">
              <h2 className="text-lg font-bold text-[#102a43]">{t.name}</h2>
              <p className="mt-2 text-3xl font-bold text-blue-600">{t.price}</p>
              <p className="text-xs text-slate-500 mt-1">{t.seats}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 flex-1">
                {t.benefits.map((b) => (<li key={b}>• {b}</li>))}
              </ul>
              <Link href="/register" className="mt-6 block text-center bg-[#0a1a2e] text-white py-2.5 rounded text-sm font-medium">RSVP</Link>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-[#102a43] text-slate-400 py-8 px-4 text-center text-sm">DIGITAL MARKETING SUMMIT 2027</footer>
    </div>
  );
}
