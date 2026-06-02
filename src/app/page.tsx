"use client";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import NotJustCodersSection from "@/components/sections/NotJustCodersSection";
import HideSeekSection from "@/components/sections/HideSeekSection";
import AuditSection from "@/components/sections/AuditSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import PartnersSection from "@/components/sections/PartnersSection";

export default function Home() {
  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.13, rootMargin: "0px 0px -50px 0px" });
    document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.stagger").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-section-gap max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <HeroSection />
        <StatsSection />
        <NotJustCodersSection />
        <HideSeekSection />
        <AuditSection />
        <RoadmapSection />
        <PartnersSection />
      </main>
      <Footer />
    </>
  );
}
