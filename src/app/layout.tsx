import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";


export const metadata: Metadata = {
  title: "Custom Flooring Website Design | Brllo Studio",
  description: "Get a fully optimized, mobile-friendly flooring company website ready in just 5 days. Increase your leads and sales with Brllo Studio's expert web design for flooring businesses.",
  keywords: ['flooring website', 'flooring company web design', 'custom flooring website', 'SEO flooring website', 'lead generation', 'Brllo Studio'],
  openGraph: {
    title: 'Custom Flooring Website Design | Brllo Studio',
    description: "Get a fully optimized, mobile-friendly flooring company website ready in just 5 days. Increase your leads and sales with Brllo Studio's expert web design for flooring businesses.",
    url: 'https://brllo.com',
    siteName: 'Brllo Studio',
    images: [
      {
        url: '/images/cta-background.jpg',
        width: 1200,
        height: 630,
        alt: 'Brllo Studio Flooring Website',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@brllostudio',
    title: 'Custom Flooring Website Design | Brllo Studio',
    description: "Get a fully optimized, mobile-friendly flooring company website ready in just 5 days. Increase your leads and sales with Brllo Studio's expert web design for flooring businesses.",
    images: ['/images/cta-background.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for business and website
  const jsonLd = `{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Brllo Studio",
    "description": "Custom Flooring Website Design for Flooring Companies. Get a fully optimized, mobile-friendly flooring company website ready in just 5 days.",
    "url": "https://brllo.com",
    "logo": "https://brllo.com/images/Brllo_Logo.png",
    "image": "https://brllo.com/images/Brllo_Logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/brllostudio",
      "https://www.instagram.com/brllostudio"
    ]
  }`;
  const websiteJsonLd = `{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Brllo Studio",
    "url": "https://brllo.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://brllo.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }`;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/brllo-logo.svg" type="image/svg+xml" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: websiteJsonLd }} />
      </head>
      <body
        className={`font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
