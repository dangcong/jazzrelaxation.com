# Jazz Relaxation — Project Guide

## Project Overview

**Jazz Relaxation** is a music label landing page website for a jazz recording studio.
- **Domain:** jazzrelaxation.com
- **Purpose:** Showcase artists, albums, and Spotify links for a jazz relaxation music label

---

## Visual Identity & Design System

### Color Palette (Warm Vintage Café Jazz)
Inspired by a cozy jazz café with amber lighting, brick walls, and wooden accents:

| Role            | Color             | Usage                        |
|-----------------|-------------------|------------------------------|
| Background Dark | `#1a1208`         | Page background              |
| Background Mid  | `#2c1f0e`         | Section backgrounds          |
| Brick / Accent  | `#7a3b1e`         | Borders, dividers, accents   |
| Warm Amber      | `#c8832a`         | Primary highlight, CTAs      |
| Gold            | `#e8a838`         | Headings, hover states       |
| Cream           | `#f0e6cc`         | Body text, light surfaces    |
| Off-White       | `#fdf6e3`         | Card backgrounds, text       |
| Shadow          | `rgba(0,0,0,0.6)` | Overlays, shadows            |

### Typography
- **Headings:** Playfair Display (serif) — elegant, classic jazz feel
- **Body:** Lato or Inter (sans-serif) — clean, readable
- **Accent / Labels:** Cormorant Garamond — vintage, luxurious

### Aesthetic Principles
- Warm, dim lighting feel — no harsh whites or bright colors
- Vintage / retro vibe — think 1950s jazz club meets modern web
- Rich textures: subtle grain, brick, wood grain backgrounds
- Atmospheric: moody, intimate, cozy
- Dark background with warm light elements (like candles/pendant lights)

---

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, flexbox/grid, animations
- **Vanilla JavaScript** — no framework required (keep it simple)
- **No build tools** — plain files, deployable anywhere
- **Spotify Embed API** — for album/playlist embeds
- **Google Fonts** — Playfair Display, Lato, Cormorant Garamond

---

## Website Structure

```
index.html          — Main landing page
css/
  style.css         — Main stylesheet
  mobile.css        — Mobile-specific overrides (or use media queries inline)
js/
  main.js           — Scroll effects, interactivity
assets/
  images/           — Artist photos, album covers, background textures
  fonts/            — Any local fonts if needed
```

---

## Page Sections (in order)

1. **Hero** — Full-screen atmospheric image/video, label name, tagline, CTA to listen
2. **About** — Brief label description, brand story, warm inviting copy
3. **Artists** — Grid of artists with photo, name, short bio, links
4. **Albums / Music** — Album cards with cover art + Spotify embed or link
5. **Spotify Playlists** — Embedded Spotify players (iframes)
6. **Contact / Footer** — Social links, Spotify profile, contact email

---

## Key Features

### Spotify Integration
- Embed individual albums using Spotify's iframe embed:
  ```html
  <iframe src="https://open.spotify.com/embed/album/ALBUM_ID"
          width="100%" height="352"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy">
  </iframe>
  ```
- Also support playlist embeds and single track embeds
- Each album card links out to Spotify full page

### Artists Section
- Responsive grid: 3 columns desktop → 2 tablet → 1 mobile
- Artist card: circular photo, name, instrument/style, short bio, Spotify artist link

### Mobile-First Design
- All layouts must work on 320px+ screens
- Touch-friendly tap targets (min 44px)
- Hamburger nav on mobile
- Spotify embeds collapse to compact mode on small screens
- Images optimized and lazy-loaded

---

## Content Placeholders

When building, use these placeholder patterns until real content is provided:

- **Label tagline:** "Where Every Note Finds Its Rest"
- **Artists:** Add `data-artist` attributes for easy content swapping
- **Album IDs:** Use `data-spotify-id` on embed containers

---

## Code Style & Conventions

- Use CSS custom properties (`--color-amber`, `--font-heading`, etc.) for all design tokens
- BEM-inspired class naming: `.artist-card`, `.artist-card__photo`, `.artist-card--featured`
- Mobile-first media queries: base styles = mobile, `@media (min-width: 768px)` for tablet+
- Semantic HTML: `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`, `<main>`
- No inline styles except for dynamic JS-driven values
- Lazy load images with `loading="lazy"` attribute
- All Spotify iframes must have `loading="lazy"` and `title` attributes for accessibility

---

## Performance & SEO

- Optimize all images (WebP preferred, JPEG fallback)
- Add `<meta>` tags: title, description, og:image, og:title for social sharing
- `<meta name="theme-color" content="#2c1f0e">` for mobile browser chrome
- Structured data (JSON-LD) for the music organization
- Google Analytics or similar — add tracking snippet in `<head>`

---

## Accessibility

- All images must have descriptive `alt` text
- Color contrast ratio minimum 4.5:1 for body text
- Keyboard navigable (focus styles visible)
- ARIA labels on icon-only buttons and Spotify iframes

---

## Deployment

- Static site — host on Vercel, Netlify, or GitHub Pages
- Custom domain: jazzrelaxation.com
- HTTPS required (Spotify embeds need secure context)

---

## Do Not

- Do not use bright/neon colors — keep the warm vintage palette
- Do not add heavy JavaScript frameworks (React, Vue) — keep it vanilla
- Do not auto-play audio without user interaction
- Do not add unnecessary animations that distract from the music content
- Do not break the mobile experience — test at 375px, 414px, 768px, 1280px
