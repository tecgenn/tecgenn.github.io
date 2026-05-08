# AGENTS.md - TecGenn Landing Page

## Project Overview

Landing page for TecGenn - digital products focused on AI tools (VidPilot, ClipNews, Ebook). Single-page React app built with Vite.

## Commands

```bash
pnpm dev       # Start dev server (port 3000)
pnpm build     # Production build → dist/
pnpm preview   # Preview production build
pnpm lint      # Fix all linting/formatting with Biome
pnpm lint:check # Check without fixing
pnpm typecheck  # TypeScript check (no emit)
```

**Order**: `lint -> typecheck -> build`

## Architecture

- **Entry**: `index.tsx` → `src/App.tsx`
- **Components**: `src/components/` (page sections)
- **UI Components**: `src/components/ui/` (reusable: Button, Card, Badge, SectionHeader, Modal, FaqItem)
- **Background**: `src/components/ShapeGrid.tsx` (react-bits animated grid background)
- **Styles**: `src/index.css` (Tailwind v4 + custom classes)
- **Public Assets**: `public/assets/` (logo.png, product images, og-image.png) - served at `/assets/`
- **SEO**: `public/robots.txt`, `public/sitemap.xml`

## Tech Stack

- **React 19** + TypeScript
- **Vite 6** with `@tailwindcss/vite` plugin
- **Tailwind CSS v4** (via `@import "tailwindcss"`)
- **Biome** for linting/formatting (replaces ESLint + Prettier)
- **pnpm** as package manager (always use pnpm, never npm)

## Conventions

- Single quotes for JS/TS, double quotes for JSX
- `React.FC` type for all components
- All buttons must have explicit `type="button"`
- Use `as="a"` + `href` on Button component for links
- UI components follow patterns in `src/components/ui/AGENTS.md`
- Colors: bg `#0A0A1A`, cyan `#33D1FF`/`#06B6D4`, blue `#3B82F6`/`#2563EB`

## Key Notes

- No `tailwind.config.js` - Tailwind v4 uses CSS-first configuration
- No `postcss.config.js` - `@tailwindcss/vite` plugin handles it
- Interactive background uses ShapeGrid from react-bits (canvas-based animated grid)
- Sections are transparent - background color comes from `body` in `index.html`
- All external links use `target="_blank" rel="noopener noreferrer"`
- Logo is `logo.png` in `public/assets/`
- Google Analytics uses placeholder `GA_MEASUREMENT_ID` - replace before deploy
- OG image at `/assets/og-image.png` (1200x630) for social sharing
- Smooth scroll enabled via CSS `scroll-behavior: smooth`
- Header has responsive mobile menu with hamburger toggle
