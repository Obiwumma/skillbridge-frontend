"use client";
import { useEffect, useRef, useState, useCallback } from "react";

export default function RecruiterSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bellRef = useRef<HTMLDivElement | null>(null);
  const [ringing, setRinging] = useState(false);
  const [triggered, setTriggered] = useState(false);

  const playBell = useCallback(() => {
    if (triggered) return;
    setTriggered(true);

    // Ring animation
    setRinging(true);
    setTimeout(() => setRinging(false), 1100);

    // Play bell sound via Web Audio API
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(880, ctx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.5);
      gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 1.2);

      // Second chime
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(1200, ctx.currentTime + 0.15);
      osc2.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.6);
      gain2.gain.setValueAtTime(0.2, ctx.currentTime + 0.15);
      gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.0);
      osc2.start(ctx.currentTime + 0.15);
      osc2.stop(ctx.currentTime + 1.0);
    } catch {
      // Audio not available
    }
  }, [triggered]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(playBell, 600);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [playBell]);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 px-5 md:px-16 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-secondary-container/20 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
        {/* Left copy */}
        <div className="w-full md:w-1/2 reveal-left">
          <h2 className="font-headline text-[clamp(2rem,5vw,3.5rem)] font-black text-primary leading-tight">
            All these{" "}
            <span className="italic text-primary-container underline decoration-wavy decoration-primary-fixed">huge</span>{" "}
            business opportunities...
          </h2>
          <div className="mt-10 font-body text-xl text-on-surface-variant leading-relaxed">
            <p>But your business is busy playing a game of</p>
            <div className="mt-6 flex flex-col items-start gap-2">
              <span className="font-headline text-7xl text-primary font-black">hide</span>
              <span className="font-body ml-12 italic text-on-surface-variant">and</span>
              <span className="font-headline text-7xl text-primary font-black ml-20">seek</span>
            </div>
            <p className="mt-10">with your corporate recruiters.</p>
          </div>
        </div>

        {/* Right: Wide recruiter card */}
        <div className="w-full md:w-1/2 reveal-right">
          <div
            className="bg-surface-container-lowest border-2 border-primary p-8 rounded-2xl neo-shadow-lg max-w-lg mx-auto"
            style={{ transform: "rotate(2deg)" }}
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div
                ref={bellRef}
                className={`w-14 h-14 rounded-full bg-primary-fixed border-2 border-primary flex items-center justify-center flex-shrink-0 ${ringing ? "bell-ring" : ""}`}
              >
                <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6V11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-headline text-2xl font-black text-primary">Recruiter Alert</h3>
                <p className="font-mono text-xs text-on-surface-variant tracking-widest uppercase">Live Match Found</p>
              </div>
              <div className="ml-auto">
                <span className="flex w-3 h-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                </span>
              </div>
            </div>

            {/* Match details - wider layout */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-surface-container border-2 border-primary p-4 rounded-xl">
                <div className="font-mono text-[10px] text-on-surface-variant mb-1 tracking-widest uppercase">Match Score</div>
                <div className="font-headline text-3xl font-black text-primary">85%</div>
              </div>
              <div className="bg-surface-container border-2 border-primary p-4 rounded-xl">
                <div className="font-mono text-[10px] text-on-surface-variant mb-1 tracking-widest uppercase">Role</div>
                <div className="font-body text-sm font-bold text-primary">Junior Product Manager</div>
                <div className="font-mono text-[10px] text-on-surface-variant mt-1">OPay · Lagos</div>
              </div>
            </div>

            <div className="bg-primary-fixed/30 border border-primary/20 rounded-xl p-4 mb-6">
              <div className="font-mono text-[10px] text-on-surface-variant mb-2 uppercase tracking-widest">Skill Match Breakdown</div>
              {[
                { skill: "Product Thinking", pct: 90 },
                { skill: "Data Literacy", pct: 78 },
                { skill: "Agile / Scrum", pct: 65 },
              ].map((s) => (
                <div key={s.skill} className="mb-2">
                  <div className="flex justify-between font-mono text-[10px] text-on-surface-variant mb-1">
                    <span>{s.skill}</span><span>{s.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full bg-primary text-on-primary font-body font-bold py-3 rounded-xl hover:bg-primary-container transition-colors">
              View Opportunity →
            </button>

            <p className="font-body text-xs italic text-on-surface-variant mt-3 text-center">
              SkillBridge mapping complete. Direct intro initiated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
