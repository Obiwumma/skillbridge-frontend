"use client";
import { useEffect } from "react";

const NODES = [
  { top: 30,  left: 165, status: "done",   icon: "check_circle", label: "HTML & CSS Fundamentals",     anim: "animate-float" },
  { top: 250, left: 320, status: "done",   icon: "star",         label: "JavaScript Fundamentals",      anim: "animate-float-2" },
  { top: 500, left: 180, status: "done",   icon: "verified",     label: "React & State Management",     anim: "animate-float" },
  { top: 800, left: 40,  status: "active", icon: "play_circle",  label: "Module 4: API Routing",        anim: "" },
  { top: 1050,left: 280, status: "locked", icon: "lock",         label: "Module 5: Auth & Security",    anim: "animate-float-2" },
];

export default function RoadmapCanvas() {
  useEffect(() => {
    const path = document.querySelector(".roadmap-path") as SVGPathElement | null;
    if (path) setTimeout(() => { path.style.strokeDashoffset = "0"; }, 100);
  }, []);

  return (
    <div className="relative w-full max-w-2xl h-[1400px] flex justify-center mx-auto">
      {/* S-curve path */}
      <svg className="absolute top-0 left-0 w-full h-full" fill="none" viewBox="0 0 400 1400">
        <path
          className="roadmap-path"
          d="M200 50 C 450 150, 450 450, 200 550 S -50 950, 200 1050 S 450 1250, 200 1350"
          stroke="#344C11" strokeDasharray="16 12" strokeLinecap="round" strokeWidth="6" opacity="0.4"
        />
      </svg>

      {NODES.map((node, i) => (
        <div
          key={i}
          className={`absolute group ${node.anim}`}
          style={{ top: node.top, left: node.left }}
        >
          {node.status === "active" ? (
            <div className="relative z-20">
              <div className="absolute -inset-6 bg-primary-fixed/40 rounded-full pulse-ring-enhanced" />
              <button className="w-28 h-28 rounded-full bg-primary text-white flex items-center justify-center border-4 border-primary-container brutal-shadow transition-all group-hover:scale-110 group-hover:-rotate-6 active:translate-x-1 active:translate-y-1 active:shadow-none">
                <span className="material-symbols-outlined text-5xl">{node.icon}</span>
              </button>
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 bg-primary text-white font-label-caps text-xs px-6 py-3 rounded-2xl whitespace-nowrap shadow-2xl">
                {node.label}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-primary" />
              </div>
            </div>
          ) : node.status === "locked" ? (
            <div className="opacity-40 grayscale hover:grayscale-0 transition-all">
              <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center border-2 border-outline-variant hover:border-primary cursor-not-allowed">
                <span className="material-symbols-outlined text-3xl text-outline">{node.icon}</span>
              </div>
            </div>
          ) : (
            <>
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center border-4 border-primary-container brutal-shadow-sm text-white transition-all group-hover:scale-110 group-hover:-translate-y-2 cursor-pointer">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{node.icon}</span>
              </div>
              <div className="absolute -right-44 top-1/2 -translate-y-1/2 bg-white border-2 border-primary p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 whitespace-nowrap z-30 font-label-caps text-xs">
                <span className="text-primary font-bold">COMPLETED</span>: {node.label}
              </div>
            </>
          )}
        </div>
      ))}

      {/* Certificate at bottom */}
      <div className="absolute group cursor-pointer flex flex-col items-center" style={{ top: 1280, left: 140 }}>
        <div className="w-28 h-28 bg-primary-fixed border-4 border-primary rounded-[2rem] brutal-shadow flex items-center justify-center text-primary transform rotate-6 transition-all group-hover:rotate-0 group-hover:scale-110">
          <span className="material-symbols-outlined text-6xl">emoji_events</span>
        </div>
        <div className="text-center mt-6">
          <p className="font-label-caps text-primary font-black tracking-widest text-[11px]">CERTIFICATE UNLOCK</p>
          <p className="font-headline-md text-lg text-primary">Backend Architect</p>
        </div>
      </div>
    </div>
  );
}
