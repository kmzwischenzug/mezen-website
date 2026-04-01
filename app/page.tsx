import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mezen — Operators, not advisors.",
  description:
    "Mezen works with B2B founders in crypto and fintech to diagnose the actual source of their revenue problems — then fixes them.",
};

const PILLARS = [
  {
    title: "Revenue Growth",
    body: "Most revenue problems aren't about volume — they're about fit. We diagnose why pipeline isn't converting, whether pricing is leaving margin on the table, and which channels are worth doubling down on. You leave with a clear picture and a sequenced plan, not a framework.",
  },
  {
    title: "Margin Improvement",
    body: "Healthy revenue with deteriorating margins is a quiet crisis. We map your unit economics, identify the cost structure decisions dragging you down, and implement the changes that actually move the number. This is not a benchmarking exercise.",
  },
  {
    title: "Strategic Decisions",
    body: "Market entry, build vs. buy, org design — these decisions compound for years. We bring pattern recognition from having navigated these choices across B2B businesses, so you make them with real context, not just conviction.",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    num: "01",
    title: "Diagnose",
    desc: "We spend the first two weeks mapping your actual revenue problem, not the symptoms you brought to us.",
  },
  {
    num: "02",
    title: "Design",
    desc: "We build a specific, sequenced plan grounded in your constraints — market, team, and runway.",
  },
  {
    num: "03",
    title: "Execute",
    desc: "We do the work alongside you. Implementation is not optional.",
  },
];

const PROOF_POINTS = [
  {
    bold: "We do the work.",
    body: "Not decks and handoffs. We sit inside your problem until it's solved.",
  },
  {
    bold: "We diagnose first.",
    body: "We don't sell a solution before we understand the problem. Every engagement starts with diagnosis, not a proposal.",
  },
  {
    bold: "We share what we learn.",
    body: "You should understand why your revenue problem exists — not just watch it get fixed. We document everything.",
  },
  {
    bold: "We measure outcomes.",
    body: "We care about the number, not the narrative. Results are the only deliverable that matters.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="max-w-content mx-auto px-6 lg:px-12 pt-[180px] pb-[120px]">
          <h1 className="font-serif font-bold text-ink leading-[1.05] text-[40px] md:text-[64px] lg:text-[76px] max-w-[900px] mb-8 text-balance">
            Revenue problems don&apos;t need more advice. They need the work
            done.
          </h1>
          <p className="text-slate leading-[1.65] text-lg max-w-[640px] mb-10">
            Mezen works with B2B founders in crypto and fintech to diagnose the
            actual source of their revenue problems — then fixes them. We sit
            inside your business until the number moves.
          </p>
          <Link
            href="/contact"
            className="text-navy font-medium text-sm tracking-[0.04em] hover:text-ink transition-colors underline underline-offset-4 decoration-navy/40"
          >
            Work with us →
          </Link>
        </div>
      </section>

      {/* Focus strip */}
      <section className="bg-linen py-12">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <p className="text-center text-xs font-medium tracking-[0.12em] uppercase text-slate">
            We work alongside B2B founders in crypto and fintech — diagnosing
            revenue problems and doing the work to fix them.
          </p>
        </div>
      </section>

      {/* Three pillars */}
      <section className="bg-cream py-16 lg:py-[120px] border-t border-rule">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {PILLARS.map((pillar) => (
              <div key={pillar.title}>
                <h3 className="font-sans font-semibold text-ink text-[22px] leading-[1.3] mb-4">
                  {pillar.title}
                </h3>
                <p className="text-slate leading-[1.65] text-base">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-cream py-16 lg:py-[120px] border-t border-rule">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: operator framing */}
            <div>
              <h2 className="font-serif font-semibold text-ink text-[30px] md:text-[44px] leading-[1.15] mb-6">
                How it works
              </h2>
              <p className="text-slate leading-[1.65] text-base">
                Most consultants give you their findings and leave. We don&apos;t.
                Mezen works alongside the founder — inside the problem, not above
                it — until the work is done. We&apos;re operators, not advisors,
                and that distinction shows up in how we engage.
              </p>
            </div>

            {/* Right: numbered steps */}
            <div className="space-y-8">
              {HOW_IT_WORKS_STEPS.map((step) => (
                <div key={step.num}>
                  <div className="w-8 h-px bg-gold mb-4" />
                  <p className="font-sans font-medium text-xs tracking-[0.1em] uppercase text-slate mb-1">
                    {step.num}
                  </p>
                  <h3 className="font-sans font-semibold text-ink text-[22px] leading-[1.3] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate leading-[1.65] text-base">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why founders work with us */}
      <section className="bg-linen py-16 lg:py-[120px] border-t border-rule">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <h2 className="font-serif font-semibold text-ink text-[30px] md:text-[44px] leading-[1.15] mb-12">
            Why founders work with us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {PROOF_POINTS.map((point) => (
              <p key={point.bold} className="text-ink leading-[1.65] text-base">
                <strong className="font-semibold">{point.bold}</strong>{" "}
                <span className="text-slate">{point.body}</span>
              </p>
            ))}
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
