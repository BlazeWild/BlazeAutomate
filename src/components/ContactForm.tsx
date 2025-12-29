"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  goals: string;
  company?: string;
  website?: string;
  honey: string;
};

type SubmitStatus =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success" }
  | { type: "error"; message: string };

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>({ type: "idle" });
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    goals: "",
    company: "",
    website: "",
    honey: "",
  });

  const errors = useMemo(() => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!isValidEmail(form.email.trim()))
      next.email = "Enter a valid email.";
    if (!form.goals.trim()) next.goals = "Tell us about your business.";
    return next;
  }, [form]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (Object.keys(errors).length > 0) {
      setStatus({
        type: "error",
        message: "Please fix the highlighted fields.",
      });
      return;
    }

    // Honeypot check
    if (form.honey) {
      setStatus({ type: "success" });
      return;
    }

    setStatus({ type: "submitting" });

    try {
      // Submit to GHL webhook or Web3Forms
      const webhookUrl =
        process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL ||
        "https://api.web3forms.com/submit";

      const payload: Record<string, string> = {
        name: form.name,
        email: form.email,
        phone: form.phone || "",
        message: form.goals,
        company: form.company || "",
        website: form.website || "",
        source: "BlazeAutomate Contact Form",
      };

      // Add Web3Forms access key if using their service (get free key at web3forms.com)
      if (webhookUrl.includes("web3forms.com")) {
        payload.access_key =
          process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_KEY_HERE";
      }

      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Could not send your inquiry.");
      }

      setStatus({ type: "success" });
      setForm({
        name: "",
        email: "",
        phone: "",
        goals: "",
        company: "",
        website: "",
        honey: "",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message: err instanceof Error ? err.message : "Something went wrong.",
      });
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-zinc-200 bg-white p-6"
      aria-describedby={status.type === "error" ? "contact-error" : undefined}
    >
      <div className="grid gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-medium text-zinc-950" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            className={`h-11 rounded-2xl border bg-white px-4 text-sm outline-none transition-colors focus:border-zinc-400 ${
              errors.name ? "border-red-300" : "border-zinc-200"
            }`}
            placeholder="Your name"
          />
          {errors.name ? (
            <p className="text-xs text-red-600">{errors.name}</p>
          ) : null}
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="grid gap-2">
            <label
              className="text-sm font-medium text-zinc-950"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) =>
                setForm((p) => ({ ...p, email: e.target.value }))
              }
              className={`h-11 rounded-2xl border bg-white px-4 text-sm outline-none transition-colors focus:border-zinc-400 ${
                errors.email ? "border-red-300" : "border-zinc-200"
              }`}
              placeholder="you@company.com"
            />
            {errors.email ? (
              <p className="text-xs text-red-600">{errors.email}</p>
            ) : null}
          </div>

          <div className="grid gap-2">
            <label
              className="text-sm font-medium text-zinc-950"
              htmlFor="phone"
            >
              Phone Number <span className="text-zinc-500">(optional)</span>
            </label>
            <input
              id="phone"
              autoComplete="tel"
              value={form.phone}
              onChange={(e) =>
                setForm((p) => ({ ...p, phone: e.target.value }))
              }
              className="h-11 rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none transition-colors focus:border-zinc-400"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium text-zinc-950" htmlFor="goals">
            Tell us about your business in short
          </label>
          <textarea
            id="goals"
            value={form.goals}
            onChange={(e) => setForm((p) => ({ ...p, goals: e.target.value }))}
            className={`min-h-28 rounded-2xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-zinc-400 ${
              errors.goals ? "border-red-300" : "border-zinc-200"
            }`}
            placeholder="What does your business do? What are you looking to automate?"
          />
          {errors.goals ? (
            <p className="text-xs text-red-600">{errors.goals}</p>
          ) : null}
        </div>

        <input
          tabIndex={-1}
          aria-hidden="true"
          value={form.honey}
          onChange={(e) => setForm((p) => ({ ...p, honey: e.target.value }))}
          className="hidden"
          autoComplete="off"
        />

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="newsletter"
            className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-zinc-950 focus:ring-zinc-950"
            defaultChecked
          />
          <label htmlFor="newsletter" className="text-xs text-zinc-600">
            I agree to receive newsletters, updates, and promotional emails from
            BlazeAutomate. You can unsubscribe at any time.
          </label>
        </div>

        {status.type === "error" ? (
          <p id="contact-error" className="text-sm text-red-600">
            {status.message}
          </p>
        ) : null}
        {status.type === "success" ? (
          <p className="text-sm text-emerald-700">
            Thanks! Check your email for the calendar link to book your
            consultation.
          </p>
        ) : null}

        <button
          type="submit"
          disabled={status.type === "submitting"}
          className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-60"
        >
          {status.type === "submitting" ? "Sending…" : "Submit Request"}
        </button>
      </div>
    </form>
  );
}
