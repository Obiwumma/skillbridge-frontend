"use client";
import Link from "next/link";
import ScoreCard from "@/components/dashboard/ScoreCard";
import MarketPulse from "@/components/dashboard/MarketPulse";
import SkillRadar from "@/components/dashboard/SkillRadar";
import StrengthsCard from "@/components/dashboard/StrengthsCard";
import GapsCard from "@/components/dashboard/GapsCard";
import ProcessingLog from "@/components/dashboard/ProcessingLog";

export default function OverviewPage() {
  return (
    <div className="min-h-screen pb-40">
      {/* Top header */}
      <header className="flex justify-between items-center w-full mb-10 px-8 pt-8">
        <div>
          <h2 className="font-headline-md text-3xl text-primary tracking-tight">Intelligence Hub</h2>
          <p className="font-body-md text-on-surface-variant mt-1">Real-time career readiness analytics.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="bg-primary-container/10 border border-primary/20 px-4 py-2 rounded-full flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">local_fire_department</span>
            <span className="font-label-caps text-[11px] text-primary">Current Streak: 12 Days</span>
          </div>
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      {/* Bento grid */}
      <div className="px-8 grid grid-cols-12 gap-8 auto-rows-[160px]">
        <ScoreCard />
        <MarketPulse />
        <SkillRadar />
        <StrengthsCard />
        <GapsCard />
        <ProcessingLog />
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-8 left-72 right-8 z-40">
        <div className="glass-panel-light border border-primary/20 p-6 rounded-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-white">auto_awesome</span>
            </div>
            <div>
              <h5 className="font-headline-md text-lg text-primary">Ready to close your skill gaps?</h5>
              <p className="font-body-md text-on-surface-variant text-sm">
                Our AI can curate a personalized 4-week intensive sprint.
              </p>
            </div>
          </div>
          <Link
            href="/dashboard/roadmap"
            className="animate-pulse-slow text-white px-8 py-4 rounded-full font-label-caps text-sm shadow-lg shadow-primary/30 flex items-center gap-2 group whitespace-nowrap"
          >
            Generate Gamified Roadmap
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">bolt</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
