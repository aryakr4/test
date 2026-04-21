import { PodcastClient } from "./PodcastClient";
import { RSS_URL, getTag, getAttr, getCdata } from "@/lib/rss";

async function getEpisodesFromRSS() {
  const res = await fetch(RSS_URL, { next: { revalidate: 86400 } });
  const xml = await res.text();

  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  let latestEpisode: {
    title: string;
    pubDate: string;
    audioUrl: string;
    duration: string;
    image: string;
    episodeNumber: string;
    guid: string;
  } | null = null;

  const episodes: { number: number; guest: string; company: string; summary: string }[] = [];

  while ((match = itemRegex.exec(xml)) !== null) {
    const item = match[1];
    const epMatch = item.match(/<itunes:episode>(\d+)<\/itunes:episode>/);
    const episodeNumber = epMatch ? epMatch[1] : "";
    const title = getTag(item, "title");

    // Extract guest and company from title like "Guest Name (Company)"
    const titleMatch = title.match(/^(.+?)\s*\((.+?)\)\s*$/);
    const guest = titleMatch ? titleMatch[1].trim() : title;
    const company = titleMatch ? titleMatch[2].trim() : "";

    // Get plain-text summary from itunes:summary or strip HTML from description
    const rawSummary =
      getTag(item, "itunes:summary") ||
      (getCdata(item, "description") || getTag(item, "description")).replace(/<[^>]*>/g, "");
    const summary = rawSummary.replace(/\s+/g, " ").trim().slice(0, 120);

    if (!latestEpisode) {
      latestEpisode = {
        title,
        pubDate: getTag(item, "pubDate"),
        audioUrl: getAttr(item, "enclosure", "url"),
        duration: getTag(item, "itunes:duration"),
        image: getAttr(item, "itunes:image", "href"),
        episodeNumber,
        guid: getTag(item, "guid"),
      };
    }

    if (episodeNumber) {
      episodes.push({
        number: parseInt(episodeNumber, 10),
        guest,
        company,
        summary,
      });
    }
  }

  // Sort by episode number descending
  episodes.sort((a, b) => b.number - a.number);

  return { latestEpisode, episodes };
}

export default async function Podcast() {
  const { latestEpisode, episodes } = await getEpisodesFromRSS();
  return <PodcastClient latestEpisode={latestEpisode} episodes={episodes} />;
}
