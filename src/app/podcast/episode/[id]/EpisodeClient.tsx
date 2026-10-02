"use client";

import Link from "next/link";

type EpisodeLink = {
  number: string;
  title: string;
} | null;

type Props = {
  title: string;
  episodeNumber: string;
  guid: string;
  pubDate: string;
  description: string;
  prevEpisode: EpisodeLink;
  nextEpisode: EpisodeLink;
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function cleanDescription(html: string): string {
  return html
    .replace(/<p>\s*(&nbsp;|\u00a0)?\s*<\/p>/gi, "")
    .replace(/(<br\s*\/?>)+/gi, "<br />")
    .trim();
}

export function EpisodeClient({
  title,
  episodeNumber,
  guid,
  pubDate,
  description,
  prevEpisode,
  nextEpisode,
}: Props) {
  const playerUrl = `https://player.captivate.fm/episode/${guid}`;

  return (
    <main>
      {/* Hero */}
      <div className="py-20 md:py-28 px-10 md:px-20 lg:px-32">
        <div
        >
          <Link
            href="/podcast"
            className="text-white/50 hover:text-coral text-sm tracking-wide inline-flex items-center gap-2 mb-8"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to all episodes
          </Link>
        </div>

        <h1
          className="font-serif text-coral text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
        >
          Episode {episodeNumber} &mdash; {title}
        </h1>

        {pubDate && (
          <p
            className="text-white/50 text-sm tracking-wide mb-10"
          >
            {formatDate(pubDate)} &bull; Inside the Hutt &bull; Hutt Capital
          </p>
        )}

        {/* Captivate Embedded Player */}
        <div
          className="w-full max-w-4xl"
        >
          <iframe
            src={playerUrl}
            width="100%"
            height="170"
            style={{ border: "none" }}
            scrolling="no"
            className="rounded-xl shadow-lg h-[220px] sm:h-[170px]"
            allow="autoplay"
            title={`Episode ${episodeNumber} — ${title}`}
          />
        </div>

        {/* Description */}
        {description && (
          <div
            className="mt-12 max-w-3xl"
          >
            <h2 className="font-serif text-coral text-2xl mb-6">About this episode</h2>
            <div
              className="text-white/80 text-sm leading-7 tracking-wide max-w-none
                [&_p]:mb-4 [&_p:empty]:hidden [&_strong]:text-white/90 [&_em]:text-white/70
                [&_a]:text-coral [&_a:hover]:text-coral/80 [&_a]:underline
                [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:text-white/80"
              dangerouslySetInnerHTML={{ __html: cleanDescription(description) }}
            />
          </div>
        )}

        {/* Disclosures */}
        <details
          className="mt-12 max-w-3xl group"
        >
          <summary className="text-white/40 text-xs tracking-wide cursor-pointer hover:text-white/60">
            Disclosures
          </summary>
          <div className="mt-4 text-white/30 text-xs leading-6 tracking-wide space-y-3">
            <p>
              Views expressed in the &ldquo;Inside the Hutt&rdquo; podcast, or any video, blog, social media post or similar content produced or posted by Hutt Capital (&ldquo;Content&rdquo;) are those of the individual Hutt Capital personnel quoted therein and are not the views of Hutt Capital LLC, an Oregon limited liability company (&ldquo;Hutt Capital&rdquo;) or its affiliates. Hutt Capital is an exempt reporting adviser filed with the Securities and Exchange Commission. Filing as an exempt reporting adviser does not imply any special skill or training. The Content is not directed to any investors or potential investors, and does not constitute an offer to sell &mdash; or a solicitation of an offer to buy &mdash; any securities, and may not be used or relied upon in evaluating the merits of any investment.
            </p>
            <p>
              The Content available on this website &mdash; and available on any associated distribution platforms and any public Hutt Capital online social media accounts, platforms, and sites (collectively, &ldquo;content distribution outlets&rdquo;) &mdash; should not be construed as or relied upon in any manner as investment, legal, tax, or other advice. You should consult your own advisers as to legal, business, tax, and other related matters concerning any investment. Any projections, estimates, forecasts, targets, prospects and/or opinions expressed in these materials are subject to change without notice and may differ or be contrary to opinions expressed by others.
            </p>
            <p>
              Under no circumstances should any Content or other information provided on this website &mdash; or on associated content distribution outlets &mdash; be construed as an offer soliciting the purchase or sale of any security or interest in any pooled investment vehicle sponsored, discussed, or mentioned by Hutt Capital personnel. Nor should it be construed as an offer to provide investment advisory services; an offer to invest in a Hutt Capital-managed pooled investment vehicle will be made separately and only by means of the confidential offering documents of the specific pooled investment vehicles &mdash; which should be read in their entirety, and only to those who, among other requirements, meet certain qualifications under federal securities laws.
            </p>
            <p>
              There can be no assurances that Hutt Capital&rsquo;s investment objectives will be achieved or investment strategies will be successful. Any investment in a vehicle managed by Hutt Capital involves a high degree of risk including the risk that the entire amount invested may be lost. Past results of Hutt Capital&rsquo;s investments, pooled investment vehicles, or investment strategies are not necessarily indicative of future results.
            </p>
            <p>
              Additional important information about Hutt Capital, including our Form ADV filing, is available at the SEC&rsquo;s website:{" "}
              <a
                href="http://www.adviserinfo.sec.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-coral underline"
              >
                www.adviserinfo.sec.gov
              </a>
            </p>
          </div>
        </details>

        {/* Prev / Next Navigation */}
        {(prevEpisode || nextEpisode) && (
          <div
            className="mt-16 max-w-3xl border-t border-white/10 pt-8 flex items-start justify-between gap-6"
          >
            {prevEpisode ? (
              <Link
                href={`/podcast/episode/${prevEpisode.number}`}
                className="group flex-1 min-w-0"
              >
                <span className="text-white/30 text-xs tracking-[0.15em] uppercase block mb-2">
                  &larr; Previous
                </span>
                <p className="font-serif text-white/70 group-hover:text-coral text-base md:text-lg truncate">
                  Ep {prevEpisode.number} &mdash; {prevEpisode.title}
                </p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {nextEpisode ? (
              <Link
                href={`/podcast/episode/${nextEpisode.number}`}
                className="group flex-1 min-w-0 text-right"
              >
                <span className="text-white/30 text-xs tracking-[0.15em] uppercase block mb-2">
                  Next &rarr;
                </span>
                <p className="font-serif text-white/70 group-hover:text-coral text-base md:text-lg truncate">
                  Ep {nextEpisode.number} &mdash; {nextEpisode.title}
                </p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        )}
      </div>
    </main>
  );
}
