const GAPS = ["Docker", "Kubernetes", "PostgreSQL"];

export default function GapsCard() {
  return (
    <section className="col-span-12 md:col-span-6 lg:col-span-4 row-span-2 bg-error-container/20 border border-error/10 rounded-xl p-6 bento-card flex flex-col">
      <div className="flex items-center gap-2 mb-6">
        <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>
          warning
        </span>
        <h4 className="font-headline-md text-xl text-error">Critical Gaps</h4>
      </div>

      <div className="flex flex-wrap gap-2 mb-auto">
        {GAPS.map((g) => (
          <span key={g} className="bg-white/60 border border-error/20 text-error px-3 py-1 rounded-lg font-body-md text-sm">
            {g}
          </span>
        ))}
      </div>

      {/* AI insight terminal */}
      <div className="mt-6 bg-primary-container p-4 rounded-lg terminal-glow relative">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-error" />
          <span className="font-label-caps text-[10px] text-on-primary-container uppercase tracking-widest">
            AI Analyst Insight
          </span>
        </div>
        <p className="font-body-md text-on-primary-container text-[13px] leading-relaxed italic">
          "Your backend logic is strong, but without containerization skills (Docker), your CV is being filtered by 65% of Mid-Tier FinTech firms."
        </p>
        <div className="absolute -top-2 right-4 bg-tertiary-container px-2 py-1 rounded-md text-[10px] text-on-tertiary">
          Urgent
        </div>
      </div>
    </section>
  );
}
