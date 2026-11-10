export interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  summary: string;
  items: string[];
}

export const CHANGELOG: ChangelogEntry[] = [
  {
    version: "1.2.1",
    date: "11 November 2026",
    title: "Search readiness and a cleaner console",
    summary:
      "Structured data, metadata and crawler hints are tightened for search and answer engines, and the browser-extension hydration warning is gone.",
    items: [
      "Added a WebApplication entity describing the tool, its free price, features and platform support, alongside the existing WebSite, Organization, Festival, HowTo and FAQPage data.",
      "Added page images, publish and modified dates, keywords and free-access flags to the WebPage entity on every public page.",
      "Added a quick-answer summary block to each celebration page so search snippets and AI answers can quote a clear, factual sentence.",
      "Shortened page titles and descriptions so they fit search results, and fixed duplicated brand names in several titles.",
      "Extended robots.txt with current AI crawlers and added an `X-Robots-Tag` noindex header on personal `/w/` links.",
      "Added `llms.txt` and `llms-full.txt` quick-answer sections, a last-updated date and clearer attribution notes.",
      "Added security headers and `poweredByHeader: false`, and made the sitemap `lastmod` follow the release date.",
      "Added optional Search Console and Bing verification meta tags through environment variables.",
      "Suppressed the hydration warning caused by browser extensions injecting attributes on `<body>`.",
    ],
  },
  {
    version: "1.2.0",
    date: "11 November 2026",
    title: "More motion across every page",
    summary:
      "A richer animation layer: scroll reveals, shimmering headlines, card and button shine, floating motifs and a reading-progress line.",
    items: [
      "Added scroll-reveal motion with staggered cards and sections on the home page, celebration listings, celebration pages, About and the changelog.",
      "Added a shimmering gradient headline, a slowly animated header accent line and a reading-progress bar.",
      "Added a light-sweep shine on celebration cards and primary buttons, plus a slow foil shimmer across every wish card.",
      "Added confetti to the closing call-to-action, a one-off confetti burst when a share link is generated, a floating motif field in the home hero, and animated aurora glows on listing and About pages.",
      "Added a pop-in animation to the mobile menu and small hover motion on the logo wordmark.",
      "All new motion is disabled for reduced-motion preferences, and the content stays in the server-rendered HTML for search engines and no-JS readers.",
    ],
  },
  {
    version: "1.1.0",
    date: "10 November 2026",
    title: "Second languages, celebration ambience and a cleaner shell",
    summary:
      "Choose Tamil, Hindi, Telugu or Malayalam as the second language, and every celebration now has its own animated background and cursor.",
    items: [
      "Added a second-language selector in the header and mobile menu: Tamil (default), Hindi, Telugu and Malayalam, remembered on the device.",
      "Moved native celebration names into a single four-language map so every card, listing and celebration page follows the selected language.",
      "Added celebration-specific ambient animation: Diwali fireworks, Holi colour powder, Christmas snow, Ramzan crescent moon and stars, birthday balloons, wedding hearts, lamp-lit festivals and more.",
      "Added matching cursor trails — sparks for Diwali, stars for Ramzan, petals for floral festivals, confetti for New Year and hearts for weddings.",
      "Showed the site footer on every page except private /w/ card links.",
      "Changed the sample and placeholder name to Vetri Suriya.",
      "Removed unnecessary badges and static URL lines, including MIT badges, tracking notes and the personal-card notice.",
      "Added a native-name festival ribbon to the home page and extra ambient motion across hero areas.",
    ],
  },
  {
    version: "1.0.0",
    date: "9 November 2026",
    title: "The first Utsavam release",
    summary:
      "32 celebrations, live card previews, private link-based cards and a full open-source foundation.",
    items: [
      "Launched 15 Hindu festival pages: Diwali, Holi, Onam, Pongal, Navratri, Ganesh Chaturthi, Janmashtami, Raksha Bandhan, Ugadi, Makar Sankranti, Maha Shivratri, Ram Navami, Karva Chauth, Vishu and Chhath Puja.",
      "Added Sikh and Jain celebrations: Vaisakhi, Guru Nanak Gurpurab, Bandi Chhor Divas, Mahavir Jayanti and Paryushan.",
      "Added Christmas and New Year cards, plus Ramzan, Eid and Muharram greetings written with respect for the observance.",
      "Added life moments: birthday, wedding, engagement, ear piercing (Karnavedha), namkaran, annaprashan, griha pravesh and upanayana.",
      "Built a celebration-aware form with required-field validation, character counters and a live card preview.",
      "Introduced private, shareable links: card details are encoded in the URL and never stored in a database.",
      "Added WhatsApp, Telegram, X, Facebook, native share and copy-link actions.",
      "Added proxy validation so malformed or unknown card links return a real 404.",
      "Shipped per-celebration themes, SVG motifs, a custom logo, favicon, app icons and dynamic social images.",
      "Added SEO foundations: metadata templates, canonicals, sitemap, robots, manifest, JSON-LD for festivals, FAQs and how-tos.",
      "Added answer-engine and generative-engine files: llms.txt, llms-full.txt and a quick-answer summary block.",
      "Published open-source documentation: README, CHANGELOG, LICENSE, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY and issue and pull-request templates.",
      "Deployed-ready for GitHub and Vercel with environment-based site URLs.",
    ],
  },
];
