"use client";

const ACHIEVEMENTS = [
  { icon: "database",          label: "DATABASE WARRIOR",       bg: "bg-secondary-container", locked: false },
  { icon: "cleaning_services", label: "CLEAN CODE SPECIALIST",  bg: "bg-tertiary-fixed-dim",  locked: false },
  { icon: "bolt",              label: "PERFORMANCE NINJA",       bg: "bg-surface-container-high", locked: true },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-10 pb-32 px-10">
      {/* Header */}
      <section className="mb-12">
        <h1 className="font-headline-xl text-5xl text-primary mb-3">Portfolio Evolution</h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl">
          Your profile is alive. It updates in real-time as you master new industry nodes and verify your technical expertise.
        </p>
      </section>

      {/* Before / After */}
      <section className="mb-16">
        <div className="bg-white border-2 border-primary rounded-xl neo-shadow grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* Before */}
          <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-primary bg-surface-container-low opacity-60">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-outline">history</span>
              <span className="font-label-caps text-[11px] text-outline">Initial CV State (Static)</span>
            </div>
            <ul className="space-y-4">
              {["B.Sc Computer Science (Expected 2025)", "Basic Python Certification", "Introduction to SQL"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-on-surface-variant italic font-body-md">
                  <span className="w-2 h-2 rounded-full bg-outline flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* After */}
          <div className="p-8 bg-surface-container-lowest relative">
            <div className="absolute -top-4 -right-4 bg-tertiary-fixed-dim text-primary px-4 py-2 border-2 border-primary rounded-lg font-label-caps text-[11px] neo-shadow-sm z-10">
              +45% Readiness
            </div>
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="font-label-caps text-[11px] text-primary">Verified Achievement Portfolio</span>
            </div>
            <ul className="space-y-4">
              {["PostgreSQL Architecture (Verified)", "API Design Mastery (Level 4)", "OPay-Standard Backend Project"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-primary font-bold font-body-md">
                  <span className="material-symbols-outlined text-primary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-2 text-primary">
              <span className="font-label-caps text-[11px]">Employability Jump</span>
              <span className="material-symbols-outlined animate-pulse">trending_up</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento: Project + Skill + Achievements */}
      <section className="mb-16">
        <h2 className="font-headline-md text-2xl text-primary mb-8">Node Expertise & Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Featured project card */}
          <div className="md:col-span-2 bg-white border-2 border-primary rounded-xl neo-shadow p-8 flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 h-48 bg-surface-container-high rounded-lg overflow-hidden border-2 border-primary relative flex-shrink-0">
              <div className="w-full h-full bg-primary-container/30 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-6xl opacity-40">code</span>
              </div>
              <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded font-label-caps text-[10px]">
                GITHUB VERIFIED
              </div>
            </div>
            <div className="flex flex-col justify-between flex-1">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline-md text-2xl leading-tight">Banking Ledger System</h3>
                  <div className="bg-secondary-container text-on-secondary-container px-3 py-1 border-2 border-primary rounded-full font-label-caps text-[10px] flex-shrink-0 ml-2">
                    8.5/10
                  </div>
                </div>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                  High-concurrency transaction engine built with Go and Redis, meeting enterprise throughput standards.
                </p>
              </div>
              <div className="flex gap-4 mt-6">
                <button className="flex-1 py-2.5 bg-primary text-white font-button-text text-sm rounded border-2 border-primary neo-shadow-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
                  LIVE PREVIEW
                </button>
                <button className="p-2.5 border-2 border-primary rounded neo-shadow-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
                  <span className="material-symbols-outlined text-primary">terminal</span>
                </button>
              </div>
            </div>
          </div>

          {/* Skill block */}
          <div className="bg-tertiary text-on-tertiary border-2 border-primary rounded-xl neo-shadow p-8 flex flex-col justify-center items-center text-center">
            <span className="material-symbols-outlined text-6xl mb-4 text-tertiary-fixed">schema</span>
            <h3 className="font-headline-md text-2xl mb-2">System Design</h3>
            <p className="font-label-caps text-[11px] opacity-80 mb-6">VALIDATED AT LEVEL 3</p>
            <div className="w-full bg-primary-container h-4 rounded-full overflow-hidden border-2 border-primary">
              <div className="bg-tertiary-fixed h-full" style={{ width: "75%" }} />
            </div>
          </div>

          {/* Achievement vault */}
          <div className="md:col-span-3 bg-white border-2 border-primary rounded-xl neo-shadow p-8">
            <h3 className="font-label-caps text-[11px] text-on-surface-variant mb-8 uppercase tracking-widest">
              Achievement Vault
            </h3>
            <div className="flex flex-wrap gap-12 justify-center md:justify-start">
              {ACHIEVEMENTS.map((a) => (
                <div key={a.label} className={`flex flex-col items-center group cursor-pointer ${a.locked ? "opacity-40" : ""}`}>
                  <div className={`w-20 h-20 rounded-full border-4 border-primary flex items-center justify-center ${a.bg} neo-shadow-sm group-hover:scale-110 transition-transform mb-3`}>
                    <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: a.locked ? "'FILL' 0" : "'FILL' 1" }}>
                      {a.icon}
                    </span>
                  </div>
                  <span className="font-label-caps text-[10px] text-center max-w-[80px]">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Resume banner */}
      <section>
        <div className="bg-primary text-on-primary border-4 border-primary-container rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 neo-shadow">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-tertiary-fixed-dim rounded-xl border-2 border-white flex-shrink-0">
              <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            </div>
            <div>
              <h2 className="font-headline-md text-2xl text-white mb-2">AI-Powered Optimization</h2>
              <p className="font-body-md text-on-primary-container max-w-lg text-sm leading-relaxed">
                Your professional CV is now 100% optimized for corporate ATS systems. All skills are mapped to industry-standard taxonomies.
              </p>
            </div>
          </div>
          <button className="w-full md:w-auto px-10 py-5 bg-white text-primary font-button-text rounded-xl neo-shadow flex items-center justify-center gap-3 border-2 border-primary hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform whitespace-nowrap">
            Download AI-Verified Resume (PDF)
            <span className="material-symbols-outlined">download</span>
          </button>
        </div>
      </section>
    </div>
  );
}
