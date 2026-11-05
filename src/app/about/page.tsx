import Link from "next/link";

function Header({ active }: { active: string }) {
  const items = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/agenda", label: "Agenda" },
    { href: "/speakers", label: "Speakers" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/venue", label: "Venue" },
    { href: "/tickets", label: "Tickets" },
    { href: "/contact", label: "Contact" },
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
            <Link key={n.href} href={n.href} className={n.href === active ? "text-white font-medium" : "hover:text-white"}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/register" className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded">RSVP</Link>
      </div>
    </header>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header active="/about" />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#102a43]">About the Summit</h1>
        <p className="text-slate-600 text-lg mt-2 mb-8">Theme: The Future of Search, Social Media & AI Marketing</p>
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            DIGITAL MARKETING SUMMIT 2027 is a two-day professional conference bringing together digital marketers,
            entrepreneurs, business owners, students, marketing agencies, freelancers, technology companies and industry experts.
          </p>
          <p>
            The summit focuses on SEO, AI-powered search, social media advertising, performance marketing, content strategy,
            marketing automation, analytics and emerging AI tools. It is a practical industry-oriented learning and networking
            experience rather than a conventional college seminar.
          </p>
          <h2 className="text-xl font-bold text-[#102a43] mt-10">Main objectives</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Bring recognised marketing professionals and industry practitioners to Belagavi.</li>
            <li>Give delegates practical knowledge of current digital marketing tools and strategies.</li>
            <li>Connect students with agencies, companies, entrepreneurs and potential employers.</li>
            <li>Create opportunities for sponsors to demonstrate their products and services.</li>
            <li>Establish the summit as a recurring professional event in Karnataka.</li>
            <li>Build a strong network of digital marketing professionals, businesses and institutions.</li>
          </ol>
          <h2 className="text-xl font-bold text-[#102a43] mt-10">Who should attend (target 200)</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>College students (~80)</li>
            <li>Marketing professionals (~45)</li>
            <li>Business owners and entrepreneurs (~35)</li>
            <li>Freelancers and agencies (~25)</li>
            <li>Corporate and technology professionals (~15)</li>
          </ul>
        </div>
      </main>
      <footer className="bg-[#102a43] text-slate-400 py-8 px-4 text-center text-sm">
        DIGITAL MARKETING SUMMIT 2027 · 20–21 February 2027 · Belagavi
      </footer>
    </div>
  );
}
