import Image from "next/image";

import ChatWidget from "../components/ChatWidget";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import ScrollEffects from "../components/ScrollEffects";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");

const calendarEmbedUrl =
  process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL || "";
const calendarAppointmentUrl =
  process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_APPOINTMENT_URL || "";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BlazeAutomate",
    url: siteUrl,
    logo: `${siteUrl}/full_logo.png`,
    description:
      "Growth powered by automation. Capture every opportunity and turn interest into revenue with seamless, 24/7 lead systems.",
  };

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main>
        <section
          id="top"
          className="mx-auto max-w-6xl px-4 pt-16 pb-14 sm:px-6 lg:px-8"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="reveal-on-scroll">
              <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-700">
                <span
                  className="h-2 w-2 rounded-full bg-emerald-500"
                  aria-hidden="true"
                />
                Custom automation built for your business
              </p>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
                Turn Interest Into Revenue with Automation
              </h1>

              <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-700">
                We build custom automation systems for your business — from lead
                generation to closing deals. Automated responses, unlimited
                follow-ups, and seamless workflows that run 24/7.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
                >
                  Book a Call
                </a>
                <a
                  href="#about"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-6 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-50"
                >
                  Learn More
                </a>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                      alt="Client"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                      alt="Client"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white">
                    <Image
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                      alt="Client"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-sm text-zinc-600">
                  Trusted by{" "}
                  <span className="font-semibold text-zinc-950">multiple</span>{" "}
                  businesses
                </p>
              </div>
            </div>

            <div className="reveal-on-scroll">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-zinc-100 p-8">
                <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />

                <div className="relative mb-6 overflow-hidden rounded-2xl border border-zinc-200">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
                    alt="Automation dashboard"
                    width={600}
                    height={400}
                    className="w-full"
                  />
                </div>

                <div className="relative">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-950">
                        Instant Automation
                      </p>
                      <p className="text-xs text-zinc-600">
                        Lead → Nurture → Revenue
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <div className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-4">
                      <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                        <svg
                          className="h-4 w-4 text-emerald-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-zinc-950">
                          Instant Response
                        </p>
                        <p className="mt-1 text-xs text-zinc-600">
                          Automated replies fire within seconds of a new lead.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-4">
                      <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                        <svg
                          className="h-4 w-4 text-blue-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-zinc-950">
                          Unlimited Follow-ups
                        </p>
                        <p className="mt-1 text-xs text-zinc-600">
                          Set as many touchpoints as you need — SMS, email, or
                          both.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-4">
                      <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                        <svg
                          className="h-4 w-4 text-purple-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-zinc-950">
                          Zero Lead Loss
                        </p>
                        <p className="mt-1 text-xs text-zinc-600">
                          Every opportunity is tracked, nurtured, and ready to
                          close.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-zinc-100 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="reveal-on-scroll text-center">
              <h2 className="text-3xl font-semibold tracking-tight">
                About Us
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-700">
                We build custom automation for your business using the
                GoHighLevel platform. From the moment a lead enters your system
                to the moment they become a customer, we handle it all.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="reveal-on-scroll rounded-3xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 overflow-hidden">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format"
                    alt="Real-time automation analytics"
                    width={400}
                    height={250}
                    className="w-full"
                  />
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
                  <svg
                    className="h-6 w-6 text-emerald-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-zinc-950">
                  Instant Automated Response
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  When a lead comes in, our system responds instantly — no
                  waiting, no delays. Capture interest while it's hot.
                </p>
              </div>

              <div className="reveal-on-scroll rounded-3xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 overflow-hidden">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop&auto=format"
                    alt="Team collaboration and automation"
                    width={400}
                    height={250}
                    className="w-full"
                  />
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                  <svg
                    className="h-6 w-6 text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-zinc-950">
                  Flexible Follow-up Sequences
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  Want 3 follow-ups? 10? 50? You decide. Our automation can
                  nurture leads with as many touchpoints as your business needs.
                </p>
              </div>

              <div className="reveal-on-scroll rounded-3xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 overflow-hidden">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format"
                    alt="Revenue growth dashboard"
                    width={400}
                    height={250}
                    className="w-full"
                  />
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
                  <svg
                    className="h-6 w-6 text-purple-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-zinc-950">
                  Lead Generation to Revenue
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  We handle the full journey: capturing leads, nurturing them
                  through email and SMS, and turning interest into paying
                  customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="border-t border-zinc-100 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="reveal-on-scroll text-center">
              <h2 className="text-3xl font-semibold tracking-tight">
                Why Choose BlazeAutomate
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-700">
                We don't just set up software — we build automation systems
                tailored to your exact business needs.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="reveal-on-scroll rounded-3xl border border-zinc-200 bg-white p-8 overflow-hidden">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&auto=format"
                    alt="Conversion rate analytics"
                    width={400}
                    height={200}
                    className="w-full"
                  />
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
                  <svg
                    className="h-6 w-6 text-emerald-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-zinc-950">
                  9x Higher Conversion
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  Contacting a lead within 5 minutes makes you 9x more likely to
                  close the deal. Our automation responds instantly.
                </p>
              </div>
              <div className="reveal-on-scroll rounded-3xl border border-zinc-200 bg-white p-8 overflow-hidden">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&auto=format"
                    alt="Revenue growth analytics"
                    width={400}
                    height={200}
                    className="w-full"
                  />
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                  <svg
                    className="h-6 w-6 text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-zinc-950">
                  30% Revenue Recovery
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  Automated nurturing recovers up to 30% of revenue typically
                  lost to slow manual follow-ups.
                </p>
              </div>
              <div className="reveal-on-scroll rounded-3xl border border-zinc-200 bg-white p-8 overflow-hidden">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop&auto=format"
                    alt="Sales persistence dashboard"
                    width={400}
                    height={200}
                    className="w-full"
                  />
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
                  <svg
                    className="h-6 w-6 text-purple-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-zinc-950">
                  80% Sales Persistence
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  80% of sales require multiple follow-up touchpoints.
                  BlazeAutomate automates every single one — as many as you
                  need.
                </p>
              </div>
              <div className="reveal-on-scroll rounded-3xl border border-zinc-200 bg-white p-8 overflow-hidden">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=200&fit=crop&auto=format"
                    alt="CRM pipeline management"
                    width={400}
                    height={200}
                    className="w-full"
                  />
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100">
                  <svg
                    className="h-6 w-6 text-orange-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-zinc-950">
                  Zero Lead Leakage
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  While 44% of manual leads are never followed up, our CRM
                  captures and nurtures 100% of your opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-zinc-100 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="reveal-on-scroll">
              <h2 className="text-2xl font-semibold tracking-tight">
                What We Do
              </h2>
              <p className="mt-2 max-w-2xl text-zinc-700">
                Simple, reliable systems that keep your pipeline moving — even
                when you’re offline.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="reveal-on-scroll rounded-3xl border border-zinc-200 bg-white p-6 overflow-hidden">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&h=300&fit=crop&auto=format"
                    alt="Lead capture form interface"
                    width={500}
                    height={300}
                    className="w-full"
                  />
                </div>
                <p className="text-sm font-medium text-zinc-950">
                  Automated lead generation and nurturing systems
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  Capture leads, segment them instantly, and send the right
                  messages at the right time.
                </p>
              </div>
              <div className="reveal-on-scroll rounded-3xl border border-zinc-200 bg-white p-6 overflow-hidden">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=300&fit=crop&auto=format"
                    alt="Business team collaboration"
                    width={500}
                    height={300}
                    className="w-full"
                  />
                </div>
                <p className="text-sm font-medium text-zinc-950">
                  Rapid follow-up and CRM client conversion
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  Automate follow-ups and hand off to your team when prospects
                  are ready to book or buy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-zinc-100 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="reveal-on-scroll">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Reach Out to Us
                </h2>
                <p className="mt-2 max-w-xl text-zinc-700">
                  Fill out the form below and we'll send you a calendar link to
                  book an appointment that works best for you.
                </p>

                <div className="mt-6 rounded-3xl border border-zinc-200 bg-white p-6">
                  <p className="text-sm font-medium text-zinc-950">
                    What happens next
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                    <li>• We review your inquiry instantly.</li>
                    <li>
                      • You'll receive a calendar link via email to book your
                      consultation.
                    </li>
                    <li>
                      • We'll discuss your automation needs and recommend the
                      best solutions.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="reveal-on-scroll">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-zinc-100 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <span>
                © {new Date().getFullYear()} BlazeAutomate. All rights reserved.
              </span>
            </div>
            <div className="flex gap-4">
              <a className="hover:text-zinc-900" href="#about">
                About
              </a>
              <a className="hover:text-zinc-900" href="#services">
                Services
              </a>
              <a className="hover:text-zinc-900" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </main>

      <ChatWidget />
      <ScrollEffects />
    </div>
  );
}
