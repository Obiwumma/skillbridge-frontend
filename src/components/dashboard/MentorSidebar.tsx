"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Overview", href: "/mentor/dashboard", icon: "analytics" },
  { name: "Mentees", href: "#mentees", icon: "group" },
  { name: "Messages", href: "#messages", icon: "mail" },
  { name: "Settings", href: "#settings", icon: "settings" },
];

export default function MentorSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-[#F9F8F2] border-r border-[#3B4D28]/20 flex flex-col justify-between p-6 z-30 font-sans">
      {/* Top Branding & Navigation */}
      <div className="flex flex-col gap-10">
        {/* Brand Logo */}
        <div className="flex flex-col">
          <Link href="/" className="font-headline-md text-2xl font-black text-[#1F3500] hover:opacity-90 transition-opacity">
            SkillBridge
          </Link>
          <span className="text-[10px] font-bold tracking-widest text-[#51643D] uppercase mt-0.5">
            Career Readiness
          </span>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === "/mentor/dashboard" && pathname.startsWith("/mentor/chat")) ||
              (item.href !== "/mentor/dashboard" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#D4EAB8]/40 text-[#1F3500] font-bold shadow-[2px_2px_0px_#1F3500] border border-[#1F3500]"
                    : "text-[#51643D] hover:text-[#1F3500] hover:bg-[#D4EAB8]/20"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-xl transition-colors ${
                    isActive ? "text-[#1F3500] font-bold" : "text-[#51643D] group-hover:text-[#1F3500]"
                  }`}
                  style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                >
                  {item.icon}
                </span>
                <span className="text-sm tracking-wide">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Status Card & Profile */}
      <div className="flex flex-col gap-6">
        {/* Mentor Status Card */}
        <div className="bg-[#D4EAB8]/50 border border-[#3B4D28]/20 rounded-xl p-5 shadow-sm relative overflow-hidden flex flex-col gap-3">
          <div className="flex flex-col gap-1 z-10">
            <span className="font-label-caps text-[9px] font-bold tracking-widest text-[#51643D] uppercase">
              MENTOR STATUS
            </span>
            <p className="font-headline-md text-[#1F3500] text-sm font-black leading-snug">
              You have 3 new review requests
            </p>
          </div>

          <button className="stamp-button bg-[#9B433C] text-white py-2.5 px-4 text-center text-[10px] font-bold font-label-caps tracking-widest rounded-lg z-10 shadow-sm hover:opacity-95 active:scale-98 transition-transform">
            REVIEW NOW
          </button>

          {/* Plant overlay shadow in card */}
          <span
            className="material-symbols-outlined absolute -right-4 -bottom-6 text-[#3B4D28]/5 text-7xl select-none pointer-events-none"
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            eco
          </span>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3.5 pt-4 border-t border-[#3B4D28]/10">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDvGLoWsMRAb9gknt3Uf-0qaQfgNRNpAe-wpr3ZrSwYQz44wWEI9NkjVnkro4c-oSy8VL3o2BGj9TzPJ4l6ltwEyn1SC0HbtC7HalUuOOMK38jVNwxBjjXbqqsTCDCTqcYMTRRZGax2c4lVBgkKCX6bYghPdcrkbjhgWg9b-xZfQmX4wnsRISB7Lks3hWtWNdk9ydfERqvFzDOG9fz8YPtlat8vb6DRyAebzODgeEyupFbdgDEC-LlVIDtTF1a04wjxwGtXVpDGxi-"
            alt="Marcus Thorne Profile"
            className="w-12 h-12 rounded-full object-cover border border-[#3B4D28]/20 shadow-sm"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#1F3500]">Marcus Thorne</span>
            <span className="text-[10px] font-bold text-[#51643D] tracking-wider uppercase">
              Senior Architect
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
