export type CategoryId =
  | "hindu"
  | "sikh-jain"
  | "christian-newyear"
  | "islamic"
  | "life";

export type MotifId =
  | "diya"
  | "rangoli"
  | "lantern"
  | "lotus"
  | "kalash"
  | "om"
  | "khanda"
  | "jain"
  | "cross"
  | "star"
  | "crescent"
  | "cake"
  | "rings"
  | "ear"
  | "baby"
  | "home"
  | "thread"
  | "moon"
  | "kite"
  | "colors"
  | "rakhi"
  | "sun"
  | "mango"
  | "flute"
  | "trident"
  | "bow"
  | "garba"
  | "modak";

export type FieldType =
  | "text"
  | "textarea"
  | "date"
  | "time"
  | "tel"
  | "select";

export type FieldSection = "who" | "details" | "message";

export interface FieldDef {
  key: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  options?: string[];
  help?: string;
  half?: boolean;
  rows?: number;
  section: FieldSection;
  inputMode?: "text" | "numeric" | "tel";
}

export interface CelebrationTheme {
  from: string;
  via?: string;
  to: string;
  accent: string;
  accent2?: string;
  ink?: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Celebration {
  slug: string;
  name: string;
  category: CategoryId;
  motif: MotifId;
  tagline: string;
  blurb: string;
  intro: string;
  dateLabel: string;
  region?: string;
  theme: CelebrationTheme;
  fields: FieldDef[];
  defaultMessage: string;
  highlights: string[];
  faqs: Faq[];
  keywords: string[];
  related: string[];
  featured?: boolean;
}

export interface Category {
  id: CategoryId;
  name: string;
  shortName: string;
  blurb: string;
  accent: string;
  motif: MotifId;
}

export interface WishPayload {
  v: 1;
  e: string;
  f: Record<string, string>;
  t?: number;
}

export interface CelebrationCardData {
  slug: string;
  name: string;
  category: CategoryId;
  motif: MotifId;
  tagline: string;
  blurb: string;
  keywords: string[];
  theme: CelebrationTheme;
}
