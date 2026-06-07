"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isRoadmap = pathname === "/roadmap";

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
        <Link href="/" className="font-headline-md text-2xl font-black text-primary hover:opacity-90 transition-opacity">
          SkillBridge
        </Link>
        <span className="year-badge">2026</span>
      </div>
      <div className="hidden md:flex gap-8 items-center">
        {["Roadmaps", "Mentors", "Pricing", "About"].map(l => {
          const route = l === "Roadmaps" ? "roadmap" : l.toLowerCase();
          const href = `/${route}`;
          const isActive = pathname === href || pathname?.startsWith(href + "/");

          return (
            <Link
              key={l}
              href={href}
              className={`font-medium transition-all duration-200 border-b-2 py-0.5
                ${isActive
                  ? "text-secondary border-secondary font-bold hover:scale-105"
                  : "text-on-surface-variant border-transparent hover:text-primary hover:border-primary/30"
                }`}
            >
              {l}
            </Link>
          );
        })}
      </div>
      <Link href={isRoadmap ? "/analyze" : "/join"}>
        <button className="bg-primary text-on-primary font-button-text text-button-text px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity">
          {isRoadmap ? "Analyze My CV" : "Join Now"}
        </button>
      </Link>
    </nav>
  );
}
