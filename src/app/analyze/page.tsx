import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CVAnalyzerSection from "@/components/sections/CVAnalyzerSection";

export default function AnalyzePage() {
  return (
    <div className="bg-background mesh-bg text-on-background min-h-screen flex flex-col justify-between selection:bg-secondary/30">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-16 pt-32 relative z-10 max-w-[1200px] mx-auto w-full">
        <CVAnalyzerSection />
      </main>

      <Footer />
    </div>
  );
}
