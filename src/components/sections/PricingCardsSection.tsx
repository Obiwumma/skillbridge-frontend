"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className: string;
  isPopular?: boolean;
}

function PricingCard({ children, className, isPopular }: CardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Calculate rotation angle (max 10 degrees)
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / -15;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.1s ease-out, box-shadow 0.1s ease-out",
      }}
      className={`${className} cursor-pointer`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export default function PricingCardsSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl relative py-12">
      {/* Botanical Ornament */}
      <div className="absolute -top-12 -left-8 pointer-events-none opacity-20 hidden lg:block select-none">
        <span 
          className="material-symbols-outlined text-[120px] text-primary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          potted_plant
        </span>
      </div>

      {/* Card 1: Base Audit */}
      <PricingCard className="bg-surface border-2 border-primary rounded-xl p-8 flex flex-col shadow-[6px_6px_0px_#253614] hover:shadow-[10px_10px_0px_#253614]">
        <div className="mb-6">
          <h3 className="font-headline-md text-headline-md text-primary mb-1">Base Audit</h3>
          <p className="font-label-caps text-[10px] tracking-wider text-outline font-bold uppercase">FOR THE CURIOUS</p>
        </div>
        <div className="mb-6">
          <span className="font-display-lg text-4xl lg:text-5xl font-black text-primary">$0</span>
          <span className="font-body-md text-on-surface-variant ml-1">/lifetime</span>
        </div>
        <ul className="space-y-4 mb-8 flex-grow">
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-secondary text-lg">eco</span>
            <span className="font-body-md text-on-surface-variant">Access to all public roadmaps</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-secondary text-lg">eco</span>
            <span className="font-body-md text-on-surface-variant">Self-guided assessment tools</span>
          </li>
          <li className="flex items-start gap-2 text-outline/50">
            <span className="material-symbols-outlined text-lg">close</span>
            <span className="font-body-md">Project peer-review access</span>
          </li>
        </ul>
        <motion.button 
          className="w-full border-2 border-primary py-3 rounded-lg font-label-caps text-xs tracking-wider text-primary font-bold hover:bg-secondary/10 transition-colors shadow-sm"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Audited
        </motion.button>
      </PricingCard>

      {/* Card 2: Pro Builder */}
      <PricingCard className="bg-primary-container text-surface rounded-xl p-8 flex flex-col shadow-[6px_6px_0px_#253614] hover:shadow-[10px_10px_0px_#253614] relative z-10 md:scale-105 transform border-2 border-primary">
        {/* Washi Tape Badge */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 washi-tape bg-tertiary-fixed text-primary px-6 py-1 font-emphasis-script text-sm font-semibold rotate-[-2deg] shadow-sm z-20 border border-primary/10">
          Most Popular!
        </div>
        <div className="mb-6">
          <h3 className="font-headline-md text-headline-md text-white mb-1">Pro Builder</h3>
          <p className="font-label-caps text-[10px] tracking-wider text-primary-fixed opacity-90 font-bold uppercase">THE ARCHITECT&apos;S PATH</p>
        </div>
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="font-display-lg text-4xl lg:text-5xl font-black text-white">$9</span>
            <span className="font-body-md text-primary-fixed">/month</span>
            <span className="text-primary-fixed-dim/50 line-through text-sm">$29</span>
          </div>
          <p className="text-[10px] text-tertiary-fixed font-bold font-label-caps mt-1.5 tracking-wide">
            STUDENT &amp; GRADUATE RATE
          </p>
        </div>
        <ul className="space-y-4 mb-8 flex-grow">
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">eco</span>
            <span className="font-body-md text-primary-fixed">Unlimited project submissions</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">eco</span>
            <span className="font-body-md text-primary-fixed">1-on-1 monthly mentor check-in</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">eco</span>
            <span className="font-body-md text-primary-fixed">Exclusive Slack community</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-lg">eco</span>
            <span className="font-body-md text-primary-fixed">Verified builder portfolio</span>
          </li>
        </ul>
        <motion.button 
          className="w-full bg-secondary text-white py-4 rounded-lg font-headline-md text-lg hover:shadow-[0px_4px_0px_#400103] transition-shadow shadow-sm"
          whileHover={{ y: -2 }}
          whileTap={{ y: 1 }}
        >
          Unlock Your Path
        </motion.button>
      </PricingCard>

      {/* Card 3: Enterprise / Team Collective */}
      <PricingCard className="bg-surface border-2 border-primary rounded-xl p-8 flex flex-col shadow-[6px_6px_0px_#253614] hover:shadow-[10px_10px_0px_#253614]">
        <div className="mb-6">
          <h3 className="font-headline-md text-headline-md text-primary mb-1">Team Collective</h3>
          <p className="font-label-caps text-[10px] tracking-wider text-outline font-bold uppercase">FOR ORGANIZATIONS</p>
        </div>
        <div className="mb-6">
          <span className="font-display-lg text-4xl lg:text-5xl font-black text-primary">Custom</span>
          <span className="font-body-md text-on-surface-variant ml-1">/annually</span>
        </div>
        <ul className="space-y-4 mb-8 flex-grow">
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-secondary text-lg">eco</span>
            <span className="font-body-md text-on-surface-variant">Bulk seats (10+ members)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-secondary text-lg">eco</span>
            <span className="font-body-md text-on-surface-variant">Team progress analytics</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-secondary text-lg">eco</span>
            <span className="font-body-md text-on-surface-variant">Dedicated account manager</span>
          </li>
        </ul>
        <motion.button 
          className="w-full border-2 border-primary py-3 rounded-lg font-label-caps text-xs tracking-wider text-primary font-bold hover:bg-secondary/10 transition-colors shadow-sm"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact HR Sales
        </motion.button>
      </PricingCard>
    </section>
  );
}
