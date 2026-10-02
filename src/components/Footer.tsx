"use client";

import Image from "next/image";
import Link from "next/link";
import { CopyButton } from "@/components/CopyButton";

export default function Footer() {
  return (
    <footer className="bg-green-darker">
      <div className="px-10 md:px-20 lg:px-32 pt-12 pb-8">
        {/* Logo + email */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
          <Link href="/" className="inline-block">
            <Image
              src="/logos/hutt_logo_transparent.png"
              alt="Hutt Capital"
              width={160}
              height={48}
            />
          </Link>
          <div className="flex items-center gap-2">
            <a
              href="mailto:brooke@huttcapital.com"
              className="text-white/70 hover:text-white text-sm tracking-wide hover:underline underline-offset-4 select-all"
            >
              brooke@huttcapital.com
            </a>
            <CopyButton text="brooke@huttcapital.com" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Hutt Capital. All rights reserved.
          </p>
          <Link
            href="/terms"
            className="text-white/30 hover:text-white/60 text-xs tracking-wide"
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
