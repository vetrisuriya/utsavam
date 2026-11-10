import type { Celebration, CelebrationCardData, CategoryId } from "./types";
import { hinduFestivals } from "./data/hindu";
import {
  christianNewYearCelebrations,
  sikhJainCelebrations,
} from "./data/sikh-jain-christian";
import { islamicCelebrations } from "./data/islamic";
import { lifeCelebrations } from "./data/life";

export const CELEBRATIONS: Celebration[] = [
  ...hinduFestivals,
  ...sikhJainCelebrations,
  ...christianNewYearCelebrations,
  ...islamicCelebrations,
  ...lifeCelebrations,
];

export const CELEBRATION_MAP = new Map(
  CELEBRATIONS.map((celebration) => [celebration.slug, celebration]),
);

export function getCelebration(slug: string): Celebration | undefined {
  return CELEBRATION_MAP.get(slug);
}

export function getCelebrationsByCategory(category: CategoryId): Celebration[] {
  return CELEBRATIONS.filter((celebration) => celebration.category === category);
}

export function getRelated(celebration: Celebration): Celebration[] {
  return celebration.related
    .map((slug) => getCelebration(slug))
    .filter((item): item is Celebration => Boolean(item));
}

export function toCardData(celebration: Celebration): CelebrationCardData {
  return {
    slug: celebration.slug,
    name: celebration.name,
    category: celebration.category,
    motif: celebration.motif,
    tagline: celebration.tagline,
    blurb: celebration.blurb,
    keywords: celebration.keywords,
    theme: celebration.theme,
  };
}

export function getFeaturedCelebrations(): Celebration[] {
  return CELEBRATIONS.filter((celebration) => celebration.featured);
}

export const CELEBRATION_SLUGS = CELEBRATIONS.map(
  (celebration) => celebration.slug,
);

export type { Celebration, CelebrationCardData };
