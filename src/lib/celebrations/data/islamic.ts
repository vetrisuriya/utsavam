import type { Celebration } from "../types";
import { festivalFaqs, fields } from "../helpers";

export const islamicCelebrations: Celebration[] = [
  {
    slug: "ramzan-eid",
    name: "Ramzan & Eid",
    category: "islamic",
    motif: "crescent",
    tagline: "A month of light, a day of joy.",
    blurb:
      "Respectful greetings for Ramzan and Eid — for family, friends and neighbours.",
    intro:
      "Ramzan is the holy month of fasting, prayer and reflection in Islam. It ends with Eid, a day of gratitude, family gatherings, new clothes, sweets and charity. These greetings are written with respect for the observance.",
    dateLabel: "Ramadan and Eid (dates shift each year)",
    region: "Worldwide",
    theme: {
      from: "#0d1a1f",
      via: "#10232a",
      to: "#132a33",
      accent: "#7fe3c0",
      accent2: "#ffd166",
    },
    fields: [
      fields.from(),
      fields.to(),
      {
        key: "occasion",
        label: "Occasion",
        type: "select",
        options: ["Ramzan Mubarak", "Eid Mubarak", "Eid al-Fitr", "Eid al-Adha"],
        required: true,
        half: true,
        section: "who",
      },
      fields.message("May this blessed month bring you peace, patience and joy."),
    ],
    defaultMessage:
      "May this blessed month bring you peace, patience and joy.",
    highlights: [
      "Observe the fast from dawn to sunset with prayer and reflection.",
      "Share iftar with family, friends and neighbours.",
      "Give zakat and help those in need.",
      "Celebrate Eid with new clothes, sweets and family visits.",
    ],
    faqs: festivalFaqs({
      name: "Ramzan & Eid",
      dateLabel: "Ramadan and Eid (dates shift each year)",
      intro:
        "Ramzan is the Islamic month of fasting, prayer and reflection. It ends with Eid, a day of gratitude, family gatherings and charity.",
      highlights: [
        "Muslims fast from dawn to sunset during Ramzan.",
        "Iftar is shared with family and neighbours.",
        "Eid is celebrated with prayers, sweets and gifts.",
      ],
      slug: "ramzan-eid",
    }),
    keywords: [
      "ramzan wishes",
      "eid mubarak message",
      "ramadan greeting link",
      "iftar invitation",
    ],
    related: ["muharram", "new-year", "christmas"],
    featured: true,
  },
  {
    slug: "muharram",
    name: "Muharram",
    category: "islamic",
    motif: "crescent",
    tagline: "A quiet greeting of remembrance.",
    blurb:
      "A respectful message for Muharram, the month of remembrance and reflection.",
    intro:
      "Muharram is the first month of the Islamic calendar and a time of remembrance, especially for the martyrdom of Imam Hussain. Many Muslims observe fasting, prayer and charity, and communities gather for reflection.",
    dateLabel: "Muharram (dates shift each year)",
    region: "Worldwide",
    theme: {
      from: "#1a0d12",
      via: "#221017",
      to: "#2a111a",
      accent: "#b9c6ff",
      accent2: "#7fe3c0",
    },
    fields: [
      fields.from(),
      fields.to(),
      fields.message("Muharram Mubarak. May this month bring peace and reflection."),
    ],
    defaultMessage:
      "Muharram Mubarak. May this month bring peace and reflection.",
    highlights: [
      "Observe voluntary fasts, especially on Ashura.",
      "Attend prayers and community gatherings.",
      "Give charity and support those in need.",
      "Spend time in reflection and remembrance.",
    ],
    faqs: festivalFaqs({
      name: "Muharram",
      dateLabel: "Muharram (dates shift each year)",
      intro:
        "Muharram is the first month of the Islamic calendar and a time of remembrance, prayer and charity, especially for the martyrdom of Imam Hussain.",
      highlights: [
        "Many Muslims observe voluntary fasts, including on Ashura.",
        "Communities gather for prayer and reflection.",
        "Charity and support for those in need are encouraged.",
      ],
      slug: "muharram",
    }),
    keywords: [
      "muharram wishes",
      "muharram mubarak",
      "ashura message",
      "islamic new year",
    ],
    related: ["ramzan-eid", "new-year", "christmas"],
    featured: false,
  },
];
