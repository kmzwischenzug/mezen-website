import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three areas. One standard: we do the work, not just the thinking.",
};

const SERVICES = [
  {
    title: "Revenue Growth",
    description:
      "Pipeline conversion, pricing architecture, channel strategy. We identify why revenue is stuck and build the plan to unstick it — then implement it alongside you. No deliverable is finished until the number moves.",
    deliverables: [
      "Revenue diagnostic",
      "Channel prioritisation framework",
      "Pricing audit and recommendations",
      "90-day growth plan with clear ownership",
    ],
  },
  {
    title: "Margin Improvement",
    description:
      "Unit economics review, cost structure analysis, operational efficiency implementation. We find where margin is leaking and close the gap. The work is done in your P&L, not in a slide deck.",
    deliverables: [
      "Unit economics model",
      "Margin improvement roadmap",
      "Operational process changes implemented",
      "Before/after measurement framework",
    ],
  },
  {
    title: "Strategic Decisions",
    description:
      "Market entry, build/buy/partner, org design for growth. These are the decisions that either compound well or quietly constrain everything downstream. We bring cross-sector B2B pattern recognition to your highest-stakes calls — so you decide with real context, not just instinct.",
    deliverables: [
      "Decision brief with scenario analysis",
      "Recommended path with rationale",
      "Implementation sequencing",
      "Risk and dependency map",
    ],
  },
];

const ENGAGEMENT_STEPS = [
  {
    num: "01",
    title: "Discovery",
    time: "Weeks 1–2",
    desc: "We learn your business — revenue model, team, market context, and what you've already tried.",
  },
  {
    num: "02",
    title: "Diagnosis",
    time: "Weeks 3–4",
    desc: "We identify the actual problem. Not the presenting symptom — the root cause driving the revenue gap.",
  },
  {
    num: "03",
    title: "Work",
    time: "Weeks 4–12+",
    desc: "We execute alongside you. Strategy without implementation is just advice.",
  },
  {
    num: "04",
    title: "Results",
    time: null,
    desc: "Measurable outcomes, documented learnings, and a business that runs better than when we arrived.",
  },
];

const DELIVERABLES = [
  "A diagnosis document that names the actual problem",
  "A 90-day action plan with clear ownership",
  "Hands-on implementation from a practitioner, not a project manager",
  "Weekly check-ins and transparent progress tracking",
  "A founder who understands what changed and why",
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-cream py-16 lg:py-[120px] border-b border-rule">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <h1 className="font-serif font-bold text-ink leading-[1.05] text-[40px] md:text-[60px] lg:text-[72px] max-w-[800px] mb-6 text-balance">
            What We Do
          </h1>
          <p className="text-slate leading-[1.65] text-lg max-w-[560px]">
            Three areas. One standard: we do the work, not just the thinking.
          </p>
        </div>
      </section>

      {/* Three service areas */}
      <section className="bg-cream">
        {SERVICES.map((service, i) => (
          <div
            key={service.title}
            className="border-b border-rule py-16 lg:py-[120px]"
          >
            <div className="max-w-content mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-7">
                  <p className="font-sans font-medium text-xs tracking-[0.1em] uppercase text-slate mb-4">
                    0{i + 1}
                  </p>
                  <h2 className="font-serif font-semibold text-ink text-[30px] md:text-[44px] leading-[1.15] mb-6">
                    {service.title}
                  </h2>
                  <p className="text-slate leading-[1.65] text-base mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-3 text-sm text-slate"
                      >
                        <span className="text-gold mt-0.5 shrink-0">—</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* How we engage */}
      <section className="bg-linen py-16 lg:py-[120px] border-b border-rule">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <h2 className="font-serif font-semibold text-ink text-[30px] md:text-[44px] leading-[1.15] mb-12">
            How we engage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ENGAGEMENT_STEPS.map((step) => (
              <div key={step.num}>
                <div className="w-8 h-px bg-gold mb-4" />
                <p className="font-sans font-medium text-xs tracking-[0.1em] uppercase text-slate mb-1">
                  {step.num}
                </p>
                <h3 className="font-sans font-semibold text-ink text-[18px] leading-[1.3] mb-1">
                  {step.title}
                </h3>
                {step.time && (
                  <p className="font-sans text-xs text-slate tracking-[0.04em] mb-2">
                    {step.time}
                  </p>
                )}
                <p className="text-slate leading-[1.65] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-cream py-16 lg:py-[120px] border-b border-rule">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2 className="font-serif font-semibold text-ink text-[30px] md:text-[44px] leading-[1.15]">
                What you get
              </h2>
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-4">
                {DELIVERABLES.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-base">
                    <span className="text-gold mt-0.5 shrink-0">—</span>
                    <span className="text-slate leading-[1.65]">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA closer */}
      <section className="bg-navy py-16 lg:py-[120px]">
        <div className="max-w-content mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif font-semibold text-linen text-[30px] md:text-[44px] leading-[1.15] mb-8 max-w-[640px] mx-auto text-balance">
            If your revenue isn&apos;t moving the way it should, let&apos;s find out
            why.
          </h2>
          <Link
            href="/contact"
            className="text-linen text-xs font-medium tracking-[0.08em] uppercase hover:opacity-70 transition-opacity underline underline-offset-4 decoration-linen/40"
          >
            Apply to work with us →
          </Link>
        </div>
      </section>
    </>
  );
}
