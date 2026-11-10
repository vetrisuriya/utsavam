export const SITE_NAME = "Utsavam";
export const SITE_TAGLINE = "One beautiful link for every celebration.";
export const SITE_DESCRIPTION =
  "Create free, personalised celebration links for Diwali, Onam, Pongal, Holi, Christmas, New Year, Ramzan, Muharram, birthdays, weddings, ear piercing, naming ceremonies and more. No signup. Open source.";

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/+$/, "");
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;
  }

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

export const SITE = {
  name: SITE_NAME,
  tagline: SITE_TAGLINE,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  locale: "en_IN",
  language: "en-IN",
  founded: "2026",
  license: "MIT",
  licenseUrl: "https://opensource.org/licenses/MIT",
  creator: {
    name: "Vetri Suriya",
    url: "https://vetrisuriya.in/",
  },
  repo: "https://github.com/vetrisuriya/utsavam",
  repoIssues: "https://github.com/vetrisuriya/utsavam/issues",
  repoDiscussions: "https://github.com/vetrisuriya/utsavam/discussions",
  twitter: "@vetrisuriya",
  published: "2026-11-09",
  updated: "2026-11-11",
} as const;

export const NAV_LINKS = [
  { href: "/celebrations", label: "Celebrations" },
  { href: "/celebrations#life", label: "Life moments" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
] as const;

export const DEFAULT_KEYWORDS = [
  "celebration greeting links",
  "indian festival wishes",
  "free festival greeting card online",
  "diwali greeting card link",
  "onam wishes",
  "pongal wishes",
  "holi wishes link",
  "christmas greeting link",
  "ramzan eid wishes link",
  "birthday invitation link",
  "wedding invitation link",
  "engagement invitation link",
  "ear piercing invitation",
  "naming ceremony invitation",
  "griha pravesh invitation",
  "free digital invitation",
  "digital invitation card india",
  "share wishes on WhatsApp",
  "no signup invitation maker",
  "Utsavam",
];

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}
