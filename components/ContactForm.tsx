"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Valid email required").max(255),
  company: z.string().max(100).optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000),
});

type FormValues = z.infer<typeof schema>;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormValues) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-8">
        <p className="font-sans font-medium text-ink mb-2">Message sent.</p>
        <p className="text-slate text-sm leading-[1.65]">
          Someone from the Mezen team will respond within 48 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-navy text-xs font-medium tracking-[0.06em] uppercase underline underline-offset-4 hover:text-ink transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <Field label="Name" error={errors.name?.message} required>
        <input
          {...register("name")}
          type="text"
          autoComplete="name"
          className={inputClass(!!errors.name)}
          placeholder="Jane Smith"
        />
      </Field>

      <Field label="Company" error={errors.company?.message}>
        <input
          {...register("company")}
          type="text"
          autoComplete="organization"
          className={inputClass(!!errors.company)}
          placeholder="Acme Corp"
        />
      </Field>

      <Field label="Email" error={errors.email?.message} required>
        <input
          {...register("email")}
          type="email"
          autoComplete="email"
          className={inputClass(!!errors.email)}
          placeholder="jane@company.com"
        />
      </Field>

      <Field
        label="What's the main problem you need solved?"
        error={errors.message?.message}
        required
      >
        <textarea
          {...register("message")}
          rows={3}
          className={cn(inputClass(!!errors.message), "resize-none")}
          placeholder="Describe the problem — pipeline that isn't converting, margins compressing, a decision you can't see clearly."
        />
      </Field>

      {status === "error" && (
        <p className="text-red-600 text-xs">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-gold text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send →"}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block font-sans text-xs font-medium text-ink tracking-[0.04em] mb-2">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-red-600 text-xs">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full bg-cream border rounded-md px-4 py-3 text-ink text-sm placeholder:text-slate/60",
    "focus:outline-none focus:ring-1 transition-colors",
    hasError
      ? "border-red-400 focus:ring-red-400"
      : "border-rule focus:border-navy focus:ring-navy/20"
  );
}
