const STRENGTHS = [
  { label: "Python Mastery", color: "bg-green-500" },
  { label: "HTML / CSS",     color: "bg-green-500" },
  { label: "Fast Learner",   color: "bg-blue-500" },
  { label: "System Design",  color: "bg-green-500" },
];

export default function StrengthsCard() {
  return (
    <section className="col-span-12 md:col-span-6 lg:col-span-4 row-span-2 bg-secondary-container/20 border border-secondary/10 rounded-xl p-6 bento-card">
      <div className="flex items-center gap-2 mb-6">
        <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
          verified
        </span>
        <h4 className="font-headline-md text-xl text-on-secondary-container">Your Strengths</h4>
      </div>

      <div className="flex flex-wrap gap-2">
        {STRENGTHS.map((s) => (
          <div key={s.label} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-secondary/20 shadow-sm">
            <div className={`w-2 h-2 rounded-full ${s.color}`} />
            <span className="font-body-md text-sm text-primary font-medium">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <p className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wider mb-3">
          Validation Level
        </p>
        <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
          <div className="bg-on-secondary-container h-full w-[85%]" />
        </div>
      </div>
    </section>
  );
}
