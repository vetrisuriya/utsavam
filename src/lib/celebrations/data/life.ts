import type { Celebration } from "../types";
import { lifeFaqs, fields } from "../helpers";

export const lifeCelebrations: Celebration[] = [
  {
    slug: "birthday",
    name: "Birthday",
    category: "life",
    motif: "cake",
    tagline: "Make their whole day feel special.",
    blurb:
      "A personal birthday link with their name, age, party details and a message they will keep.",
    intro:
      "A birthday is the simplest reason to celebrate. A personalised link can carry the wish, the party details and a small memory — and it feels far more thoughtful than a forwarded image.",
    dateLabel: "Any day of the year",
    theme: {
      from: "#241032",
      via: "#30143e",
      to: "#3a1447",
      accent: "#ff8fd1",
      accent2: "#ffd166",
    },
    fields: [
      {
        key: "celebrant",
        label: "Whose birthday is it?",
        type: "text",
        placeholder: "e.g. Vetri Suriya",
        required: true,
        maxLength: 60,
        half: true,
        section: "who",
      },
      {
        key: "age",
        label: "Turning",
        type: "text",
        placeholder: "e.g. 25",
        maxLength: 3,
        required: false,
        half: true,
        section: "who",
        inputMode: "numeric",
      },
      fields.date("Birthday date"),
      fields.time("Party time"),
      fields.venue("Party venue"),
      fields.from("From"),
      fields.message("Happy birthday! May this year be as wonderful as you are."),
    ],
    defaultMessage:
      "Happy birthday! May this year be as wonderful as you are.",
    highlights: [
      "Add the celebrant's name and the age they are turning.",
      "Include the party date, time and venue.",
      "Write a short memory or wish instead of a generic quote.",
      "Share the link before the day so they wake up to it.",
    ],
    faqs: lifeFaqs({
      name: "birthday",
      intro:
        "A birthday celebration marks the day a person was born. A personalised birthday link can carry wishes, party details and a message.",
      highlights: [
        "Personalise the wish with a shared memory.",
        "Include the party date, time and venue.",
      ],
    }),
    keywords: [
      "birthday wishes",
      "birthday invitation link",
      "birthday card link",
      "personalised birthday message",
    ],
    related: ["wedding", "engagement", "new-year"],
    featured: true,
  },
  {
    slug: "wedding",
    name: "Wedding",
    category: "life",
    motif: "rings",
    tagline: "Two families, one beautiful beginning.",
    blurb:
      "A complete wedding invitation link with the couple, muhurtham, venue and RSVP.",
    intro:
      "An Indian wedding brings two families and a whole community together. A shareable link can carry the couple's names, the muhurtham, the venue and RSVP details without printing a single card.",
    dateLabel: "Choose your muhurtham date",
    theme: {
      from: "#2a0b1a",
      via: "#381020",
      to: "#45122a",
      accent: "#ffce7a",
      accent2: "#ff8fb3",
    },
    fields: [
      {
        key: "bride",
        label: "Bride's name",
        type: "text",
        placeholder: "e.g. Ananya",
        required: true,
        maxLength: 60,
        half: true,
        section: "who",
      },
      {
        key: "groom",
        label: "Groom's name",
        type: "text",
        placeholder: "e.g. Aditya",
        required: true,
        maxLength: 60,
        half: true,
        section: "who",
      },
      fields.date("Wedding date"),
      fields.time("Muhurtham time"),
      fields.venue("Venue"),
      fields.rsvp(),
      fields.from("Invited by"),
      fields.message(
        "With the blessings of our families, we invite you to celebrate our wedding.",
        400,
      ),
    ],
    defaultMessage:
      "With the blessings of our families, we invite you to celebrate our wedding.",
    highlights: [
      "Add both names exactly as you want them printed.",
      "Include the muhurtham date, time and venue.",
      "Add an RSVP number so guests can confirm.",
      "Write a short invitation note from both families.",
    ],
    faqs: lifeFaqs({
      name: "wedding",
      intro:
        "A wedding invitation shares the couple's names, date, time and venue with guests. A digital link is easy to send on WhatsApp and can be updated in minutes.",
      highlights: [
        "Include the muhurtham and venue.",
        "Add an RSVP contact for confirmations.",
      ],
    }),
    keywords: [
      "wedding invitation link",
      "digital wedding invitation",
      "shaadi invitation",
      "muhurtham invitation",
      "indian wedding card",
    ],
    related: ["engagement", "griha-pravesh", "ear-piercing"],
    featured: true,
  },
  {
    slug: "engagement",
    name: "Engagement",
    category: "life",
    motif: "rings",
    tagline: "The yes before the big day.",
    blurb:
      "A joyful engagement invitation for the couple, the ring ceremony and the families.",
    intro:
      "An engagement celebrates a couple's decision to marry. It is a warm, intimate gathering where families exchange rings, sweets and blessings. A link makes the invitation easy to share and impossible to lose.",
    dateLabel: "Choose your ring ceremony date",
    theme: {
      from: "#241022",
      via: "#30162d",
      to: "#3a1836",
      accent: "#ffb3d9",
      accent2: "#ffd166",
    },
    fields: [
      {
        key: "partner1",
        label: "First name",
        type: "text",
        placeholder: "e.g. Nila",
        required: true,
        maxLength: 60,
        half: true,
        section: "who",
      },
      {
        key: "partner2",
        label: "Second name",
        type: "text",
        placeholder: "e.g. Kavin",
        required: true,
        maxLength: 60,
        half: true,
        section: "who",
      },
      fields.date("Engagement date"),
      fields.time("Ring ceremony time"),
      fields.venue("Venue"),
      fields.from("Invited by"),
      fields.message(
        "Join us as we celebrate the beginning of a beautiful journey together.",
      ),
    ],
    defaultMessage:
      "Join us as we celebrate the beginning of a beautiful journey together.",
    highlights: [
      "Add both names and the ring ceremony details.",
      "Include the venue and a map-friendly address.",
      "Write a note from both families.",
      "Share the link with close family first.",
    ],
    faqs: lifeFaqs({
      name: "engagement",
      intro:
        "An engagement marks a couple's commitment before marriage. It usually includes a ring ceremony, family blessings and a shared meal.",
      highlights: [
        "Include both names and the ring ceremony time.",
        "Share the venue and RSVP details.",
      ],
    }),
    keywords: [
      "engagement invitation",
      "ring ceremony invitation",
      "engagement card link",
      "indian engagement",
    ],
    related: ["wedding", "birthday", "griha-pravesh"],
    featured: true,
  },
  {
    slug: "ear-piercing",
    name: "Ear Piercing",
    category: "life",
    motif: "ear",
    tagline: "A little blessing for a little one.",
    blurb:
      "A Karnavedha invitation for the child, the family, the date and the venue.",
    intro:
      "Karnavedha, or ear piercing, is a traditional Hindu samskara for children. Families gather for a small ceremony, blessings and a festive meal. A simple invitation link keeps everyone informed without a printed card.",
    dateLabel: "Choose your ceremony date",
    theme: {
      from: "#2a1600",
      via: "#341b00",
      to: "#3d2200",
      accent: "#ffc46b",
      accent2: "#ff8fb3",
    },
    fields: [
      {
        key: "child",
        label: "Child's name",
        type: "text",
        placeholder: "e.g. Aadhav",
        required: true,
        maxLength: 60,
        half: true,
        section: "who",
      },
      fields.date("Ceremony date"),
      fields.time("Ceremony time"),
      fields.venue("Venue"),
      fields.from("Family"),
      fields.message(
        "With the blessings of our elders, we invite you to our child's Karnavedha ceremony.",
      ),
    ],
    defaultMessage:
      "With the blessings of our elders, we invite you to our child's Karnavedha ceremony.",
    highlights: [
      "Add the child's name and the ceremony date.",
      "Include the venue, time and family name.",
      "Write a short note seeking blessings.",
      "Share the link with family and close friends.",
    ],
    faqs: lifeFaqs({
      name: "ear piercing",
      intro:
        "Karnavedha is a traditional Hindu samskara in which a child's ears are pierced, usually in a small family ceremony with blessings and a meal.",
      highlights: [
        "Include the child's name and ceremony time.",
        "Invite family to offer blessings.",
      ],
    }),
    keywords: [
      "ear piercing invitation",
      "karnavedha invitation",
      "indian baby function",
      "ear piercing ceremony",
    ],
    related: ["namkaran", "annaprashan", "birthday"],
    featured: true,
  },
  {
    slug: "namkaran",
    name: "Namkaran",
    category: "life",
    motif: "baby",
    tagline: "The day a little one gets a name.",
    blurb:
      "A naming ceremony invitation with the baby's name, date, venue and family blessings.",
    intro:
      "Namkaran is the Hindu naming ceremony for a newborn. The family gathers to choose and announce the baby's name, offer blessings and celebrate the newest member of the family.",
    dateLabel: "Choose your naming ceremony date",
    theme: {
      from: "#1a0f2e",
      via: "#22143a",
      to: "#2a1747",
      accent: "#c9a8ff",
      accent2: "#ffd166",
    },
    fields: [
      {
        key: "baby",
        label: "Baby's name",
        type: "text",
        placeholder: "e.g. Ira",
        required: true,
        maxLength: 60,
        half: true,
        section: "who",
      },
      fields.date("Ceremony date"),
      fields.time("Ceremony time"),
      fields.venue("Venue"),
      fields.from("Parents / family"),
      fields.message(
        "With grateful hearts, we invite you to bless our baby at the Namkaran ceremony.",
      ),
    ],
    defaultMessage:
      "With grateful hearts, we invite you to bless our baby at the Namkaran ceremony.",
    highlights: [
      "Announce the baby's name and the ceremony details.",
      "Include the parents' and grandparents' names.",
      "Write a short note of gratitude.",
      "Share the link with family and friends.",
    ],
    faqs: lifeFaqs({
      name: "Namkaran",
      intro:
        "Namkaran is the Hindu naming ceremony for a newborn. Family and friends gather to bless the baby and celebrate the chosen name.",
      highlights: [
        "Share the baby's name and ceremony details.",
        "Invite family to offer blessings.",
      ],
    }),
    keywords: [
      "namkaran invitation",
      "naming ceremony invitation",
      "baby naming card",
      "hindu baby function",
    ],
    related: ["annaprashan", "ear-piercing", "birthday"],
    featured: false,
  },
  {
    slug: "annaprashan",
    name: "Annaprashan",
    category: "life",
    motif: "kalash",
    tagline: "The first taste of a lifetime of meals.",
    blurb:
      "A first-rice ceremony invitation for the baby, the family and the joyful details.",
    intro:
      "Annaprashan is the Hindu ceremony that marks a baby's first solid food. The family offers the first spoonful of rice, seeks blessings and celebrates a small but meaningful milestone.",
    dateLabel: "Choose your first-rice ceremony date",
    theme: {
      from: "#241300",
      via: "#301a03",
      to: "#3a1f05",
      accent: "#ffcf7a",
      accent2: "#9ed36a",
    },
    fields: [
      {
        key: "baby",
        label: "Baby's name",
        type: "text",
        placeholder: "e.g. Krish",
        required: true,
        maxLength: 60,
        half: true,
        section: "who",
      },
      fields.date("Ceremony date"),
      fields.time("Ceremony time"),
      fields.venue("Venue"),
      fields.from("Parents / family"),
      fields.message(
        "Join us for our baby's Annaprashan — the first taste of rice and a lifetime of blessings.",
      ),
    ],
    defaultMessage:
      "Join us for our baby's Annaprashan — the first taste of rice and a lifetime of blessings.",
    highlights: [
      "Add the baby's name and first-rice ceremony details.",
      "Include the venue and a warm family note.",
      "Invite grandparents and close family.",
      "Share the link a few days in advance.",
    ],
    faqs: lifeFaqs({
      name: "Annaprashan",
      intro:
        "Annaprashan is the Hindu ceremony for a baby's first solid food, usually rice. Families gather to offer the first spoonful and seek blessings.",
      highlights: [
        "Share the baby's name and ceremony time.",
        "Invite family to bless the milestone.",
      ],
    }),
    keywords: [
      "annaprashan invitation",
      "first rice ceremony",
      "baby function invitation",
      "hindu baby ceremony",
    ],
    related: ["namkaran", "ear-piercing", "birthday"],
    featured: false,
  },
  {
    slug: "griha-pravesh",
    name: "Griha Pravesh",
    category: "life",
    motif: "home",
    tagline: "A new home, a new chapter.",
    blurb:
      "A housewarming invitation with the address, date, time and a house-full of blessings.",
    intro:
      "Griha Pravesh is the Hindu housewarming ceremony. The family enters a new home after pooja, offers prayers for prosperity and welcomes guests with sweets and a festive meal.",
    dateLabel: "Choose your housewarming date",
    theme: {
      from: "#1a1408",
      via: "#231b0b",
      to: "#2c220e",
      accent: "#ffd166",
      accent2: "#ff9a3d",
    },
    fields: [
      fields.from("Family name"),
      fields.date("Griha Pravesh date"),
      fields.time("Pooja time"),
      fields.address("New home address"),
      fields.message(
        "With the blessings of our elders, we invite you to our new home.",
      ),
    ],
    defaultMessage:
      "With the blessings of our elders, we invite you to our new home.",
    highlights: [
      "Add the family name and the new address.",
      "Include the pooja date and time.",
      "Write a short note welcoming guests.",
      "Share the link with neighbours, family and friends.",
    ],
    faqs: lifeFaqs({
      name: "Griha Pravesh",
      intro:
        "Griha Pravesh is the Hindu housewarming ceremony. The family enters a new home after pooja and welcomes guests with sweets and a festive meal.",
      highlights: [
        "Include the new address and pooja time.",
        "Invite guests for the housewarming meal.",
      ],
    }),
    keywords: [
      "griha pravesh invitation",
      "housewarming invitation",
      "new home pooja",
      "hindu housewarming",
    ],
    related: ["wedding", "engagement", "birthday"],
    featured: false,
  },
  {
    slug: "upanayana",
    name: "Upanayana",
    category: "life",
    motif: "thread",
    tagline: "A sacred thread, a lifelong promise.",
    blurb:
      "A thread ceremony invitation with the date, venue, family and blessings.",
    intro:
      "Upanayana, also called the sacred thread ceremony, is a Hindu samskara that marks a child's formal entry into learning and spiritual responsibility. Families gather for rituals, blessings and a shared meal.",
    dateLabel: "Choose your thread ceremony date",
    theme: {
      from: "#2a1206",
      via: "#341708",
      to: "#3d1c0a",
      accent: "#ffb347",
      accent2: "#ffe08a",
    },
    fields: [
      {
        key: "name",
        label: "Child's name",
        type: "text",
        placeholder: "e.g. Rishi",
        required: true,
        maxLength: 60,
        half: true,
        section: "who",
      },
      fields.date("Ceremony date"),
      fields.time("Ceremony time"),
      fields.venue("Venue"),
      fields.from("Family"),
      fields.message(
        "With the blessings of our elders, we invite you to our child's Upanayana ceremony.",
      ),
    ],
    defaultMessage:
      "With the blessings of our elders, we invite you to our child's Upanayana ceremony.",
    highlights: [
      "Add the child's name and ceremony details.",
      "Include the venue, time and family name.",
      "Write a note seeking blessings for the journey ahead.",
      "Share the link with family and well-wishers.",
    ],
    faqs: lifeFaqs({
      name: "Upanayana",
      intro:
        "Upanayana is the Hindu sacred thread ceremony. It marks a child's formal entry into learning and spiritual responsibility.",
      highlights: [
        "Include the child's name and ceremony time.",
        "Invite family to offer blessings.",
      ],
    }),
    keywords: [
      "upanayana invitation",
      "sacred thread ceremony",
      "thread ceremony invitation",
      "hindu samskara",
    ],
    related: ["namkaran", "ear-piercing", "griha-pravesh"],
    featured: false,
  },
];
