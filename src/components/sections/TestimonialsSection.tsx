"use client";
import React from "react";
import { motion } from "framer-motion";

const ENTRIES = [
  {
    num: "ENTRY #402 — OYIN K.",
    date: "June 12, 2024",
    text: "SkillBridge felt different from day one. I wasn't just watching videos; I was building a loan disbursement API that OPay actually uses. Three months later, I’m joining their Lagos team. Surreal.",
    rotation: 1
  },
  {
    num: "ENTRY #518 — CHUKWUDI E.",
    date: "July 04, 2024",
    text: "Coming from a Law background, I was terrified of tech. The Policy Odyssey translated legalese into technical requirements. The AI matched me with a Legal Tech role at Flutterwave within a week of finishing.",
    rotation: -1
  },
  {
    num: "ENTRY #631 — AMARA G.",
    date: "August 19, 2024",
    text: "The S-curve roadmap kept me sane. Every milestone I hit felt like a real victory. The 'Industry Insights' handwritten notes on the side were game-changers for my interview prep.",
    rotation: 2
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-xl bg-background relative border-t-2 border-primary">
      <div className="max-w-7xl mx-auto px-container-margin">
        <motion.div 
          className="flex items-center gap-md mb-xl"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline-lg text-headline-lg text-primary">Journal Entries</h2>
          <div className="h-[2px] flex-grow bg-primary opacity-20"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-xl">
          {ENTRIES.map((e, idx) => (
            <motion.div
              key={e.num}
              className="journal-entry p-md paper-lift flex flex-col justify-start relative cursor-pointer"
              style={{ originX: 0.5, originY: 0.5 }}
              initial={{ opacity: 0, y: 30, rotate: e.rotation }}
              whileInView={{ opacity: 1, y: 0, rotate: e.rotation }}
              viewport={{ once: true }}
              whileHover={{ 
                rotate: 0, 
                scale: 1.04, 
                boxShadow: "6px 6px 0px 0px #253614",
                transition: { duration: 0.2 }
              }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="mb-4">
                <p className="font-label-caps text-[10px] text-secondary">{e.num}</p>
                <p className="text-[10px] text-on-surface-variant italic">{e.date}</p>
              </div>
              <p className="font-body-md text-sm leading-7 text-primary/95">
                {e.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
