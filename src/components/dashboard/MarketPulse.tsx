const SKILLS = [
  { label: "Cloud Arch",  pct: 92, trend: "High",   color: "text-green-600" },
  { label: "React / Next", pct: 88, trend: "Peak",   color: "text-green-600" },
  { label: "Python API",  pct: 76, trend: "Stable", color: "text-orange-500" },
  { label: "PostgreSQL",  pct: 64, trend: "Rising",  color: "text-blue-500" },
];

export default function MarketPulse() {
  return (
    <section className="col-span-12 lg:col-span-5 row-span-2 bg-surface-container-lowest border border-outline/15 rounded-xl p-8 flex flex-col justify-between bento-card">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-headline-md text-xl text-primary">Market Pulse</h3>
          <p className="font-body-md text-on-surface-variant text-sm mt-1">Top skills for Fintech.</p>
        </div>
        <button className="text-primary font-label-caps text-xs flex items-center gap-1 hover:underline">
          Report <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4">
        {SKILLS.map((s) => (
          <div key={s.label} className="p-3 rounded-lg bg-surface-container border border-outline/10 flex flex-col gap-1">
            <span className="text-[10px] text-on-surface-variant uppercase tracking-wider">{s.label}</span>
            <div className="flex items-end gap-2">
              <span className="font-headline-md text-primary text-xl">{s.pct}%</span>
              <span className={`text-[9px] mb-1 font-bold ${s.color}`}>{s.trend}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
