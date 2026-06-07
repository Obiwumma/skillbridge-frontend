"use client";
import React, { useState } from "react";

export default function DashboardHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="flex justify-between items-center py-6 px-10 border-b border-[#3B4D28]/10 bg-[#FAF9F3] relative z-20">
      {/* Title & Badge */}
      <div className="flex items-center gap-4">
        <h1 className="font-headline-md text-3xl font-black text-[#1F3500] tracking-tight">
          Active Odysseys
        </h1>
        {/* Washi-Tape Mentees Badge */}
        <div className="washi-tape bg-[#F6BE39] text-[#1F3500] text-[10px] font-bold font-label-caps tracking-widest px-3 py-1 rotate-1 shadow-sm select-none">
          12 Mentees
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-6">
        {/* Interactive Search Bar */}
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#51643D] text-lg select-none">
            search
          </span>
          <input
            type="text"
            placeholder="Search Mentees..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-48 focus:w-80 transition-all duration-300 pl-10 pr-4 py-2 border-2 border-[#1F3500] bg-white rounded-lg text-sm text-[#1F3500] placeholder-[#51643D]/60 outline-none shadow-sm focus:shadow-md font-medium"
          />
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-4">
          {/* Fire Streak Icon */}
          <button className="relative w-10 h-10 rounded-xl hover:bg-[#D4EAB8]/30 flex items-center justify-center text-[#51643D] hover:text-[#9B433C] transition-colors group">
            <span className="material-symbols-outlined text-xl select-none group-hover:scale-105 transition-transform">
              local_fire_department
            </span>
          </button>

          {/* Notifications Icon with Red Dot */}
          <button className="relative w-10 h-10 rounded-xl hover:bg-[#D4EAB8]/30 flex items-center justify-center text-[#51643D] hover:text-[#1F3500] transition-colors group">
            <span className="material-symbols-outlined text-xl select-none group-hover:scale-105 transition-transform">
              notifications
            </span>
            {/* Notification Indicator Dot */}
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-[#9B433C] border border-[#FAF9F3] rounded-full"></span>
          </button>

          {/* Account Profile Circle Icon */}
          <button className="relative w-10 h-10 rounded-xl hover:bg-[#D4EAB8]/30 flex items-center justify-center text-[#51643D] hover:text-[#1F3500] transition-colors group">
            <span className="material-symbols-outlined text-xl select-none group-hover:scale-105 transition-transform">
              account_circle
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
