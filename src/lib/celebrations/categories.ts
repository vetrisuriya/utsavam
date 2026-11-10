import type { Category, CategoryId } from "./types";

export const CATEGORIES: Category[] = [
  {
    id: "hindu",
    name: "Hindu festivals",
    shortName: "Hindu",
    blurb:
      "From Diwali and Onam to Pongal, Holi, Navratri and Chhath — greetings for every shubh occasion.",
    accent: "#f6b73c",
    motif: "diya",
  },
  {
    id: "sikh-jain",
    name: "Sikh & Jain celebrations",
    shortName: "Sikh & Jain",
    blurb:
      "Vaisakhi, Gurpurab, Bandi Chhor Divas, Mahavir Jayanti and Paryushan, shared with respect.",
    accent: "#e6c34a",
    motif: "khanda",
  },
  {
    id: "christian-newyear",
    name: "Christmas & New Year",
    shortName: "Christmas & New Year",
    blurb:
      "Warm Christmas wishes, festive invitations and fresh-start New Year greetings.",
    accent: "#ff6b6b",
    motif: "cross",
  },
  {
    id: "islamic",
    name: "Ramzan & Muharram",
    shortName: "Ramzan & Muharram",
    blurb:
      "Thoughtful greetings for Ramzan, Eid and Muharram — simple, respectful and shareable.",
    accent: "#7fe3c0",
    motif: "crescent",
  },
  {
    id: "life",
    name: "Life moments",
    shortName: "Life moments",
    blurb:
      "Birthdays, weddings, engagements, ear piercing, namkaran, annaprashan, griha pravesh and upanayana.",
    accent: "#ff8fd1",
    motif: "rings",
  },
];

export const CATEGORY_MAP: Record<CategoryId, Category> = CATEGORIES.reduce(
  (acc, category) => {
    acc[category.id] = category;
    return acc;
  },
  {} as Record<CategoryId, Category>,
);

export const LIFE_EVENT_SLUGS = [
  "birthday",
  "wedding",
  "engagement",
  "ear-piercing",
  "namkaran",
  "annaprashan",
  "griha-pravesh",
  "upanayana",
] as const;

export function categoryName(id: CategoryId): string {
  return CATEGORY_MAP[id]?.name ?? "Celebration";
}

export function categoryShortName(id: CategoryId): string {
  return CATEGORY_MAP[id]?.shortName ?? "Celebration";
}
