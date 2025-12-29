import { NextResponse } from "next/server";

type LeadPayload = {
  source?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  company?: string;
  website?: string;
  honey?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  let body: LeadPayload | null = null;

  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body?.honey) {
    return NextResponse.json({ ok: true });
  }

  const name = (body?.name || "").trim();
  const email = (body?.email || "").trim();
  const phone = (body?.phone || "").trim();
  const message = (body?.message || "").trim();
  const source = (body?.source || "website").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const lead = {
    source,
    name,
    email,
    phone,
    message,
    company: (body?.company || "").trim(),
    website: (body?.website || "").trim(),
    receivedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.GHL_WEBHOOK_URL?.trim();

  if (webhookUrl) {
    try {
      const forwardRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });

      if (!forwardRes.ok) {
        return NextResponse.json(
          { error: "Webhook delivery failed" },
          { status: 502 }
        );
      }
    } catch {
      return NextResponse.json(
        { error: "Webhook delivery failed" },
        { status: 502 }
      );
    }
  } else {
    // No webhook configured; we still respond OK so the UI works in dev.
    // You can connect GoHighLevel by setting GHL_WEBHOOK_URL.
    // eslint-disable-next-line no-console
    console.log("Lead captured:", lead);
  }

  return NextResponse.json({ ok: true });
}
