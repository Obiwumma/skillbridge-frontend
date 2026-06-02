"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  const pathname = usePathname();
  const isRoadmap = pathname === "/roadmap";
  const isMentors = pathname === "/mentors";

  // 1. Roadmap Odyssey Hero Section
  if (isRoadmap) {
    return (
      <section className="max-w-7xl mx-auto px-container-margin py-xl flex flex-col items-center text-center relative overflow-visible">
        {/* Botanical Overlay 1 */}
        <div className="absolute -top-10 -left-10 w-80 h-80 rotate-12 opacity-30 pointer-events-none hidden lg:block z-0 mix-blend-multiply">
          <img 
            alt="Botanical ferns" 
            className="w-full h-full object-contain" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ0H58j2ELJiD7agMdfI_epL2h2olgjJyCk1-O445du-WCWH6x5BgPBPkEKaXpRmW-6EnxrX3uUFCen3imjNTnPclORheYQBNCPdoQROKLHkyoLvZLRvU1C-3fzfg0MK0QIarhLZO6__HKUl7xMHKTkDxzB8bjFAVCno382Khv5S1L5AJJG0_jz9lhHJu6qv4XRdqr8EIklcSlCmimVNyKKEyxf_6oHCZd-kEQqK0gX2anpWFvKzMFZrmNMlt60LsViHg4Kk9ogOqR"
          />
        </div>

        <motion.div 
          className="washi-tape px-md py-1 mb-md inline-block transform -rotate-2 z-10 cursor-pointer"
          whileHover={{ rotate: 1, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <span className="font-label-caps text-label-caps text-primary">TRANSFORM YOUR CAREER</span>
        </motion.div>

        <motion.div 
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display-lg text-display-lg text-primary max-w-4xl mb-lg leading-[1.1]">
            Bridging the gap between <span className="scribble-underline italic text-secondary pb-2 inline-block">Degree</span> &amp; <span className="italic text-secondary">Employment</span>.
          </h1>
          
          <div className="relative max-w-2xl mx-auto mb-xl">
            <p className="font-emphasis-script text-emphasis-script text-on-surface-variant italic">
              &quot;An automated mentorship platform that turns your academic foundation into job-ready mastery through personalized odysseys.&quot;
            </p>
            <div className="absolute -bottom-6 -right-12 font-label-caps text-xs text-secondary transform rotate-3 font-bold select-none">
              — Written by SkillBridge AI
            </div>
          </div>

          <Link href="/analyze">
            <motion.button 
              className="group relative bg-primary text-on-primary font-headline-md text-headline-md px-xl py-md rounded-lg paper-lift"
              whileHover={{ 
                y: -2, 
                x: -2,
                boxShadow: "6px 6px 0px #253614"
              }}
              whileTap={{ 
                y: 2, 
                x: 2,
                boxShadow: "0px 0px 0px #253614"
              }}
              transition={{ duration: 0.1 }}
            >
              Upload CV &amp; Get Analyzed
              <div className="absolute -right-14 top-2 rotate-12 hidden md:block">
                <span 
                  className="material-symbols-outlined text-tertiary-fixed-dim text-5xl" 
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  arrow_selector_tool
                </span>
              </div>
            </motion.button>
          </Link>
        </motion.div>

        {/* Botanical Overlay 2 */}
        <div className="absolute bottom-0 -right-10 w-64 h-64 -rotate-12 opacity-30 pointer-events-none hidden lg:block z-0 mix-blend-multiply">
          <img 
            alt="Oak leaf sketch" 
            className="w-full h-full object-contain" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA15FlkLc-XPzfiSCfdVd6Kw5mv6UMw7y1HaU1Z53sePhc7_5wQD5JpXHYpxZ__vE6ktPbeHHtrFrfn1UH68q2YKLT2E5q4wfiSffpwjSYBgCQ6s9eEMHlJdlTGbyfcDDVB7v0u01yIBS9BTfpCScyTCS0advdk2NsaY4qf0899mKN7tZa7f_XLKPZO8IEMe9nHboUcAMDs-chX5UEaylNaMz4M_G6ZnieqhojGeseGvP0qW4DcRCWASly2-hJjJqGEdrk2iN2J3V0S"
          />
        </div>
      </section>
    );
  }

  // 2. Mentors Landing Page Hero Section
  if (isMentors) {
    return (
      <section className="max-w-screen-xl mx-auto px-container-margin py-xl text-center relative">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="font-display-lg text-display-lg text-primary max-w-3xl mx-auto mb-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Guidance from those who built the bridge.
          </motion.h1>
          
          <motion.p 
            className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our AI mapping identifies your skill gaps, and our industry veterans help you cross them. No more guessing—just growth.
          </motion.p>
          
          <motion.div 
            className="relative inline-block"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Post-it Note */}
            <div className="absolute -left-44 top-0 w-32 h-32 bg-[#fff9c4] p-4 shadow-md rotate-[-6deg] hidden xl:flex flex-col items-center justify-center border border-black/5 animate-float">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-4 bg-black/10 washi-tape"></div>
              <p className="font-emphasis-script text-primary text-sm leading-tight">Bridge the gap with 1-on-1 guidance.</p>
            </div>
            
            <span className="font-emphasis-script text-emphasis-script text-secondary absolute -top-12 -right-36 rotate-[15deg] animate-float hidden sm:block">
              Learn from the best.
            </span>
            
            <motion.button 
              className="bg-secondary text-white font-headline-md text-headline-md px-10 py-4 rounded-lg shadow-[4px_4px_0px_#253614]"
              whileHover={{ 
                y: -2, 
                x: -2,
                boxShadow: "6px 6px 0px #253614"
              }}
              whileTap={{ 
                y: 2, 
                x: 2,
                boxShadow: "0px 0px 0px #253614"
              }}
              transition={{ duration: 0.1 }}
            >
              Find My Match
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    );
  }

  // 3. Original Homepage Hero Section (Default)
  return (
    <section className="flex flex-col items-center text-center py-section-gap gap-8 reveal">
      <h1 className="font-headline-xl text-headline-xl text-primary max-w-4xl mx-auto tracking-tighter flex flex-col items-center">
        <span className="block overflow-hidden py-1 w-full text-center">
          <motion.span
            className="inline-block"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Bridge the gap between your
          </motion.span>
        </span>
        <span className="block overflow-hidden py-1 w-full text-center">
          <motion.span
            className="inline-block"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            degree and your first
          </motion.span>
        </span>
        <span className="block py-1 w-full text-center">
          <motion.span
            className="inline-block font-black text-secondary uppercase"
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: 0, 
              opacity: 1,
              scale: [1, 1.06, 1],
              color: ["#9b433c", "#c2544a", "#9b433c"]
            }}
            transition={{ 
              y: { duration: 0.6, ease: "easeOut", delay: 0.35 },
              opacity: { duration: 0.6, ease: "easeOut", delay: 0.35 },
              scale: { repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 0.95 },
              color: { repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 0.95 }
            }}
          >
            TECH JOB.
          </motion.span>
        </span>
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
        Transform your traditional education into high-demand digital skills with personalized mapping and mentorship.
      </p>
      <div className="flex gap-4 mt-2">
        <button className="bg-primary text-on-primary font-button-text text-button-text px-8 py-3.5 rounded-full neo-shadow hover:-translate-y-1 transition-transform active:translate-y-0">
          Get Your Free Audit
        </button>
        <button className="border-2 border-primary text-primary font-button-text text-button-text px-8 py-3.5 rounded-full hover:bg-primary-container hover:text-on-primary transition-all">
          Watch Demo
        </button>
      </div>
      <div className="mt-8 relative w-full max-w-4xl h-[400px] border-2 border-primary bg-surface-container-lowest neo-shadow overflow-hidden rounded-xl">
        <img
          alt="A professional, high-fidelity, and cinematic photograph of a young Nigerian graduate"
          className="w-full h-full object-cover object-top"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuADxytod4FM1Smx_sBZm0h8LPNbGCkCO_uLNnd-r4mC5g4WYLJO6dBGl1n6qpEA_GAv8m1GX6PUhuYNGWsS9eKl97UsiVbV3y1oh4F-em-1Pxk1Sj1h3UEoP5M-WzZWdfW5o50GQJetlmth5p1FFnomD8wvyXl7WswlyZmH6ChdDG9KfbLDm7-o4KwTa2yGvmg3gXwKexeVZVz4cEGJJlJ8JmIACQIL__0BU2ZZj0pwhrFhwycj1LMande8xZYSgn3pg6fzONmc4YbU"
        />
      </div>
    </section>
  );
}
