"use client";
import { useEffect, useRef, useCallback } from "react";

type CursorMode = "default" | "hover" | "text" | "grab" | "pointer";

export function useCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  const setMode = useCallback((mode: CursorMode) => {
    const r = ringRef.current;
    if (!r) return;
    r.className = "cursor-ring";
    if (mode === "hover") r.classList.add("cursor-hover");
    if (mode === "text") r.classList.add("cursor-text");
    if (mode === "grab") r.classList.add("cursor-grab");
  }, []);

  useEffect(() => {
    const dot = document.createElement("div");
    dot.className = "cursor-dot";
    const ringEl = document.createElement("div");
    ringEl.className = "cursor-ring";
    document.body.appendChild(dot);
    document.body.appendChild(ringEl);
    dotRef.current = dot;
    ringRef.current = ringEl;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";

      // Detect element under cursor for mode
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (!el) return;
      const tag = el.tagName.toLowerCase();
      const isInteractive = ["a", "button", "select"].includes(tag) || el.closest("button, a, [role=button]");
      const isText = ["p", "span", "h1", "h2", "h3", "li"].includes(tag);
      const isDraggable = el.closest("[data-draggable]");

      if (isDraggable) setMode("grab");
      else if (isInteractive) setMode("hover");
      else if (isText) setMode("default");
      else setMode("default");
    };

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      ringEl.style.left = ring.current.x + "px";
      ringEl.style.top = ring.current.y + "px";
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    document.addEventListener("mousemove", onMove);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
      dot.remove();
      ringEl.remove();
    };
  }, [setMode]);

  return { setMode };
}
