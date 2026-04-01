"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-cream transition-all duration-150",
        scrolled ? "border-b border-rule" : "border-b border-transparent"
      )}
    >
      <nav className="max-w-content mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-sans text-sm font-medium tracking-[0.1em] uppercase text-ink hover:text-navy transition-colors"
        >
          MEZEN
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "text-xs font-medium tracking-[0.06em] uppercase transition-colors",
                  pathname === href
                    ? "text-ink"
                    : "text-slate hover:text-ink"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="text-xs font-medium tracking-[0.06em] uppercase text-navy hover:text-ink underline underline-offset-4 decoration-navy/40 transition-colors"
          >
            Work with us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-ink p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-rule bg-cream px-6 py-8 space-y-6">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={cn(
                "block text-xs font-medium tracking-[0.06em] uppercase",
                pathname === href ? "text-ink" : "text-slate"
              )}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block text-xs font-medium tracking-[0.06em] uppercase text-navy underline underline-offset-4"
          >
            Work with us
          </Link>
        </div>
      )}
    </header>
  );
}
