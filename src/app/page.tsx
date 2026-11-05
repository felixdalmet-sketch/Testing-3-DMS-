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
      <header className="fixed top-0 inset-x-0 z-50 bg-[#0a1628]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-blue-500/30">DMS</span>
            <span className="text-white font-semibold text-sm hidden sm:block">Digital Marketing Summit 2027</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-sm text-slate-300">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-white transition">{n.label}</Link>
            ))}
          </nav>
          <Link href="/register" className="bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-400 hover:to-violet-500 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg shadow-blue-500/25">
            RSVP Now
          </Link>
        </div>
      </header>

      <section className="hero-bg pt-28 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 text-sm font-semibold tracking-widest uppercase mb-4">
            20–21 February 2027 · Belagavi, Karnataka
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            The Future of Search, Social Media & AI Marketing
          </h1>
          <p className="mt-4 text-2xl font-semibold bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
            Discover. Connect. Transform.
          </p>
          <p className="mt-6 text-slate-200 text-lg max-w-2xl leading-relaxed">
            A two-day professional summit for marketers, entrepreneurs, students and industry leaders.
            Master SEO, AI search, social advertising, automation and digital growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/register" className="bg-white text-[#0a1628] font-semibold px-7 py-3 rounded-lg hover:bg-cyan-50 shadow-xl">
              Confirm Your RSVP
            </Link>
            <Link href="/agenda" className="border-2 border-white/40 text-white px-7 py-3 rounded-lg hover:bg-white/10 font-medium">
              View Full Agenda
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "2 Days", sub: "20–21 Feb 2027" },
            { label: "200", sub: "Delegates" },
            { label: "8–10", sub: "Industry speakers" },
            { label: "Belagavi", sub: "Fairfield by Marriott" },
          ].map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">{s.label}</p>
              <p className="text-sm text-slate-500 mt-1">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-gradient py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900">Marketing is changing. Stay ahead of it.</h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-lg">
              Practical sessions on SEO & AI search, social media advertising, performance marketing,
              content strategy, marketing automation and emerging AI tools.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                t: "Keynotes & Expert Sessions",
                d: "Learn from top practitioners on search, social and AI-powered marketing.",
                img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
              },
              {
                t: "Practical AI Workshop",
                d: "Hands-on prompt engineering, content creation and campaign planning with AI.",
                img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
              },
              {
                t: "Networking & Growth Challenge",
                d: "Connect with agencies and peers. Compete in the Digital Growth Challenge.",
                img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80",
              },
            ].map((c) => (
              <div key={c.t} className="bg-white border border-slate-200 rounded-xl overflow-hidden card-glow transition">
                <div className="h-40 bg-slate-200 overflow-hidden">
                  <img src={c.img} alt={c.t} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{c.t}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-white">Ready to be part of the conversation?</h2>
        <p className="mt-3 text-white/90">Seats limited to 200 delegates. Confirm your attendance today.</p>
        <Link href="/register" className="mt-8 inline-block bg-white text-violet-700 font-semibold px-8 py-3 rounded-lg shadow-xl hover:bg-slate-50">
          RSVP for DIGITAL MARKETING SUMMIT 2027
        </Link>
      </section>

      <footer className="bg-[#0a1628] text-slate-400 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="text-white font-semibold">DIGITAL MARKETING SUMMIT 2027</p>
            <p className="mt-1 text-sm text-cyan-300">Discover. Connect. Transform.</p>
            <p className="mt-4 text-sm">Fairfield by Marriott Belagavi · 20–21 February 2027</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-white">{n.label}</Link>
            ))}
          </div>
        </div>
        <p className="max-w-6xl mx-auto mt-8 pt-8 border-t border-white/10 text-xs">
          © 2027 Digital Marketing Summit Organising Committee.
        </p>
      </footer>
    </div>
  );
}
