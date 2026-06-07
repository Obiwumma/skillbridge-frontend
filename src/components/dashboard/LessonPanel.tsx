"use client";
import Link from "next/link";

const TASKS = [
  { icon: "play_lesson",  title: "Conceptual Intro",    desc: "REST vs GraphQL fundamentals.", status: "done",   time: "15 MIN" },
  { icon: "code_blocks",  title: "REST API Hands-on",   desc: "Implement a secure CRUD controller with input validation.", status: "active", time: "45 MINS" },
  { icon: "terminal",     title: "Deployment Basics",   desc: "Pushing your local API to production.", status: "locked",  time: "30 MINS" },
];

export default function LessonPanel() {
  return (
    <section className="fixed right-0 top-0 h-full w-[420px] bg-white border-l-4 border-primary z-40 p-10 flex flex-col"
      style={{ boxShadow: "-6px 0px 0px 0px #344C11" }}>

      <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 pt-8 pb-8">
        {/* Header */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <span className="font-label-caps text-primary bg-primary-fixed/50 px-4 py-1.5 rounded-lg font-bold border border-primary/20 text-[10px]">
              CURRENT TASK
            </span>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-primary/20 text-xl">star</span>
                <span className="material-symbols-outlined text-primary/20 text-xl">star</span>
              </div>
              <span className="font-label-caps text-[10px] text-on-surface-variant">1/3 STARS</span>
            </div>
          </div>
          <h3 className="font-headline-md text-2xl text-primary leading-tight">
            Module 4: API Routing Architecture
          </h3>
          <p className="font-body-md text-on-surface-variant mt-3 leading-relaxed text-sm">
            Learn to design scalable, secure, and semantic API routes using modern middleware patterns.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex justify-between items-end mb-2">
            <span className="font-label-caps text-[11px] text-primary font-black">MODULE PROGRESS</span>
            <span className="font-label-caps text-[11px] text-primary font-black">25%</span>
          </div>
          <div className="w-full bg-surface-container rounded-full h-4 overflow-hidden border-2 border-primary">
            <div className="bg-primary-fixed-dim h-full w-[25%] border-r-2 border-primary" />
          </div>
        </div>

        {/* Task list */}
        <div className="space-y-5">
          {TASKS.map((task) => (
            <div
              key={task.title}
              className={`relative rounded-3xl p-6 transition-all
                ${task.status === "active"
                  ? "bg-white border-4 border-primary brutal-shadow-sm hover:-translate-y-1 cursor-pointer ring-4 ring-primary-fixed/30"
                  : task.status === "done"
                  ? "bg-surface-container-low border-2 border-primary/20 hover:border-primary/50 cursor-pointer"
                  : "bg-surface-container border-2 border-dashed border-outline-variant opacity-60"
                }`}
            >
              <div className="flex gap-5">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border-2
                  ${task.status === "active" ? "bg-primary-fixed text-primary border-primary"
                  : task.status === "done"   ? "bg-primary text-white border-primary brutal-shadow-sm"
                  : "bg-white border-outline-variant text-on-surface-variant"}`}
                >
                  <span className="material-symbols-outlined text-2xl">{task.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-button-text text-lg text-on-surface">{task.title}</h4>
                    {task.status === "done" && (
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    )}
                  </div>
                  <p className="font-body-md text-on-surface-variant text-sm mt-1">{task.desc}</p>
                  <span className="font-label-caps text-[10px] text-primary font-bold mt-3 inline-block uppercase">
                    {task.status === "done" ? `COMPLETED • ${task.time}` : task.status === "active" ? `ACTIVE • ${task.time}` : task.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-auto pt-6 border-t-2 border-primary/10">
        <Link
          href="/dashboard/ide"
          className="w-full py-5 rounded-2xl bg-primary text-white font-headline-md text-xl brutal-shadow-lg hover:translate-x-1 hover:translate-y-1 hover:shadow-sm active:translate-x-2 active:translate-y-2 active:shadow-none transition-all flex items-center justify-center gap-4"
        >
          Start Coding Now
          <span className="material-symbols-outlined text-2xl">arrow_forward_ios</span>
        </Link>
        <div className="flex justify-between items-center mt-4 font-label-caps text-[11px] text-on-surface-variant/80">
          <span>SESSION: 2 / 5</span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">schedule</span> 1h 15m left
          </span>
        </div>
      </div>
    </section>
  );
}
