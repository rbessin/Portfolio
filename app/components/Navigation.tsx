"use client";

import { Sun, Moon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = ["About", "Education", "Skills", "Projects", "Experience"];

export default function Navigation() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.05, rootMargin: "-64px 0px -50% 0px" },
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.toLowerCase());
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
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
    <>
      <nav className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-6 bg-surface border-b border-border text-foreground z-50">
        <a href="#about" className="text-lg font-bold tracking-tight hover:text-accent transition-colors duration-150">Raphaël Bessin</a>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <li key={item}>
                <a
                  href={`#${id}`}
                  className={`relative pb-0.5 transition-colors duration-150 ${
                    active === id
                      ? "text-foreground after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1">
          <button
            onClick={toggleTheme}
            className="rounded-md p-2 text-muted hover:bg-surface-raised transition-colors duration-150"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden rounded-md p-2 text-muted hover:bg-surface-raised transition-colors duration-150"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-surface border-b border-border z-40 overflow-hidden transition-all duration-200 ease-out ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium transition-colors duration-150 ${
                  active === id
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
