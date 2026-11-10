export type AmbienceKind =
  | "fireworks"
  | "colors"
  | "petals"
  | "snow"
  | "stars"
  | "crescent"
  | "confetti"
  | "hearts"
  | "bubbles"
  | "diyas"
  | "lanterns"
  | "sparks"
  | "balloons"
  | "dust";

export type CursorKind =
  | "spark"
  | "star"
  | "petal"
  | "snow"
  | "confetti"
  | "heart"
  | "ember"
  | "dot";

export interface AmbienceConfig {
  kind: AmbienceKind;
  cursor: CursorKind;
  intensity: "soft" | "medium" | "full";
  label: string;
}

const DEFAULT_AMBIENCE: AmbienceConfig = {
  kind: "dust",
  cursor: "dot",
  intensity: "soft",
  label: "Golden dust",
};

/**
 * Each celebration gets its own ambient scene and cursor trail. The mapping is
 * intentionally explicit so adding a celebration does not silently inherit an
 * unrelated animation.
 */
export const AMBIENCE: Record<string, AmbienceConfig> = {
  utsavam: { kind: "dust", cursor: "spark", intensity: "medium", label: "Festival glow" },
  diwali: { kind: "fireworks", cursor: "spark", intensity: "full", label: "Fireworks" },
  holi: { kind: "colors", cursor: "dot", intensity: "full", label: "Colour powder" },
  onam: { kind: "petals", cursor: "petal", intensity: "medium", label: "Falling petals" },
  pongal: { kind: "diyas", cursor: "ember", intensity: "medium", label: "Harvest lamps" },
  navratri: { kind: "confetti", cursor: "confetti", intensity: "medium", label: "Garba colours" },
  "ganesh-chaturthi": { kind: "petals", cursor: "petal", intensity: "medium", label: "Marigold petals" },
  janmashtami: { kind: "stars", cursor: "star", intensity: "soft", label: "Night stars" },
  "raksha-bandhan": { kind: "hearts", cursor: "heart", intensity: "medium", label: "Threads of love" },
  ugadi: { kind: "petals", cursor: "petal", intensity: "medium", label: "Spring blossoms" },
  "makar-sankranti": { kind: "sparks", cursor: "spark", intensity: "medium", label: "Kite sparks" },
  "maha-shivratri": { kind: "diyas", cursor: "ember", intensity: "soft", label: "Temple lamps" },
  "ram-navami": { kind: "petals", cursor: "petal", intensity: "medium", label: "Temple petals" },
  "karva-chauth": { kind: "stars", cursor: "star", intensity: "soft", label: "Moonlit stars" },
  vishu: { kind: "petals", cursor: "petal", intensity: "medium", label: "Vishukkani petals" },
  "chhath-puja": { kind: "diyas", cursor: "ember", intensity: "medium", label: "River lamps" },
  "ramzan-eid": { kind: "crescent", cursor: "star", intensity: "medium", label: "Crescent moon" },
  muharram: { kind: "stars", cursor: "star", intensity: "soft", label: "Quiet stars" },
  birthday: { kind: "balloons", cursor: "confetti", intensity: "full", label: "Balloons and confetti" },
  wedding: { kind: "hearts", cursor: "heart", intensity: "medium", label: "Hearts and petals" },
  engagement: { kind: "hearts", cursor: "heart", intensity: "medium", label: "Hearts" },
  "ear-piercing": { kind: "petals", cursor: "petal", intensity: "soft", label: "Soft petals" },
  namkaran: { kind: "bubbles", cursor: "spark", intensity: "soft", label: "Gentle bubbles" },
  annaprashan: { kind: "bubbles", cursor: "petal", intensity: "soft", label: "Gentle bubbles" },
  "griha-pravesh": { kind: "diyas", cursor: "ember", intensity: "medium", label: "Homecoming lamps" },
  upanayana: { kind: "diyas", cursor: "ember", intensity: "soft", label: "Sacred lamps" },
  vaisakhi: { kind: "petals", cursor: "petal", intensity: "medium", label: "Harvest petals" },
  "guru-nanak-gurpurab": { kind: "lanterns", cursor: "ember", intensity: "soft", label: "Floating lanterns" },
  "bandi-chhor-divas": { kind: "fireworks", cursor: "spark", intensity: "full", label: "Fireworks" },
  "mahavir-jayanti": { kind: "petals", cursor: "petal", intensity: "soft", label: "Peaceful petals" },
  paryushan: { kind: "stars", cursor: "star", intensity: "soft", label: "Still stars" },
  christmas: { kind: "snow", cursor: "snow", intensity: "full", label: "Falling snow" },
  "new-year": { kind: "confetti", cursor: "confetti", intensity: "full", label: "Midnight confetti" },
};

export function getAmbience(slug: string): AmbienceConfig {
  return AMBIENCE[slug] ?? DEFAULT_AMBIENCE;
}
