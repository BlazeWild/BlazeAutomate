import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ScrollEffects from "@/components/ScrollEffects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BlazeAutomate — Growth Powered by Automation",
    template: "%s — BlazeAutomate",
  },
  description:
    "We help you capture every opportunity and turn interest into revenue with seamless, 24/7 lead systems.",
  applicationName: "BlazeFlow",
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "BlazeFlow — Growth Powered by Automation",
    description:
      "Capture every opportunity and turn interest into revenue with seamless, 24/7 lead systems.",
    images: [
      { url: "/full_logo.png", width: 1200, height: 630, alt: "BlazeAutomate" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlazeAutomate — Growth Powered by Automation",
    description:
      "Capture every opportunity and turn interest into revenue with seamless, 24/7 lead systems.",
    images: ["/full_logo.png"],
  },
  keywords: [
    "lead automation",
    "CRM automation",
    "follow up automation",
    "lead nurturing",
    "GoHighLevel",
    "sales automation",
  ],
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ScrollEffects />
      </body>
    </html>
  );
}
