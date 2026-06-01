"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: "3.5M+", label: "Graduates Yearly",    init: "stat-init-1" },
  { value: "42.5%", label: "Youth Unemployment",   init: "stat-init-2" },
  { value: "+1.2M", label: "Unfilled Tech Roles",  init: "stat-init-3" },
  { value: "80%",   label: "Lack Practical Skills", init: "stat-init-4" },
];

export default function StatsSection() {
  const [settled, setSettled] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSettled(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

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
