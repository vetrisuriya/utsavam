# Utsavam

**One beautiful link for every celebration.**

Utsavam (उत्सव — Sanskrit for festival, celebration, a joyous occasion) is a free, open-source web app for creating personalised celebration links. Pick an Indian festival or family milestone, fill in a short form, preview the card live, and share a single link on WhatsApp, email or anywhere else.

No signup. No app. No database of wishes.

[![MIT License](https://img.shields.io/badge/license-MIT-f6b73c.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16.4.5-000000.svg)](https://nextjs.org)
[![Deploy with Vercel](https://img.shields.io/badge/deploy-Vercel-000000.svg)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvetrisuriya%2Futsavam)

---

## Why Utsavam exists

Every festival season, the same thing happens. A blurry greeting image gets forwarded on WhatsApp. Someone asks for a wedding card in "editable format". A family spends days designing a printed invitation for a small ear-piercing ceremony.

Utsavam is a small, careful alternative. Each celebration gets its own page, its own fields and its own visual theme — a Diwali card looks like Diwali, a wedding invitation carries the muhurtham and venue, and a namkaran card asks for the baby's name.

## What it covers

32 celebrations across five groups:

| Group | Celebrations |
| --- | --- |
| **Hindu festivals** | Diwali, Holi, Onam, Pongal, Navratri, Ganesh Chaturthi, Janmashtami, Raksha Bandhan, Ugadi, Makar Sankranti, Maha Shivratri, Ram Navami, Karva Chauth, Vishu, Chhath Puja |
| **Sikh & Jain** | Vaisakhi, Guru Nanak Gurpurab, Bandi Chhor Divas, Mahavir Jayanti, Paryushan |
| **Christmas & New Year** | Christmas, New Year |
| **Ramzan & Muharram** | Ramzan & Eid, Muharram |
| **Life moments** | Birthday, Wedding, Engagement, Ear Piercing (Karnavedha), Namkaran, Annaprashan, Griha Pravesh, Upanayana |

Christian coverage is intentionally limited to Christmas and New Year; Islamic coverage is intentionally limited to Ramzan, Eid and Muharram.

## Features

- **Celebration-aware forms.** Festival cards ask for a name and message. Invitations ask for date, time, venue and RSVP. Muhurtham, samskara and sadya details are first-class fields.
- **Live preview.** The card updates as you type, so there is no guessing how the final link will look.
- **Private by architecture.** Card values are encoded into the URL. There is no wish database, no account and no server-side card record.
- **One-tap sharing.** Native share sheet, WhatsApp, Telegram, X, Facebook and copy-link.
- **Per-celebration design.** 25+ hand-drawn SVG motifs, custom gradients and typography per occasion.
- **Second-language names.** Choose Tamil, Hindi, Telugu or Malayalam; native celebration names and their scripts follow the choice, with Tamil as the default.
- **Celebration ambience.** Every celebration has its own animated backdrop and cursor trail — fireworks for Diwali, colour powder for Holi, a crescent moon and stars for Ramzan, snow for Christmas, balloons for birthdays — all switched off when reduced motion is requested.
- **Motion throughout.** Scroll reveals, shimmering headlines, card and button shine, floating motifs, confetti and a reading-progress line keep the site feeling alive without getting in the way.
- **SEO, AEO and GEO built in.** Canonicals, sitemap, robots, JSON-LD (`WebSite`, `Organization`, `WebApplication`, `Festival`, `FAQPage`, `HowTo`, `BreadcrumbList`), `llms.txt`, `llms-full.txt`, quick-answer summary blocks and static and per-celebration Open Graph images.
- **Accessible by default.** Keyboard-friendly forms, visible focus states, labelled errors, reduced-motion support and a skip link.
- **Open source.** MIT licensed, ready to self-host, fork or extend.

## Tech stack

- [Next.js 16.4.5](https://nextjs.org) — App Router, Cache Components, Turbopack
- [React 19](https://react.dev) and TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- `next/og` for dynamic social images
- Fraunces, Manrope and Noto Serif Tamil, Devanagari, Telugu and Malayalam via `next/font`

No database, no CMS, no third-party UI kit, no analytics SDK.

## Quick start

Requirements: Node.js 20.9 or newer and npm.

```bash
git clone https://github.com/vetrisuriya/utsavam.git
cd utsavam
npm install
cp .env.example .env.local   # optional; see Environment variables
npm run dev
```

Open <http://localhost:3000>.

On Windows PowerShell, if script execution is restricted, use `npm.cmd run dev`.

### Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Run the production build |
| `npm run lint` | Lint with ESLint |
| `npm run typecheck` | Type-check with TypeScript |
| `npm run typegen` | Generate Next.js route types (`LayoutProps`, `PageProps`, typed links) without a build |
| `npm run icons` | Regenerate PNG icons and the favicon from `public/logo-mark.svg` |

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Public origin, e.g. `https://utsavam.example`. Used for canonicals, Open Graph URLs, sitemap and share links. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional | Google Search Console HTML-tag token; rendered as the `google-site-verification` meta tag. |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Optional | Bing Webmaster Tools token; rendered as the `msvalidate.01` meta tag. |

On Vercel, `VERCEL_PROJECT_PRODUCTION_URL` and `VERCEL_URL` are used as fallbacks, so a fresh deploy works without configuration. Set `NEXT_PUBLIC_SITE_URL` to your custom domain once it is connected — canonicals, Open Graph URLs and sitemap entries all use it.

## Routes

| Route | Description |
| --- | --- |
| `/` | Home: categories, featured celebrations, full directory, how it works, FAQ |
| `/celebrations` | Searchable directory of all 32 celebrations |
| `/celebrations/[slug]` | Explainer, sample card, field list and FAQ for one celebration |
| `/create/[slug]` | Live-preview form and share-link generator |
| `/w/[code]` | A decoded personal card (noindex) |
| `/about` | Project background and link architecture |
| `/privacy`, `/terms` | Privacy note and terms of use |
| `/changelog` | Release notes |
| `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` | SEO and PWA metadata |
| `/llms.txt`, `/llms-full.txt` | Machine-readable project summaries for answer and generative engines |

## Search and AI discovery

The site is built to be crawled, quoted and linked by classic search engines and by AI answer engines.

| What | Where | Notes |
| --- | --- | --- |
| Canonical origin | `NEXT_PUBLIC_SITE_URL` | Every canonical, Open Graph URL, sitemap entry and share link derives from it. Set it before deploying. |
| Page metadata | `src/app/**/page.tsx` | Titles stay under 60 characters and descriptions under 160. |
| Structured data | `src/lib/seo.ts` | `WebSite`, `Organization`, `WebApplication`, `ItemList`, `Festival`, `HowTo`, `FAQPage`, `BreadcrumbList` and `WebPage`, with `speakable` hints. |
| Sitemap | `src/app/sitemap.ts` | Home, directory, About, Changelog, legal pages and both routes for every celebration. `/w/` is never included. |
| Robots | `src/app/robots.ts` | Public pages open to search and AI crawlers; `/w/` and `/api/` closed. |
| AI context | `src/app/llms.txt`, `src/app/llms-full.txt` | Site summary, quick answers and a per-celebration reference with FAQs. |
| Social images | `src/app/opengraph-image.tsx`, `src/app/celebrations/[slug]/opengraph-image.tsx` | 1200×630 PNGs generated at build time with descriptive alt text. |
| Verification | `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Optional meta tags rendered at build time. |

After deploying, add the domain to Google Search Console and Bing Webmaster Tools, submit `/sitemap.xml`, and request indexing for `/` and `/celebrations`.

## How a share link works

1. The form values are serialised as versioned JSON: `{ "v": 1, "e": "diwali", "f": { ... }, "t": 1730000000000 }`.
2. JSON is UTF-8 encoded and base64url-encoded (no padding).
3. The result becomes `/w/<code>`.
4. The recipient's browser decodes the payload, validates the celebration slug, sanitises values and renders the card.

Because the payload is in the URL, anyone with the link can read the card. Treat it like a postcard, and never put sensitive information in one. See [PRIVACY.md](PRIVACY.md) and `/privacy` on the site.

## Adding a celebration

1. Add a record to the appropriate file in `src/lib/celebrations/data/` (or create a new category file).
2. Follow the `Celebration` type in `src/lib/celebrations/types.ts`:
   - `slug`, `name`, optional `native` script
   - `category`, `motif`, `tagline`, `blurb`, `intro`
   - `dateLabel`, `region`, `theme`
   - `fields` built with helpers from `src/lib/celebrations/helpers.ts`
   - `defaultMessage`, `highlights`, `faqs`, `keywords`, `related`
3. Register the record in `src/lib/celebrations/index.ts`.
4. Run `npm run lint`, `npm run typecheck` and `npm run build`.

Routes, sitemap entries, OG images and directory cards are generated automatically from the data.

## Deployment

### Vercel

1. Push the repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). No build settings need changing.
4. Add `NEXT_PUBLIC_SITE_URL` with your production origin.
5. Deploy.

### Self-hosting

```bash
npm ci
npm run build
npm start
```

The app is fully static apart from dynamic social images, so it can also run behind a standard Node server or container.

## Project structure

```text
src/
├─ app/
│  ├─ celebrations/[slug]/     # celebration explainer + dynamic OG image
│  ├─ create/[slug]/           # live-preview form
│  ├─ w/[code]/                # decoded personal card
│  ├─ about, privacy, terms, changelog
│  ├─ llms.txt, llms-full.txt  # AEO/GEO route handlers
│  ├─ sitemap.ts, robots.ts, manifest.ts
│  └─ layout.tsx, page.tsx, globals.css
├─ components/                 # cards, forms, motifs, icons, share buttons
├─ proxy.ts                    # validates /w/ card codes and returns real 404s
└─ lib/
   ├─ celebrations/            # types, helpers, categories, data
   ├─ codec.ts                 # base64url wish payload
   ├─ seo.ts                   # JSON-LD builders
   └─ site.ts                  # brand, nav and URL configuration
scripts/generate-icons.mjs     # PNG icons + favicon from the SVG mark
public/                        # logo, icons, static assets
```

## Contributing

Contributions are welcome, especially corrections to cultural descriptions, new regional festivals, translations and accessibility improvements. Read [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) first.

If a tradition is worded incorrectly, please open an issue. Accuracy matters more than speed.

## Security

Please report vulnerabilities privately as described in [SECURITY.md](SECURITY.md). Remember that card links are intentionally public to anyone who holds the URL.

## License

Released under the [MIT License](LICENSE). © 2026 Vetri Suriya.

## Credits

Built and maintained by **[Vetri Suriya](https://vetrisuriya.in/)**.

Festival descriptions are original summaries informed by widely documented public traditions. Utsavam is not affiliated with any religious body, temple, church, gurdwara, mosque or government organisation.

If Utsavam helped you celebrate, consider starring the repository or contributing a celebration.
