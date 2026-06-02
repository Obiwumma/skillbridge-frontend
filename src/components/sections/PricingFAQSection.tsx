"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Can I cancel my Pro subscription at any time?",
    answer: "Yes, absolutely. We believe in craftsmanship, not contracts. You can cancel at the end of your billing cycle with a single click in your account settings.",
  },
  {
    question: "What happens to my portfolio if I leave?",
    answer: "Your work belongs to you. If you downgrade to Base Audit, your portfolio remains public, but you lose the \"Verified Builder\" status badge and active mentor support.",
  },
  {
    question: "Do you offer discounts for students or non-profits?",
    answer: "We do! We offer a 50% discount for currently enrolled students and registered non-profit organizations. Reach out to our support team with your credentials.",
  },
  {
    question: "How do 1-on-1 mentor check-ins work?",
    answer: "Once a month, you can book a 30-minute session with a verified industry mentor to review your progress, get technical help, or discuss career strategy.",
  },
];

export default function PricingFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Subscribed! Thank you for staying in the loop.");
  };

  return (
    <section className="max-w-3xl mx-auto mb-xl mt-12">
      {/* FAQ Title */}
      <div className="flex items-end justify-between mb-8 border-b border-primary/10 pb-4">
        <h2 className="font-headline-lg text-headline-lg text-primary font-bold text-3xl">
          Got questions?
        </h2>
        <span className="font-emphasis-script text-emphasis-script text-secondary italic text-lg hidden md:block">
          We have answers.
        </span>
      </div>

      {/* Accordion Grid */}
      <div className="space-y-4 mb-16">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              className="faq-item bg-surface-container-low border-2 border-primary p-5 rounded-lg shadow-sm cursor-pointer group transition-colors hover:bg-surface-bright"
              onClick={() => toggleAccordion(idx)}
              layout
            >
              <div className="flex justify-between items-center select-none">
                <h4 className="font-headline-md text-base md:text-lg text-primary font-bold">
                  {faq.question}
                </h4>
                <motion.span 
                  className="material-symbols-outlined text-primary"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  expand_more
                </motion.span>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-body-md text-on-surface-variant text-sm mt-3 pt-2 border-t border-primary/5 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Newsletter Block */}
      <motion.div 
        className="bg-tertiary-container text-surface p-8 lg:p-12 rounded-xl border-2 border-primary flex flex-col md:flex-row items-center justify-between gap-lg overflow-hidden relative shadow-[6px_6px_0px_#253614]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative z-10 text-center md:text-left">
          <h2 className="font-display-lg text-headline-lg text-white font-extrabold text-3xl mb-2">
            Stay in the loop
          </h2>
          <p className="font-body-md text-primary-fixed opacity-95 max-w-sm text-sm">
            Join 15,000+ builders receiving weekly roadmaps and career insights in our curated journal.
          </p>
        </div>
        
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full md:w-auto gap-3 relative z-10">
          <input 
            className="flex-grow md:w-64 bg-surface/10 border-2 border-surface/30 px-4 py-3 rounded-lg placeholder:text-surface/50 focus:outline-none focus:border-secondary transition-colors text-surface text-sm" 
            placeholder="your@email.com" 
            type="email"
            required
          />
          <motion.button 
            type="submit"
            className="bg-secondary text-white px-6 py-3 rounded-lg font-label-caps text-xs tracking-wider font-bold shadow-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Subscribe
          </motion.button>
        </form>

        {/* Background illustration decoration */}
        <span 
          className="material-symbols-outlined absolute -right-4 -bottom-4 text-[200px] text-surface opacity-10 pointer-events-none select-none"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          forest
        </span>
      </motion.div>
    </section>
  );
}
