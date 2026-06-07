"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

// Original Homepage assets
const SKILL_BARS = [
  { skill: "Product Thinking", pct: 90 },
  { skill: "Data Literacy",    pct: 78 },
  { skill: "Agile / Scrum",    pct: 65 },
];

export default function HideSeekSection() {
  const pathname = usePathname();
  const isRoadmap = pathname === "/roadmap";
  const isMentors = pathname === "/mentors";

  // Hooks for original homepage HideSeekSection
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
    if (isRoadmap || isMentors) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(playBell, 500); obs.disconnect(); }
    }, { threshold: 0.4 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, [playBell, isRoadmap, isMentors]);

  // 1. Roadmap "Opportunities are playing hide and seek" Layout
  if (isRoadmap) {
    return (
      <section className="max-w-7xl mx-auto px-container-margin py-xl grid md:grid-cols-2 gap-xl items-center relative overflow-visible">
        <motion.div 
          className="relative z-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display-lg text-display-lg text-primary mb-md">
            Opportunities are playing hide and seek.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg max-w-lg">
            We don&apos;t just teach you; we reveal the roles where you already fit perfectly. Our AI maps your unique roadmap progress against thousands of live job descriptions.
          </p>
          <div className="space-y-md">
            <div className="flex items-center gap-md">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
              <p className="font-body-md text-body-md font-bold">98% Match accuracy for Fintech roles</p>
            </div>
            <div className="flex items-center gap-md">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
              <p className="font-body-md text-body-md font-bold">Direct recruiter pings upon module completion</p>
            </div>
          </div>
        </motion.div>

        <div className="relative min-h-[450px]">
          {/* Card A: AI Scorecard */}
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-64 bg-white p-lg border-2 border-primary paper-lift z-20 cursor-pointer"
            style={{ originX: 0.5, originY: 0.5 }}
            initial={{ opacity: 0, scale: 0.9, rotate: 8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
            viewport={{ once: true }}
            whileHover={{ 
              rotate: 0, 
              scale: 1.05,
              boxShadow: "6px 6px 0px 0px #253614",
              transition: { duration: 0.2 }
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-between items-center mb-md">
              <p className="font-label-caps text-label-caps text-secondary">AI SCORECARD</p>
              <span className="material-symbols-outlined text-primary">analytics</span>
            </div>
            <div className="text-center py-md">
              <div className="text-4xl font-headline-lg text-primary">94%</div>
              <p className="font-body-md text-sm italic mt-1">Fit for &quot;Junior Systems Architect&quot;</p>
            </div>
            <div className="mt-md w-full bg-surface-container h-2 rounded-full overflow-hidden">
              <div className="bg-primary w-[94%] h-full"></div>
            </div>
          </motion.div>

          {/* Card B: Recruiter Alert */}
          <motion.div 
            className="absolute bottom-0 left-1/4 w-72 bg-[#efeee8] p-lg border-2 border-primary paper-lift z-10 cursor-pointer"
            style={{ originX: 0.5, originY: 0.5 }}
            initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
            viewport={{ once: true }}
            whileHover={{ 
              rotate: 0, 
              scale: 1.05,
              boxShadow: "6px 6px 0px 0px #253614",
              transition: { duration: 0.2 }
            }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-sm mb-sm">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                <span className="material-symbols-outlined text-white">apartment</span>
              </div>
              <div>
                <p className="font-headline-md text-sm">OPay Hiring Team</p>
                <p className="font-label-caps text-[10px] text-on-surface-variant">LAGOS, NIGERIA</p>
              </div>
            </div>
            <p className="font-body-md text-sm mt-2 text-primary/90">
              &quot;We noticed your progress in the Backend Roadmap. Are you open to a technical interview next Tuesday?&quot;
            </p>
            <button className="mt-md w-full py-2 bg-secondary text-on-secondary font-label-caps text-xs paper-lift font-bold transition-all hover:bg-secondary/90">
              ACCEPT INVITE
            </button>
          </motion.div>

          {/* Botanical Accent */}
          <div className="absolute -bottom-10 right-0 w-40 h-40 opacity-10 pointer-events-none">
            <img 
              alt="Plant sketch" 
              className="w-full h-full object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiMNJxCz8SgWY8jc_efvKRqlKxx68cJ9Qrc-Z5BPQkIYzqyWOIBzuWMXhK5VwKYKmNopJqu3at8IvKKJEbfNB1q5q9HaDbmlHgd0rOnWjF_zS8hgiRtKRNibqYKpunIIEXJsY-sV1S9ERO_y4PXWsufo-M-PPhSd_CIRrz4qRFyXGCGznRASQcqHLZPD9OSjmFxAHgNBK4m3hpEN14fc5HYHoa0FnxoRhnbMPCeaNdpejpqEwctMj_wJZx8zIp_E4rzImk0mU8Ew5y"
            />
          </div>
        </div>
      </section>
    );
  }

  // 2. Mentors Route Layout
  if (isMentors) {
    return (
      <section className="max-w-screen-lg mx-auto px-container-margin py-xl mb-xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Voices from the Bridge
          </h2>
        </motion.div>

        <motion.div 
          className="crumpled-paper p-10 md:p-16 border border-black/5 relative overflow-hidden cursor-pointer"
          style={{ originX: 0.5, originY: 0.5 }}
          initial={{ opacity: 0, y: 50, rotate: 2 }}
          whileInView={{ opacity: 1, y: 0, rotate: 1 }}
          viewport={{ once: true }}
          whileHover={{ 
            rotate: 0, 
            scale: 1.02,
            boxShadow: "4px 4px 15px rgba(0,0,0,0.08)",
            transition: { duration: 0.25 }
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-secondary rounded-full shadow-inner"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-surface-container overflow-hidden border-2 border-primary">
                <img 
                  alt="Reviewer Daniel K." 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE-06EKXPPUorhwd_SHO5e-46uyCb_mf221xUPS9zOb17vX4O_mf20KimV1Z_lVuXGHyL_qgGKrGmP7jnbGnyJkHBZGyietxtdmOhLjVkze2VkX2m36KRtRBAskgZ2tXr3zc1y_B_QitsvdUHv_It0H7z0927NrGf0ewRBfKFvnYqo2fVIMQu0T-h0mmUIGbTEl33EmTSO3vUwO78yEtHIWuVB2iBGXj4b1EOi003xbuwdQynhgB1DjKMNPN_aZYKowXpZ5yjQ-ntc"
                />
              </div>
              <div>
                <h4 className="font-headline-md text-primary">Daniel K.</h4>
                <p className="font-label-caps text-secondary text-xs">Software Engineer @ Moniepoint</p>
              </div>
            </div>
            <blockquote className="font-body-lg text-on-surface-variant italic leading-relaxed mb-8">
              &quot;I spent six months applying into the void before finding SkillBridge. My mentor, Chidi, didn&apos;t just fix my CV; he fundamentally changed how I think about system design. After three intense mock interviews, he realized I was ready and personally introduced me to the VP of Engineering at Moniepoint. Two weeks later, I had an offer. This isn&apos;t just a platform; it&apos;s a career catalyst.&quot;
            </blockquote>
            <div className="flex justify-between items-center border-t border-outline/10 pt-6">
              <span className="font-emphasis-script text-secondary text-xl">
                &quot;Transformed my trajectory.&quot;
              </span>
              <div className="flex text-tertiary">
                <span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none"></div>
        </motion.div>
      </section>
    );
  }

  // 3. Original Homepage HideSeek Section (Default)
  return (
    <section ref={sectionRef} className="py-section-gap flex flex-col md:flex-row items-center gap-16 min-h-[700px] relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-secondary-container/30 rounded-full blur-3xl pointer-events-none" />

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

      <div className="w-full md:w-1/2 reveal-right">
        <div className="bg-surface-container-lowest border-2 border-primary p-8 rounded-2xl neo-shadow-lg max-w-lg mx-auto" style={{transform:"rotate(2deg)"}}>
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
