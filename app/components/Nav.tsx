"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import Logo from "./Logo";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    if (menuOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen, closeMenu]);

  return (
    <header className="sticky top-0 z-[1000] flex w-full flex-col bg-primary-white pt-4">
      <div className="container navbar">
        <Link href="/" className="group block shrink-0" aria-label="Autumn Munz - Home">
          <Logo className="h-[58px] w-[59px]" />
        </Link>

        {/* Desktop: horizontal links | Mobile: hamburger */}
        <div className="flex items-center gap-8">
          <div className="hidden min-[809px]:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-body-regular text-foreground-muted transition-colors duration-200 ease-out hover:text-accent-orange"
              >
                {link.label}
              </Link>
          ))}
          </div>

          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-foreground transition-colors duration-200 ease-out hover:bg-primary-black/5 min-[809px]:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-haspopup="menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 right-0 h-0.5 bg-current transition-all duration-300 ease-out ${
                  menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 right-0 h-0.5 -translate-y-1/2 bg-current transition-all duration-300 ease-out ${
                  menuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-0.5 bg-current transition-all duration-300 ease-out ${
                  menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0.5"
                }`}
              />
          </span>
        </button>
        </div>
      </div>

      {/* Mobile: vertical dropdown - inside container for alignment */}
      <div
        id="mobile-nav-menu"
        role="menu"
        aria-label="Mobile navigation"
        className={`container flex min-h-0 flex-col overflow-hidden transition-all duration-300 ease-out min-[809px]:hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 border-t border-primary-black-secondary/30 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              role="menuitem"
              onClick={closeMenu}
              className="py-3 text-body-regular text-foreground transition-colors duration-200 ease-out hover:text-accent-orange focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2 focus:ring-offset-primary-white rounded-md px-2 -mx-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
