"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface MenteeCard {
  id: string;
  name: string;
  avatar: string;
  module: string;
  progress: number; // 0 to 100
  statusText: string;
  statusType?: "normal" | "urgent" | "stuck" | "docs" | "viva";
  showUrgentBadge?: boolean;
  rightBadge?: string;
  rightIcon?: string;
  hasConfettiBg?: boolean;
  hasReviewBtn?: boolean;
}

const ONBOARDING_CARDS: MenteeCard[] = [
  {
    id: "1",
    name: "Julian Vance",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoXrgX3YZXkhb4HThUPHXCXDkrPYcbPuuROTI7-2QqJHEwUfs61wDbbPpJT5cWzFmXlrG00l4BsTt31omrHoBU7jZAgNTbgOmjsZu0K4a_NYmgXAIEHmRDwLIVBj6IDwS0cMRE7qSp1HW4PIZpAKH1CWMTE9iddbqHsXXyUQLAxYNv_RFHQzNmuVxf8kCnH-PPfabIUOcmjLHLwK_xCbGZy1P28p9BGyTHrz0sc7JcQWkjeaS7vYrh9ZuVMjjEqShPBTplU1q3gLm-",
    module: "Module 1: Systems Thinking",
    progress: 30,
    statusText: "NEXT SYNC: TOMORROW",
    statusType: "normal",
    rightIcon: "favorite", // clock/heart like icon
  },
  {
    id: "2",
    name: "Elena Rodriguez",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUc1MIH2cxIuBfnPCgY5qE2YMswZ8rJii8fIYPWdR5nW58fLEOoEvOD01RyJ6JbWje1__z8W3HkDPdyqOmqMy3I-KIbOcO6e-4kRWILe1Wvj0PYh06mfrLR_qEPcfga3oNSs0Ri7lIAN3qO3MX6ql-jDbM3E_uvDxGJjQ6NICuo07JPnnBtWZ5MBVISmjDyEaSj22QE6veIu-JJoV9Ek3mXocfdQ79ErSbQwAOtJf2yAXKWFE1ntpA0mGLUbcrRCKJVon-gTn6HehV",
    module: "Module 1: Branding Roots",
    progress: 45,
    statusText: "DOCS PENDING",
    statusType: "docs",
  },
];

const CORE_LEARNING_CARDS: MenteeCard[] = [
  {
    id: "3",
    name: "Liam Chen",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAGVFTlS3VG4dQG_YJMXTQ9dnPe397e54-ZpuEB0Xm3hL8uXpUJnFjWh-0NgP1-QpnpZCufsPKB5DryJCbV2OSgD1oRGtXI480MHUoQOPkMANsCWXs8gGYSCha0LERe8LWjHvt-tuADi_UdtqlXn3xP8zR1ejSmuHXHnPOUMpKsgN160PxPhA5gKDffGBKQM-DAh70rVxvJDzhlVoWHiApMr5zw_qBuDyI017_ReUu0pCMmEsLdQbCT5oNoBhOvLDEUQSy13abhiDa",
    module: "Module 3: API Security",
    progress: 60,
    statusText: "STUCK: 2 DAYS",
    statusType: "stuck",
    showUrgentBadge: true,
    rightBadge: "SB",
  },
  {
    id: "4",
    name: "Aisha Bwan",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAk5M3s0jwmkynOeflgYP0TUnvJqRK6GbNM-1CScNrHNNXzGzHALmCaL9iVcr8x4LkwWp-g1YFCChOu_tPTOQUCiQydycxcKhw4MNL6sXc5XPWp4Jty3b5PiLFaU4BwyWgXwL2_lb2CuLQzdNV8_jWC62joz0vcgcf8chowFagBHYCNmuWV1CsvDlJH0K3nqt8GxBbyOyZy-ij-7f61_e7M068A1EnGY4LbhzHTt7wprVGVjWbryfRbNljSCEjdRkkv_96TD4CgExHc",
    module: "Module 4: Global Logistics",
    progress: 82,
    statusText: "82% COMPLETE",
    statusType: "normal",
    rightIcon: "verified",
  },
];

const FINAL_PROJECT_CARDS: MenteeCard[] = [
  {
    id: "5",
    name: "Sam Walters",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ0H58j2ELJiD7agMdfI_epL2h2olgjJyCk1-O445du-WCWH6x5BgPBPkEKaXpRmW-6EnxrX3uUFCen3imjNTnPclORheYQBNCPdoQROKLHkyoLvZLRvU1C-3fzfg0MK0QIarhLZO6__HKUl7xMHKTkDxzB8bjFAVCno382Khv5S1L5AJJG0_jz9lhHJu6qv4XRdqr8EIklcSlCmimVNyKKEyxf_6oHCZd-kEQqK0gX2anpWFvKzMFZrmNMlt60LsViHg4Kk9ogOqR",
    module: "Thesis: Urban Resilience",
    progress: 95,
    statusText: "VIVA SCHEDULED",
    statusType: "viva",
    hasConfettiBg: true,
    hasReviewBtn: true,
  },
];

