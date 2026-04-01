"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-800 bg-brand-950/90 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo / Wordmark */}
        <Link
          href="/"
          className="text-brand-50 font-serif text-xl font-medium tracking-tight hover:text-accent transition-colors"
          onClick={() => setOpen(false)}
        >
          {/* TODO: Replace with Designer-specified wordmark/logo asset */}
          Mezen
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === href
                    ? "text-brand-50"
                    : "text-brand-400 hover:text-brand-100"
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
            className="inline-flex items-center justify-center px-5 py-2 bg-accent text-brand-950 font-semibold text-sm rounded-sm hover:bg-accent-dark transition-colors"
          >
            {/* TODO: CTA copy from CMO */}
            Talk to us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-brand-300 hover:text-brand-50 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-brand-800 bg-brand-950 px-6 py-6 space-y-4">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={cn(
                "block text-base font-medium py-1 transition-colors",
                pathname === href ? "text-brand-50" : "text-brand-400"
              )}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center px-5 py-3 bg-accent text-brand-950 font-semibold text-sm rounded-sm hover:bg-accent-dark transition-colors"
          >
            Talk to us
          </Link>
        </div>
      )}
    </header>
  );
}
