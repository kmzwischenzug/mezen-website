import type { Metadata } from "next";
import Link from "next/link";

// TODO: Replace all copy with CMO-approved text from MEZA-29
// TODO: Update layout per Designer specs from MEZA-30

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mezen offers Revenue Diagnostic, Revenue Scorecard, and Revenue Engine Build services for B2B founders.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-24 border-b border-brand-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Services
          </p>
          {/* TODO: Replace with CMO headline */}
          <h1 className="text-4xl sm:text-5xl font-serif text-brand-50 max-w-2xl text-balance">
            Structured work, not open-ended advice.
          </h1>
        </div>
      </section>

      {/* Services list */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {SERVICES.map((service, i) => (
              <div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-brand-800 last:border-0 last:pb-0"
              >
                <div>
                  <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
                    0{i + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-brand-50 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-brand-300 leading-relaxed mb-6">
                    {/* TODO: Replace with CMO copy */}
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-brand-400">
                        <span className="text-accent mt-0.5">—</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-brand-400 text-sm">
                    {/* TODO: Pricing from CMO */}
                    <span className="text-brand-200 font-medium">{service.price}</span>
                  </div>
                </div>
                {/* TODO: Replace with Designer-specified visual */}
                <div className="h-64 lg:h-auto bg-brand-900 border border-brand-800 flex items-center justify-center rounded-sm">
                  <span className="text-brand-600 text-sm">[Designer visual]</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-accent text-brand-950 font-semibold rounded-sm hover:bg-accent-dark transition-colors"
            >
              {/* TODO: CTA copy from CMO */}
              Talk to us about your situation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// TODO: Replace with real service copy from MEZA-29
const SERVICES = [
  {
    title: "Revenue Scorecard",
    description:
      "A 15-question self-assessment that benchmarks your GTM across five dimensions: Market fit, Problem validation, Reach, Message clarity, and Offer strength. Takes 10 minutes. Free.",
    deliverables: [
      "Scored radar chart across 5 MEZA dimensions",
      "Prioritised recommendations",
      "Shareable results link",
      "Email delivery of your results",
    ],
    price: "Free",
  },
  {
    title: "Revenue Diagnostic",
    description:
      "A structured deep-dive into your GTM and revenue motion. We interview key stakeholders, audit your pipeline data, and synthesise a clear picture of what is blocking growth and in what order to fix it.",
    deliverables: [
      "Structured diagnostic report (5 dimensions)",
      "AI-assisted analysis grounded in your scorecard data",
      "Prioritised blocker list with recommended interventions",
      "30-day action roadmap",
    ],
    price: "$4,000",
  },
  {
    title: "Revenue Engine Build",
    description:
      "We work inside your team for 60–90 days to execute on the diagnostic findings. This is embedded delivery — not advisory. We build the pipeline, fix the messaging, and run the outbound motion with you.",
    deliverables: [
      "Embedded delivery partnership (60–90 days)",
      "Pipeline and outreach infrastructure",
      "Messaging and positioning updates",
      "Playbooks and handoff documentation",
    ],
    price: "Custom — contact us",
  },
];
