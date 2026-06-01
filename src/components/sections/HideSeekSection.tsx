"use client";
import { useEffect, useRef, useState, useCallback } from "react";

const SKILL_BARS = [
  { skill: "Product Thinking", pct: 90 },
  { skill: "Data Literacy",    pct: 78 },
  { skill: "Agile / Scrum",    pct: 65 },
];

export default function HideSeekSection() {
  const [ringing, setRinging] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const playBell = useCallback(() => {
    if (triggered) return;
    setTriggered(true);
    setRinging(true);
    setTimeout(() => setRinging(false), 1100);
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      [[880, 0, 0.5, 0.28], [1200, 0.15, 0.6, 0.18]].forEach(([freq, start, decay, vol]) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.type = "sine";
        o.frequency.setValueAtTime(freq as number, ctx.currentTime + (start as number));
        o.frequency.exponentialRampToValueAtTime((freq as number) / 2, ctx.currentTime + (start as number) + (decay as number));
        g.gain.setValueAtTime(vol as number, ctx.currentTime + (start as number));
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (start as number) + (decay as number) + 0.6);
        o.start(ctx.currentTime + (start as number));
        o.stop(ctx.currentTime + (start as number) + (decay as number) + 0.6);
      });
    } catch {}
  }, [triggered]);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(playBell, 500); obs.disconnect(); }
    }, { threshold: 0.4 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, [playBell]);

  return (
    <section ref={sectionRef} className="py-section-gap flex flex-col md:flex-row items-center gap-16 min-h-[700px] relative overflow-hidden">
      {/* bg blob */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-secondary-container/30 rounded-full blur-3xl pointer-events-none" />

      {/* Left text */}
      <div className="w-full md:w-1/2 reveal-left">
        <h2 className="font-headline-lg text-headline-lg text-primary leading-tight">
          All these <span className="font-headline-xl italic underline decoration-wavy decoration-primary-fixed-dim">huge</span><br/>
          business opportunities...
        </h2>
        <div className="mt-12 font-headline-md text-on-surface-variant leading-relaxed">
          <span className="block mb-4 font-body-lg text-body-lg">But your business is busy playing a game of</span>
          <div className="mt-6 flex flex-col items-start gap-4">
            <span className="font-headline-xl text-primary font-black" style={{fontSize:"80px",lineHeight:1}}>hide</span>
            <span className="font-body-lg ml-16 italic text-on-surface-variant">and</span>
            <span className="font-headline-xl text-primary font-black ml-28" style={{fontSize:"80px",lineHeight:1}}>seek</span>
          </div>
          <div className="mt-12 font-body-lg text-body-lg">with your corporate recruiters.</div>
        </div>
      </div>

      {/* Right: wide recruiter card */}
      <div className="w-full md:w-1/2 reveal-right">
        <div className="bg-surface-container-lowest border-2 border-primary p-8 rounded-2xl neo-shadow-lg max-w-lg mx-auto" style={{transform:"rotate(2deg)"}}>
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className={`w-14 h-14 rounded-full bg-primary-fixed border-2 border-primary flex items-center justify-center flex-shrink-0 ${ringing ? "animate-bell-ring" : ""}`}>
              <span className="material-symbols-outlined text-primary text-3xl" style={{fontVariationSettings:"'FILL' 1"}}>notifications_active</span>
            </div>
            <div>
              <h3 className="font-headline-md text-2xl text-primary">Recruiter Alert</h3>
              <p className="font-label-caps text-[10px] tracking-widest text-on-surface-variant uppercase">Live Match Found</p>
            </div>
            <div className="ml-auto relative flex items-center justify-center w-4 h-4">
              <span className="ping-dot absolute inline-flex w-full h-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex w-3 h-3 rounded-full bg-primary" />
            </div>
          </div>

          {/* Match grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-surface-container border-2 border-primary p-4 rounded-xl">
              <div className="font-label-caps text-[10px] text-on-surface-variant mb-1 tracking-widest uppercase">Match Score</div>
              <div className="font-headline-xl text-primary" style={{fontSize:"2.5rem"}}>85%</div>
            </div>
            <div className="bg-surface-container border-2 border-primary p-4 rounded-xl">
              <div className="font-label-caps text-[10px] text-on-surface-variant mb-1 tracking-widest uppercase">Role</div>
              <div className="font-body-md text-sm font-bold text-primary">Junior Product Manager</div>
              <div className="font-label-caps text-[10px] text-on-surface-variant mt-1">OPay · Lagos</div>
            </div>
          </div>

          {/* Skill bars */}
          <div className="bg-primary-fixed/30 border border-primary/20 rounded-xl p-4 mb-6">
            <div className="font-label-caps text-[10px] text-on-surface-variant mb-3 uppercase tracking-widest">Skill Breakdown</div>
            {SKILL_BARS.map(s => (
              <div key={s.skill} className="mb-3">
                <div className="flex justify-between font-label-caps text-[10px] text-on-surface-variant mb-1">
                  <span>{s.skill}</span><span>{s.pct}%</span>
                </div>
                <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{width:`${s.pct}%`}} />
                </div>
              </div>
            ))}
          </div>

          <button className="w-full bg-primary text-on-primary font-button-text text-button-text py-3 rounded-xl hover:bg-primary-container transition-colors">
            View Opportunity →
          </button>
          <p className="font-body-md text-xs italic text-on-surface-variant mt-3 text-center">
            SkillBridge mapping complete. Direct intro initiated.
          </p>
        </div>
      </div>
    </section>
  );
}
