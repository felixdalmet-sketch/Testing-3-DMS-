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

const headlines = [
  { name: "Ankur Warikoo", session: "The Future of Entrepreneurship and Personal Branding" },
  { name: "Sorav Jain", session: "The Future of Digital Marketing" },
  { name: "Raj Shamani", session: "Building Influence in the Digital Economy" },
  { name: "Neil Patel", session: "The Future of SEO and AI Search" },
];
const specialists = [
  { name: "Kaushal Thakkar", area: "Digital advertising and performance marketing" },
  { name: "Abhinav Chetan", area: "Digital marketing strategy" },
  { name: "Saranya M. Vinoth", area: "SEO and digital marketing" },
  { name: "Rishi Jain", area: "Growth marketing" },
  { name: "Anurag Sharma", area: "Marketing strategy" },
  { name: "Aman Jha", area: "Content and digital marketing" },
];

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header active="/speakers" />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#102a43]">Speakers & Industry Experts</h1>
        <p className="mt-2 text-slate-600">All names are invitation prospects only — not confirmed speakers.</p>
        <h2 className="mt-8 text-xl font-bold text-[#102a43]">Headline prospects</h2>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          {headlines.map((s) => (
            <div key={s.name} className="bg-white border border-slate-200 rounded-lg p-5">
              <p className="font-semibold text-[#102a43]">{s.name}</p>
              <p className="text-sm text-slate-500 mt-1">{s.session}</p>
              <span className="inline-block mt-3 text-xs bg-amber-50 text-amber-800 px-2 py-0.5 rounded">Prospect</span>
            </div>
          ))}
        </div>
        <h2 className="mt-10 text-xl font-bold text-[#102a43]">Specialist prospects</h2>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {specialists.map((s) => (
            <div key={s.name} className="bg-white border border-slate-200 rounded-lg p-5">
              <p className="font-semibold text-[#102a43]">{s.name}</p>
              <p className="text-sm text-slate-500 mt-1">{s.area}</p>
              <span className="inline-block mt-3 text-xs bg-amber-50 text-amber-800 px-2 py-0.5 rounded">Prospect</span>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-[#102a43] text-slate-400 py-8 px-4 text-center text-sm">DIGITAL MARKETING SUMMIT 2027 · 20–21 February 2027 · Belagavi</footer>
    </div>
  );
}
