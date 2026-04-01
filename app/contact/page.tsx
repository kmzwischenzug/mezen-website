import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "This page is for B2B founders in crypto or fintech who have a revenue, margin, or strategic problem they haven't been able to solve on their own.",
};

export default function ContactPage() {
  return (
    <section className="bg-cream py-16 lg:py-[120px] border-b border-rule">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: intro copy (60%) */}
          <div className="lg:col-span-7">
            <h1 className="font-serif font-bold text-ink leading-[1.05] text-[40px] md:text-[56px] lg:text-[64px] mb-8 text-balance">
              Work with us
            </h1>
            <p className="text-slate leading-[1.75] text-base max-w-[520px]">
              This page is for B2B founders in crypto or fintech who have a
              revenue, margin, or strategic problem they haven&apos;t been able to
              solve on their own. If you&apos;re pre-revenue, or looking for
              generalist advisory, we&apos;re probably not the right fit. If you
              have a specific problem — pipeline that isn&apos;t converting, margins
              that are compressing, a high-stakes decision with no clear answer
              — fill out the form. Someone from the Mezen team will respond
              within 48 hours to confirm fit or suggest a better path.
            </p>
          </div>

          {/* Right: form (40%) */}
          <div className="lg:col-span-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
