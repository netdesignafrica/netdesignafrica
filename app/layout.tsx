import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Suspense } from "react"

// Assumption: site is hosted at this URL. If different, update SITE_URL below.
const SITE_URL = "https://netdesignafrica.com"

export const metadata: Metadata = {
  title: "Net Design Africa | Digital Agency for Website & Software Design",
  description:
    "Leading digital agency offering website and custom software design services to organisations, institutions, businesses and individuals across Africa.",
  applicationName: "Net Design Africa",
  keywords: [
    "digital agency",
    "web design",
    "software design",
    "africa",
    "ux",
    "ui",
    "branding",
    "net design africa",
  ],
  authors: [{ name: "Net Design Africa", url: SITE_URL }],
  creator: "Net Design Africa",
  publisher: "Net Design Africa",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Net Design Africa | Digital Agency for Website & Software Design",
    description:
      "Leading digital agency offering website and custom software design services to organisations, institutions, businesses and individuals across Africa.",
    url: SITE_URL,
    siteName: "Net Design Africa",
    images: [
      {
        url: `${SITE_URL}/logo-2.png`,
        width: 1200,
        height: 630,
        alt: "Net Design Africa logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Net Design Africa | Digital Agency for Website & Software Design",
    description:
      "Leading digital agency offering website and custom software design services across Africa.",
    images: [`${SITE_URL}/logo-2.png`],
  },
  icons: {
    icon: [
      { url: "/logo-2.png" },
      { url: "/logo-2.png", type: "image/png" },
    ],
    apple: [{ url: "/logo-2.png" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ffffff" }, { media: "(prefers-color-scheme: dark)", color: "#000000" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Net Design Africa",
    url: SITE_URL,
    logo: `${SITE_URL}/logo-2.png`,
    sameAs: [],
    description:
      "Digital agency offering website and custom software design services to organisations, institutions, businesses and individuals across Africa.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+256-707-029-929",
        contactType: "Customer Service",
        areaServed: "UG",
      },
    ],
  }

  return (
    <html lang="en">
      <head>
        {/* Canonical link and JSON-LD structured data for SEO */}
        <link rel="canonical" href={SITE_URL} />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          {children}
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
