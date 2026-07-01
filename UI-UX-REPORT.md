# UI/UX Audit Report — Win Naing Soe Portfolio

**Date:** 2026-07-01  
**Site:** Portfolio (Single-page + Case Study detail pages)  
**Stack:** TanStack Start · React 19 · Tailwind CSS v4 · shadcn/ui

---

## Executive Summary

This is a **well-crafted, high-quality developer portfolio** with strong visual identity, thoughtful theming, and solid technical foundations. The site scores highly on visual design, performance-conscious CSS, and SEO. The main areas for improvement are **mobile navigation**, **accessibility gaps**, **performance optimization**, and **interactive polish**.

**Overall Score: 8.2 / 10**

| Dimension | Score | Notes |
|---|---|---|
| Visual Design | 9/10 | Excellent typography, cohesive color system, beautiful aurora effect |
| Information Architecture | 8.5/10 | Logical section flow, clear hierarchy |
| Responsive Design | 7.5/10 | Good desktop, mobile has gaps |
| Accessibility | 6.5/10 | Missing focus styles, skip nav, reduced motion |
| Performance | 7/10 | CSS-only animations are good, but images/fonts unoptimized |
| SEO | 9/10 | Comprehensive meta, JSON-LD, sitemap |
| Interaction Design | 7.5/10 | Smooth transitions, but no scroll-progress or back-to-top |
| Code Quality | 9/10 | Clean architecture, consistent patterns |

---

## 1. Visual Design — 9/10

### Strengths

- **Typography system is excellent.** Three well-chosen families (Fraunces display, Inter body, JetBrains Mono labels) with optical sizing on Fraunces create a sophisticated editorial feel.
- **Color system is cohesive.** Three complete themes (Dark, Light, Sunset) using `oklch` color space with semantic tokens (`signal`, `copper`, `parchment`, `ink`) show professional-grade design token architecture.
- **Aurora background is tasteful.** 4 animated gradient orbs with noise texture, properly `pointer-events: none` and `-z-10`. Light theme correctly adjusts opacity and blur.
- **Consistent card patterns.** `rounded-2xl border border-border bg-card` with `hover:border-primary/40` creates a unified visual language.
- **Code-card portrait** is a creative, on-brand hero element that reinforces the developer identity.
- **Monospace label system** (`font-mono-tight text-[10px] uppercase tracking-widest`) is used consistently for metadata, creating a professional, technical aesthetic.

### Issues

| # | Severity | Issue | Location |
|---|---|---|---|
| 1.1 | Medium | **Sunset theme uses raw hex values** instead of `oklch` — inconsistent with other themes and breaks the color space convention | `styles.css:146-185` |
| 1.2 | Low | **Hero heading clamp range is aggressive** — `clamp(2.75rem, 8vw, 6rem)` means on 375px screens the heading is ~2.75rem (44px) which is fine, but at 768px it jumps to ~3.5rem mid-sentence | `index.tsx:399` |
| 1.3 | Low | **Marquee text is very large** (`text-3xl md:text-5xl`) and dominates the space between hero and about — could feel overwhelming | `index.tsx:556` |

---

## 2. Information Architecture — 8.5/10

### Strengths

- **Section numbering system** (`/ 00`, `/ 01`, etc.) with hairline dividers creates a clear document-like structure.
- **Logical content flow:** Hero → Marquee → About → Skills → Career → Projects → Awards → Contact follows a natural narrative.
- **Case study pages** have a well-structured meta grid (role/period/client/domain) and proper breadcrumbs via JSON-LD.
- **"Other notable builds" list** below featured projects is a good way to show breadth without visual clutter.

### Issues

| # | Severity | Issue | Recommendation |
|---|---|---|---|
| 2.1 | Medium | **No mobile navigation menu** — `hidden md:flex` hides nav links on mobile with no hamburger/fallback | Add a mobile menu (sheet/drawer) |
| 2.2 | Medium | **Section IDs don't match nav labels** — "Stack" nav link goes to `#stack` but section label says "Technical Arsenal" | Align labels |
| 2.3 | Low | **No "Back to top" button** — long single-page layout requires manual scrolling | Add a floating back-to-top |
| 2.4 | Low | **Footer "last commit: today" is hardcoded** — will be stale immediately | Either fetch dynamically or remove |

---

## 3. Responsive Design — 7.5/10

### Strengths

- **Mobile-first approach** with proper `md:` and `lg:` breakpoints.
- **Fluid typography** with `clamp()` on hero heading.
- **Grid layouts collapse correctly** — hero, about, arsenal, timeline all adapt.
- **`useIsMobile()` hook** available for component-level conditional rendering.

### Issues

