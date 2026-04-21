"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/nav-links";
import { CopyButton } from "@/components/CopyButton";

const socials = [
  {
    label: "X",
    href: "https://x.com/HuttCap",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/huttcapital/",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Medium",
    href: "https://medium.com/@huttcapital",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
  {
    label: "Apple Podcasts",
    href: "https://podcasts.apple.com/us/podcast/inside-the-hutt/id1716917531",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6a8.4 8.4 0 018.4 8.4c0 2.607-1.194 4.937-3.063 6.474a.6.6 0 01-.837-.087.6.6 0 01.087-.837A7.17 7.17 0 0019.2 12 7.2 7.2 0 0012 4.8 7.2 7.2 0 004.8 12c0 2.25 1.037 4.26 2.663 5.576a.6.6 0 01-.75.937A8.37 8.37 0 013.6 12 8.4 8.4 0 0112 3.6zm0 3a5.4 5.4 0 015.4 5.4c0 1.623-.72 3.08-1.856 4.07a.6.6 0 11-.787-.906A4.17 4.17 0 0016.2 12 4.2 4.2 0 0012 7.8 4.2 4.2 0 007.8 12c0 1.276.57 2.42 1.47 3.192a.6.6 0 01-.774.918A5.37 5.37 0 016.6 12 5.4 5.4 0 0112 6.6zm0 3.6a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zm-.9 4.5h1.8l.6 5.7a.3.3 0 01-.3.3h-2.4a.3.3 0 01-.3-.3l.6-5.7z" />
      </svg>
    ),
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/show/4NqtpCcdWWtoo54FrY95HT",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-green-darker">
      <div className="relative px-10 md:px-20 lg:px-32 pt-20 pb-8">
        {/* Main grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16"
        >
          {/* Col 1: Logo + description */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/logos/hutt_logo_transparent.png"
                alt="Hutt Capital"
                width={160}
                height={48}
              />
            </Link>
            <p className="text-white/40 text-xs leading-relaxed tracking-wide max-w-[220px]">
              A blockchain venture capital fund‑of‑funds platform. Partnering with leading crypto VC firms since 2018.
            </p>
          </motion.div>

          {/* Col 2: Navigate */}
          <motion.div variants={itemVariants}>
            <p className="text-xs tracking-[0.18em] uppercase text-coral mb-6 font-medium">
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const cls =
                  "group flex items-center gap-0 text-white/70 hover:text-white text-sm tracking-wide transition-colors duration-200";
                const inner = (
                  <>
                    <span className="block w-0 group-hover:w-4 h-px bg-coral mr-0 group-hover:mr-2 transition-all duration-300 ease-out shrink-0" />
                    {link.label}
                  </>
                );
                return link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cls}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link key={link.href} href={link.href} className={cls}>
                    {inner}
                  </Link>
                );
              })}
            </nav>
          </motion.div>

          {/* Col 3: Connect */}
          <motion.div variants={itemVariants}>
            <p className="text-xs tracking-[0.18em] uppercase text-coral mb-6 font-medium">
              Connect
            </p>
            <div className="flex items-center gap-2 mb-6">
              <a
                href="mailto:brooke@huttcapital.com"
                className="text-white/70 hover:text-white text-sm tracking-wide transition-colors duration-200 hover:underline underline-offset-4 select-all"
              >
                brooke@huttcapital.com
              </a>
              <CopyButton text="brooke@huttcapital.com" />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="text-white/40 hover:text-coral transition-all duration-200 hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Col 4: Locations */}
          <motion.div variants={itemVariants}>
            <p className="text-xs tracking-[0.18em] uppercase text-coral mb-6 font-medium">
              Locations
            </p>
            <div className="flex flex-col gap-5 text-sm">
              <div>
                <p className="text-white/50 tracking-wide">Portland, OR</p>
                <p className="text-white/30 text-xs mt-0.5">United States</p>
              </div>
              <div>
                <p className="text-white/50 tracking-wide">West Palm Beach, FL</p>
                <p className="text-white/30 text-xs mt-0.5">United States</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="relative border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Hutt Capital. All rights reserved.
          </p>
          <Link
            href="/terms"
            className="text-white/30 hover:text-white/60 text-xs tracking-wide transition-colors duration-200"
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
