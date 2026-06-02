"use client";
import React from "react";
import { motion } from "framer-motion";

const ODYSSEYS = [
  {
    num: "01",
    title: "Zero to Fintech Backend",
    desc: "Transition from generic CS basics to building high-frequency trading engines.",
    note: "Recommended for: Java & Python enthusiasts",
    duration: "12 WEEKS ODYSSEY",
    icon: "payments",
    colorClass: "text-secondary",
    bgClass: "bg-secondary/10",
    rotation: 1
  },
  {
    num: "02",
    title: "Law to Tech Policy",
    desc: "Leverage your legal foundation to navigate AI regulations and data privacy.",
    note: "Includes: GDPR & NITDA modules",
    duration: "8 WEEKS ODYSSEY",
    icon: "gavel",
    colorClass: "text-tertiary",
    bgClass: "bg-tertiary-fixed-dim/20",
    rotation: -2
  },
  {
    num: "03",
    title: "Psychology to UX Strategy",
    desc: "Convert understanding of behavior into high-impact user experiences.",
    note: "Focusing on: Figma & Cognitive Maps",
    duration: "10 WEEKS ODYSSEY",
    icon: "psychology",
    colorClass: "text-primary",
    bgClass: "bg-primary/10",
    rotation: 2
  }
];

export default function OdysseyCatalogSection() {
  return (
    <section className="py-xl relative">
      <div className="max-w-7xl mx-auto px-container-margin">
        <motion.div 
          className="flex items-center gap-md mb-xl"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline-lg text-headline-lg text-primary">Your Learning Odyssey</h2>
          <div className="h-[2px] flex-grow bg-primary opacity-20"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
          {ODYSSEYS.map((o) => (
            <motion.div
              key={o.num}
              className="bg-white p-xl border-2 border-primary paper-lift flex flex-col gap-md relative cursor-pointer"
              style={{ originX: 0.5, originY: 0.5 }}
              initial={{ opacity: 0, y: 30, rotate: o.rotation }}
              whileInView={{ opacity: 1, y: 0, rotate: o.rotation }}
              viewport={{ once: true }}
              whileHover={{ 
                rotate: 0, 
                scale: 1.04, 
                boxShadow: "6px 6px 0px 0px #253614",
                transition: { duration: 0.2 }
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute top-sm right-sm text-outline-variant text-4xl font-bold opacity-30 select-none">
                {o.num}
              </div>
              
              <div className={`w-12 h-12 ${o.bgClass} rounded-full flex items-center justify-center`}>
                <span 
                  className={`material-symbols-outlined ${o.colorClass}`} 
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {o.icon}
                </span>
              </div>
              
              <h3 className="font-headline-md text-headline-md text-primary">
                {o.title}
              </h3>
              
              <p className="font-body-md text-body-md text-on-surface-variant">
                {o.desc}
              </p>
              
              <div className="text-[11px] font-label-caps text-secondary/60 italic mt-xs border-l-2 border-secondary/20 pl-2">
                * {o.note}
              </div>
              
              <div className="mt-auto pt-md flex items-center justify-between border-t border-dashed border-outline-variant">
                <span className="font-label-caps text-label-caps text-secondary">
                  {o.duration}
                </span>
                <span className="material-symbols-outlined text-primary">
                  arrow_right_alt
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
