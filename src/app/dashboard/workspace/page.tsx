"use client";
import Link from "next/link";

const TAKEAWAYS = [
  "Statelessness & Resource ID",
  "The Middleware Pipeline",
  "Error Handling Patterns",
  "Scalability Constraints",
];

export default function WorkspacePage() {
  return (
    <div className="min-h-screen px-8 pt-10 pb-20"
      style={{
        backgroundImage: "radial-gradient(#e4e3da 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      {/* Nav */}
      <nav className="max-w-5xl mx-auto mb-12 flex justify-between items-center py-4 px-8 bg-surface/60 backdrop-blur-xl rounded-full border border-primary/10">
        <Link href="/dashboard/roadmap" className="flex items-center gap-2 text-primary font-button-text text-sm hover:opacity-70 transition-opacity">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Back to Roadmap
        </Link>
        <h1 className="font-headline-md text-lg text-on-surface-variant hidden sm:block">
          Phase 1: Conceptual Overview
        </h1>
        <Link href="/dashboard/ide" className="font-label-caps text-[11px] text-secondary hover:text-primary underline underline-offset-4 decoration-primary/30">
          Skip to Lab
        </Link>
      </nav>

      <main className="max-w-5xl mx-auto space-y-12">
        {/* Video card */}
        <section className="bg-surface-container-lowest border-2 border-primary rounded-3xl neo-shadow overflow-hidden">
          {/* Video placeholder */}
          <div className="relative aspect-video bg-inverse-surface group cursor-pointer overflow-hidden">
            <div className="w-full h-full bg-primary-container/80 flex items-center justify-center">
              <div className="text-center">
                <span className="material-symbols-outlined text-8xl text-primary-fixed opacity-30">play_circle</span>
              </div>
            </div>
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-24 h-24 bg-primary text-on-primary rounded-full flex items-center justify-center neo-shadow hover:scale-110 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </button>
            </div>
            {/* Overlay info */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-tertiary-fixed text-primary px-3 py-1 rounded-full font-label-caps text-[10px]">
                  VIDEO LESSON
                </span>
                <span className="text-white/70 font-label-caps text-[10px]">24:15 MINS</span>
              </div>
              <h2 className="font-headline-md text-white text-2xl">
                Understanding RESTful Architecture & Middlewares
              </h2>
            </div>
          </div>

          {/* Card content */}
          <div className="p-8 md:p-12 grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              {/* Instructor */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-primary bg-primary-fixed flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">person</span>
                </div>
                <div>
                  <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">Instructor</p>
                  <p className="font-button-text text-primary text-sm">Mentor: Sarah O. (OPay Engineering)</p>
                </div>
              </div>
              <p className="font-body-lg text-on-surface-variant text-base leading-relaxed">
                Dive deep into the structural foundations of modern web communication. In this session, we strip away the abstraction of REST and explore how middlewares act as the silent orchestrators of secure, scalable data flows.
              </p>
            </div>

            {/* Key takeaways */}
            <div className="bg-surface-container p-6 rounded-2xl border-2 border-primary/10">
              <h3 className="font-label-caps text-[11px] text-secondary mb-4 uppercase tracking-widest">
                Key Takeaways
              </h3>
              <ul className="space-y-4">
                {TAKEAWAYS.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-on-tertiary-container mt-0.5 text-xl">check_circle</span>
                    <span className="font-body-md text-on-surface text-sm">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Progression gate */}
        <section className="relative bg-secondary-container/30 p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='24' ry='24' stroke='%23344C11' stroke-width='2' stroke-dasharray='8%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
          }}
        >
          <div className="flex items-center gap-6 text-center md:text-left">
            <div className="hidden lg:flex w-16 h-16 bg-white rounded-2xl border-2 border-primary items-center justify-center neo-shadow-sm flex-shrink-0"
              style={{ transform: "rotate(-3deg)" }}>
              <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
            </div>
            <div>
              <h4 className="font-headline-md text-2xl text-primary mb-1">Ready to apply this knowledge?</h4>
              <p className="font-body-md text-on-secondary-container text-sm">
                The AI Copilot is waiting in the coding lab for your first deployment.
              </p>
            </div>
          </div>
          <Link
            href="/dashboard/ide"
            className="whitespace-nowrap bg-primary-container text-on-primary font-button-text px-8 py-5 rounded-xl neo-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
          >
            Enter the Coding Lab →
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto mt-20 pb-8 flex justify-center items-center gap-8 border-t border-primary/10 pt-8">
        <span className="font-label-caps text-[11px] text-on-surface-variant/50">© 2026 SKILLBRIDGE AI</span>
        <div className="flex gap-6">
          {["Support", "Settings", "Privacy Policy"].map((l) => (
            <a key={l} href="#" className="font-label-caps text-[11px] text-on-surface-variant hover:text-primary transition-colors">
              {l.toUpperCase()}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
