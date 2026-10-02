import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const siteUrl = "https://www.huttcapital.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hutt Capital",
    template: "%s — Hutt Capital",
  },
  description:
    "Hutt Capital is a blockchain venture capital fund of funds platform. We partner with leading blockchain VC firms to provide diversified exposure to the most promising blockchain & crypto startups globally.",
  icons: {
    icon: "/logos/favicon.jpg",
    apple: "/logos/favicon.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Hutt Capital",
    title: "Hutt Capital — Blockchain Venture Capital Fund of Funds",
    description:
      "We partner with leading blockchain VC firms to provide diversified exposure to the most promising blockchain & crypto startups globally.",
    images: [
      {
        url: "/logos/hutt_logo_transparent.png",
        width: 1200,
        height: 630,
        alt: "Hutt Capital Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HuttCap",
    creator: "@HuttCap",
    title: "Hutt Capital — Blockchain Venture Capital Fund of Funds",
    description:
      "We partner with leading blockchain VC firms to provide diversified exposure to the most promising blockchain & crypto startups globally.",
    images: ["/logos/hutt_logo_transparent.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hutt Capital",
  url: "https://www.huttcapital.com",
  logo: "https://www.huttcapital.com/logos/hutt_logo_transparent.png",
  description:
    "Hutt Capital is a blockchain venture capital fund of funds platform. We partner with leading blockchain VC firms to provide diversified exposure to the most promising blockchain & crypto startups globally.",
  email: "brooke@huttcapital.com",
  foundingDate: "2018",
  sameAs: [
    "https://www.linkedin.com/company/huttcapital/",
    "https://x.com/HuttCap",
    "https://medium.com/@huttcapital",
  ],
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Portland",
      addressRegion: "OR",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "West Palm Beach",
      addressRegion: "FL",
      addressCountry: "US",
    },
  ],
  numberOfEmployees: { "@type": "QuantitativeValue", value: 2 },
  knowsAbout: [
    "Blockchain",
    "Venture Capital",
    "Crypto",
    "Fund of Funds",
    "Web3",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Hutt Capital",
  url: "https://www.huttcapital.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <div className="bg-green-dark">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
