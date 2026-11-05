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

const headlines = [
  { name: "Ankur Warikoo", session: "The Creator Economy and Personal Branding", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { name: "Sorav Jain", session: "The Future of Digital Marketing in India", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
  { name: "Raj Shamani", session: "AI Is Reshaping Marketing: What's Next?", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Neil Patel", session: "Search Is Changing: SEO, AEO and AI Search", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
];

const specialists = [
  { name: "Kaushal Thakkar", area: "Meta Ads and Performance Marketing" },
  { name: "Abhinav Chetan", area: "Content Strategy & Digital Marketing Strategy" },
  { name: "Saranya M. Vinoth", area: "Technical SEO and Website Growth" },
  { name: "Rishi Jain", area: "Growth Marketing & Automation" },
  { name: "Anurag Sharma", area: "Analytics, Attribution and Marketing ROI" },
  { name: "Aman Jha", area: "Social Media & AI Content Creation" },
];

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header active="/speakers" />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">Speakers & Industry Experts</h1>
        <p className="mt-2 text-slate-600">Learn from leading voices in digital marketing, SEO, AI and growth.</p>

        <h2 className="mt-10 text-xl font-bold text-slate-900">Keynote speakers</h2>
        <div className="mt-4 grid sm:grid-cols-2 gap-5">
          {headlines.map((s) => (
            <div key={s.name} className="bg-white border border-slate-200 rounded-xl overflow-hidden flex gap-4 p-4 card-glow transition">
              <img src={s.img} alt={s.name} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
              <div>
                <p className="font-bold text-slate-900 text-lg">{s.name}</p>
                <p className="text-sm text-blue-600 mt-1">{s.session}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-xl font-bold text-slate-900">Specialist speakers</h2>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {specialists.map((s) => (
            <div key={s.name} className="bg-white border border-slate-200 rounded-xl p-5 card-glow transition">
              <p className="font-semibold text-slate-900">{s.name}</p>
              <p className="text-sm text-slate-500 mt-1">{s.area}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-[#0a1628] text-slate-400 py-8 px-4 text-center text-sm">DIGITAL MARKETING SUMMIT 2027 · Belagavi</footer>
    </div>
  );
}
