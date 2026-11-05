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

const day1 = [
  ["8:00–9:00 AM", "Registration & welcome refreshments", "—", "Registration"],
  ["9:00–9:15 AM", "Opening ceremony", "Organising Committee", "Inauguration"],
  ["9:15–9:30 AM", "Welcome address and summit introduction", "Organising Committee", "Organisers"],
  ["9:30–10:15 AM", "The Future of Digital Marketing in India", "Sorav Jain", "Keynote"],
  ["10:15–11:00 AM", "Search Is Changing: SEO, AEO and AI Search", "Neil Patel", "Expert"],
  ["11:00–11:20 AM", "Networking and refreshments", "—", "Break"],
  ["11:20 AM–12:05 PM", "Technical SEO and Website Growth Strategies", "Saranya M. Vinoth", "Expert"],
  ["12:05–12:50 PM", "Social Media Marketing: Brands and Communities", "Aman Jha", "Expert"],
  ["12:50–1:30 PM", "Meta Ads and Performance Marketing", "Kaushal Thakkar", "Practical"],
  ["1:30–2:30 PM", "Lunch and networking", "—", "Break"],
  ["2:30–3:15 PM", "Content Strategy: From Attention to Conversion", "Abhinav Chetan", "Expert"],
  ["3:15–4:00 PM", "The Creator Economy and Personal Branding", "Ankur Warikoo", "Expert"],
  ["4:00–4:20 PM", "Refreshments", "—", "Break"],
  ["4:20–5:15 PM", "The Digital Growth Debate", "Panel: Rishi Jain, Anurag Sharma & guests", "Panel"],
  ["5:15–5:45 PM", "Audience Q&A and networking", "All speakers", "Interaction"],
  ["5:45–6:00 PM", "Day 1 closing remarks", "Organising Committee", "Closing"],
];

const day2 = [
  ["8:30–9:00 AM", "Registration and networking", "—", "Registration"],
  ["9:00–9:15 AM", "Day 2 opening", "Organising Committee", "Organisers"],
  ["9:15–10:00 AM", "AI Is Reshaping Marketing: What's Next?", "Raj Shamani", "Keynote"],
  ["10:00–10:45 AM", "AI-Powered Content Creation and Prompt Engineering", "Aman Jha", "Expert"],
  ["10:45–11:05 AM", "Refreshments", "—", "Break"],
  ["11:05 AM–12:35 PM", "Practical AI Marketing Workshop", "Workshop facilitators", "Workshop"],
  ["12:35–1:15 PM", "Marketing Automation and CRM", "Rishi Jain", "Expert"],
  ["1:15–2:15 PM", "Lunch and networking", "—", "Break"],
  ["2:15–3:00 PM", "Analytics, Attribution and Marketing ROI", "Anurag Sharma", "Expert"],
  ["3:00–3:45 PM", "Digital Growth Challenge", "Team activity", "Challenge"],
  ["3:45–4:05 PM", "Refreshments", "—", "Break"],
  ["4:05–4:45 PM", "The Future of Marketing Careers", "Panel: Sorav Jain, Abhinav Chetan & guests", "Panel"],
  ["4:45–5:15 PM", "Awards and recognition", "Organising Committee", "Awards"],
  ["5:15–5:45 PM", "Closing keynote and summit summary", "Neil Patel", "Keynote"],
  ["5:45–6:00 PM", "Vote of thanks and closing", "Organising Committee", "Closing"],
];

function SessionTable({ rows }: { rows: string[][] }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-x-auto shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-gradient-to-r from-slate-50 to-indigo-50 text-xs uppercase text-slate-500">
          <tr>
            <th className="py-3 px-4">Time</th>
            <th className="py-3 px-4">Session</th>
            <th className="py-3 px-4">Speaker</th>
            <th className="py-3 px-4">Format</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0] + r[1]} className="border-t border-slate-100 hover:bg-slate-50/80">
              <td className="py-3 px-4 text-slate-500 whitespace-nowrap">{r[0]}</td>
              <td className="py-3 px-4 font-medium text-slate-900">{r[1]}</td>
              <td className="py-3 px-4 text-blue-700 font-medium">{r[2]}</td>
              <td className="py-3 px-4 text-slate-500">{r[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AgendaPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header active="/agenda" />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">Agenda & Schedule</h1>
        <p className="mt-2 text-slate-600">Two full days of keynotes, expert sessions, workshops and networking.</p>

        <h2 className="mt-10 text-xl font-bold text-slate-900">Day 1 — Saturday, 20 February 2027</h2>
        <p className="text-sm text-violet-600 font-medium mb-4">Theme: The Evolution of Digital Marketing</p>
        <SessionTable rows={day1} />

        <h2 className="mt-12 text-xl font-bold text-slate-900">Day 2 — Sunday, 21 February 2027</h2>
        <p className="text-sm text-violet-600 font-medium mb-4">Theme: AI, Automation and the Future of Marketing</p>
        <SessionTable rows={day2} />
      </main>
      <footer className="bg-[#0a1628] text-slate-400 py-8 px-4 text-center text-sm">DIGITAL MARKETING SUMMIT 2027 · Belagavi</footer>
    </div>
  );
}
