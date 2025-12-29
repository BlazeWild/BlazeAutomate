# BlazeAutomate website (Next.js)

Single-page marketing site for BlazeAutomate (Hero → Numbers → Why Us → Services → Contact + chat widget).

## Run locally

```bash
cd web
npm install
npm run dev
```

Then open http://localhost:3000

## Lead capture / GoHighLevel webhook

The Contact form and Chat widget POST to `/api/lead`.

To forward leads to GoHighLevel (or any webhook), set:

- `GHL_WEBHOOK_URL` (server-side)

Example (PowerShell):

```powershell
cd web
$env:GHL_WEBHOOK_URL = "https://your-webhook-url"
npm run dev
```

## SEO / indexing

- `src/app/layout.tsx` sets title/description/OG/Twitter/canonical.
- `src/app/sitemap.ts` generates `/sitemap.xml`.
- `src/app/robots.ts` generates `/robots.txt`.

For production, set:

- `NEXT_PUBLIC_SITE_URL` (e.g. `https://yourdomain.com`)

```powershell
$env:NEXT_PUBLIC_SITE_URL = "https://yourdomain.com"
```

## Google Calendar embed

The Contact section can show a Google Calendar booking embed.

Set one or both:

- `NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL` (iframe embed URL)
- `NEXT_PUBLIC_GOOGLE_CALENDAR_APPOINTMENT_URL` (open-in-new-tab booking link)
