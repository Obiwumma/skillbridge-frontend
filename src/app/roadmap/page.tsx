"use client";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import OdysseyCatalogSection from "@/components/sections/OdysseyCatalogSection";
import PartnersSection from "@/components/sections/PartnersSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import HideSeekSection from "@/components/sections/HideSeekSection";

export default function RoadmapPage() {
  return (
    <div className="bg-background text-on-surface paper-texture relative min-h-screen overflow-x-hidden selection:bg-tertiary-fixed-dim selection:text-primary">
      <Navbar />

      <main className="pt-[120px] relative z-10">
        <HeroSection />
        <StatsSection />
        <OdysseyCatalogSection />
        <PartnersSection />
        <RoadmapSection />
        <TestimonialsSection />
        <HideSeekSection />
      </main>

      <Footer />
    </div>
  );
}