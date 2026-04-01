import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-linen border-t border-rule py-12">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <Link
              href="/"
              className="font-sans text-sm font-medium tracking-[-0.02em] uppercase text-ink hover:text-navy transition-colors"
            >
              MEZEN
            </Link>
            <p className="text-slate text-xs mt-1.5 tracking-[0.04em]">
              Operators, not advisors.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {[
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Work with us" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-slate hover:text-ink text-xs font-medium tracking-[0.06em] uppercase transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-rule">
          <p className="text-slate text-xs">
            © {new Date().getFullYear()} Mezen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
