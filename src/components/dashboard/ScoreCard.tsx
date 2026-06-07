"use client";
import { useEffect, useRef, useState } from "react";

export default function ScoreCard() {
  const [score] = useState(58);
  const cardRef = useRef<HTMLElement>(null);

  // Mouse-follow radial gradient
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.backgroundImage = `
        radial-gradient(at ${x}% ${y}%, rgba(184,206,158,0.22) 0px, transparent 50%),
        radial-gradient(at 0% 0%, rgba(184,206,158,0.15) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(81,100,61,0.3) 0px, transparent 50%)
      `;
    };
    const onLeave = () => { el.style.backgroundImage = ""; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);

  const r = 84;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;

  return (
    <section
      ref={cardRef as React.RefObject<HTMLElement>}
      className="col-span-12 lg:col-span-4 row-span-3 mesh-gradient-hero rounded-xl p-8 text-white flex flex-col justify-between relative overflow-hidden border border-primary-container"
      style={{ transition: "background-image 0.3s ease" }}
    >
      <div>
        <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">
          Live Analysis
        </span>
        <h3 className="font-headline-md text-2xl mt-4 text-primary-fixed">Employability Score</h3>
        <p className="font-body-md text-on-primary-container opacity-80 mt-2 text-sm">
          Based on current market trends for Junior SWE roles.
        </p>
      </div>

      {/* Score ring */}
      <div className="flex flex-col items-center justify-center py-6">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 192 192">
            <circle cx="96" cy="96" r={r} fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
            <circle
              cx="96" cy="96" r={r} fill="transparent"
              stroke="#b8ce9e" strokeWidth="8"
              strokeDasharray={circ} strokeDashoffset={offset}
              strokeLinecap="round"
              className="glow-track"
              style={{ transition: "stroke-dashoffset 1.5s cubic-bezier(0.22,1,0.36,1)" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-headline-xl text-5xl font-black leading-none">{score}</span>
            <span className="font-label-caps text-[11px] opacity-70 mt-1">Percentile</span>
          </div>
        </div>
      </div>

      {/* Trend */}
      <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-lg">
        <span className="material-symbols-outlined text-inverse-primary">trending_up</span>
        <p className="font-body-md text-sm text-on-primary-container opacity-90">
          Up +4% since last week after Python certification.
        </p>
      </div>
    </section>
  );
}
