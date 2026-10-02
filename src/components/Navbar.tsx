"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/nav-links";

function NavLink({
  href,
  label,
  external,
  active,
  onClick,
}: {
  href: string;
  label: string;
  external?: boolean;
  active: boolean;
  onClick?: () => void;
}) {
  const className = `relative text-sm tracking-wide ${
    active ? "text-white font-semibold" : "text-white/70 hover:text-white"
  }`;

  const content = (
    <>
      {label}
      {active && (
        <span
          className="absolute -bottom-1 left-0 right-0 h-px bg-coral"
        />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {content}
    </Link>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-white/10 py-2 px-10 md:px-20 lg:px-32">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logos/hutt_logo_transparent.png"
            alt="Hutt Capital"
            width={160}
            height={48}
            priority
            loading="eager"
            style={{ height: "auto" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              {...link}
              active={pathname === link.href}
            />
          ))}

          {/* Social icons */}
          <div className="flex items-center gap-3 ml-1">
            <a
              href="https://x.com/HuttCap"
              target="_blank"
              rel="noopener noreferrer"
              title="X"
              className="text-white/50 hover:text-white"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/huttcapital/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="text-white/50 hover:text-white"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* CTA */}
          <a
            href="mailto:brooke@huttcapital.com"
            className="ml-2 text-sm tracking-wide border border-coral text-coral px-4 py-1.5 rounded-sm hover:bg-coral hover:text-white"
          >
            Contact
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
        {mobileOpen && (
          <nav
            className="md:hidden mt-6 flex flex-col gap-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <div
                key={link.href}
              >
                <NavLink
                  {...link}
                  active={pathname === link.href}
                  onClick={() => setMobileOpen(false)}
                />
              </div>
            ))}
            <a
              href="mailto:brooke@huttcapital.com"
              onClick={() => setMobileOpen(false)}
              className="self-start text-sm tracking-wide border border-coral text-coral px-4 py-1.5 rounded-sm hover:bg-coral hover:text-white"
            >
              Contact
            </a>
          </nav>
        )}
    </header>
  );
}
