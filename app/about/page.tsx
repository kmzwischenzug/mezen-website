import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mezen was built on a simple observation: B2B founders don't have a strategy problem. They have a revenue problem.",
};

const APPROACH_PARAGRAPHS = [
  "We use a diagnostic framework called MEZA — Market, Problem-Fit, Reach, Message, Offer — to identify exactly where in the revenue system the problem lives. Most founders who come to us have already tried the obvious fixes. MEZA helps us find the non-obvious ones.",
  "We work alongside founders, not above them. That means you see our work in progress, push back on our thinking, and leave the engagement understanding not just what changed — but why, and how to repeat it. We're not interested in creating dependency.",
  "We take a small number of engagements at once. This is a constraint we've chosen, because the quality of attention that produces results doesn't scale the way a slide deck does.",
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

export default function AboutPage() {
  return (
    <>
      {/* Opening statement */}
      <section className="bg-cream py-16 lg:py-[120px] border-b border-rule">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="max-w-copy">
            <p className="font-serif text-ink text-[24px] md:text-[28px] leading-[1.5] text-balance">
              Mezen was built on a simple observation: B2B founders don&apos;t
              have a strategy problem. They have a revenue problem, and the
              consulting industry keeps selling them strategy. We built Mezen to
              do the work that actually moves the number — not the work that
              produces the most impressive output.
            </p>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="bg-cream py-16 lg:py-[120px] border-b border-rule">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <h2 className="font-sans font-semibold text-xs tracking-[0.1em] uppercase text-slate pt-1">
                Our approach
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6">
              {APPROACH_PARAGRAPHS.map((para, i) => (
                <p
                  key={i}
                  className="text-slate leading-[1.75] text-base max-w-[620px]"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-linen py-16 lg:py-[120px] border-b border-rule">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <h2 className="font-serif font-semibold text-ink text-[30px] md:text-[44px] leading-[1.15] mb-12">
            Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder team card — founder input required for names/bios/photos */}
            <div className="bg-cream border border-rule p-8" style={{ borderRadius: "2px" }}>
              <div
                className="w-16 h-16 bg-linen border border-rule flex items-center justify-center mb-6"
                style={{ borderRadius: "2px" }}
              >
                <span className="font-sans font-medium text-slate text-lg">M</span>
              </div>
              <p className="font-sans font-semibold text-ink text-base mb-1">
                [Founder name]
              </p>
              <p className="font-sans text-xs text-slate tracking-[0.04em] mb-4">
                Co-founder &amp; Partner
              </p>
              <p className="text-slate leading-[1.65] text-sm">
                Founder bio to be provided. Spent years inside growth-stage B2B
                companies navigating the same revenue problems Mezen solves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why founders work with us */}
      <section className="bg-cream py-16 lg:py-[120px] border-b border-rule">
        <div className="max-w-content mx-auto px-6 lg:px-12">
          <h2 className="font-serif font-semibold text-ink text-[30px] md:text-[44px] leading-[1.15] mb-12">
            Why founders work with us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-copy">
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
