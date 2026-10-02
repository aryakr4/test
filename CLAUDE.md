# Hutt Capital Website

## Project Overview
Hutt Capital is a blockchain venture capital fund-of-funds platform website. The site showcases their portfolio (fund investments & direct/co-investments), team, podcast, and portfolio jobs.

## Tech Stack
- **Framework:** Next.js 16.2.1 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Poppins (sans), Playfair Display (serif) via `next/font/google`

## Commands
- `npm run dev` — Start dev server (http://localhost:3000)
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Project Structure
```
src/
  app/
    page.tsx          — Home page (portfolio listings, contact)
    layout.tsx        — Root layout (fonts, Navbar, metadata)
    globals.css       — Global styles + Tailwind theme config
    podcast/          — Podcast page
    team/             — Team page
    portfolio-jobs/   — Portfolio jobs page
  components/
    Navbar.tsx        — Navigation bar
public/
  headshots/          — Team headshot images
  logos/              — Company logos + favicon
```

## Design System
- **Background:** Dark green (`#0F441F`)
- **Accent:** Coral (`#e64733`)
- **Text:** White with varying opacity (white/80, white/90)
- **Serif headings:** Playfair Display (via `font-serif`)
- **Body text:** Poppins (via `font-sans`)

## Conventions
- Use `"use client"` directive for components with interactivity
- No animations or transitions — elements render static, hover states change instantly
- Tailwind CSS v4 theme tokens defined in `globals.css` under `@theme inline`
- Path alias: `@/` maps to `src/`
