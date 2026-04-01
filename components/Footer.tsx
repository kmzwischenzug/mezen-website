import Link from "next/link";

// TODO: Update footer copy and links from CMO (MEZA-29)

export function Footer() {
  return (
    <footer className="border-t border-brand-800 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <Link
              href="/"
              className="text-brand-50 font-serif text-lg font-medium tracking-tight hover:text-accent transition-colors"
            >
              Mezen
            </Link>
            <p className="text-brand-500 text-sm mt-1">
              {/* TODO: CMO tagline */}
              B2B Revenue Consulting
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {[
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-brand-400 hover:text-brand-100 text-sm transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-brand-600 text-xs">
            © {new Date().getFullYear()} Mezen. All rights reserved.
          </p>
          {/* TODO: Add privacy policy / ToS links when available */}
        </div>
      </div>
    </footer>
  );
}
