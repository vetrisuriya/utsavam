import type { MetadataRoute } from "next";
import { CELEBRATIONS } from "@/lib/celebrations";
import { SITE, SITE_URL } from "@/lib/site";

// Bumped with each release so crawlers see fresh `lastmod` values.
const LAST_MODIFIED = new Date(`${SITE.updated}T00:00:00.000Z`);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/celebrations`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/changelog`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const celebrationPages: MetadataRoute.Sitemap = CELEBRATIONS.flatMap(
    (celebration) => [
      {
        url: `${SITE_URL}/celebrations/${celebration.slug}`,
        lastModified: LAST_MODIFIED,
        changeFrequency: "monthly" as const,
        priority: celebration.featured ? 0.85 : 0.7,
      },
      {
        url: `${SITE_URL}/create/${celebration.slug}`,
        lastModified: LAST_MODIFIED,
        changeFrequency: "monthly" as const,
        priority: 0.65,
      },
    ],
  );

  return [...staticPages, ...celebrationPages];
}
