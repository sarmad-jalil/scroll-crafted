# Scroll Crafted

A cinematic, scroll-driven portfolio experience built with **Vite + React + TypeScript**. It showcases parallax, scroll reveals, text reveals, and magnetic hover interactions using **Framer Motion**, with styling via **Tailwind CSS** and a set of **shadcn/ui (Radix UI)** primitives.

> Note: despite the parent folder name, this is **not** a Next.js app.

## Routes

- `/` — Home (cinematic hero, visual reel, selected works, process, CTA)
- `/projects` — Filterable project grid (category chips with animated transitions)
- `/case-study/:slug` — Case study detail page (parallax hero + story sections)
- `*` — 404

## Tech Stack

- **Vite 5** (dev server + build)
- **React 18** + **TypeScript**
- **react-router-dom** for routing
- **Framer Motion** for scroll/entrance animations
- **Tailwind CSS** (+ `tailwindcss-animate`) for styling
- **shadcn/ui** components (in `src/components/ui`) built on **Radix UI**
- **TanStack Query** provider scaffolded in the app shell
- **Vitest** + Testing Library setup (jsdom)
- **Playwright** config scaffolded (see Testing section)

## Project Structure

- `src/main.tsx` — React entry
- `src/App.tsx` — Providers + route table
- `src/pages/*` — Route pages (`Index`, `Projects`, `CaseStudy`, `NotFound`)
- `src/components/Navigation.tsx` — Top nav + mobile overlay
- `src/components/animations/*` — Scroll/interaction primitives:
	- `LoadingScreen` (intro overlay)
	- `ScrollReveal` (in-view entrance)
	- `TextReveal` (staggered word reveal)
	- `ParallaxSection` (scroll-based translateY)
	- `MagneticButton` (hover “magnetic” interaction)
- `src/index.css` — Theme tokens (CSS variables) + cinematic utility classes

## Getting Started

### 1) Install dependencies

Use the package manager you prefer:

```bash
# npm
npm install

# bun
bun install

# pnpm
pnpm install
```

### 2) Run the dev server

```bash
npm run dev
```

The Vite dev server is configured to run on **http://localhost:8080**.

### 3) Build & preview production

```bash
npm run build
npm run preview
```

## Scripts

- `dev` — start Vite dev server
- `build` — production build
- `build:dev` — build using `--mode development`
- `preview` — preview the production build
- `lint` — run ESLint
- `test` — run unit tests once (Vitest)
- `test:watch` — run unit tests in watch mode

## Testing

### Unit tests (Vitest)

```bash
npm test
```

### E2E tests (Playwright)

This repo includes `playwright.config.ts`, but it uses `lovable-agent-playwright-config`.
If you want to run Playwright locally, ensure that dependency is available in your environment, then run:

```bash
npx playwright test
```

## Development Notes

- Path alias: `@/*` maps to `src/*`.
- App-wide providers live in `src/App.tsx` (TanStack Query, tooltips, toasters, router).
- Most of the “cinematic” look comes from CSS tokens/utilities in `src/index.css` (e.g. `glass-panel`, `cinematic-overlay`, `section-padding`).
