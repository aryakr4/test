"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { CopyButton } from "@/components/CopyButton";

const fundInvestments = [
  { name: "1confirmation", url: "https://www.1confirmation.com" },
  { name: "6th Man Ventures", url: "https://www.6thman.ventures" },
  { name: "Alliance", url: "https://alliance.xyz" },
  { name: "Archetype", url: "https://archetype.fund" },
  { name: "BITKRAFT Ventures", url: "https://www.bitkraft.vc" },
  { name: "Blockchain Capital", url: "https://blockchain.capital" },
  { name: "Blockchain Ventures", url: "https://www.blockchain.com/ventures" },
  { name: "BlockTower Capital", url: "https://www.blocktower.com" },
  { name: "Castle Island Ventures", url: "https://www.castleisland.vc" },
  { name: "Collab+Currency", url: "https://www.collabcurrency.com" },
  { name: "DBA", url: "https://dba.xyz" },
  { name: "Fabric Ventures", url: "https://www.fabric.vc" },
  { name: "Faction", url: "https://www.faction.vc" },
  { name: "First Commit" },
  { name: "Framework Ventures", url: "https://framework.ventures" },
  { name: "Frictionless", url: "https://frictionless.capital" },
  { name: "Galileo Group" },
  { name: "Hashed", url: "https://www.hashed.com" },
  { name: "Hydra Ventures", url: "https://www.hydraventures.xyz" },
  { name: "IDEO CoLab Ventures", url: "https://www.ideocolab.com" },
  { name: "Inflection", url: "https://inflection.fund" },
  { name: "Lattice", url: "https://lattice.fund" },
  { name: "Public Works" },
  { name: "Sats Ventures", url: "https://www.satsventures.com" },
  { name: "Seed Club Ventures", url: "https://seedclub.ventures/" },
  { name: "Topology", url: "https://www.topology.vc" },
  { name: "Tribe Capital", url: "https://tribecap.co" },
  { name: "Variant", url: "https://variant.fund" },
  { name: "Volt Capital" },
];

const directInvestments = [
  { name: "Amber Group", url: "https://www.ambergroup.io" },
  { name: "Anagram", url: "https://www.anagram.xyz" },
  { name: "Bitwave", url: "https://www.bitwave.io" },
  { name: "BlockFi", url: "https://blockfi.com" },
  { name: "Flipside Crypto", url: "https://flipsidecrypto.xyz" },
  { name: "Forte", url: "https://www.forte.io" },
  { name: "Metaversal", url: "https://metaversal.gg" },
  { name: "Nansen", url: "https://www.nansen.ai" },
  { name: "POAP", url: "https://poap.xyz" },
  { name: "Syndicate", url: "https://syndicate.io" },
  { name: "Wintermute", url: "https://www.wintermute.com" },
  { name: "Yellow Card", url: "https://yellowcard.io" },
];

function InvestmentItem({ name, url }: { name: string; url?: string }) {
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors duration-200 tracking-wide"
      >
        <span>{name}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="opacity-0 -translate-x-0.5 translate-y-0.5 text-coral transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
        >
          <path d="M2.5 7.5L7.5 2.5" />
          <path d="M3.5 2.5H7.5V6.5" />
        </svg>
      </a>
    );
  }
  return (
    <span
      className="text-white/40 tracking-wide cursor-help"
      title="No public website available"
      aria-label={`${name} — no public website available`}
    >
      {name}
    </span>
  );
}

export default function Home() {
  return (
    <main className="px-10 md:px-20 lg:px-32 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 mt-16 lg:mt-24">
        {/* Left Column */}
        <div>
          <h1 className="sr-only">Hutt Capital — Blockchain Venture Capital Fund of Funds</h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/90 text-base leading-8 max-w-2xl mb-20 tracking-wide"
          >
            Hutt Capital is a blockchain venture capital fund of funds platform.
            We partner with leading blockchain VC firms to provide diversified
            exposure to the most promising blockchain &amp; crypto startups
            globally through fund, secondary, and direct investment strategies.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-coral text-3xl md:text-4xl mb-10"
          >
            Portfolio
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-coral text-xs tracking-[0.2em] font-semibold uppercase border-b border-white/10 pb-3 mb-6"
              >
                Fund Investments
              </motion.h3>

              <ul className="space-y-4">
                {fundInvestments.map((fund, i) => (
                  <motion.li
                    key={fund.name}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="text-sm"
                  >
                    <InvestmentItem name={fund.name} url={"url" in fund ? fund.url : undefined} />
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-coral text-xs tracking-[0.2em] font-semibold uppercase border-b border-white/10 pb-3 mb-6"
              >
                Direct &amp; Co-Investments
              </motion.h3>

              <ul className="space-y-4">
                {directInvestments.map((company, i) => (
                  <motion.li
                    key={company.name}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="text-sm"
                  >
                    <InvestmentItem name={company.name} url={"url" in company ? company.url : undefined} />
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column - Contact */}
        <div className="lg:pt-8 lg:border-l lg:border-white/10 lg:pl-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-coral text-3xl md:text-4xl mb-10"
          >
            Contact
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <h3 className="text-coral text-xs tracking-[0.2em] font-semibold mb-4 uppercase">
              Inquiries
            </h3>
            <div className="flex items-center gap-2 mb-12">
              <a
                href="mailto:brooke@huttcapital.com"
                className="text-white/80 hover:text-white transition-colors duration-200 tracking-wide text-base select-all"
              >
                brooke@huttcapital.com
              </a>
              <CopyButton text="brooke@huttcapital.com" />
            </div>

            <h3 className="text-coral text-xs tracking-[0.2em] font-semibold mb-4">
              LOCATION
            </h3>

            <div className="space-y-3 text-white/80 text-sm tracking-wide">
              <p>Portland, OR</p>
              <p>West Palm Beach, FL</p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
