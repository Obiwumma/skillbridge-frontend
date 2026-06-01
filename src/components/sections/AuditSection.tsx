"use client";
import { useEffect, useRef, useState } from "react";

const SKILLS = [
  { label: "Frontend Basics",  status: "Verified",        pct: 100, color: "bg-primary" },
  { label: "React Framework",  status: "Gap Identified",  pct: 38,  color: "bg-error" },
  { label: "Node.js / APIs",   status: "In Progress",     pct: 62,  color: "bg-secondary" },
  { label: "System Design",    status: "Gap Identified",  pct: 20,  color: "bg-error" },
  { label: "Git & DevOps",     status: "Verified",        pct: 85,  color: "bg-primary" },
];

export default function AuditSection() {
  const [animated, setAnimated] = useState(false);
  const [score, setScore] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setAnimated(true);
        let n = 0;
        const iv = setInterval(() => { n += 2; setScore(n); if (n >= 68) clearInterval(iv); }, 25);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const circumference = 2 * Math.PI * 32;

  return (
    <section ref={ref} className="py-section-gap">
      <div className="bg-surface-container-lowest border-2 border-primary p-8 md:p-12 rounded-xl neo-shadow flex flex-col lg:flex-row items-center gap-12 reveal">
        {/* Left */}
        <div className="lg:w-1/2">
          <div className="font-label-caps text-label-caps text-primary mb-4">THE AUDIT</div>
          <h2 className="font-headline-xl text-headline-xl text-primary mb-6">How The AI Works</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            Upload your resume and our AI instantly maps your skills, identifies your learning gaps, and calculates your real-world Job Readiness Score. You will finally know exactly where you stand.
          </p>
          <div className="flex gap-3">
            {[["🔍","Scan"],["🧠","Analyse"],["📊","Score"]].map(([icon, label]) => (
              <div key={label} className="flex items-center gap-2 bg-primary-fixed/30 border border-primary/20 rounded-full px-4 py-2 font-label-caps text-xs text-primary font-bold">
                <span>{icon}</span><span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: score card */}
        <div className="lg:w-1/2 w-full">
          <div className="bg-surface-container-low border-2 border-primary p-6 rounded-lg neo-shadow-sm">
            {/* Score ring */}
            <div className="flex justify-between items-center mb-8">
              <span className="font-headline-md text-primary text-lg">Job Readiness Score</span>
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="32" fill="none" stroke="#e4e3da" strokeWidth="6" />
                  <circle
                    cx="40" cy="40" r="32" fill="none" stroke="#1f3500" strokeWidth="6"
                    strokeDasharray={`${animated ? circumference * 0.68 : 0} ${circumference}`}
                    strokeLinecap="round"
                    style={{ transition: "stroke-dasharray 2s cubic-bezier(0.22,1,0.36,1)" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-headline-md text-xl font-black text-primary">
                  {score}%
                </div>
              </div>
            </div>

            {/* Skill bars */}
            <div className="space-y-4">
              {SKILLS.map((s, i) => (
                <div key={s.label}>
                  <div className="flex justify-between font-label-caps text-[10px] tracking-wider text-on-surface-variant mb-1.5 uppercase">
                    <span>{s.label}</span>
                    <span className={
                      s.status === "Verified" ? "text-primary font-bold" :
                      s.status === "Gap Identified" ? "text-error font-bold" : "text-secondary font-bold"
                    }>{s.status}</span>
                  </div>
                  <div className="h-2.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div
                      className={`h-full ${s.color} rounded-full`}
                      style={{
                        width: animated ? `${s.pct}%` : "0%",
                        transition: `width 1.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
