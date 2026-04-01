import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

// TODO: Replace copy with CMO-approved text from MEZA-29

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Mezen about your revenue situation. We will follow up within one business day.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-24 border-b border-brand-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Contact
          </p>
          {/* TODO: CMO headline */}
          <h1 className="text-4xl sm:text-5xl font-serif text-brand-50 max-w-2xl text-balance">
            Let&apos;s talk about your revenue situation.
          </h1>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: context */}
            <div>
              <p className="text-brand-300 leading-relaxed mb-8">
                {/* TODO: CMO body copy */}
                Tell us about your situation. We work with B2B founders who are
                past early traction and hitting a growth ceiling. If that sounds
                like you, we would like to hear from you.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 text-brand-400">
                  <span className="text-accent">—</span>
                  <span>We follow up within one business day.</span>
                </div>
                <div className="flex items-start gap-3 text-brand-400">
                  <span className="text-accent">—</span>
                  <span>
                    Not ready to talk? Start with the free{" "}
                    {/* TODO: Link to scorecard app URL when deployed */}
                    <a
                      href="#"
                      className="text-accent hover:text-accent-light transition-colors underline underline-offset-2"
                    >
                      Revenue Scorecard
                    </a>
                    .
                  </span>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
