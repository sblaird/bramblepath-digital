"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight text-foreground">
          Bramblepath<span className="text-accent">Digital</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
            About
          </a>
          <a href="#projects" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="flex flex-col gap-4 border-t border-border bg-white px-6 py-6 md:hidden">
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-muted hover:text-foreground">
            About
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-muted hover:text-foreground">
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-muted hover:text-foreground">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
