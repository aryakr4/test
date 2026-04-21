import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast",
  description:
    "Inside the Hutt — hosted by Brooke Pollack, Managing Partner of Hutt Capital. Conversations with leading blockchain venture capital investors on their origins, investment approaches, and industry trends.",
  openGraph: {
    title: "Inside the Hutt Podcast — Hutt Capital",
    description:
      "Conversations with leading blockchain venture capital investors on their origins, investment approaches, and industry trends.",
    url: "https://www.huttcapital.com/podcast",
  },
  alternates: {
    types: {
      "application/rss+xml": "https://feeds.captivate.fm/inside-the-hutt/",
    },
  },
};

const podcastSchema = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  name: "Inside the Hutt",
  description:
    "Conversations with leading blockchain venture capital investors on their origins, investment approaches, and industry trends.",
  url: "https://www.huttcapital.com/podcast",
  webFeed: "https://feeds.captivate.fm/inside-the-hutt/",
  image: "https://www.huttcapital.com/logos/podcast_logo_white.jpg",
  startDate: "2023-01-01",
  author: {
    "@type": "Person",
    name: "Brooke Pollack",
    jobTitle: "Managing Partner",
    worksFor: { "@type": "Organization", name: "Hutt Capital" },
  },
  productionCompany: {
    "@type": "Organization",
    name: "Hutt Capital",
    url: "https://www.huttcapital.com",
  },
  genre: ["Business", "Technology", "Venture Capital", "Blockchain", "Cryptocurrency"],
  inLanguage: "en",
  sameAs: [
    "https://podcasts.apple.com/us/podcast/inside-the-hutt/id1716917531",
    "https://open.spotify.com/show/4NqtpCcdWWtoo54FrY95HT",
    "https://feeds.captivate.fm/inside-the-hutt/",
  ],
};

export default function PodcastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(podcastSchema) }}
      />
      {children}
    </>
  );
}
