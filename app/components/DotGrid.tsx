"use client";
import { useEffect } from "react";

export default function DotGrid() {
  useEffect(() => {
    const root = document.documentElement;

    const onMove = (e: MouseEvent) => {
      root.style.setProperty("--mouse-x", `${e.clientX}px`);
      root.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    const onLeave = () => {
      root.style.setProperty("--mouse-x", "-9999px");
      root.style.setProperty("--mouse-y", "-9999px");
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <div aria-hidden="true" className="dot-grid" />;
}
