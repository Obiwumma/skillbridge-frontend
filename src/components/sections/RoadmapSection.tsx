"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const MODULES = [
  { id:1, title:"Digital Foundations",  desc:"Computer literacy, cloud basics, and navigating the digital economy landscape.", skills:["Internet Fundamentals","Cloud Concepts","Digital Productivity"], xp:200, done:true },
  { id:2, title:"Data & Spreadsheets",  desc:"Excel mastery, SQL basics, data cleaning, and building your first dashboard.", skills:["Excel / Sheets","SQL Basics","Data Visualisation"], xp:350, done:true },
  { id:3, title:"Product Thinking",     desc:"User research, PRDs, wireframing, and Agile sprint methodology.", skills:["User Research","Figma Basics","Agile / Scrum"], xp:420, done:true },
  { id:4, title:"Build & Ship",         desc:"No-code tools, API integrations, and launching your first micro-product.", skills:["Webflow","API Basics","Product Launch"], xp:500, done:true },
  { id:5, title:"Career Launch",        desc:"Portfolio polish, recruiter readiness, interview prep, and matching with partners.", skills:["Portfolio Build","Recruiter Matching","Technical Interviews"], xp:600, done:false },
];

export default function RoadmapSection() {
  const pathname = usePathname();
  const isRoadmap = pathname === "/roadmap";
  const isMentors = pathname === "/mentors";

  // Hooks for original homepage RoadmapSection
  const [active, setActive] = useState(0);
  const [key, setKey] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (i: number) => { setActive(i); setKey(k => k + 1); };
  const next = () => goTo((active + 1) % MODULES.length);
  const prev = () => goTo((active - 1 + MODULES.length) % MODULES.length);

  useEffect(() => {
    if (isRoadmap || isMentors) return;
    timer.current = setInterval(() => {
      setActive(a => { const n = (a + 1) % MODULES.length; setKey(k => k + 1); return n; });
    }, 3500);
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [isRoadmap, isMentors]);

  // 1. Roadmap Route "Experience the Path" S-curve Milestone Layout
  if (isRoadmap) {
    return (
      <section className="py-xl max-w-5xl mx-auto px-container-margin relative overflow-visible">
        <motion.div 
          className="text-center mb-xl relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="washi-tape px-md py-1 mb-sm inline-block transform rotate-1 cursor-pointer">
            <span className="font-label-caps text-label-caps text-primary">INTERACTIVE JOURNEY</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary">Experience the Path</h2>
        </motion.div>

        <div className="relative min-h-[700px] flex flex-col items-center py-xl">
          {/* SVG S-curve line */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20" fill="none" viewBox="0 0 400 900">
            <path 
              d="M200 50 C350 150 50 300 200 450 C350 600 50 750 200 850" 
              stroke="#253614" 
              strokeDasharray="12 12" 
              strokeWidth="8"
            />
          </svg>

          <div className="relative z-10 flex flex-col gap-32 w-full items-center">
            
            {/* Milestone 1: Done */}
            <motion.div 
              className="flex flex-col items-center md:-translate-x-12 -translate-x-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="w-20 h-20 bg-primary text-on-primary rounded-full flex items-center justify-center paper-lift relative group cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
                
                <div className="absolute left-[90px] md:left-[100px] top-1/2 -translate-y-1/2 bg-white px-md py-sm border-2 border-primary paper-lift rotate-3 w-40">
                  <p className="font-label-caps text-[10px] text-secondary font-bold">COMPLETED</p>
                  <p className="font-headline-md text-xs">Fintech Basics</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Milestone 2: Active */}
            <motion.div 
              className="flex flex-col items-center md:translate-x-20 translate-x-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div 
                className="w-24 h-24 bg-tertiary-fixed-dim text-primary rounded-full flex items-center justify-center paper-lift border-4 border-primary animate-pulse relative cursor-pointer"
                whileHover={{ scale: 1.08 }}
              >
                <span className="material-symbols-outlined text-5xl">rocket_launch</span>
                
                <div className="absolute right-[110px] md:right-[120px] top-1/2 -translate-y-1/2 bg-white px-md py-sm border-2 border-primary paper-lift -rotate-3 w-48">
                  <p className="font-label-caps text-[10px] text-secondary font-bold">CURRENT MISSION</p>
                  <p className="font-headline-md text-sm">Building API Layer</p>
                  <p className="font-body-md text-[10px] italic">&quot;The core of payment routing.&quot;</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Milestone 3: Locked */}
            <motion.div 
              className="flex flex-col items-center md:-translate-x-24 -translate-x-12 opacity-60"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="w-20 h-20 bg-surface-container-highest text-outline rounded-full flex items-center justify-center border-2 border-primary border-dashed relative cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <span className="material-symbols-outlined text-3xl">lock</span>
                
                <div className="absolute left-[90px] md:left-[100px] top-1/2 -translate-y-1/2 bg-white/90 px-md py-sm border border-primary/20 w-44">
                  <p className="font-headline-md text-xs text-primary/40">API Security &amp; Auth</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Milestone 4: Certification */}
            <motion.div 
              className="flex flex-col items-center md:translate-x-12 translate-x-6 opacity-50"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div 
                className="w-24 h-24 bg-white border-2 border-primary rounded-full flex items-center justify-center border-dashed cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <span className="material-symbols-outlined text-5xl text-primary">workspace_premium</span>
              </motion.div>
              <p className="font-label-caps text-label-caps mt-md text-primary/60 font-bold text-center">Direct Referral</p>
            </motion.div>

          </div>
        </div>
      </section>
    );
  }

  // 2. Mentors Route Timeline Layout
  if (isMentors) {
    return (
      <section className="max-w-screen-xl mx-auto px-container-margin py-24 bg-surface-container-high/30 my-xl border-y-[1.5px] border-outline/20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            The Way Across
          </h2>
          <p className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">
            A Step-by-Step Journey to Mastery
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 dashed-path opacity-50 hidden md:block"></div>
          
          <div className="space-y-24 relative">
            {/* Step 1 */}
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-12 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="md:w-1/2 text-right hidden md:block">
                <h4 className="font-headline-md text-headline-md text-primary mb-2">AI Matchmaking</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Our proprietary algorithm scans your portfolio, GitHub, and professional history to identify exactly where your foundations are shaky. We then match you with a veteran who has thrived in the specific niche you&apos;re targeting.
                </p>
              </div>
              <motion.div 
                className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-display-lg text-headline-md shadow-[4px_4px_0px_#9b433c]"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                1
              </motion.div>
              <div className="md:w-1/2 text-left w-full">
                <h4 className="font-headline-md text-headline-md text-primary md:hidden mb-2">AI Matchmaking</h4>
                <p className="font-body-md text-body-md text-on-surface-variant md:hidden mb-4">
                  Our proprietary algorithm scans your portfolio and professional history to match you with a veteran who has thrived in your specific niche.
                </p>
                <motion.span 
                  className="material-symbols-outlined text-primary text-4xl block cursor-pointer"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                >
                  insights
                </motion.span>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-12 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="md:w-1/2 text-right order-2 md:order-1 w-full">
                <motion.span 
                  className="material-symbols-outlined text-secondary text-4xl block cursor-pointer"
                  whileHover={{ scale: 1.15, rotate: -5 }}
                >
                  groups
                </motion.span>
                <h4 className="font-headline-md text-headline-md text-primary md:hidden mb-2">The Drill</h4>
                <p className="font-body-md text-body-md text-on-surface-variant md:hidden">
                  Intense 1-on-1 sessions including high-pressure mock interviews and deep-dive code or design reviews that simulate real-world workspace demands.
                </p>
              </div>
              <motion.div 
                className="relative z-10 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-display-lg text-headline-md shadow-[4px_4px_0px_#253614]"
                whileHover={{ scale: 1.1, rotate: -10 }}
              >
                2
              </motion.div>
              <div className="md:w-1/2 text-left order-1 md:order-2 hidden md:block">
                <h4 className="font-headline-md text-headline-md text-primary mb-2">The Drill</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Forge your skills in the heat of reality. From grueling technical whiteboarding to high-stakes presentation drills, your mentor provides raw, unfiltered feedback to sharpen your edges before you step into a real interview.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-12 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="md:w-1/2 text-right hidden md:block">
                <h4 className="font-headline-md text-headline-md text-primary mb-2">The Referral</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Once your mentor certifies you &quot;Bridge-Ready,&quot; they activate their private network. A personal endorsement from an industry leader often carries more weight than any certification or degree in the modern job market.
                </p>
              </div>
              <motion.div 
                className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-display-lg text-headline-md shadow-[4px_4px_0px_#f6be39]"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                3
              </motion.div>
              <div className="md:w-1/2 text-left w-full">
                <h4 className="font-headline-md text-headline-md text-primary md:hidden mb-2">The Referral</h4>
                <p className="font-body-md text-body-md text-on-surface-variant md:hidden mb-4">
                  When you&apos;re ready, your mentor opens doors through high-trust referrals directly to hiring managers in their personal network.
                </p>
                <motion.span 
                  className="material-symbols-outlined text-primary text-4xl block cursor-pointer"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                >
                  workspace_premium
                </motion.span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // 3. Original Homepage layout
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
