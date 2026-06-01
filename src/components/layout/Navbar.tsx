"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex justify-between items-center px-8 py-3
      w-[calc(100%-2rem)] max-w-4xl rounded-full border border-[#3B4D28]/20 backdrop-blur-md transition-shadow duration-300
      bg-[#F9F8F2]/80 ${scrolled ? "shadow-lg" : ""}`}>
      <div className="flex items-center gap-3">
        <span className="font-headline-md text-2xl font-black text-primary">SkillBridge</span>
        <span className="year-badge">2026</span>
      </div>
      <div className="hidden md:flex gap-8 items-center">
        {["Roadmaps","Mentors","Pricing","About"].map(l => (
          <a key={l} href="#" className="text-on-surface-variant font-medium hover:text-primary transition-colors">{l}</a>
        ))}
      </div>
      <button className="bg-primary text-on-primary font-button-text text-button-text px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity">
        Join Now
      </button>
    </nav>
  );
}
