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

const packages = [
  { name: "Title Partner", amount: "\u20b97,00,000", qty: "1" },
  { name: "Powered By Partner", amount: "\u20b93,00,000", qty: "1" },
  { name: "Gold Partner", amount: "\u20b91,50,000", qty: "2" },
  { name: "Silver Partner", amount: "\u20b975,000", qty: "4" },
  { name: "Technology Partner", amount: "\u20b950,000", qty: "2" },
];
const national = ["Zoho", "Canva", "Microsoft", "Google", "Meta", "HubSpot", "Freshworks", "AWS", "Razorpay", "Cashfree"];
const regional = ["Reputes Business Solutions", "Ecobillz", "DoorTaq Technologies", "Outofbox Cloud Lab", "DESILLM", "Dattamsh Edtech LLP", "Theta Dynamics", "Vayavya Labs", "SenseGiz Technologies", "Fortune Infoserve India", "BeTCA"];

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header active="/sponsors" />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#102a43]">Sponsors & Partners</h1>
        <p className="mt-2 text-slate-600">Target: \u20b917,00,000 across 10 partner slots. All listed organisations are prospects only.</p>
        <h2 className="mt-10 text-xl font-bold text-[#102a43]">Packages</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full bg-white border border-slate-200 rounded-lg text-sm">
            <thead className="bg-slate-50 text-left text-slate-500"><tr><th className="py-3 px-4">Package</th><th className="py-3 px-4">Amount</th><th className="py-3 px-4">Qty</th></tr></thead>
            <tbody>
              {packages.map((p) => (
                <tr key={p.name} className="border-t border-slate-100">
                  <td className="py-3 px-4 font-medium text-[#102a43]">{p.name}</td>
                  <td className="py-3 px-4">{p.amount}</td>
                  <td className="py-3 px-4">{p.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="mt-10 text-xl font-bold text-[#102a43]">National prospects</h2>
        <div className="mt-3 flex flex-wrap gap-2">{national.map((n) => (<span key={n} className="bg-white border border-slate-200 rounded px-3 py-1.5 text-sm">{n}</span>))}</div>
        <h2 className="mt-8 text-xl font-bold text-[#102a43]">Regional prospects</h2>
        <div className="mt-3 flex flex-wrap gap-2">{regional.map((n) => (<span key={n} className="bg-white border border-slate-200 rounded px-3 py-1.5 text-sm">{n}</span>))}</div>
      </main>
      <footer className="bg-[#102a43] text-slate-400 py-8 px-4 text-center text-sm">DIGITAL MARKETING SUMMIT 2027</footer>
    </div>
  );
}
