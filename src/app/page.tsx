import Link from "next/link";

const nav = [
  { href: "/about", label: "About" },
  { href: "/agenda", label: "Agenda" },
  { href: "/speakers", label: "Speakers" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/venue", label: "Venue" },
  { href: "/tickets", label: "Tickets" },
  { href: "/contact", label: "Contact" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="fixed top-0 inset-x-0 z-50 bg-[#0a1a2e]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded bg-blue-600 text-white text-xs font-bold flex items-center justify-center">DMS</span>
            <span className="text-white font-semibold text-sm hidden sm:block">Digital Marketing Summit 2027</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-sm text-slate-300">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-white transition">{n.label}</Link>
            ))}
          </nav>
          <Link href="/register" className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded">
            RSVP Now
          </Link>
        </div>
      </header>

      <section className="hero-bg pt-28 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-300 text-sm font-medium tracking-widest uppercase mb-4">
            20–21 February 2027 · Belagavi, Karnataka
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            The Future of Search, Social Media & AI Marketing
          </h1>
          <p className="mt-4 text-xl text-blue-200 font-medium">Discover. Connect. Transform.</p>
          <p className="mt-6 text-slate-300 text-lg max-w-2xl leading-relaxed">
            A two-day professional conference for marketers, entrepreneurs, students and industry practitioners.
            Learn practical strategies in SEO, AI search, social media advertising, automation and digital growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/register" className="bg-white text-[#0a1a2e] font-semibold px-6 py-3 rounded hover:bg-slate-100">
              Confirm Your RSVP
            </Link>
            <Link href="/agenda" className="border border-white/30 text-white px-6 py-3 rounded hover:bg-white/10">
              View Full Agenda
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "2 Days", sub: "20–21 Feb 2027" },
            { label: "200", sub: "Expected delegates" },
            { label: "8–10", sub: "Industry speakers" },
            { label: "Belagavi", sub: "Fairfield by Marriott" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-[#102a43]">{s.label}</p>
              <p className="text-sm text-slate-500 mt-1">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl font-bold text-[#102a43]">Marketing is changing. Stay ahead of it.</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              DIGITAL MARKETING SUMMIT 2027 is a practical, industry-oriented learning and networking experience
              focused on SEO & AI search, social media advertising, performance marketing, content strategy,
              marketing automation and emerging AI tools.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Keynotes & Expert Sessions", d: "Learn from practitioners on the future of search, social and AI-powered marketing." },
              { t: "Practical AI Workshop", d: "Hands-on prompt engineering, content creation and campaign planning with AI tools." },
              { t: "Networking & Growth Challenge", d: "Connect with agencies and peers. Compete in the Digital Growth Challenge." },
            ].map((c) => (
              <div key={c.t} className="bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-300 transition">
                <h3 className="text-lg font-semibold text-[#102a43]">{c.t}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a1a2e] py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-white">Ready to be part of the conversation?</h2>
        <p className="mt-3 text-slate-300">Seats are limited to 200 delegates. Confirm your attendance.</p>
        <Link href="/register" className="mt-8 inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded">
          RSVP for DIGITAL MARKETING SUMMIT 2027
        </Link>
      </section>

      <footer className="bg-[#102a43] text-slate-400 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="text-white font-semibold">DIGITAL MARKETING SUMMIT 2027</p>
            <p className="mt-1 text-sm">Discover. Connect. Transform.</p>
            <p className="mt-4 text-sm">Fairfield by Marriott Belagavi · 20–21 February 2027</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-white">{n.label}</Link>
            ))}
            <Link href="/admin/login" className="hover:text-white">Admin</Link>
          </div>
        </div>
        <p className="max-w-6xl mx-auto mt-8 pt-8 border-t border-white/10 text-xs">
          © 2027 Digital Marketing Summit Organising Committee. Proposed details subject to final confirmation.
        </p>
      </footer>
    </div>
  );
}
