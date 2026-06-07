import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingHeroSection from "@/components/sections/PricingHeroSection";
import PricingCardsSection from "@/components/sections/PricingCardsSection";
import PricingFAQSection from "@/components/sections/PricingFAQSection";

export default function PricingPage() {
  return (
    <div className="bg-background text-on-surface paper-texture relative min-h-screen overflow-x-hidden selection:bg-secondary/30">
      <Navbar />

      <main className="pt-32 pb-xl max-w-[1200px] mx-auto px-container-margin relative z-10">
        <PricingHeroSection />
        <PricingCardsSection />
        <PricingFAQSection />
      </main>

      <Footer />
    </div>
  );
}
