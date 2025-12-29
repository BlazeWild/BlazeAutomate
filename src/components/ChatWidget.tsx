"use client";

import { useMemo, useState } from "react";

type Status =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success" }
  | { type: "error"; message: string };

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const errors = useMemo(() => {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Name is required.";
    if (!email.trim()) next.email = "Email is required.";
    else if (!isValidEmail(email.trim())) next.email = "Enter a valid email.";
    if (!phone.trim()) next.phone = "Phone number is required.";
    return next;
  }, [name, email, phone]);

  async function submit() {
    if (Object.keys(errors).length > 0) {
      setStatus({
        type: "error",
        message: "Please complete the required fields.",
      });
      return;
    }

    setStatus({ type: "submitting" });

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "chat_widget",
          name,
          email,
          phone,
          message: "Live support request",
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error || "Could not send your message.");
      }

      setStatus({ type: "success" });
      setName("");
      setEmail("");
      setPhone("");
    } catch (err) {
      setStatus({
        type: "error",
        message: err instanceof Error ? err.message : "Something went wrong.",
      });
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div className="w-[320px] overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3">
            <p className="text-sm font-semibold text-zinc-950">Live Support</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full px-2 py-1 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="px-4 py-3">
            <p className="text-sm text-zinc-700">
              Hi! 👋 Welcome to BlazeAutomate. Have a question about how our
              automation can help you grow? Message us here!
            </p>

            <div className="mt-4 grid gap-3">
              <div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`h-10 w-full rounded-2xl border bg-white px-3 text-sm outline-none transition-colors focus:border-zinc-400 ${
                    errors.name ? "border-red-300" : "border-zinc-200"
                  }`}
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`h-10 w-full rounded-2xl border bg-white px-3 text-sm outline-none transition-colors focus:border-zinc-400 ${
                    errors.email ? "border-red-300" : "border-zinc-200"
                  }`}
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`h-10 w-full rounded-2xl border bg-white px-3 text-sm outline-none transition-colors focus:border-zinc-400 ${
                    errors.phone ? "border-red-300" : "border-zinc-200"
                  }`}
                  placeholder="Phone"
                />
              </div>

              {status.type === "error" ? (
                <p className="text-sm text-red-600">{status.message}</p>
              ) : null}
              {status.type === "success" ? (
                <p className="text-sm text-emerald-700">Message sent.</p>
              ) : null}

              <button
                type="button"
                onClick={submit}
                disabled={status.type === "submitting"}
                className="inline-flex h-10 items-center justify-center rounded-full bg-zinc-950 px-4 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-60"
              >
                {status.type === "submitting" ? "Sending…" : "Send"}
              </button>

              <p className="text-xs text-zinc-500">
                This widget captures your details and can notify your
                GoHighLevel app so you can reply immediately.
              </p>
            </div>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => {
          setOpen((v) => !v);
          setStatus({ type: "idle" });
        }}
        className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800"
        aria-label={open ? "Close live support" : "Open live support"}
      >
        {open ? "Close" : "Hi"}
      </button>
    </div>
  );
}
