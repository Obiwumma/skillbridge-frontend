import type { Metadata } from "next";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export const metadata: Metadata = {
  title: "SkillBridge | Student Dashboard",
  description: "Your AI-powered career intelligence hub.",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-on-surface antialiased">
      <DashboardSidebar />
      {/* All pages offset by sidebar width */}
      <div className="ml-72">
        {children}
      </div>
    </div>
  );
}
