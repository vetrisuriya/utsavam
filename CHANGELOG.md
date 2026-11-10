# Changelog

All notable changes to Utsavam are recorded here. The site also renders this history at `/changelog`.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.1] — 2026-11-11

Search readiness and a cleaner console.

### Added

- A `WebApplication` entity describing the tool, its free price, features and platform support, alongside the existing `WebSite`, `Organization`, `Festival`, `HowTo` and `FAQPage` data.
- Page images, publish and modified dates, keywords and free-access flags on every public `WebPage` entity.
- A quick-answer summary block on each celebration page, written to be quoted by search snippets and AI answers.
- Quick-answer sections, a last-updated date and attribution notes in `llms.txt` and `llms-full.txt`.
- Security headers, `poweredByHeader: false` and optional Search Console / Bing verification tokens via environment variables.
- An `X-Robots-Tag` noindex header on personal `/w/` links.

### Changed

- Page titles and descriptions trimmed to fit search results, and duplicated brand names removed.
- `robots.txt` now lists current AI crawlers explicitly.
- Sitemap `lastmod` follows the release date.

### Fixed

- Hydration warning caused by browser extensions injecting attributes on `<body>`.

## [1.2.0] — 2026-11-11

A richer motion layer across the site.

### Added

- Scroll-reveal animations with staggered cards and sections on the home page, celebration listings, celebration pages, About and the changelog.
- A shimmering gradient headline, an animated header accent line and a gold reading-progress bar.
- Light-sweep shine on celebration cards and primary buttons, plus a slow foil shimmer on every wish card.
- Confetti in the closing call-to-action, a one-off confetti burst when a share link is generated, a floating motif field in the home hero and animated aurora glows on the listing and About pages.
- A pop-in animation for the mobile menu and hover motion on the logo wordmark.
- Reduced-motion handling for every new animation; page content remains in the server-rendered HTML.

## [1.1.0] — 2026-11-10

Second languages, celebration ambience and a cleaner shell.

### Added

- A second-language selector for Tamil (default), Hindi, Telugu and Malayalam, remembered on the device.
- Native celebration names in a single four-language map, used across cards, listings and celebration pages.
- Celebration-specific ambient scenes and cursor trails: Diwali fireworks, Holi colour powder, Christmas snow, Ramzan crescent moon and stars, birthday balloons, wedding hearts, lamp-lit festivals and more.
- A native-name festival ribbon on the home page and extra ambient motion in hero areas.

### Changed

- The site footer now appears on every page except private `/w/` card links.
- The sample and placeholder name is now Vetri Suriya.
- Removed unnecessary badges and static URL lines, including MIT badges, tracking notes and the personal-card notice.

## [1.0.0] — 2026-11-09

The first public release of Utsavam.

### Added

- **32 celebrations** across five groups:
  - Hindu: Diwali, Holi, Onam, Pongal, Navratri, Ganesh Chaturthi, Janmashtami, Raksha Bandhan, Ugadi, Makar Sankranti, Maha Shivratri, Ram Navami, Karva Chauth, Vishu, Chhath Puja.
  - Sikh and Jain: Vaisakhi, Guru Nanak Gurpurab, Bandi Chhor Divas, Mahavir Jayanti, Paryushan.
  - Christian and New Year: Christmas, New Year.
  - Islamic: Ramzan & Eid, Muharram.
  - Life moments: birthday, wedding, engagement, ear piercing, namkaran, annaprashan, griha pravesh, upanayana.
- Celebration-specific form fields, including muhurtham time, venue, RSVP contact and samskara details.
- Live card preview with per-celebration themes and 25+ hand-drawn SVG motifs.
- Private link encoding: card details are serialised to versioned JSON, base64url-encoded and placed in the URL. No wish database.
- Request-time proxy validation: malformed or unknown card codes return a real 404 instead of a soft 404.
- Share actions for the native share sheet, WhatsApp, Telegram, X and Facebook, plus copy link.
- Home page directory, category cards, featured celebrations and a searchable explorer with filters.
- SEO: metadata templates, canonicals, Open Graph and Twitter metadata, sitemap, robots, web manifest and per-celebration dynamic OG images.
- AEO/GEO: `llms.txt`, `llms-full.txt`, quick-answer blocks, `FAQPage`, `HowTo`, `Festival`, `ItemList`, `BreadcrumbList` and `Organization` JSON-LD.
- Accessibility: skip link, labelled form errors, keyboard focus styles, reduced-motion support and semantic landmarks.
- Open-source foundation: README, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, PRIVACY, issue templates, pull-request template and CI workflow.
- Brand assets: SVG logo mark, favicon, Apple touch icon and PWA icons generated from a single SVG source.
- Vercel-ready configuration with `NEXT_PUBLIC_SITE_URL` and Vercel URL fallbacks.

### Notes

- Christian coverage is intentionally scoped to Christmas and New Year.
- Islamic coverage is intentionally scoped to Ramzan, Eid and Muharram.
- Card links are readable by anyone who holds them; personal card pages are marked `noindex`.

[1.0.0]: https://github.com/vetrisuriya/utsavam/releases/tag/v1.0.0
[1.1.0]: https://github.com/vetrisuriya/utsavam/releases/tag/v1.1.0
[1.2.0]: https://github.com/vetrisuriya/utsavam/releases/tag/v1.2.0
[1.2.1]: https://github.com/vetrisuriya/utsavam/releases/tag/v1.2.1
