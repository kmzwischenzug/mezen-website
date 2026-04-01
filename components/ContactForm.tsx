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
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
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
      <div className="p-8 border border-brand-700 rounded-sm text-center">
        <p className="text-brand-50 font-medium mb-2">Message sent.</p>
        <p className="text-brand-400 text-sm">
          We will follow up within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-accent text-sm hover:text-accent-light transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
      </div>

      <Field label="Email" error={errors.email?.message} required>
        <input
          {...register("email")}
          type="email"
          autoComplete="email"
          className={inputClass(!!errors.email)}
          placeholder="jane@company.com"
        />
      </Field>

      <Field label="Message" error={errors.message?.message} required>
        <textarea
          {...register("message")}
          rows={6}
          className={cn(inputClass(!!errors.message), "resize-none")}
          placeholder="Tell us about your situation — what you are working on, where growth is stalling, and what you have already tried."
        />
      </Field>

      {status === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center px-8 py-4 bg-accent text-brand-950 font-semibold rounded-sm hover:bg-accent-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
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
      <label className="block text-sm font-medium text-brand-200 mb-1.5">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-red-400 text-xs">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full bg-brand-900 border rounded-sm px-4 py-3 text-brand-100 text-sm placeholder:text-brand-600",
    "focus:outline-none focus:ring-1 transition-colors",
    hasError
      ? "border-red-500 focus:ring-red-500"
      : "border-brand-700 focus:border-accent focus:ring-accent"
  );
}
