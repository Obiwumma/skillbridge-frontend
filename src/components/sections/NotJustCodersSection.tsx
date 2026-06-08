"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

// ── SVG icons per field ─────────────────────────────────────────────────────
const ICONS: Record<string, React.ReactNode> = {
  Law: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect x="22" y="4" width="4" height="40" rx="2" fill="currentColor" opacity=".15"/>
      <rect x="22" y="4" width="4" height="6" rx="2" fill="currentColor"/>
      <rect x="8" y="18" width="32" height="4" rx="2" fill="currentColor" opacity=".6"/>
      <circle cx="8" cy="20" r="5" fill="currentColor"/>
      <circle cx="40" cy="20" r="5" fill="currentColor"/>
      <rect x="6" y="30" width="14" height="3" rx="1.5" fill="currentColor" opacity=".4"/>
      <rect x="28" y="30" width="14" height="3" rx="1.5" fill="currentColor" opacity=".4"/>
    </svg>
  ),
  Accounting: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect x="6" y="6" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="2.5" opacity=".2"/>
      <rect x="6" y="6" width="36" height="10" rx="4" fill="currentColor" opacity=".15"/>
      <rect x="12" y="22" width="24" height="2.5" rx="1.25" fill="currentColor" opacity=".5"/>
      <rect x="12" y="28" width="16" height="2.5" rx="1.25" fill="currentColor" opacity=".5"/>
      <rect x="12" y="34" width="20" height="2.5" rx="1.25" fill="currentColor" opacity=".5"/>
      <circle cx="36" cy="36" r="7" fill="currentColor"/>
      <path d="M33 36h6M36 33v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  English: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <path d="M8 10C8 8 10 6 12 6h24c2 0 4 2 4 4v28c0 2-2 4-4 4H12c-2 0-4-2-4-4V10z" stroke="currentColor" strokeWidth="2.5" opacity=".2"/>
      <rect x="14" y="14" width="20" height="2.5" rx="1.25" fill="currentColor" opacity=".6"/>
      <rect x="14" y="20" width="14" height="2.5" rx="1.25" fill="currentColor" opacity=".4"/>
      <rect x="14" y="26" width="18" height="2.5" rx="1.25" fill="currentColor" opacity=".4"/>
      <circle cx="32" cy="35" r="7" fill="currentColor"/>
      <path d="M29 35.5l2.5 2.5L36 31" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Medicine: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <path d="M24 6C14 6 7 13 7 22c0 12 17 22 17 22s17-10 17-22c0-9-7-16-17-16z" fill="currentColor" opacity=".12"/>
      <path d="M24 6C14 6 7 13 7 22c0 12 17 22 17 22s17-10 17-22c0-9-7-16-17-16z" stroke="currentColor" strokeWidth="2.5"/>
      <rect x="21" y="17" width="6" height="12" rx="3" fill="currentColor"/>
      <rect x="18" y="20" width="12" height="6" rx="3" fill="currentColor"/>
    </svg>
  ),
  "Civil Eng.": (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect x="4" y="38" width="40" height="3" rx="1.5" fill="currentColor" opacity=".3"/>
      <path d="M24 8L6 38h36L24 8z" stroke="currentColor" strokeWidth="2.5" opacity=".2"/>
      <path d="M24 8L14 38" stroke="currentColor" strokeWidth="2" opacity=".5"/>
      <path d="M24 8L34 38" stroke="currentColor" strokeWidth="2" opacity=".5"/>
      <path d="M16 28h16" stroke="currentColor" strokeWidth="2" opacity=".4"/>
      <path d="M12 38V28" stroke="currentColor" strokeWidth="2.5" opacity=".6"/>
      <path d="M36 38V28" stroke="currentColor" strokeWidth="2.5" opacity=".6"/>
      <rect x="19" y="28" width="10" height="10" rx="1" fill="currentColor" opacity=".15"/>
    </svg>
  ),
  Economics: (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <polyline points="6,36 16,24 24,28 36,14 42,18" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" opacity=".5"/>
      <circle cx="6"  cy="36" r="3" fill="currentColor" opacity=".6"/>
      <circle cx="16" cy="24" r="3" fill="currentColor" opacity=".6"/>
      <circle cx="24" cy="28" r="3" fill="currentColor" opacity=".6"/>
      <circle cx="36" cy="14" r="3" fill="currentColor" opacity=".6"/>
      <circle cx="42" cy="18" r="3" fill="currentColor"/>
      <rect x="6" y="38" width="36" height="2.5" rx="1.25" fill="currentColor" opacity=".2"/>
      <rect x="4"  y="10" width="2.5" height="28" rx="1.25" fill="currentColor" opacity=".2"/>
    </svg>
  ),
};

