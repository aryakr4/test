"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalIcon } from "@/components/ExternalIcon";

type Episode = {
  title: string;
  pubDate: string;
  audioUrl: string;
  duration: string;
  image: string;
  episodeNumber: string;
  guid: string;
} | null;

type EpisodeListItem = {
  number: number;
  guest: string;
  company: string;
  summary: string;
};


export function PodcastClient({ latestEpisode, episodes }: { latestEpisode: Episode; episodes: EpisodeListItem[] }) {
  return (
    <main>
      <div className="relative overflow-hidden bg-[#0f1d3d] py-24 px-10 md:px-20 lg:px-32 text-center">
        <div className="relative">
          <div className="mb-6">
            <Image
              src="/logos/podcast_logo_white.jpg"
              alt="Inside the Hutt"
              width={180}
              height={180}
              className="rounded-xl mx-auto shadow-2xl ring-1 ring-white/10"
            />
          </div>
          <p className="text-coral text-xs tracking-[0.2em] font-semibold mb-4 uppercase">
            Podcast
          </p>
          <h1 className="font-serif text-white text-5xl md:text-7xl mb-4">
            Inside the Hutt
          </h1>
          <p className="text-white/60 text-sm tracking-wide">
            Hosted by Brooke Pollack &middot; Managing Partner, Hutt Capital
          </p>

          {/* Listen on — inline platform buttons */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <a
              href="https://podcasts.apple.com/us/podcast/inside-the-hutt/id1716917531"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm tracking-wide text-white/80 hover:text-white border border-white/15 hover:border-white/40 px-4 py-2 rounded-sm transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6a8.4 8.4 0 018.4 8.4c0 2.607-1.194 4.937-3.063 6.474a.6.6 0 01-.837-.087.6.6 0 01.087-.837A7.17 7.17 0 0019.2 12 7.2 7.2 0 0012 4.8 7.2 7.2 0 004.8 12c0 2.25 1.037 4.26 2.663 5.576a.6.6 0 01-.75.937A8.37 8.37 0 013.6 12 8.4 8.4 0 0112 3.6zm0 3a5.4 5.4 0 015.4 5.4c0 1.623-.72 3.08-1.856 4.07a.6.6 0 11-.787-.906A4.17 4.17 0 0016.2 12 4.2 4.2 0 0012 7.8 4.2 4.2 0 007.8 12c0 1.276.57 2.42 1.47 3.192a.6.6 0 01-.774.918A5.37 5.37 0 016.6 12 5.4 5.4 0 0112 6.6zm0 3.6a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zm-.9 4.5h1.8l.6 5.7a.3.3 0 01-.3.3h-2.4a.3.3 0 01-.3-.3l.6-5.7z" />
              </svg>
              Apple Podcasts
            </a>
            <a
              href="https://open.spotify.com/show/4NqtpCcdWWtoo54FrY95HT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm tracking-wide text-white/80 hover:text-white border border-white/15 hover:border-white/40 px-4 py-2 rounded-sm transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Spotify
            </a>
          </div>
        </div>
      </div>

      {/* Green section */}
      <div className="py-20 px-10 md:px-20 lg:px-32">
        {/* Hero Episode — Captivate Embed */}
        {latestEpisode && (
          <div className="mb-12">
            <h2 className="font-serif text-coral text-2xl md:text-3xl mb-6">
              Latest Episode
            </h2>
            <div className="w-full max-w-4xl">
              <iframe
                src={`https://player.captivate.fm/episode/${latestEpisode.guid}`}
                width="100%"
                height="170"
                style={{ border: "none" }}
                scrolling="no"
                className="rounded-xl shadow-lg h-[220px] sm:h-[170px]"
                allow="autoplay"
                title={`Episode ${latestEpisode.episodeNumber} — ${latestEpisode.title}`}
              />
            </div>
          </div>
        )}

        <p className="text-white/90 text-sm leading-7 tracking-wide mb-6">
          Hosted by Brooke Pollack, Managing Partner of Hutt Capital, join &ldquo;Inside the Hutt&rdquo; as we talk with leading blockchain venture capital investors to discuss their origins, investment approaches, recent trends, and how they&rsquo;re navigating this complex industry. Inside the Hutt provides invaluable insights for crypto enthusiasts and investment professionals alike.
        </p>
        <p className="text-white/90 text-sm leading-7 tracking-wide mb-8">
          Browse our episodes below or find the show on your favorite podcast player.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm tracking-wide">
          <a
            href="https://podcasts.apple.com/us/podcast/inside-the-hutt/id1716917531"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-coral transition-colors flex items-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6a8.4 8.4 0 018.4 8.4c0 2.607-1.194 4.937-3.063 6.474a.6.6 0 01-.837-.087.6.6 0 01.087-.837A7.17 7.17 0 0019.2 12 7.2 7.2 0 0012 4.8 7.2 7.2 0 004.8 12c0 2.25 1.037 4.26 2.663 5.576a.6.6 0 01-.75.937A8.37 8.37 0 013.6 12 8.4 8.4 0 0112 3.6zm0 3a5.4 5.4 0 015.4 5.4c0 1.623-.72 3.08-1.856 4.07a.6.6 0 11-.787-.906A4.17 4.17 0 0016.2 12 4.2 4.2 0 0012 7.8 4.2 4.2 0 007.8 12c0 1.276.57 2.42 1.47 3.192a.6.6 0 01-.774.918A5.37 5.37 0 016.6 12 5.4 5.4 0 0112 6.6zm0 3.6a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zm-.9 4.5h1.8l.6 5.7a.3.3 0 01-.3.3h-2.4a.3.3 0 01-.3-.3l.6-5.7z" />
            </svg>
            Apple Podcasts
            <ExternalIcon />
          </a>
          <span className="w-px h-4 bg-white/20 shrink-0" />
          <a
            href="https://open.spotify.com/show/4NqtpCcdWWtoo54FrY95HT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-coral transition-colors flex items-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            Spotify
            <ExternalIcon />
          </a>
        </div>
      </div>

      {/* Episodes */}
      <div className="bg-[#0f1d3d] py-16 px-10 md:px-20 lg:px-32">
        <p className="text-white/40 text-xs tracking-[0.2em] font-semibold uppercase text-center mb-12">
          All Episodes &middot; {episodes.length}
        </p>

        <div className="max-w-3xl mx-auto space-y-6">
          {episodes.map((ep) => (
            <div key={ep.number}>
              <Link
                href={`/podcast/episode/${ep.number}`}
                className="group flex items-start gap-4 py-4 border-b border-white/10 hover:border-coral/40 transition-colors"
              >
                <span className="text-white/30 text-sm font-mono w-8 flex-shrink-0 text-right mt-1">
                  {String(ep.number).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-serif text-white text-lg md:text-2xl group-hover:text-coral transition-colors">
                    {ep.guest}{ep.company ? ` (${ep.company})` : ""}
                  </p>
                  {ep.summary && (
                    <p className="text-white/40 text-xs leading-5 tracking-wide mt-1 line-clamp-2">
                      {ep.summary}{ep.summary.length === 120 ? "…" : ""}
                    </p>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