export default function KanbanBoard() {
  const router = useRouter();

  const renderCard = (card: MenteeCard) => {
    return (
      <motion.div
        key={card.id}
        onClick={() => router.push(`/mentor/chat/${card.id}`)}
        className="relative bg-[#FAF9F3] border-[1.5px] border-[#3B4D28]/20 p-5 rounded-xl paper-lift hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col gap-4 overflow-hidden cursor-pointer"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
          {/* Background party popper overlay decoration */}
          {card.hasConfettiBg && (
            <span className="material-symbols-outlined absolute -right-2 top-2 text-[#51643D]/5 text-6xl rotate-12 pointer-events-none select-none">
              celebration
            </span>
          )}

          {/* Card Header (Avatar & Options Button) */}
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 rounded-lg border-[1.5px] border-[#51643D] p-0.5 shadow-sm">
              <img
                src={card.avatar}
                alt={card.name}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
              className="text-[#51643D]/60 hover:text-[#1F3500] w-7 h-7 flex items-center justify-center rounded hover:bg-[#D4EAB8]/20 transition-colors"
            >
              <span className="material-symbols-outlined text-xl select-none">more_vert</span>
            </button>
          </div>

          {/* Mentee Details */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h3 className="font-headline-md text-[#1F3500] font-black text-base">{card.name}</h3>
              {card.showUrgentBadge && (
                <span className="bg-[#FAF9F3] border border-[#9B433C] text-[#9B433C] text-[8px] font-black font-label-caps tracking-widest px-1.5 py-0.5 rounded shadow-sm">
                  URGENT
                </span>
              )}
            </div>
            <p className="text-xs text-[#51643D] italic font-medium leading-tight">
              {card.module}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="h-1.5 bg-[#FAF9F3] border border-[#3B4D28]/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#1F3500] rounded-full"
              style={{ width: `${card.progress}%` }}
            ></div>
          </div>

          {/* Card Footer (Status Info) */}
          <div className="flex justify-between items-center pt-2.5 border-t border-[#3B4D28]/10">
            <span
              className={`font-label-caps text-[9px] font-bold tracking-wider ${
                card.statusType === "stuck"
                  ? "text-[#9B433C]"
                  : card.statusType === "docs"
                  ? "text-[#51643D]/70 font-semibold"
                  : "text-[#51643D]"
              }`}
            >
              {card.statusText}
            </span>

            {/* Right badge elements */}
            {card.hasReviewBtn && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
                className="stamp-button bg-[#9B433C] text-white py-1 px-3 text-[9px] font-bold font-label-caps tracking-widest rounded shadow-sm hover:opacity-95 active:scale-95 transition-transform"
              >
                REVIEW WORK
              </button>
            )}

            {card.rightBadge && (
              <span className="w-6 h-6 rounded-full bg-[#F6BE39] text-[#1F3500] border border-[#1F3500] text-[9px] font-black flex items-center justify-center select-none shadow-sm font-mono">
                {card.rightBadge}
              </span>
            )}

            {card.rightIcon && (
              <span
                className={`material-symbols-outlined text-sm font-bold ${
                  card.rightIcon === "favorite" ? "text-[#9B433C]/60" : "text-[#51643D]"
                }`}
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {card.rightIcon}
              </span>
            )}
          </div>
        </motion.div>
    );
  };

  return (
    <section className="flex-1 p-10 relative overflow-visible flex flex-col gap-8 min-h-0 bg-[#FAF9F3]">
      {/* 3 Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10">
        {/* Column 1: Onboarding */}
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center pb-2 border-b-2 border-[#1F3500] mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F6BE39]"></span>
              <h2 className="font-label-caps text-xs font-bold tracking-widest text-[#1F3500] uppercase">
                ONBOARDING
              </h2>
            </div>
            <span className="text-[10px] font-bold text-[#51643D] tracking-wide">04</span>
          </div>
          <div className="flex flex-col gap-6">
            {ONBOARDING_CARDS.map(renderCard)}
          </div>
        </div>

        {/* Column 2: Core Learning */}
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center pb-2 border-b-2 border-[#9B433C] mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9B433C]"></span>
              <h2 className="font-label-caps text-xs font-bold tracking-widest text-[#1F3500] uppercase">
                CORE LEARNING
              </h2>
            </div>
            <span className="text-[10px] font-bold text-[#51643D] tracking-wide">06</span>
          </div>
          <div className="flex flex-col gap-6">
            {CORE_LEARNING_CARDS.map(renderCard)}
          </div>
        </div>

        {/* Column 3: Final Project */}
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center pb-2 border-b-2 border-[#51643D] mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#51643D]"></span>
              <h2 className="font-label-caps text-xs font-bold tracking-widest text-[#1F3500] uppercase">
                FINAL PROJECT
              </h2>
            </div>
            <span className="text-[10px] font-bold text-[#51643D] tracking-wide">02</span>
          </div>
          <div className="flex flex-col gap-6">
            {FINAL_PROJECT_CARDS.map(renderCard)}
          </div>
        </div>
      </div>

      {/* Botanical Silhouette Background Illustration */}
      <div className="absolute right-12 bottom-6 opacity-10 text-[#3B4D28] pointer-events-none select-none z-0">
        <span
          className="material-symbols-outlined text-[180px]"
          style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}
        >
          eco
        </span>
      </div>

      {/* Floating Action Button */}
      <div className="fixed right-10 bottom-10 z-20">
        <button className="stamp-button bg-[#9B433C] text-white w-14 h-14 flex items-center justify-center rounded-xl text-3xl font-bold shadow-lg hover:scale-105 active:scale-95 transition-all">
          +
        </button>
      </div>
    </section>
  );
}
