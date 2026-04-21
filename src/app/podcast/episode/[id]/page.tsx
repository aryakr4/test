import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EpisodeClient } from "./EpisodeClient";
import { RSS_URL, getTag, getCdata, getAttr } from "@/lib/rss";

type EpisodeData = {
  title: string;
  episodeNumber: string;
  guid: string;
  pubDate: string;
  description: string;
  image: string;
  audioUrl: string;
  duration: string;
};

async function getAllEpisodes(): Promise<EpisodeData[]> {
  const res = await fetch(RSS_URL, { next: { revalidate: 86400 } });
  const xml = await res.text();

  const items: EpisodeData[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const item = match[1];
    const epMatch = item.match(/<itunes:episode>(\d+)<\/itunes:episode>/);

    items.push({
      title: getTag(item, "title"),
      episodeNumber: epMatch ? epMatch[1] : "",
      guid: getTag(item, "guid"),
      pubDate: getTag(item, "pubDate"),
      description: getCdata(item, "description") || getTag(item, "description"),
      image: getAttr(item, "itunes:image", "href"),
      audioUrl: getAttr(item, "enclosure", "url"),
      duration: getTag(item, "itunes:duration"),
    });
  }

  return items;
}

// Pre-render all episode pages at build time
export async function generateStaticParams() {
  const episodes = await getAllEpisodes();
  return episodes
    .filter((ep) => ep.episodeNumber)
    .map((ep) => ({ id: ep.episodeNumber }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const episodes = await getAllEpisodes();
  const episode = episodes.find((ep) => ep.episodeNumber === id);

  if (!episode) {
    return { title: "Episode Not Found" };
  }

  const plainDesc =
    episode.description?.replace(/<[^>]*>/g, "").slice(0, 160) ||
    `Inside the Hutt Episode ${episode.episodeNumber}: ${episode.title}`;

  const ogImage = episode.image || "https://www.huttcapital.com/logos/podcast_logo_white.jpg";
  const episodeUrl = `https://www.huttcapital.com/podcast/episode/${episode.episodeNumber}`;

  return {
    title: `Episode ${episode.episodeNumber} — ${episode.title}`,
    description: plainDesc,
    alternates: {
      canonical: episodeUrl,
      types: {
        "application/rss+xml": "https://feeds.captivate.fm/inside-the-hutt/",
      },
    },
    openGraph: {
      title: `Episode ${episode.episodeNumber} — ${episode.title} | Inside the Hutt`,
      description: plainDesc,
      url: episodeUrl,
      images: [{ url: ogImage, width: 1400, height: 1400, alt: episode.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Episode ${episode.episodeNumber} — ${episode.title} | Inside the Hutt`,
      description: plainDesc,
      images: [ogImage],
    },
  };
}

export default async function EpisodePage({ params }: Props) {
  const { id } = await params;
  const episodes = await getAllEpisodes();
  const episode = episodes.find((ep) => ep.episodeNumber === id);

  if (!episode) {
    notFound();
  }

  const epNum = parseInt(episode.episodeNumber, 10);
  const prevEp = episodes.find((ep) => ep.episodeNumber === String(epNum - 1));
  const nextEp = episodes.find((ep) => ep.episodeNumber === String(epNum + 1));

  const episodeSchema = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: episode.title,
    episodeNumber: epNum,
    datePublished: new Date(episode.pubDate).toISOString().split("T")[0],
    description: episode.description?.replace(/<[^>]*>/g, "").slice(0, 300),
    url: `https://www.huttcapital.com/podcast/episode/${episode.episodeNumber}`,
    associatedMedia: {
      "@type": "MediaObject",
      contentUrl: episode.audioUrl,
      encodingFormat: "audio/mpeg",
    },
    image: episode.image || "https://www.huttcapital.com/logos/podcast_logo_white.jpg",
    partOfSeries: {
      "@type": "PodcastSeries",
      name: "Inside the Hutt",
      url: "https://www.huttcapital.com/podcast",
    },
    author: {
      "@type": "Person",
      name: "Brooke Pollack",
      jobTitle: "Managing Partner",
      worksFor: { "@type": "Organization", name: "Hutt Capital" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(episodeSchema) }}
      />
      <EpisodeClient
        title={episode.title}
        episodeNumber={episode.episodeNumber}
        guid={episode.guid}
        pubDate={episode.pubDate}
        description={episode.description}
        prevEpisode={prevEp ? { number: prevEp.episodeNumber, title: prevEp.title } : null}
        nextEpisode={nextEp ? { number: nextEp.episodeNumber, title: nextEp.title } : null}
      />
    </>
  );
}
