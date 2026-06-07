"use client";
import { useEffect, useState } from "react";

const LOGS = [
  { time: "10:24:02", text: "Analyzing Github Commit History...",                    dim: true },
  { time: "10:24:15", text: "Extracting technical keywords from Projects...",        dim: true },
  { time: "10:24:28", text: "cross_referencing_market_v2.api → SUCCESS",            dim: false },
  { time: "10:24:40", text: "Matching experience against Goldman Sachs Junior SWE...",dim: true },
  { time: "10:25:01", text: "IDENTIFIED GAP: Microservices Orchestration (High Priority)", dim: false },
];

export default function ProcessingLog() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => {
      setVisible((v) => (v < LOGS.length ? v + 1 : v));
    }, 600);
    return () => clearInterval(iv);
  }, []);

  return (
    <section className="col-span-12 lg:col-span-4 row-span-2 bg-surface-container-high/30 border border-outline/10 rounded-xl p-6 bento-card flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">
          Real-Time Processing Log
        </h4>
        <div className="flex gap-1">
          {[0,1,2].map((i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
      </div>

      <div className="font-mono text-[11px] space-y-2 opacity-80 overflow-hidden flex-1">
        {LOGS.slice(0, visible).map((log, i) => (
          <p key={i} className={log.dim ? "text-primary-fixed-dim" : "text-on-surface-variant"}>
            [{log.time}] {log.text}
          </p>
        ))}
        {visible > 0 && (
          <div className="w-full h-px bg-outline-variant/20 my-2" />
        )}
        {visible >= LOGS.length && (
          <p className="text-primary font-bold animate-pulse">&gt; OPTIMIZING ROADMAP...</p>
        )}
      </div>
    </section>
  );
}
