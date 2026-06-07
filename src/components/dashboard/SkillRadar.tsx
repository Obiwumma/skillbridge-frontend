export default function SkillRadar() {
  return (
    <section className="col-span-12 lg:col-span-3 row-span-2 bg-surface-container-lowest border border-outline/15 rounded-xl p-6 bento-card flex flex-col">
      <h3 className="font-headline-md text-lg text-primary leading-tight mb-4">
        Profile vs. Tier-1 Demand
      </h3>
      <div className="flex-grow flex items-center justify-center">
        <div className="relative w-full aspect-square max-w-[180px]">
          <svg className="w-full h-full opacity-90" viewBox="0 0 100 100">
            {/* Background polygons */}
            <polygon fill="none" stroke="currentColor" strokeWidth="0.5" className="text-outline-variant"
              points="50,5 95,38 78,92 22,92 5,38" />
            <polygon fill="none" stroke="currentColor" strokeWidth="0.5" className="text-outline-variant"
              points="50,20 81,43 69,79 31,79 19,43" />
            <polygon fill="none" stroke="currentColor" strokeWidth="0.5" className="text-outline-variant"
              points="50,35 67,48 61,66 39,66 33,48" />
            {/* Axes */}
            {[["50","50","50","5"],["50","50","95","38"],["50","50","78","92"],["50","50","22","92"],["50","50","5","38"]].map(([x1,y1,x2,y2], i) => (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" className="text-outline-variant" />
            ))}
            {/* Data polygon */}
            <polygon fill="rgba(81,100,61,0.2)" stroke="#51643d" strokeWidth="2"
              points="50,15 85,45 65,85 45,75 25,40" />
            {/* Labels */}
            <text fontSize="5" textAnchor="middle" x="50" y="2" className="fill-on-surface-variant font-bold uppercase">Cloud</text>
            <text fontSize="5" textAnchor="start" x="96" y="42" className="fill-on-surface-variant font-bold uppercase">Backend</text>
            <text fontSize="5" textAnchor="middle" x="70" y="98" className="fill-on-surface-variant font-bold uppercase">Frontend</text>
            <text fontSize="5" textAnchor="middle" x="30" y="98" className="fill-on-surface-variant font-bold uppercase">Database</text>
            <text fontSize="5" textAnchor="end" x="4" y="42" className="fill-on-surface-variant font-bold uppercase">Sys Design</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
