"use client";
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Clean up any stray cursor elements (e.g. from hot reloads)
    const existingDots = document.querySelectorAll(".cursor-dot");
    const existingRings = document.querySelectorAll(".cursor-ring");
    existingDots.forEach((el) => el.remove());
    existingRings.forEach((el) => el.remove());

    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    const ring = document.createElement("div");
    ring.className = "cursor-ring";
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      
      const el = document.elementFromPoint(e.clientX, e.clientY);
      ring.className = "cursor-ring";
      if (el?.closest("[data-grab]")) {
        ring.classList.add("is-grab");
      } else if (el?.closest("a, button, [role=button], input, textarea, select")) {
        ring.classList.add("is-hover");
      }
    };

    let active = true;
    const raf = () => {
      if (!active) return;
      const dEl = document.querySelector(".cursor-dot") as HTMLElement;
      if (dEl) {
        const tx = parseFloat(dEl.style.left) || 0;
        const ty = parseFloat(dEl.style.top) || 0;
        rx += (tx - rx) * 0.13;
        ry += (ty - ry) * 0.13;
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
      }
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    document.addEventListener("mousemove", onMove);

    return () => {
      active = false;
      document.removeEventListener("mousemove", onMove);
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
}
