import type { MetadataRoute } from "next";

const RSS_URL = "https://feeds.captivate.fm/inside-the-hutt/";

async function getEpisodes(): Promise<{ number: string; pubDate: string }[]> {
  try {
    const res = await fetch(RSS_URL, { next: { revalidate: 86400 } });
    const xml = await res.text();

    const episodes: { number: string; pubDate: string }[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xml)) !== null) {
      const item = match[1];
      const epMatch = item.match(/<itunes:episode>(\d+)<\/itunes:episode>/);
      const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);

      if (epMatch) {
        episodes.push({
          number: epMatch[1],
          pubDate: pubDateMatch ? pubDateMatch[1].trim() : "",
        });
      }
    }

    return episodes;
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.huttcapital.com";

  const episodes = await getEpisodes();

  const episodeEntries: MetadataRoute.Sitemap = episodes.map((ep) => ({
    url: `${baseUrl}/podcast/episode/${ep.number}`,
    lastModified: ep.pubDate ? new Date(ep.pubDate) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/podcast`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio-jobs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...episodeEntries,
  ];
}
