import type { Metadata } from "next";
import Link from "next/link";

// TODO: Replace all copy with CMO-approved text from MEZA-29
// TODO: Update layout per Designer specs from MEZA-30

export const metadata: Metadata = {
  title: "About",
  description:
    "Mezen is a consulting firm that works alongside B2B founders to fix revenue problems — not just advise on them.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-24 border-b border-brand-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            About
          </p>
          {/* TODO: Replace with CMO headline */}
          <h1 className="text-4xl sm:text-5xl font-serif text-brand-50 max-w-2xl text-balance">
            Practitioners, not presenters.
          </h1>
        </div>
      </section>

      {/* About body */}
      <section className="py-24 border-b border-brand-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-6 text-brand-300 leading-relaxed">
              {/* TODO: Replace with CMO about copy */}
              <p>
                Mezen was founded on one observation: most B2B founders stall
                not from lack of effort, but from working the wrong part of the
                revenue system. The market is right, the product works, but
                something in the pipeline, messaging, or offer structure is
                leaking.
              </p>
              <p>
                We built Mezen to fix that — with a structured diagnostic
                methodology and an embedded delivery model. We work alongside
                your team, not above it.
              </p>
              <p>
                {/* TODO: Expand with team bios, credibility proof from CMO */}
                [Team section — CMO to provide bio content, MEZA-29]
              </p>
            </div>
            {/* TODO: Designer-specified layout for team/visual content */}
            <div className="lg:col-span-5">
              <div className="h-64 bg-brand-900 border border-brand-800 flex items-center justify-center rounded-sm">
                <span className="text-brand-600 text-sm">[Team photo / visual — MEZA-30]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / How we work */}
      <section className="py-24 border-b border-brand-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-brand-50 mb-12">
            {/* TODO: CMO section heading */}
            How we operate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* TODO: Replace with CMO values/principles copy */}
            {VALUES_PLACEHOLDER.map((v) => (
              <div key={v.title} className="space-y-3">
                <h3 className="font-semibold text-brand-50">{v.title}</h3>
                <p className="text-brand-400 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-serif text-brand-50 mb-6">
              {/* TODO: CMO CTA copy */}
              Work with us.
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-brand-950 font-semibold rounded-sm hover:bg-accent-dark transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// TODO: Replace with CMO values copy
const VALUES_PLACEHOLDER = [
  {
    title: "Embedded, not advisory",
    body: "We are in the room with you, not reporting from a distance. Every engagement ends with work done, not a report filed.",
  },
  {
    title: "Diagnostic-first",
    body: "We do not sell solutions before we understand the problem. Every engagement starts with a structured diagnostic.",
  },
  {
    title: "Founder-grade candour",
    body: "We tell you what we see, including the uncomfortable parts. That is what you are paying for.",
  },
];
