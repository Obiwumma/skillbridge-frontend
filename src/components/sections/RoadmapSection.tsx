"use client";
import { useState, useEffect, useRef } from "react";

const MODULES = [
  { id:1, title:"Digital Foundations",  desc:"Computer literacy, cloud basics, and navigating the digital economy landscape.", skills:["Internet Fundamentals","Cloud Concepts","Digital Productivity"], xp:200, done:true },
  { id:2, title:"Data & Spreadsheets",  desc:"Excel mastery, SQL basics, data cleaning, and building your first dashboard.", skills:["Excel / Sheets","SQL Basics","Data Visualisation"], xp:350, done:true },
  { id:3, title:"Product Thinking",     desc:"User research, PRDs, wireframing, and Agile sprint methodology.", skills:["User Research","Figma Basics","Agile / Scrum"], xp:420, done:true },
  { id:4, title:"Build & Ship",         desc:"No-code tools, API integrations, and launching your first micro-product.", skills:["Webflow","API Basics","Product Launch"], xp:500, done:true },
  { id:5, title:"Career Launch",        desc:"Portfolio polish, recruiter readiness, interview prep, and matching with partners.", skills:["Portfolio Build","Recruiter Matching","Technical Interviews"], xp:600, done:false },
];

export default function RoadmapSection() {
  const [active, setActive] = useState(0);
  const [key, setKey] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (i: number) => { setActive(i); setKey(k => k + 1); };
  const next = () => goTo((active + 1) % MODULES.length);
  const prev = () => goTo((active - 1 + MODULES.length) % MODULES.length);

  useEffect(() => {
    timer.current = setInterval(() => {
      setActive(a => { const n = (a + 1) % MODULES.length; setKey(k => k + 1); return n; });
    }, 3500);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, []);

  const mod = MODULES[active];

  return (
    <section className="py-section-gap bg-primary-container text-surface-container-low px-margin-mobile md:px-margin-desktop rounded-xl my-20 reveal">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="font-label-caps text-label-caps mb-4 opacity-70">THE ROADMAP</div>
          <h2 className="font-headline-lg text-headline-lg text-surface mb-6">
            Your Personalized Path to Employment.
          </h2>
          <p className="font-body-lg text-body-lg max-w-2xl mx-auto mb-12 opacity-80">
            Stop guessing what to learn. We generate a custom, interactive skill tree based on your exact gaps.
          </p>
        </div>

        {/* Module dots */}
        <div className="flex justify-center items-end gap-4 md:gap-8 mb-10">
          {MODULES.map((m, i) => (
            <button
              key={m.id}
              onClick={() => { if (timer.current) clearInterval(timer.current); goTo(i); }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className={`rounded-full border-2 flex items-center justify-center transition-all duration-300
                ${i === active
                  ? "w-16 h-16 bg-primary-fixed border-primary-fixed neo-shadow-sm scale-110"
                  : m.done
                  ? "w-11 h-11 bg-primary-fixed/30 border-primary-fixed/50"
                  : "w-11 h-11 bg-primary-container border-primary-fixed/20"
                }`}
              >
                {i === active ? (
                  <span className="font-label-caps font-black text-primary text-sm">{m.id}</span>
                ) : m.done ? (
                  <svg className="w-5 h-5 text-primary-fixed" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-primary-fixed/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/>
                  </svg>
                )}
              </div>
              <span className={`font-label-caps text-[9px] tracking-wider uppercase transition-colors
                ${i === active ? "text-primary-fixed font-bold" : "text-primary-fixed/40"}`}>
                M{m.id}
              </span>
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-primary/30 rounded-full mb-10 overflow-hidden max-w-sm mx-auto">
          <div
            className="h-full bg-primary-fixed rounded-full transition-all duration-700"
            style={{ width: `${((active + 1) / MODULES.length) * 100}%` }}
          />
        </div>

        {/* Active module card */}
        <div key={key} className="roadmap-slide bg-surface-container-lowest border-2 border-primary-fixed/20 rounded-xl p-8 max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-5">
            <div className={`px-3 py-1 rounded-full font-label-caps text-[10px] font-bold tracking-widest uppercase
              ${!mod.done ? "bg-primary-fixed text-primary" : "bg-primary-fixed/20 text-primary-fixed"}`}>
              {!mod.done ? "⚡ Current Focus" : "✓ Completed"}
            </div>
            <div className="font-label-caps text-xs text-on-surface-variant">+{mod.xp} XP</div>
          </div>
          <h3 className="font-headline-md text-headline-md text-primary mb-3">
            Module {mod.id}: {mod.title}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">{mod.desc}</p>
          <div className="flex flex-wrap gap-2">
            {mod.skills.map(sk => (
              <span key={sk} className="bg-primary/10 border border-primary/20 text-primary font-label-caps text-[10px] px-3 py-1.5 rounded-full tracking-wider uppercase">
                {sk}
              </span>
            ))}
          </div>
        </div>

        {/* Nav arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button onClick={() => { if (timer.current) clearInterval(timer.current); prev(); }}
            className="w-11 h-11 rounded-full border-2 border-primary-fixed/30 text-primary-fixed flex items-center justify-center hover:bg-primary-fixed/10 transition-colors text-lg">
            ←
          </button>
          <button onClick={() => { if (timer.current) clearInterval(timer.current); next(); }}
            className="w-11 h-11 rounded-full border-2 border-primary-fixed/30 text-primary-fixed flex items-center justify-center hover:bg-primary-fixed/10 transition-colors text-lg">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
