"use client";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import NotJustCodersSection from "@/components/sections/NotJustCodersSection";
import HideSeekSection from "@/components/sections/HideSeekSection";
import AuditSection from "@/components/sections/AuditSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import PartnersSection from "@/components/sections/PartnersSection";

export default function Home() {
  // Custom cursor
  useEffect(() => {
    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    const ring = document.createElement("div");
    ring.className = "cursor-ring";
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      dot.style.left = e.clientX + "px";
      dot.style.top  = e.clientY + "px";
      const el = document.elementFromPoint(e.clientX, e.clientY);
      ring.className = "cursor-ring";
      if (el?.closest("[data-grab]")) ring.classList.add("is-grab");
      else if (el?.closest("a,button,[role=button]")) ring.classList.add("is-hover");
    };
    const raf = () => {
      // ring lags behind
      const dEl = document.querySelector(".cursor-dot") as HTMLElement;
      if (dEl) {
        const tx = parseFloat(dEl.style.left) || 0;
        const ty = parseFloat(dEl.style.top)  || 0;
        rx += (tx - rx) * 0.13;
        ry += (ty - ry) * 0.13;
        ring.style.left = rx + "px";
        ring.style.top  = ry + "px";
      }
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    document.addEventListener("mousemove", onMove);
    return () => { document.removeEventListener("mousemove", onMove); dot.remove(); ring.remove(); };
  }, []);

  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.13, rootMargin: "0px 0px -50px 0px" });
    document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.stagger").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-section-gap max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <HeroSection />
        <StatsSection />
        <NotJustCodersSection />
        <HideSeekSection />
        <AuditSection />
        <RoadmapSection />
        <PartnersSection />
      </main>
      <Footer />
    </>
  );
}
