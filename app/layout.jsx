import "./globals.css";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import NavBar from "@/components/custom/NavBar";
import Footer from "@/components/custom/Footer";

// ===== JSON-LD Structured Data =====
const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ZennyTrack",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser",
  description:
    "Simple and powerful time tracking and automated invoicing software for freelancers, remote teams, and digital agencies.",
  url: "https://zennytrack.vercel.app",
  downloadUrl: "https://zennytrack.vercel.app/pages/SignUp",
  author: {
    "@type": "Organization",
    name: "Muhamamd Zain Alam",
    url: "https://zennytrack.vercel.app",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free trial available",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1247",
    bestRating: "5",
  },
  featureList: [
    "Time tracking",
    "Automated invoice generation",
    "Real-time project analytics",
    "Client management portal",
    "Expense tracking",
    "Team collaboration tools",
  ],
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ZennyTrack",
  url: "https://zennytrack.vercel.app",
  logo: "https://zennytrack.vercel.app/logo.jpg",
  sameAs: [
    "https://twitter.com/zennytrack",
    "https://www.linkedin.com/company/zennytrack",
  ],
};

// ===== Metadata =====
export const metadata = {
  title: {
    default: "ZennyTrack | Time Tracking & Automated Invoicing Software",
    template: "%s | ZennyTrack - Smart Time Management",
  },
  description:
    "Boost productivity with ZennyTrack's simple time tracking and automated invoicing. Get real-time analytics, seamless client management, and faster payments. Trusted by 10,000+ freelancers, remote teams, and agencies worldwide.",
  keywords: [
    "time tracking software",
    "automated invoicing platform",
    "time tracking app ",
    "freelancer productivity tools",
    "remote work time tracker",
    "digital agency billing software",
    "project time management saas",
    "smart time tracking",
    "automated billing system",
    "real-time project analytics",
    "team productivity dashboard",
    "client portal software",
    "expense tracking automation",
    "consultant time tracking",
    "agency project management",
    "contractor billing software",
    "professional services automation",
    "ZennyTrack",
  ],
  authors: [{ name: "ZennyTrack Team", url: "https://zennytrack.vercel.app" }],
  creator: "ZennyTrack",
  publisher: "ZennyTrack Inc.",
  category: "Business Software",
  classification: "SaaS Time Tracking and Invoicing Platform",
  metadataBase: new URL("https://zennytrack.vercel.app"),
  alternates: {
    canonical: "https://zennytrack.vercel.app",
    languages: {
      "en-US": "https://zennytrack.vercel.app",
      "en-GB": "https://zennytrack.vercel.app/en-gb",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  applicationName: "ZennyTrack",
  referrer: "origin-when-cross-origin",
  twitter: {
    card: "summary_large_image",
    site: "@zennytrack",
    creator: "@zennytrack",
    title: "ZennyTrack | Time Tracking & Automated Invoicing ",
    description:
      "Boost productivity with ZennyTrack's time tracking and automated invoicing. Real-time analytics, streamlined billing, and seamless client management. Start your free trial today!",
    images: [
      {
        url: "https://zennytrack.vercel.app/og-image.png",
        alt: "ZennyTrack - Time Tracking Dashboard",
        width: 1200,
        height: 630,
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_CA"],
    title: "ZennyTrack | Time Tracking & Automated Invoicing Software",
    description:
      "Join 10,000+ professionals using ZennyTrack for time tracking, automated invoicing, and real-time project analytics. Increase productivity, reduce admin work, and get paid faster.",
    url: "https://zennytrack.vercel.app",
    siteName: "ZennyTrack - Smart Time Management Platform",
    images: [
      {
        url: "https://zennytrack.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZennyTrack Dashboard - Time Tracking & Invoicing",
      },
      {
        url: "https://zennytrack.vercel.app/og-square.png",
        width: 400,
        height: 400,
        alt: "ZennyTrack Logo - Smart Time Tracking",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Preload critical font */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgJsonLd),
          }}
        />
      </head>
      <body className="antialiased">
        <SmoothCursor />

        {/* Accessibility skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50"
        >
          Skip to main content
        </a>

        <header>
          <NavBar />
        </header>

        <main id="main-content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
