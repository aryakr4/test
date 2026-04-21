# Hutt Capital

Hutt Capital is a blockchain venture capital fund-of-funds platform. We partner with leading blockchain VC firms to provide diversified exposure to the most promising blockchain & crypto startups globally through fund, secondary, and direct investment strategies.

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
  app/
    page.tsx            Home — portfolio listings & contact info
    layout.tsx          Root layout with fonts & navigation
    globals.css         Global styles & Tailwind theme
    not-found.tsx       404 page
    robots.ts           robots.txt generator
    sitemap.ts          sitemap.xml generator
    podcast/            Podcast index + dynamic episode pages
    team/               Team page
    portfolio-jobs/     Portfolio jobs page
    terms/              Terms of Use
  components/
    Navbar.tsx          Site navigation
    Footer.tsx          Site footer
    CopyButton.tsx      One-click copy-to-clipboard
    ExternalIcon.tsx    Inline external-link icon
    MotionProvider.tsx  Respects prefers-reduced-motion
  lib/
    animations.ts       Shared Framer Motion variants
    nav-links.ts        Central navigation config
    rss.ts              Podcast RSS feed parsing
public/
  headshots/            Team photos
  logos/                Company logos & favicon
```

## Pages

- **Home** — Company overview, fund investments, direct & co-investments, contact details
- **Team** — Team member profiles
- **Podcast** — Show hub + per-episode pages sourced from RSS
- **Portfolio Jobs** — Job listings across portfolio companies
- **Terms** — Terms of Use
