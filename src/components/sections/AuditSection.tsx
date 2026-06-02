"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

// Original homepage assets
const SKILLS = [
  { label: "Frontend Basics",  status: "Verified",        pct: 100, color: "bg-primary" },
  { label: "React Framework",  status: "Gap Identified",  pct: 38,  color: "bg-error" },
  { label: "Node.js / APIs",   status: "In Progress",     pct: 62,  color: "bg-secondary" },
  { label: "System Design",    status: "Gap Identified",  pct: 20,  color: "bg-error" },
  { label: "Git & DevOps",     status: "Verified",        pct: 85,  color: "bg-primary" },
];

// Roadmap Mentor Roster assets
interface Tag {
  text: string;
  bgColor: string;
  textColor: string;
}

interface Mentor {
  name: string;
  role: string;
  company: string;
  imageUrl: string;
  tags: Tag[];
  rotation: number;
}

const MENTORS: Mentor[] = [
  {
    name: "Sarah Okon",
    role: "Senior Product Manager",
    company: "OPay",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDvGLoWsMRAb9gknt3Uf-0qaQfgNRNpAe-wpr3ZrSwYQz44wWEI9NkjVnkro4c-oSy8VL3o2BGj9TzPJ4l6ltwEyn1SC0HbtC7HalUuOOMK38jVNwxBjjXbqqsTCDCTqcYMTRRZGax2c4lVBgkKCX6bYghPdcrkbjhgWg9b-xZfQmX4wnsRISB7Lks3hWtWNdk9ydfERqvFzDOG9fz8YPtlat8vb6DRyAebzODgeEyupFbdgDEC-LlVIDtTF1a04wjxwGtXVpDGxi-",
    tags: [
      { text: "MOCK INTERVIEWS", bgColor: "#f6be39", textColor: "#412f00" },
      { text: "CV REVIEWS", bgColor: "#fd8f85", textColor: "#9b433c" }
    ],
    rotation: -2
  },
  {
    name: "Chidi Azikiwe",
    role: "Lead Engineer",
    company: "Flutterwave",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoXrgX3YZXkhb4HThUPHXCXDkrPYcbPuuROTI7-2QqJHEwUfs61wDbbPpJT5cWzFmXlrG00l4BsTt31omrHoBU7jZAgNTbgOmjsZu0K4a_NYmgXAIEHmRDwLIVBj6IDwS0cMRE7qSp1HW4PIZpAKH1CWMTE9iddbqHsXXyUQLAxYNv_RFHQzNmuVxf8kCnH-PPfabIUOcmjLHLwK_xCbGZy1P28p9BGyTHrz0sc7JcQWkjeaS7vYrh9ZuVMjjEqShPBTplU1q3gLm-",
    tags: [
      { text: "SYSTEM DESIGN", bgColor: "#f6be39", textColor: "#412f00" },
      { text: "REFERRALS", bgColor: "#c5c8bb", textColor: "#44483e" }
    ],
    rotation: 1
  },
  {
    name: "Amaka Nwachukwu",
    role: "UX Design Lead",
    company: "Andela",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUc1MIH2cxIuBfnPCgY5qE2YMswZ8rJii8fIYPWdR5nW58fLEOoEvOD01RyJ6JbWje1__z8W3HkDPdyqOmqMy3I-KIbOcO6e-4kRWILe1Wvj0PYh06mfrLR_qEPcfga3oNSs0Ri7lIAN3qO3MX6ql-jDbM3E_uvDxGJjQ6NICuo07JPnnBtWZ5MBVISmjDyEaSj22QE6veIu-JJoV9Ek3mXocfdQ79ErSbQwAOtJf2yAXKWFE1ntpA0mGLUbcrRCKJVon-gTn6HehV",
    tags: [
      { text: "PORTFOLIO DEEP DIVE", bgColor: "#f6be39", textColor: "#412f00" },
      { text: "UX AUDITS", bgColor: "#fd8f85", textColor: "#9b433c" }
    ],
    rotation: -1
  },
  {
    name: "Tunde Adebayo",
    role: "Senior Data Analyst",
    company: "Kuda Bank",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAGVFTlS3VG4dQG_YJMXTQ9dnPe397e54-ZpuEB0Xm3hL8uXpUJnFjWh-0NgP1-QpnpZCufsPKB5DryJCbV2OSgD1oRGtXI480MHUoQOPkMANsCWXs8gGYSCha0LERe8LWjHvt-tuADi_UdtqlXn3xP8zR1ejSmuHXHnPOUMpKsgN160PxPhA5gKDffGBKQM-DAh70rVxvJDzhlVoWHiApMr5zw_qBuDyI017_ReUu0pCMmEsLdQbCT5oNoBhOvLDEUQSy13abhiDa",
    tags: [
      { text: "SQL CHALLENGES", bgColor: "#f6be39", textColor: "#412f00" },
      { text: "TECH STACK", bgColor: "#c5c8bb", textColor: "#44483e" }
    ],
    rotation: 2
  },
  {
    name: "Ifeoma Okafor",
    role: "Fintech Strategist",
    company: "PiggyVest",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk5M3s0jwmkynOeflgYP0TUnvJqRK6GbNM-1CScNrHNNXzGzHALmCaL9iVcr8x4LkwWp-g1YFCChOu_tPTOQUCiQydycxcKhw4MNL6sXc5XPWp4Jty3b5PiLFaU4BwyWgXwL2_lb2CuLQzdNV8_jWC62joz0vcgcf8chowFagBHYCNmuWV1CsvDlJH0K3nqt8GxBbyOyZy-ij-7f61_e7M068A1EnGY4LbhzHTt7wprVGVjWbryfRbNljSCEjdRkkv_96TD4CgExHc",
    tags: [
      { text: "GTM STRATEGY", bgColor: "#fd8f85", textColor: "#9b433c" },
      { text: "NETWORKING", bgColor: "#f6be39", textColor: "#412f00" }
    ],
    rotation: -1.5
  }
];

