import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/layout/CustomCursor";

export const metadata: Metadata = {
  title: "SkillBridge — Bridge the gap between your degree and your first tech job",
  description: "Africa's #1 AI-powered employability platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@700&family=Literata:opsz,wght@7..72,700;7..72,800;7..72,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface-container-low text-on-surface font-body-md overflow-x-hidden selection:bg-primary-container selection:text-on-primary">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
