import RoadmapCanvas from "@/components/dashboard/RoadmapCanvas";
import LessonPanel from "@/components/dashboard/LessonPanel";

export default function RoadmapPage() {
  return (
    /* Right panel is 420px fixed, so offset main content */
    <div className="mr-[420px] min-h-screen">
      {/* Floating header */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-md px-12 py-6 flex justify-between items-center border-b border-outline/10">
        <div className="relative w-[360px]">
          <input
            className="w-full bg-white border-2 border-primary rounded-2xl px-12 py-3.5 font-body-md focus:ring-4 focus:ring-primary-fixed outline-none brutal-shadow-sm transition-all"
            placeholder="Search lessons, nodes or tools..."
            type="text"
          />
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">manage_search</span>
        </div>
        <div className="flex gap-3">
          {["notifications", "tune"].map((icon) => (
            <button key={icon} className="w-12 h-12 rounded-2xl border-2 border-primary flex items-center justify-center bg-white hover:bg-secondary-container transition-all hover:-translate-y-1 brutal-shadow-sm active:translate-y-1 active:shadow-none">
              <span className="material-symbols-outlined text-primary">{icon}</span>
            </button>
          ))}
        </div>
      </header>

      {/* Canvas */}
      <section className="flex-1 px-16 pt-16 pb-32 flex flex-col items-center">
        <div className="w-full max-w-3xl mb-20 text-center">
          <span className="font-label-caps text-primary bg-primary-fixed border-2 border-primary px-4 py-1.5 rounded-full mb-6 inline-block text-[11px]">
            FULL-STACK MASTERY PATH
          </span>
          <h2 className="font-headline-xl text-5xl text-primary leading-tight mt-4">Your Learning Odyssey</h2>
          <p className="font-body-lg text-on-surface-variant mt-4 max-w-xl mx-auto">
            A graceful journey through the peaks of software architecture and modern web engineering.
          </p>
        </div>
        <RoadmapCanvas />
      </section>

      <LessonPanel />
    </div>
  );
}
