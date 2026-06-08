"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const PARTNERS = [
  { name:"Flutterwave", logo:"/partners/flutterwave-logo.png" },
  { name:"OPay",        logo:"/partners/opay-logo.png" },
  { name:"Paystack",    logo:"/partners/paystack-logo.png" },
  { name:"Andela",      logo:"/partners/andela-logo.png" },
  { name:"PiggyVest",   logo:"/partners/piggyvest-logo.png" },
  { name:"Kuda Bank",   logo:"/partners/kuda-logo.png" },
];

export default function PartnersSection() {
  const pathname = usePathname();
  const isRoadmap = pathname === "/roadmap";
  const isMentors = pathname === "/mentors";

  // 1. Roadmap "Curated by the Titans" Layout
  if (isRoadmap) {
    return (
      <section className="py-xl bg-surface-container relative">
        <motion.div 
          className="max-w-7xl mx-auto px-container-margin text-center mb-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline-lg text-headline-lg text-primary">Curated by the Titans</h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto mt-2">
            Our modules aren&apos;t academic—they&apos;re tactical. Designed with lead engineers from the continent&apos;s biggest players.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-xl px-container-margin">
          {/* Post-it OPay */}
          <motion.div 
            className="post-it p-6 w-48 h-48 flex flex-col items-center justify-center border border-black/5 cursor-pointer bg-[#fef3c7]"
            style={{ originX: 0.5, originY: 0.5 }}
            initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
            viewport={{ once: true }}
            whileHover={{ 
              rotate: 0, 
              scale: 1.05,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-emphasis-script text-xl mb-2 text-primary/70">OPay</p>
            <p className="font-label-caps text-[10px] text-center">
              &quot;Validated our Backend Transactional Engine curriculum.&quot;
            </p>
          </motion.div>

          {/* Post-it Flutterwave */}
          <motion.div 
            className="post-it p-6 w-48 h-48 flex flex-col items-center justify-center border border-black/5 cursor-pointer bg-[#fef3c7]"
            style={{ originX: 0.5, originY: 0.5 }}
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
            viewport={{ once: true }}
            whileHover={{ 
              rotate: 0, 
              scale: 1.05,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-emphasis-script text-xl mb-2 text-primary/70">Flutterwave</p>
            <p className="font-label-caps text-[10px] text-center">
              &quot;API documentation standards are 1:1 with our requirements.&quot;
            </p>
          </motion.div>

          {/* Post-it Paystack */}
          <motion.div 
            className="post-it p-6 w-48 h-48 flex flex-col items-center justify-center border border-black/5 cursor-pointer bg-[#fef3c7]"
            style={{ originX: 0.5, originY: 0.5 }}
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
            viewport={{ once: true }}
            whileHover={{ 
              rotate: 0, 
              scale: 1.05,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-emphasis-script text-xl mb-2 text-primary/70">Paystack</p>
            <p className="font-label-caps text-[10px] text-center">
              &quot;The security module mimics our internal sandbox.&quot;
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  // 2. Mentors Landing Page bottom CTA banner layout
  if (isMentors) {
    return (
      <section className="max-w-screen-xl mx-auto px-container-margin py-xl mb-xl flex flex-col gap-12">
        {/* Card 1: Student CV Upload */}
        <motion.div 
          className="bg-primary p-xl rounded-xl flex flex-col md:flex-row items-center justify-between gap-lg relative overflow-hidden shadow-[8px_8px_0px_#9b433c]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-10 text-center md:text-left">
            <h2 className="font-headline-lg text-headline-lg text-background mb-4">
              Don&apos;t face the job market alone.
            </h2>
            <p className="font-body-md text-body-md text-primary-fixed max-w-lg">
              Get the unfair advantage of insider knowledge and personal coaching from industry leaders who have walked the path before you.
            </p>
          </div>
          
          <Link href="/analyze" className="relative z-10">
            <motion.button 
              className="bg-white text-primary font-headline-md text-headline-md px-10 py-5 rounded-lg shadow-[6px_6px_0px_#9b433c]"
              whileHover={{ 
                y: -4, 
                x: -4,
                boxShadow: "10px 10px 0px #9b433c"
              }}
              whileTap={{ 
                y: 2, 
                x: 2,
                boxShadow: "0px 0px 0px #9b433c"
              }}
              transition={{ duration: 0.1 }}
            >
              Upload CV to Find Your Mentor
            </motion.button>
          </Link>
          
          <div className="absolute -right-20 -bottom-20 opacity-10">
            <span 
              className="material-symbols-outlined text-[300px] text-white"
              style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
            >
              architecture
            </span>
          </div>
        </motion.div>

        {/* Card 2: Mentor Registration Sign Up */}
        <motion.div 
          className="bg-white p-xl rounded-xl border-2 border-primary flex flex-col md:flex-row items-center justify-between gap-lg relative overflow-hidden shadow-[8px_8px_0px_#253614]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="relative z-10 text-center md:text-left">
            <div className="washi-tape px-3 py-1 mb-3 inline-block transform -rotate-1 bg-tertiary-fixed-dim text-primary select-none">
              <span className="font-label-caps text-xs font-bold uppercase">FOR EXPERTS</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-3">
              Want to help others cross the bridge?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
              Guide the next generation of African tech talent. Share your instinct, conduct mock interviews, and unlock referrals for deserving students.
            </p>
          </div>
          
          <Link href="/mentors/apply" className="relative z-10">
            <motion.button 
              className="bg-secondary text-white font-headline-md text-headline-md px-10 py-5 rounded-lg shadow-[6px_6px_0px_#253614]"
              whileHover={{ 
                y: -4, 
                x: -4,
                boxShadow: "10px 10px 0px #253614"
              }}
              whileTap={{ 
                y: 2, 
                x: 2,
                boxShadow: "0px 0px 0px #253614"
              }}
              transition={{ duration: 0.1 }}
            >
              Apply as a Mentor
            </motion.button>
          </Link>
          
          <div className="absolute -right-20 -bottom-20 opacity-[0.04] pointer-events-none">
            <span 
              className="material-symbols-outlined text-[300px] text-primary"
              style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
            >
              potted_plant
            </span>
          </div>
        </motion.div>
      </section>
    );
  }

  // 3. Original Homepage layout
  return (
    <section className="py-section-gap">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Left */}
        <div className="lg:w-1/2 reveal-left">
          <div className="font-label-caps text-label-caps text-primary mb-4">THE OUTCOME</div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
            Get found by the companies already searching for you.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            Once you complete your roadmap and pass the final verifications, your profile is unlocked for our corporate partners. Top scoring graduates get matched directly to internships and junior roles.
          </p>
          <button className="font-button-text text-button-text px-8 py-4 border-2 border-primary rounded-full hover:bg-primary-container hover:text-on-primary transition-all">
            Explore Partners
          </button>
        </div>

        {/* Right: partner logos */}
        <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-6 w-full stagger">
          {PARTNERS.map(p => (
            <div key={p.name}
              className="bg-white border-2 border-primary-container/40 p-6 flex flex-col items-center justify-center gap-4 rounded-lg hover:-translate-y-1 transition-transform duration-200"
              style={{ boxShadow: "6px 6px 0px #344C11" }}
            >
              <img src={p.logo} alt={p.name} className="h-12 w-auto object-contain" />
              <span className="font-body-md font-bold text-on-surface">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