| # | Severity | Issue | Detail |
|---|---|---|---|
| 3.1 | **High** | **No mobile navigation** | Desktop nav is `hidden md:flex` with no mobile alternative. Users on mobile cannot navigate to sections. |
| 3.2 | Medium | **Timeline mobile layout** — nodes are at `left-4` but content uses `pl-12`, creating a cramped left margin on small screens | Consider a single-column mobile layout with nodes above content |
| 3.3 | Medium | **Contact channels card** on small screens — 4 rows of links with icons works, but the `truncate` on email may cut off on very narrow screens | Test at 320px |
| 3.4 | Low | **Metric strip** (`grid-cols-2 md:grid-cols-4`) — on mobile the 2×2 grid is fine, but each cell's content is minimal | Consider horizontal scroll or stacked layout |
| 3.5 | Low | **Arsenal grid** — `md:grid-cols-2 lg:grid-cols-3` means on tablet (768px) you get 2 columns, but the "Core Expertise" tile spans `md:col-span-2` making it full-width on tablet | Verify visual balance |

---

## 4. Accessibility — 6.5/10

### Strengths

- **Semantic HTML** — proper `<header>`, `<nav>`, `<section>`, `<footer>`, `<aside>`, `<article>`.
- **`aria-hidden`** on decorative elements (aurora, grid backgrounds, marquee).
- **`alt` text** on all images.
- **`<html lang="en">`** set.
- **Theme toggle** has `role="radiogroup"` with `aria-checked` and `aria-label`.
- **Structured data** (JSON-LD) for Person, CreativeWork, BreadcrumbList.

### Issues

| # | Severity | Issue | Recommendation |
|---|---|---|---|
| 4.1 | **High** | **No visible focus styles** — Tailwind's `outline-none` default is not overridden. Keyboard users cannot see which element is focused. | Add `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2` to interactive elements |
| 4.2 | **High** | **No skip-to-content link** | Add a visually hidden skip link at the top of the page |
| 4.3 | **High** | **No `prefers-reduced-motion` support** — aurora drift, marquee, float, pulse-dot all run unconditionally. Users with motion sensitivity have no escape. | Wrap animations in `@media (prefers-reduced-motion: no-preference)` |
| 4.4 | Medium | **Marquee has no pause mechanism** — `aria-hidden` is correct, but CSS-only infinite scroll has no `prefers-reduced-motion` fallback | Pause or hide marquee when reduced motion is preferred |
| 4.5 | Medium | **Color contrast** — `muted-foreground` on dark theme is `oklch(0.68)` which is approximately #8a8a8a on `oklch(0.14)` background — ratio ~4.8:1, borderline for AA on small text | Test with contrast checker; bump to 0.72+ |
| 4.6 | Low | **Theme toggle radio buttons** lack visible labels — only icons/abbreviations shown | Add `aria-label` (already present) and consider visible text on hover |
| 4.7 | Low | **Links opening in new tabs** (`target="_blank"`) have `rel="noreferrer noopener"` — good, but no visual indicator that they open externally | Consider an external link icon |

---

## 5. Performance — 7/10

### Strengths

- **CSS-only animations** — no JavaScript animation libraries (Framer Motion, GSAP) means zero JS overhead for visuals.
- **`will-change: transform`** on aurora orbs hints GPU compositing.
- **Theme init script** prevents flash-of-wrong-theme by reading localStorage before paint.
- **Font preconnect** to Google Fonts.
- **Tailwind CSS v4** with `@source` directive — tree-shakes unused styles.

### Issues

| # | Severity | Issue | Recommendation |
|---|---|---|---|
| 5.1 | Medium | **No font `display: swap`** — Google Fonts URL uses `display=swap` (good), but the `<link>` is a render-blocking stylesheet | Consider `<link rel="preload" as="style">` or inline critical CSS |
| 5.2 | Medium | **No image optimization** — `portrait.jpg` and `hero-bg.jpg` are loaded as static imports with no `<picture>` element, no WebP/AVIF, no `srcset` for responsive sizes | Use `<picture>` with modern formats + responsive widths |
| 5.3 | Medium | **OG images are large** — 4 JPG files in `/public` (og-image.jpg, og-mifos.jpg, og-stockexchange.jpg, og-jlpt.jpg) with no size optimization visible | Compress and serve WebP where supported |
| 5.4 | Low | **Aurora noise texture** is an inline SVG data URI — small (~200 bytes) but rendered as a 200×200px repeating tile. This is fine. | No action needed |
| 5.5 | Low | **No lazy loading** on below-fold images | Add `loading="lazy"` to non-hero images |
| 5.6 | Low | **46 shadcn/ui components scaffolded but unused** — adds to bundle size if not tree-shaken | Verify Vite tree-shakes unused Radix packages |

---

## 6. SEO — 9/10

### Strengths

- **Comprehensive meta tags** — title, description, keywords, author, OG, Twitter Card.
- **Canonical URLs** on both pages.
- **JSON-LD structured data** — Person, CreativeWork, BreadcrumbList, WebSite.
- **XML sitemap** at `/sitemap.xml` generated from project data.
- **`robots.txt`** allowing all crawlers.
- **Semantic HTML** with proper heading hierarchy.

### Issues

