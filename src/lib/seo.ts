import { SITE, absoluteUrl, DEFAULT_KEYWORDS } from "./site";
import { getAllNativeNames } from "./language";
import type { Celebration, CelebrationCardData } from "./celebrations/types";
import type { Faq } from "./celebrations/types";

type JsonLd = Record<string, unknown>;

export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    alternateName: "Utsavam celebration links",
    url: SITE.url,
    description: SITE.description,
    inLanguage: SITE.language,
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function organizationJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon-512.png"),
      width: 512,
      height: 512,
      caption: `${SITE.name} logo`,
    },
    image: absoluteUrl("/icon-512.png"),
    description: SITE.description,
    foundingDate: SITE.founded,
    founder: {
      "@type": "Person",
      name: SITE.creator.name,
      url: SITE.creator.url,
    },
    sameAs: [SITE.repo, SITE.creator.url],
    knowsAbout: DEFAULT_KEYWORDS,
    knowsLanguage: ["en-IN", "ta", "hi", "te", "ml"],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

/**
 * Describes the site as a free web application. Useful for answer engines that
 * are looking for software features, pricing and platform support rather than a
 * plain page description.
 */
export function softwareApplicationJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${SITE.url}/#app`,
    name: SITE.name,
    url: SITE.url,
    applicationCategory: "LifestyleApplication",
    applicationSubCategory: "Greeting card and invitation maker",
    operatingSystem: "Any — runs in a modern web browser",
    browserRequirements: "Requires JavaScript to generate the share link",
    description: SITE.description,
    inLanguage: SITE.language,
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: 0,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    featureList: [
      "32 Indian festivals and family milestones",
      "Personalised greeting and invitation cards",
      "Live card preview while typing",
      "Share by link on WhatsApp, Telegram, email or social media",
      "Second language names in Tamil, Hindi, Telugu and Malayalam",
      "No signup, no account and no payment",
      "Open source under the MIT licence",
    ],
    publisher: { "@id": `${SITE.url}/#organization` },
    sameAs: [SITE.repo],
  };
}

export function itemListJsonLd(items: CelebrationCardData[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Celebrations on Utsavam",
    numberOfItems: items.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(`/celebrations/${item.slug}`),
    })),
  };
}

export function faqJsonLd(faqs: Faq[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function festivalJsonLd(celebration: Celebration): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Festival",
    "@id": `${absoluteUrl(`/celebrations/${celebration.slug}`)}#festival`,
    name: celebration.name,
    alternateName: getAllNativeNames(celebration.slug),
    description: celebration.intro,
    url: absoluteUrl(`/celebrations/${celebration.slug}`),
    image: absoluteUrl(`/celebrations/${celebration.slug}/opengraph-image`),
    inLanguage: SITE.language,
    isAccessibleForFree: true,
    location: {
      "@type": "Place",
      name: celebration.region ?? "India",
    },
    organizer: { "@id": `${SITE.url}/#organization` },
    keywords: celebration.keywords.join(", "),
    about: celebration.highlights.map((highlight) => ({
      "@type": "Thing",
      name: highlight,
    })),
  };
}

export function howToJsonLd(celebration: Celebration): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `Create a ${celebration.name} ${celebration.category === "life" ? "invitation" : "greeting"} link`,
    description: `Create and share a personalised ${celebration.name} card for free on ${SITE.name}.`,
    image: absoluteUrl(`/celebrations/${celebration.slug}/opengraph-image`),
    totalTime: "PT2M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: 0,
    },
    tool: [{ "@type": "HowToTool", name: "A web browser or phone" }],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Choose the celebration",
        text: `Open the ${celebration.name} page on ${SITE.name}.`,
        url: absoluteUrl(`/celebrations/${celebration.slug}`),
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Add your details",
        text: "Fill in the names, date, venue and a short personal message.",
        url: absoluteUrl(`/create/${celebration.slug}`),
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Share the link",
        text: "Create the link and share it on WhatsApp, SMS, email or social media.",
      },
    ],
  };
}

export function webPageJsonLd(options: {
  name: string;
  description: string;
  path: string;
  type?: "WebPage" | "CollectionPage" | "AboutPage";
  about?: string;
  image?: string;
  keywords?: string[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": options.type ?? "WebPage",
    "@id": `${absoluteUrl(options.path)}#webpage`,
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.path),
    inLanguage: SITE.language,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: options.about,
    isAccessibleForFree: true,
    datePublished: SITE.published,
    dateModified: SITE.updated,
    keywords: options.keywords?.join(", "),
    primaryImageOfPage: options.image
      ? {
          "@type": "ImageObject",
          url: absoluteUrl(options.image),
          width: 1200,
          height: 630,
        }
      : undefined,
    publisher: { "@id": `${SITE.url}/#organization` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".quick-answer"],
    },
  };
}