const TECH_ICONS: Record<string, React.ReactNode> = {
  "Legal Tech": (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect x="6" y="6" width="36" height="36" rx="6" fill="currentColor" opacity=".15"/>
      <path d="M14 16h20M14 22h14M14 28h18M14 34h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="36" cy="34" r="7" fill="currentColor"/>
      <path d="M33 34h6M36 31v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  "Fintech PM": (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect x="6" y="12" width="36" height="26" rx="4" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M6 20h36" stroke="currentColor" strokeWidth="2"/>
      <circle cx="24" cy="31" r="5" fill="currentColor" opacity=".3"/>
      <circle cx="24" cy="31" r="3" fill="currentColor"/>
      <rect x="12" y="24" width="6" height="3" rx="1.5" fill="currentColor" opacity=".4"/>
    </svg>
  ),
  "Data Analyst": (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect x="6" y="30" width="8" height="12" rx="2" fill="currentColor"/>
      <rect x="18" y="20" width="8" height="22" rx="2" fill="currentColor" opacity=".7"/>
      <rect x="30" y="12" width="8" height="30" rx="2" fill="currentColor" opacity=".4"/>
      <path d="M8 12l8-6 12 8 10-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "Health Tech": (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="2.5" opacity=".3"/>
      <path d="M16 24h16M24 16v16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="36" cy="36" r="8" fill="currentColor"/>
      <path d="M33 36h6M36 33v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  "PropTech": (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <path d="M24 6L6 20v22h12V30h12v12h12V20L24 6z" stroke="currentColor" strokeWidth="2.5" opacity=".3"/>
      <path d="M24 6L6 20v22h12V30h12v12h12V20L24 6z" fill="currentColor" opacity=".08"/>
      <rect x="20" y="30" width="8" height="12" rx="1" fill="currentColor" opacity=".2"/>
      <circle cx="24" cy="16" r="4" fill="currentColor" opacity=".6"/>
    </svg>
  ),
  "Growth Ops": (
    <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5" opacity=".2"/>
      <path d="M24 8v4M24 36v4M8 24h4M36 24h4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity=".4"/>
      <path d="M16 20l8-4 8 8-4 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="24" cy="24" r="4" fill="currentColor"/>
    </svg>
  ),
};

const CARDS = [
  { degree:"LL.B",  field:"Law",        boost:"+68%", techRole:"Legal Tech",   techField:"Compliance PM",    color:"bg-[#f0ede4]", accent:"#253614" },
  { degree:"B.Sc",  field:"Accounting", boost:"+74%", techRole:"Fintech PM",   techField:"Product Manager",  color:"bg-[#e8f0e0]", accent:"#344c11" },
  { degree:"B.A",   field:"English",    boost:"+61%", techRole:"Data Analyst", techField:"Content Strategy", color:"bg-[#f5f0e8]", accent:"#5c3d2e" },
  { degree:"B.Sc",  field:"Medicine",   boost:"+80%", techRole:"Health Tech",  techField:"UX Researcher",    color:"bg-[#e4ede8]", accent:"#1a3a2a" },
  { degree:"B.Eng", field:"Civil Eng.", boost:"+71%", techRole:"PropTech",     techField:"Technical PM",     color:"bg-[#eae8f0]", accent:"#2d2654" },
  { degree:"B.A",   field:"Economics",  boost:"+77%", techRole:"Growth Ops",   techField:"Startup Analyst",  color:"bg-[#f0e8e4]", accent:"#5c2d1a" },
];

