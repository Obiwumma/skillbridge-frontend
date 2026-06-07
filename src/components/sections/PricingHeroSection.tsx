"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PricingHeroSection() {
  return (
    <section className="text-center mb-xl">
      <motion.span 
        className="font-emphasis-script text-emphasis-script text-secondary mb-2 block"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Philosophy
      </motion.span>
      
      <motion.h1 
        className="font-display-lg text-display-lg text-primary max-w-3xl mx-auto mb-md leading-tight text-5xl md:text-6xl font-extrabold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Invest in a <span className="squiggle-underline relative inline-block pb-2">career</span>, not just a certificate.
      </motion.h1>
      
      <motion.p 
        className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        No hidden fees, no predatory lending. Just transparent pricing designed to get you from curiosity to contribution.
      </motion.p>
    </section>
  );
}
