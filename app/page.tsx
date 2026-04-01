import type { Metadata } from "next";
import Link from "next/link";

// TODO: Replace all copy with CMO-approved text from MEZA-29
// TODO: Replace layout/design with Designer specs from MEZA-30

export const metadata: Metadata = {
  title: "Mezen — B2B Revenue Growth Consulting",
  description:
    "Mezen helps growing B2B companies accelerate revenue, improve margins, and make better strategic decisions.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center border-b border-brand-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="max-w-3xl">
            {/* TODO: CMO headline */}
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-6">
              B2B Revenue Consulting
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-50 leading-tight text-balance mb-8">
              {/* TODO: Replace with CMO headline */}
              We work alongside founders to fix revenue problems.
            </h1>
            <p className="text-lg text-brand-300 max-w-2xl mb-10 leading-relaxed">
              {/* TODO: Replace with CMO subheadline */}
              Mezen partners with B2B founders under $10M to diagnose what is
              stalling growth and execute the fix — alongside your team, not
              just in a slide deck.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* TODO: CTA copy from CMO */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-brand-950 font-semibold rounded-sm hover:bg-accent-dark transition-colors"
              >
                Talk to us
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-brand-600 text-brand-200 font-medium rounded-sm hover:border-brand-400 hover:text-brand-50 transition-colors"
              >
                Our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof / Credibility bar */}
      {/* TODO: Add credibility elements from CMO (MEZA-29) */}

      {/* Services overview */}
      <section className="py-24 border-b border-brand-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              What we do
            </p>
            {/* TODO: Section headline from CMO */}
            <h2 className="text-3xl sm:text-4xl font-serif text-brand-50 max-w-2xl text-balance">
              Revenue problems have predictable causes. We know where to look.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* TODO: Replace service cards with CMO copy + Designer layout */}
            {SERVICES_PLACEHOLDER.map((service) => (
              <div
                key={service.title}
                className="p-8 border border-brand-800 hover:border-brand-600 transition-colors"
              >
                <h3 className="text-lg font-semibold text-brand-50 mb-3">
                  {service.title}
                </h3>
                <p className="text-brand-300 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/services"
              className="text-accent hover:text-accent-light font-medium text-sm inline-flex items-center gap-2 transition-colors"
            >
              See all services →
            </Link>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 border-b border-brand-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
                How we work
              </p>
              {/* TODO: Replace with CMO copy */}
              <h2 className="text-3xl sm:text-4xl font-serif text-brand-50 mb-6 text-balance">
                We complete work alongside you, not just advise on it.
              </h2>
              <p className="text-brand-300 leading-relaxed mb-6">
                {/* TODO: CMO body copy */}
                Most consultants hand you a framework and leave. We stay in the
                room — running diagnostics, building playbooks, and executing
                alongside your team until the revenue number moves.
              </p>
              <Link
                href="/about"
                className="text-accent hover:text-accent-light font-medium text-sm inline-flex items-center gap-2 transition-colors"
              >
                About Mezen →
              </Link>
            </div>
            {/* TODO: Replace with Designer-specified visual element */}
            <div className="h-80 bg-brand-900 border border-brand-800 flex items-center justify-center">
              <span className="text-brand-600 text-sm">
                [Designer visual placeholder]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          {/* TODO: CTA section from CMO */}
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-50 mb-6 text-balance">
            Ready to diagnose what is stalling your revenue?
          </h2>
          <p className="text-brand-300 max-w-xl mx-auto mb-10">
            Start with the Revenue Scorecard — free, takes 10 minutes, gives
            you a scored view of your GTM.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-accent text-brand-950 font-semibold rounded-sm hover:bg-accent-dark transition-colors"
          >
            Get started
          </Link>
        </div>
      </section>
    </>
  );
}

// TODO: Replace with real service data from CMO copy brief (MEZA-29)
const SERVICES_PLACEHOLDER = [
  {
    title: "Revenue Diagnostic",
    description:
      "A structured deep-dive into your GTM — market, pipeline, messaging, offer — to surface what is blocking revenue growth.",
  },
  {
    title: "Revenue Scorecard",
    description:
      "A 15-question diagnostic that benchmarks your GTM across five dimensions and prioritises where to focus first.",
  },
  {
    title: "Revenue Engine Build",
    description:
      "We work inside your team to build and execute the pipeline, messaging, and sales process changes the diagnostic surfaces.",
  },
];