// ── Single card ─────────────────────────────────────────────────────────────
function DegreeCard({ card, index }: { card: typeof CARDS[0]; index: number }) {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      className="njc-card flex-shrink-0 w-64 h-80 rounded-2xl border-2 border-primary cursor-pointer select-none"
      style={{ background: card.color, boxShadow: "5px 5px 0px " + card.accent }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      onTapStart={() => setActive(a => !a)}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      {/* ── Front ── */}
      <div className={`njc-front absolute inset-0 p-6 flex flex-col justify-between ${active ? "opacity-0" : "opacity-100"}`}>
        {/* Top: degree + field */}
        <div>
          <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant uppercase block mb-2">
            {card.degree}
          </span>
          <h3 className="font-headline-md text-2xl font-black text-primary leading-tight">{card.field}</h3>
        </div>

        {/* Icon */}
        <div className="w-20 h-20 mx-auto text-primary opacity-70">
          {ICONS[card.field]}
        </div>

        {/* Bottom: boost badge + hint */}
        <div className="flex items-end justify-between">
          <div className="bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
            <span className="font-label-caps text-[10px] text-primary font-bold">Employability {card.boost}</span>
          </div>
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <svg className="w-5 h-5 text-primary opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* ── Back (slides up on hover) ── */}
      <div
        className="njc-back rounded-2xl p-6 flex flex-col justify-between h-full"
        style={{ background: card.accent }}
      >
        <div>
          <span className="font-label-caps text-[10px] tracking-widest text-primary-fixed/70 uppercase block mb-2">
            → Tech Path
          </span>
          <h3 className="font-headline-md text-2xl font-black text-primary-fixed leading-tight">{card.techRole}</h3>
          <p className="font-body-md text-sm text-primary-fixed/70 mt-1">{card.techField}</p>
        </div>

        <div className="w-16 h-16 mx-auto text-primary-fixed opacity-80">
          {TECH_ICONS[card.techRole]}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between font-label-caps text-[10px] text-primary-fixed/60 uppercase">
            <span>Readiness jump</span>
            <span>{card.boost}</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary-fixed rounded-full"
              initial={{ width: 0 }}
              animate={active ? { width: card.boost.replace("+","").replace("%","") + "%" } : { width: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
          <p className="font-label-caps text-[10px] text-primary-fixed/50 text-center pt-1">
            Based on 2026 market data
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ── Mentors page variant ────────────────────────────────────────────────────
function MentorsVariant() {
  return (
    <section className="max-w-screen-xl mx-auto px-container-margin py-24 relative overflow-hidden">
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
          The Philosophy of the Bridge
        </h2>
        <div className="w-24 h-1 bg-secondary mx-auto" />
      </motion.div>

      <div className="flex flex-wrap justify-center gap-12 lg:gap-24 relative z-10">
        {[
          { quote: "A mentor isn't a map; they are the lantern that shows you the first step in the dark.", src: "THE BRIDGE MANIFESTO", rotate: -4, bg: "bg-white/90", delay: 0.1 },
          { quote: "Growth happens at the edge of your comfort zone, but a mentor ensures you don't fall off the cliff.", src: "CAREER ROOTS", rotate: 3, bg: "bg-surface-container-high", delay: 0.2 },
          { quote: "We don't teach skills; we share instincts earned through a thousand failures.", src: "ANONYMOUS MENTOR", rotate: -2, bg: "bg-[#f5f4ee]", delay: 0.3 },
        ].map((s) => (
          <motion.div
            key={s.src}
            className={`${s.bg} p-8 w-72 shadow-lg cursor-pointer float-1`}
            initial={{ opacity: 0, scale: 0.9, rotate: s.rotate - 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: s.rotate }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)", transition: { duration: 0.2 } }}
            transition={{ duration: 0.6, delay: s.delay }}
          >
            <span className="material-symbols-outlined text-secondary text-4xl block mb-2">format_quote</span>
            <p className="font-emphasis-script text-primary text-lg leading-relaxed">&ldquo;{s.quote}&rdquo;</p>
            <div className="mt-4 text-right">
              <span className="font-label-caps text-[10px] text-outline italic">— {s.src}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ── Main export ─────────────────────────────────────────────────────────────
export default function NotJustCodersSection() {
  const pathname = usePathname();
  const isMentors = pathname === "/mentors";
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  // Subtle parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      setParallaxY((ratio - 0.5) * -40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (isMentors) return <MentorsVariant />;

  return (
    <section ref={sectionRef} className="py-section-gap overflow-hidden">
      {/* ── Header ── */}
      <div className="text-center mb-16 px-4 reveal">
        <span className="font-label-caps text-[11px] tracking-widest text-secondary uppercase block mb-3">
          Every Degree. Every Path.
        </span>
        <h2 className="font-headline-lg text-headline-lg text-primary">Not just for coders.</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-xl mx-auto">
          We map <em>every</em> traditional degree to the digital economy.{" "}
          <span className="font-bold text-primary">Hover a card</span> to reveal your tech path.
        </p>
      </div>

      {/* ── Desktop: two parallax rows ── */}
      <div
        className="hidden md:block relative"
        style={{ transform: `translateY(${parallaxY}px)`, transition: "transform 0.1s linear" }}
      >
        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden mb-5">
          <div ref={trackRef} className="marquee-track">
            {[...CARDS, ...CARDS].map((card, i) => (
              <DegreeCard key={`r1-${i}`} card={card} index={i % CARDS.length} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right (reverse, offset) */}
        <div className="overflow-hidden">
          <div className="marquee-track" style={{ animationDirection: "reverse", animationDuration: "40s" }}>
            {[...CARDS.slice(3), ...CARDS.slice(0, 3), ...CARDS.slice(3), ...CARDS.slice(0, 3)].map((card, i) => (
              <DegreeCard key={`r2-${i}`} card={card} index={i % CARDS.length} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile: responsive grid, no marquee ── */}
      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-5 px-4 max-w-lg mx-auto">
        {CARDS.map((card, i) => (
          <DegreeCard key={card.field} card={card} index={i} />
        ))}
      </div>

      {/* ── Bottom stat strip ── */}
      <motion.div
        className="mt-16 mx-4 md:mx-auto md:max-w-4xl grid grid-cols-3 gap-4 md:gap-8 border-2 border-primary rounded-2xl p-6 md:p-8 bg-surface-container-lowest neo-shadow"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
      >
        {[
          { num: "6+",   label: "Degree types mapped" },
          { num: "94%",  label: "Match accuracy" },
          { num: "< 8w", label: "Avg. time to first role" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-headline-xl text-2xl md:text-4xl font-black text-primary">{s.num}</div>
            <div className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
