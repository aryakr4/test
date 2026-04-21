"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative px-10 md:px-20 lg:px-32 pb-20 flex flex-col items-center justify-center min-h-[70vh] text-center overflow-hidden">
      {/* Faint background watermark */}
      <span
        className="absolute font-serif text-white/[0.03] text-[12rem] md:text-[22rem] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        404
      </span>

      {/* Decorative rule */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        style={{ originX: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-10 h-px bg-coral mb-8"
      />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-serif text-coral text-7xl md:text-9xl mb-5"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-white/50 text-xs tracking-[0.25em] uppercase mb-3"
      >
        Page Not Found
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="text-white/35 text-sm tracking-wide mb-8 max-w-xs"
      >
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link
          href="/"
          className="text-coral hover:text-coral/80 text-sm tracking-wide transition-colors border border-coral/40 px-6 py-3 rounded-full hover:border-coral"
        >
          Back to Home
        </Link>
      </motion.div>
    </main>
  );
}
