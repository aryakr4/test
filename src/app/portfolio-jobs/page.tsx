"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { ExternalIcon } from "@/components/ExternalIcon";

type Filter = "all" | "fund" | "portfolio";

const fundManagerRoles = [
  { name: "Anagram", url: "https://jobs.ashbyhq.com/Anagram", showIcon: true },
  { name: "BITKRAFT Ventures", url: "https://www.bitkraft.vc/careers/" },
  { name: "BlockTower Capital", url: "https://www.ar.ca/careers" },
  { name: "Fabric Ventures", url: "https://careers.fabric.vc/jobs" },
  { name: "Variant", url: "https://variant.fund/careers/" },
];

const portfolioCompanyRoles = [
  { name: "Archetype - Portfolio Companies", url: "https://jobs.archetype.fund/jobs" },
  { name: "Blockchain Capital - Portfolio Companies", url: "https://jobs.blockchaincapital.com/companies" },
  { name: "Collab+Currency - Portfolio Companies", url: "https://www.collabcurrency.com/portfolio/" },
  { name: "Fabric Ventures - Portfolio Companies", url: "https://careers.fabric.vc/jobs" },
  { name: "Framework Ventures - Portfolio Companies", url: "https://jobs.framework.ventures/companies" },
  { name: "Variant - Portfolio Companies", url: "https://variant.getro.com/jobs" },
  { name: "Volt Capital - Portfolio Companies", url: null },
  { name: "Amber Group", url: "https://www.ambergroup.io/careers" },
  { name: "Bitwave", url: "https://www.bitwave.io/careers" },
  { name: "Easy Crypto", url: "https://hub.easycrypto.com/" },
  { name: "Flipside Crypto", url: "https://flipsidecrypto.breezy.hr/" },
  { name: "Metaversal", url: "https://www.metaversal.gg/careers" },
  { name: "Nansen", url: "https://www.nansen.ai/careers" },
  { name: "Polemos", url: null },
  { name: "Syndicate", url: "https://jobs.ashbyhq.com/syndicate" },
  { name: "Wintermute", url: "https://jobs.lever.co/wintermute-trading" },
];

function RoleItem({ name, url, showIcon }: { name: string; url: string | null; showIcon?: boolean }) {
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-coral hover:opacity-100 transition-all"
      >
        {name}
        {showIcon && <ExternalIcon size={12} />}
      </a>
    );
  }
  return (
    <span className="inline-flex items-center gap-2">
      <span className="text-white/40">{name}</span>
      <span className="text-[10px] tracking-[0.1em] uppercase text-white/25 border border-white/15 rounded px-1.5 py-0.5 font-medium">No roles</span>
    </span>
  );
}

export default function PortfolioJobs() {
  const [filter, setFilter] = useState<Filter>("all");

  const filters: { label: string; value: Filter }[] = [
    { label: "All", value: "all" },
    { label: "Fund Manager", value: "fund" },
    { label: "Portfolio Company", value: "portfolio" },
  ];

  const showFund = filter === "all" || filter === "fund";
  const showPortfolio = filter === "all" || filter === "portfolio";

  return (
    <main className="px-10 md:px-20 lg:px-32 pb-20">
      <div className="max-w-5xl mt-16 lg:mt-24">
        {/* Page Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-coral text-3xl md:text-4xl mb-6"
        >
          Portfolio Jobs
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/90 text-base leading-8 italic mb-8 tracking-wide max-w-2xl"
        >
          In addition to those listed below, our managers are often hiring for
          roles that aren&rsquo;t listed on a jobs or careers page, so please
          reach out if you are looking for investment or operational roles within
          blockchain/crypto venture capital.
        </motion.p>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`text-xs tracking-[0.15em] font-semibold uppercase px-4 py-2 rounded-full border transition-all ${
                filter === f.value
                  ? "bg-coral text-white border-coral"
                  : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white/80"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        <div className={`grid grid-cols-1 gap-10 md:gap-16 ${showFund && showPortfolio ? "md:grid-cols-2" : ""}`}>
          {/* Fund Manager Roles */}
          <AnimatePresence>
            {showFund && (
              <motion.div
                key="fund"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-coral text-xs tracking-[0.2em] font-semibold mb-6 uppercase">
                  Fund Manager Roles
                </h3>

                <ul className="space-y-4">
                  {fundManagerRoles.map((role, i) => (
                    <motion.li
                      key={role.name}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="text-white/80 text-sm tracking-wide"
                    >
                      <RoleItem name={role.name} url={role.url} showIcon={role.showIcon} />
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Portfolio Company or Protocol Roles */}
          <AnimatePresence>
            {showPortfolio && (
              <motion.div
                key="portfolio"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-coral text-xs tracking-[0.2em] font-semibold mb-6 uppercase">
                  Portfolio Company or Protocol Roles
                </h3>

                <ul className="space-y-4">
                  {portfolioCompanyRoles.map((company, i) => (
                    <motion.li
                      key={company.name}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="text-white/80 text-sm tracking-wide"
                    >
                      <RoleItem name={company.name} url={company.url} />
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Other */}
        <div className="mt-10 md:mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-coral text-xs tracking-[0.2em] font-semibold mb-6 uppercase"
          >
            Other
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white/80 text-sm tracking-wide"
          >
            <a
              href="https://jobs.theblockchainassociation.org/companies"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-coral hover:opacity-100 transition-all"
            >
              Blockchain Association Job Board
            </a>{" "}
            (open roles with blockchain/crypto companies)
          </motion.p>
        </div>

      </div>
    </main>
  );
}