export default function AuditSection() {
  const pathname = usePathname();
  const isMentors = pathname === "/mentors";

  // State and hooks for original homepage AuditSection
  const [animated, setAnimated] = useState(false);
  const [score, setScore] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isMentors) return;
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
  }, [isMentors]);

  const circumference = 2 * Math.PI * 32;

  if (isMentors) {
    return (
      <section className="max-w-screen-xl mx-auto px-container-margin py-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl justify-items-center">
          {MENTORS.map((m, idx) => (
            <motion.div
              key={m.name}
              className="bg-white p-6 w-full max-w-[340px] border-[1.5px] border-primary shadow-[6px_6px_0px_#253614]"
              style={{ originX: 0.5, originY: 0.5 }}
              initial={{ 
                opacity: 0, 
                y: 40,
                rotate: m.rotation 
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                rotate: m.rotation
              }}
              viewport={{ once: true }}
              whileHover={{ 
                rotate: 0, 
                scale: 1.05,
                boxShadow: "10px 10px 0px #253614",
                transition: { duration: 0.25, ease: "easeOut" }
              }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="relative h-64 mb-4 bg-surface-container overflow-hidden border border-outline/20">
                <img
                  alt={`Portrait of ${m.name}`}
                  className="w-full h-full object-cover grayscale-[20%]"
                  src={m.imageUrl}
                />
              </div>
              
              <h3 className="font-headline-md text-headline-md text-primary mb-1">
                {m.name}
              </h3>
              
              <p className="font-body-md text-body-md mb-4">
                {m.role} <span className="text-secondary font-bold">@ {m.company}</span>
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {m.tags.map((tag) => (
                  <span
                    key={tag.text}
                    className="washi-tape px-3 py-1 font-label-caps text-[10px]"
                    style={{ backgroundColor: tag.bgColor, color: tag.textColor }}
                  >
                    {tag.text}
                  </span>
                ))}
              </div>
              
              <motion.button 
                className="w-full bg-primary text-white font-headline-md text-headline-md py-3 rounded transition-colors hover:bg-primary-container"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Session
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  // Original AI Audit section for the Home Page
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
            {[(["🔍","Scan"] as const), (["🧠","Analyse"] as const), (["📊","Score"] as const)].map(([icon, label]) => (
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
