"use client";

import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const isDark = saved ? saved === "dark" : prefersDark;
    setDark(isDark);
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light",
    );
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute(
      "data-theme",
      next ? "dark" : "light",
    );
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 bg-surface border-b border-border text-foreground">
      <a href="#" className="text-lg font-bold tracking-tight">
        Raphael Bessin
      </a>

      <ul className="flex space-x-6 text-sm font-medium">
        {["About", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-muted hover:text-foreground transition-colors duration-150"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <button
        onClick={toggleTheme}
        className="rounded-md p-2 text-muted hover:bg-surface-raised transition-colors duration-150"
        aria-label="Toggle theme"
      >
        {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </nav>
  );
}
