"use client";
import React from "react";
import MentorSidebar from "@/components/dashboard/MentorSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import KanbanBoard from "@/components/dashboard/KanbanBoard";

export default function MentorDashboardPage() {
  return (
    <div className="min-h-screen flex bg-background relative overflow-hidden font-sans">
      {/* Fixed Left Sidebar */}
      <MentorSidebar />

      {/* Main Content Area */}
      <main className="ml-72 flex-1 flex flex-col min-h-screen relative z-10">
        {/* Header Section */}
        <DashboardHeader />

        {/* Kanban Board Section */}
        <KanbanBoard />
      </main>
    </div>
  );
}
