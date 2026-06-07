"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const STATS = [
  { value: "3.5M+", label: "Graduates Yearly",    init: "stat-init-1" },
  { value: "42.5%", label: "Youth Unemployment",   init: "stat-init-2" },
  { value: "+1.2M", label: "Unfilled Tech Roles",  init: "stat-init-3" },
  { value: "80%",   label: "Lack Practical Skills", init: "stat-init-4" },
];

export default function StatsSection() {
  const pathname = usePathname();
  const isRoadmap = pathname === "/roadmap";

  // Hooks for original homepage StatsSection
  const [settled, setSettled] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isRoadmap) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSettled(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [isRoadmap]);

  // 1. Roadmap "The African Talent Gap" Layout
  if (isRoadmap) {
    return (
      <section className="bg-[#f0ede4] py-xl relative overflow-hidden border-y-2 border-primary">
        <div className="max-w-7xl mx-auto px-container-margin grid md:grid-cols-2 gap-xl items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display-lg text-display-lg text-primary mb-md leading-tight">
              The African <br />
              <span className="text-secondary italic underline decoration-primary/20">Talent Gap.</span>
            </h2>
            <p className="font-body-lg text-body-lg text-primary/80 mb-lg">
              75% of African graduates enter the workforce with theoretical knowledge that doesn&apos;t align with the rapid-fire demands of the modern tech ecosystem. We&apos;re here to fix that.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-md relative">
            {/* 600k+ Card */}
            <motion.div 
              className="bg-white p-md border-2 border-primary torn-edge paper-lift cursor-pointer"
              style={{ originX: 0.5, originY: 0.5 }}
              initial={{ opacity: 0, y: 30, rotate: -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              viewport={{ once: true }}
              whileHover={{ 
                rotate: 0, 
                scale: 1.05, 
                boxShadow: "6px 6px 0px 0px #253614",
                transition: { duration: 0.2 }
              }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-3xl font-headline-lg text-secondary">600k+</div>
              <p className="font-label-caps text-[10px] mt-xs">VACANT TECH ROLES IN NIGERIA ALONE</p>
            </motion.div>

            {/* 82% Card */}
            <motion.div 
              className="bg-white p-md border-2 border-primary torn-edge paper-lift mt-lg cursor-pointer"
              style={{ originX: 0.5, originY: 0.5 }}
              initial={{ opacity: 0, y: 30, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2 }}
              viewport={{ once: true }}
              whileHover={{ 
                rotate: 0, 
                scale: 1.05, 
                boxShadow: "6px 6px 0px 0px #253614",
                transition: { duration: 0.2 }
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-3xl font-headline-lg text-primary">82%</div>
              <p className="font-label-caps text-[10px] mt-xs">OF EMPLOYERS REPORT SKILL MISMATCH</p>
            </motion.div>

            {/* Overlapping botanical */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 opacity-20 pointer-events-none z-0">
              <img 
                alt="Plant sketch" 
                className="w-full h-full object-contain" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiMNJxCz8SgWY8jc_efvKRqlKxx68cJ9Qrc-Z5BPQkIYzqyWOIBzuWMXhK5VwKYKmNopJqu3at8IvKKJEbfNB1q5q9HaDbmlHgd0rOnWjF_zS8hgiRtKRNibqYKpunIIEXJsY-sV1S9ERO_y4PXWsufo-M-PPhSd_CIRrz4qRFyXGCGznRASQcqHLZPD9OSjmFxAHgNBK4m3hpEN14fc5HYHoa0FnxoRhnbMPCeaNdpejpqEwctMj_wJZx8zIp_E4rzImk0mU8Ew5y"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // 2. Original Homepage Stats Section
  return (
    <section ref={ref} className="py-section-gap relative overflow-visible">
      {/* Nigeria map bg */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <img
          src="https://lh3.googleusercontent.com/aida/ADBb0uiezneTJdLIoLnAnld5x_AQgR6sOH_7MiGyaZvLHZJbsr2cVquuWUGttGb6lSQnH6ArseV3WmJG2Uv3hFxvbYQHs1P1f-DcNKg-qjNAiRn-4gvOJemJCJVtZv86-E84aqxx2VZr0gy2D_OB9jdi18N8t6Y4EykwHZcgJg6gcbYHJo9W_wMmbZJJ8PAWV9wFWGjy5OpTJAJBOJjvrItZiY5Z6Qn8xirUwjXxWimZWUwMXTiJ5Fzepc2Jn4xh"
          alt="" className="w-[120%] max-w-none opacity-40 scale-125"
        />
      </div>

      <div className="relative z-10">
        <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-20">
          Every year, across Africa...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto px-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`stat-card bg-surface-container-lowest border-2 border-primary p-12 lg:p-16
                flex flex-col justify-center items-start relative group cursor-pointer
                transition-all duration-300 hover:-translate-y-2
                ${settled ? "stat-settled" : s.init}`}
              style={{
                boxShadow: "8px 8px 0px #344C11",
                transitionDelay: settled ? `${i * 0.15}s` : "0s",
              }}
            >
              <div className="flex items-start gap-2">
                <div className="stat-num font-headline-xl text-[96px] lg:text-[110px] text-primary leading-none font-black tracking-tighter transition-colors duration-300">
                  {s.value}
                </div>
                <span className="stat-arrow material-symbols-outlined text-primary-fixed-dim text-4xl mt-4 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  north_east
                </span>
              </div>
              <div className="stat-label font-label-caps text-sm tracking-[0.2em] text-on-surface-variant uppercase mt-6 font-bold transition-colors duration-300">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 font-label-caps text-xs italic opacity-60">
          *All metrics are verified across major Nigerian economic reports
        </p>
      </div>
    </section>
  );
}