| # | Severity | Issue | Recommendation |
|---|---|---|---|
| 6.1 | Low | **OG image alt text** could be more descriptive for screen readers | Already acceptable but could mention "portfolio screenshot" |
| 6.2 | Low | **No `hreflang` tags** — content is English-only, but the profile mentions Japanese language skills | Add `hreflang="en"` if planning multilingual support |

---

## 7. Interaction Design — 7.5/10

### Strengths

- **Smooth theme transitions** — `background-color 0.4s ease, color 0.4s ease` on body.
- **Card hover states** — `hover:border-primary/40` or `hover:border-primary/50` creates subtle interactivity.
- **Nav blur on scroll** — `backdrop-blur-xl bg-background/70` appears after 24px scroll.
- **CTA hover effects** — `group-hover:translate-x-1` on arrow icons.
- **"Available" badge** with pulse dot draws attention to availability status.
- **Case study cards** have hover states on tags, numbers, and "Read case study" link.

### Issues

| # | Severity | Issue | Recommendation |
|---|---|---|---|
| 7.1 | Medium | **No scroll-progress indicator** — long single-page layout has no visual indicator of position | Add a progress bar at the top |
| 7.2 | Medium | **No smooth-scroll offset for fixed header** — clicking nav links scrolls to section but the fixed header covers the section heading | Add `scroll-margin-top: 5rem` to sections |
| 7.3 | Low | **Marquee has no pause on hover** — infinite scroll continues even when user tries to read | Add `animation-play-state: paused` on hover |
| 7.4 | Low | **No loading states** — if images are slow, there's no skeleton/placeholder | Consider skeleton loaders for portrait and OG images |
| 7.5 | Low | **Contact section has no form** — only external links (email, WhatsApp, LinkedIn, GitHub) | Consider adding a simple contact form for lower-friction outreach |

---

## 8. Code Quality — 9/10

### Strengths

- **Clean component architecture** — all sections are self-contained functions in a single file, easy to read.
- **Consistent naming** — `SectionLabel`, `Line`, `Nav`, `Hero`, etc.
- **TypeScript strict mode** enabled.
- **Proper error boundaries** at root level with fallback UI.
- **Three-layer SSR error handling** (start.ts → server.ts → error-capture.ts).
- **Prettier + ESLint** configured for consistent formatting.

### Issues

| # | Severity | Issue | Recommendation |
|---|---|---|---|
| 8.1 | Low | **`index.tsx` is 1072 lines** — all sections in one file. Could be split into individual component files for maintainability | Extract to `src/components/sections/` |
| 8.2 | Low | **`slugForProject()` uses hardcoded name prefixes** — fragile if project names change | Use the `PROJECT_SLUG_BY_NAME` lookup that's already defined |
| 8.3 | Low | **`new Date().getFullYear()` in Footer** — server-rendered, so it's correct, but the hardcoded "last commit: today" will be stale | Either fetch from git API or remove |

---

## Recommendations (Prioritized)

### Critical (Fix First)

1. **Add mobile navigation** — This is the biggest gap. A hamburger menu that opens a sheet/drawer with section links is essential.
2. **Add focus-visible styles** — A single global rule can fix this:
   ```css
   @layer base {
     *:focus-visible {
       outline: 2px solid var(--color-ring);
       outline-offset: 2px;
     }
   }
   ```
3. **Add `prefers-reduced-motion` support** — Wrap all animations:
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```
4. **Add skip-to-content link** — Hidden link at top of page that appears on focus.

### High Priority

5. **Add `scroll-margin-top`** to all sections for fixed-header offset:
   ```css
   section[id] { scroll-margin-top: 5rem; }
   ```
6. **Optimize images** — Convert portrait.jpg and hero-bg.jpg to WebP/AVIF with responsive `srcset`.
7. **Fix sunset theme** — Convert hex values to `oklch` for consistency.

### Medium Priority

8. **Add scroll-progress indicator** — A thin bar at the top of the page.
9. **Add back-to-top button** — Floating button that appears after scrolling past the hero.
10. **Add `loading="lazy"`** to below-fold images.
11. **Improve color contrast** — Bump `muted-foreground` from 0.68 to 0.72+ on dark theme.

### Low Priority

12. **Split `index.tsx`** into individual section components.
13. **Remove hardcoded "last commit: today"** or make it dynamic.
14. **Add marquee pause on hover.**
15. **Add external link indicators** for `target="_blank"` links.
16. **Audit unused shadcn/ui components** and remove if not tree-shaken.

---

## Appendix: File Reference

| File | Lines | Purpose |
|---|---|---|
| `src/routes/index.tsx` | 1072 | Homepage (all sections) |
| `src/routes/__root.tsx` | 141 | Root shell, fonts, error boundaries |
| `src/routes/work.$slug.tsx` | — | Case study detail pages |
| `src/styles.css` | 473 | Themes, animations, utilities |
| `src/components/aurora-bg.tsx` | — | Animated background |
| `src/components/theme-toggle.tsx` | — | 4-way theme switcher |
| `src/lib/projects-data.ts` | — | Project/case-study data |
