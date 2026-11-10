import type { Celebration, Faq, FieldDef } from "./types";
import { SITE_NAME } from "../site";

export const fields = {
  from(label = "Your name"): FieldDef {
    return {
      key: "from",
      label,
      type: "text",
      placeholder: "e.g. Vetri Suriya",
      required: true,
      maxLength: 60,
      half: true,
      section: "who",
      inputMode: "text",
    };
  },
  to(label = "Who is this for?"): FieldDef {
    return {
      key: "to",
      label,
      type: "text",
      placeholder: "Their name",
      required: true,
      maxLength: 60,
      half: true,
      section: "who",
      inputMode: "text",
    };
  },
  message(
    placeholder = "Write a short, warm wish…",
    maxLength = 320,
  ): FieldDef {
    return {
      key: "message",
      label: "Your message",
      type: "textarea",
      placeholder,
      required: true,
      maxLength,
      rows: 4,
      section: "message",
      help: "Keep it personal. 1–3 lines works beautifully.",
    };
  },
  date(label = "Date"): FieldDef {
    return {
      key: "date",
      label,
      type: "date",
      required: true,
      half: true,
      section: "details",
    };
  },
  time(label = "Time"): FieldDef {
    return {
      key: "time",
      label,
      type: "time",
      half: true,
      section: "details",
    };
  },
  venue(label = "Venue"): FieldDef {
    return {
      key: "venue",
      label,
      type: "text",
      placeholder: "e.g. Sri Lakshmi Hall, Chennai",
      maxLength: 120,
      section: "details",
    };
  },
  address(label = "Address"): FieldDef {
    return {
      key: "address",
      label,
      type: "text",
      placeholder: "House name, street, city",
      maxLength: 160,
      section: "details",
    };
  },
  rsvp(label = "RSVP contact"): FieldDef {
    return {
      key: "rsvp",
      label,
      type: "tel",
      placeholder: "+91 98765 43210",
      maxLength: 24,
      half: true,
      section: "details",
      inputMode: "tel",
    };
  },
};

export interface FestivalFaqInput {
  name: string;
  dateLabel: string;
  intro: string;
  highlights: string[];
  slug: string;
}

export function festivalFaqs({
  name,
  dateLabel,
  intro,
  highlights,
  slug,
}: FestivalFaqInput): Faq[] {
  return [
    {
      q: `What is ${name}?`,
      a: intro,
    },
    {
      q: `When is ${name} celebrated?`,
      a: `${name} is observed around ${dateLabel}. Many Indian festivals follow the lunar or solar calendar, so the Gregorian date shifts a little each year.`,
    },
    {
      q: `How do people celebrate ${name}?`,
      a: highlights.join(" "),
    },
    {
      q: `How can I send a ${name} greeting?`,
      a: `Open the ${name} page on ${SITE_NAME}, add your name, the recipient's name and a short message, then share the generated link. It is free, needs no account, and your details stay inside the link.`,
    },
    {
      q: `Is the ${name} card free to share?`,
      a: `Yes. ${SITE_NAME} is free and open source. You can create and share as many personalised ${name} links as you like, on WhatsApp, SMS, email or social media. Read more at /celebrations/${slug}.`,
    },
  ];
}

export interface LifeFaqInput {
  name: string;
  intro: string;
  highlights: string[];
}

export function lifeFaqs({ name, intro, highlights }: LifeFaqInput): Faq[] {
  return [
    {
      q: `How do I create a ${name} invitation?`,
      a: `Choose ${name} on ${SITE_NAME}, fill in the names, date, time and venue, add a personal message, and share the generated link. There is no signup and no design software needed.`,
    },
    {
      q: `What details should a ${name} invitation include?`,
      a: `At minimum include who the celebration is for, the date and time, and the venue. Add a short personal note and an RSVP number if guests need to confirm.`,
    },
    {
      q: `What is ${name}?`,
      a: intro,
    },
    {
      q: `Can I share a ${name} invitation on WhatsApp?`,
      a: `Yes. The ${name} page creates a mobile-friendly link you can share on WhatsApp, Telegram, email or anywhere else. ${highlights[0] ?? ""}`,
    },
  ];
}

export function byCategory(
  celebrations: Celebration[],
  category: Celebration["category"],
): Celebration[] {
  return celebrations.filter((item) => item.category === category);
}

export function featured(
  celebrations: Celebration[],
  limit?: number,
): Celebration[] {
  const list = celebrations.filter((item) => item.featured);
  return typeof limit === "number" ? list.slice(0, limit) : list;
}
