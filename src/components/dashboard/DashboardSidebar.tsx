"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/dashboard/overview",   icon: "psychology",       label: "AI Overview" },
  { href: "/dashboard/roadmap",    icon: "route",            label: "My Roadmap" },
  { href: "/dashboard/portfolio",  icon: "folder_shared",    label: "Portfolio" },
  { href: "/dashboard/matches",    icon: "handshake",        label: "Internship Matches" },
];

export default function DashboardSidebar() {
  const path = usePathname();

  return (
    <nav className="fixed left-0 top-0 h-full w-72 bg-surface/90 backdrop-blur-xl border-r-2 border-primary z-50 flex flex-col p-6"
      style={{ boxShadow: "6px 0px 0px 0px #344C11" }}>

      {/* Brand */}
      <div className="mb-10 px-2 pt-2">
        <Link href="/" className="font-headline-md text-2xl font-black text-primary hover:opacity-80 transition-opacity">
          SkillBridge
        </Link>
        <p className="font-label-caps text-[10px] text-on-surface-variant opacity-70 mt-1 tracking-widest uppercase">
          Student Dashboard
        </p>
        {/* Level badge */}
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed border-2 border-primary rounded-lg">
          <span className="font-label-caps text-[10px] text-primary">LVL 12</span>
          <div className="w-20 h-1.5 bg-white rounded-full overflow-hidden border border-primary/20">
            <div className="bg-primary h-full w-[65%]" />
          </div>
          <span className="font-label-caps text-[10px] text-primary">EXPLORER</span>
        </div>
      </div>

      {/* Nav links */}
      <div className="flex flex-col gap-2 flex-1">
        {NAV.map((item) => {
          const active = path.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 p-4 rounded-xl font-body-md transition-all group
                ${active
                  ? "text-primary font-bold bg-primary-container/5 border-2 border-primary brutal-shadow-sm translate-x-1"
                  : "text-on-surface-variant hover:bg-primary-container/10 hover:translate-x-2"
                }`}
            >
              <span
                className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform"
                style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* User profile */}
      <div className="mt-auto pt-6 border-t-2 border-primary/10 flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl border-2 border-primary bg-primary-fixed overflow-hidden brutal-shadow-sm flex-shrink-0 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-3xl">account_circle</span>
        </div>
        <div className="flex flex-col">
          <span className="font-body-md text-on-surface font-bold">Alex Rivera</span>
          <span className="font-label-caps text-[10px] text-primary font-bold tracking-widest">PREMIUM MEMBER</span>
        </div>
      </div>
    </nav>
  );
}
