"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AuditSection from "@/components/sections/AuditSection";
import NotJustCodersSection from "@/components/sections/NotJustCodersSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import HideSeekSection from "@/components/sections/HideSeekSection";
import PartnersSection from "@/components/sections/PartnersSection";

export default function MentorsPage() {
  return (
    <div className="bg-background text-on-surface paper-texture relative min-h-screen overflow-x-hidden selection:bg-secondary/30">
      {/* Floating Botanical Elements */}
      <span 
        className="material-symbols-outlined absolute top-[15%] -left-10 rotate-12 pointer-events-none opacity-10 z-0 text-[180px]"
        style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
      >
        eco
      </span>
      <span 
        className="material-symbols-outlined absolute top-[40%] -right-10 -rotate-12 pointer-events-none opacity-10 z-0 text-[180px]"
        style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
      >
        potted_plant
      </span>
      <span 
        className="material-symbols-outlined absolute bottom-[20%] left-20 rotate-45 pointer-events-none opacity-10 z-0 text-[180px]"
        style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
      >
        florist
      </span>
      <span 
        className="material-symbols-outlined absolute bottom-[5%] right-[10%] -rotate-45 pointer-events-none opacity-10 z-0 text-[180px]"
        style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
      >
        psychology_alt
      </span>

      <Navbar />

      <main className="pt-32 relative z-10">
        <HeroSection />
        <AuditSection />
        <NotJustCodersSection />
        <RoadmapSection />
        <HideSeekSection />
        <PartnersSection />
      </main>

      <Footer />
    </div>
  );
}
