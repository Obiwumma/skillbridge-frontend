"use client";
import { useState, useRef } from "react";

const CARDS = [
  { degree:"LL.B",  field:"Law",        icon:"⚖️",  techRole:"Legal Tech",   techField:"Compliance PM",    techIcon:"🔐", anim:"animate-float" },
  { degree:"B.Sc",  field:"Accounting", icon:"📊",  techRole:"Fintech PM",   techField:"Product Manager",  techIcon:"💳", anim:"animate-float-2" },
  { degree:"B.A",   field:"English",    icon:"✍️",  techRole:"Data Analyst", techField:"Content Strategy", techIcon:"📈", anim:"animate-float-3" },
  { degree:"B.Sc",  field:"Medicine",   icon:"🏥",  techRole:"Health Tech",  techField:"UX Researcher",    techIcon:"🧬", anim:"animate-float" },
  { degree:"B.Eng", field:"Civil Eng.", icon:"🏗️",  techRole:"PropTech",     techField:"Technical PM",     techIcon:"🏢", anim:"animate-float-2" },
  { degree:"B.A",   field:"Economics",  icon:"📉",  techRole:"Growth Ops",   techField:"Startup Analyst",  techIcon:"🚀", anim:"animate-float-3" },
];

function Card({ card }: { card: typeof CARDS[0] }) {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);
  const startX = useRef(0);
  const dragged = useRef(false);

  return (
    <div className={`flip-wrapper ${card.anim}`} style={{ animationPlayState: hovered ? "paused" : "running" }}>
      <div
        data-grab="true"
        className={`flip-inner w-44 h-56 ${flipped ? "flipped" : ""}`}
        onMouseDown={e => { startX.current = e.clientX; dragged.current = false; }}
        onMouseMove={e => { if (Math.abs(e.clientX - startX.current) > 12) dragged.current = true; }}
        onMouseUp={e => { if (Math.abs(e.clientX - startX.current) > 40 || !dragged.current) setFlipped(f => !f); }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Front */}
        <div className="flip-front absolute inset-0 bg-surface-container-lowest border-2 border-primary neo-shadow rounded-xl p-5 flex flex-col justify-between">
          <div className={`transition-all duration-300 ${hovered ? "text-5xl" : "text-4xl"}`}>{card.icon}</div>
          <div>
            <div className="font-label-caps text-[10px] tracking-widest text-on-surface-variant uppercase">{card.degree}</div>
            <div className="font-headline-md text-2xl font-black text-primary leading-tight">{card.field}</div>
          </div>
          <div className={`transition-all duration-300 overflow-hidden ${hovered ? "max-h-12 opacity-100" : "max-h-0 opacity-0"}`}>
            <p className="font-body-md text-xs text-on-surface-variant">Drag or click to reveal →</p>
          </div>
        </div>
        {/* Back */}
        <div className="flip-back absolute inset-0 bg-primary border-2 border-primary-fixed neo-shadow rounded-xl p-5 flex flex-col justify-between">
          <div className="text-4xl">{card.techIcon}</div>
          <div>
            <div className="font-label-caps text-[10px] tracking-widest text-primary-fixed uppercase">→ Tech Path</div>
            <div className="font-headline-md text-2xl font-black text-primary-fixed leading-tight">{card.techRole}</div>
            <div className="font-body-md text-xs text-primary-fixed-dim mt-1">{card.techField}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NotJustCodersSection() {
  return (
    <section className="py-section-gap">
      <div className="text-center mb-16 reveal">
        <h2 className="font-headline-lg text-headline-lg text-primary">Not just for coders.</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
          We map <em>every</em> traditional degree to the digital economy. Drag a card to reveal your path.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto stagger">
        {CARDS.map(c => <Card key={c.field} card={c} />)}
      </div>
      <p className="text-center font-label-caps text-xs text-on-surface-variant mt-10 opacity-50 reveal">
        ← Drag or click any card to see your tech path →
      </p>
    </section>
  );
}
