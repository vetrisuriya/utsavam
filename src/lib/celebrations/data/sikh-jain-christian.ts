import type { Celebration } from "../types";
import { festivalFaqs, fields } from "../helpers";

export const sikhJainCelebrations: Celebration[] = [
  {
    slug: "vaisakhi",
    name: "Vaisakhi",
    category: "sikh-jain",
    motif: "khanda",
    tagline: "Celebrate the birth of the Khalsa.",
    blurb:
      "A joyful Vaisakhi greeting for the harvest, the Khalsa and community seva.",
    intro:
      "Vaisakhi is the Sikh new year and harvest festival. It commemorates the formation of the Khalsa by Guru Gobind Singh in 1699 and is celebrated with nagar kirtan processions, langar, bhangra and community seva.",
    dateLabel: "Vaisakh month (April 13–14)",
    region: "Punjab and the Sikh diaspora",
    theme: {
      from: "#1c2100",
      via: "#242b03",
      to: "#2c3306",
      accent: "#e6c34a",
      accent2: "#ff9a3d",
    },
    fields: [
      fields.from(),
      fields.to(),
      fields.message("Happy Vaisakhi! May the Khalsa spirit of seva stay with you."),
    ],
    defaultMessage:
      "Happy Vaisakhi! May the Khalsa spirit of seva stay with you.",
    highlights: [
      "Join a nagar kirtan procession with the community.",
      "Serve and share langar at the gurdwara.",
      "Celebrate the harvest with bhangra and gidda.",
      "Remember the values of seva, equality and courage.",
    ],
    faqs: festivalFaqs({
      name: "Vaisakhi",
      dateLabel: "Vaisakh month (April 13–14)",
      intro:
        "Vaisakhi is the Sikh new year and harvest festival. It commemorates the formation of the Khalsa in 1699 and is celebrated with processions, langar and seva.",
      highlights: [
        "Nagar kirtan processions fill the streets.",
        "Langar is prepared and shared by the community.",
        "Bhangra and gidda celebrate the harvest.",
      ],
      slug: "vaisakhi",
    }),
    keywords: [
      "vaisakhi wishes",
      "happy vaisakhi",
      "khalsa greeting",
      "sikh festival",
    ],
    related: ["guru-nanak-gurpurab", "bandi-chhor-divas", "diwali"],
    featured: true,
  },
  {
    slug: "guru-nanak-gurpurab",
    name: "Guru Nanak Gurpurab",
    category: "sikh-jain",
    motif: "khanda",
    tagline: "Light a lamp for the Guru's wisdom.",
    blurb:
      "Honour the birth of Guru Nanak Dev Ji with a warm, respectful greeting.",
    intro:
      "Guru Nanak Gurpurab marks the birth of Guru Nanak Dev Ji, the founder of Sikhism. Gurdwaras are illuminated, the Guru Granth Sahib is read continuously, and langar is shared with everyone, regardless of background.",
    dateLabel: "Kartik Purnima (November)",
    region: "Punjab and the Sikh diaspora",
    theme: {
      from: "#1c1606",
      via: "#251d09",
      to: "#2e240b",
      accent: "#e8c76a",
      accent2: "#ffd166",
    },
    fields: [
      fields.from(),
      fields.to(),
      fields.message("Happy Gurpurab! May the Guru's wisdom light your path."),
    ],
    defaultMessage:
      "Happy Gurpurab! May the Guru's wisdom light your path.",
    highlights: [
      "Listen to the Guru Granth Sahib and kirtan.",
      "Join the akhand path and community prayers.",
      "Serve langar and share with everyone.",
      "Illuminate homes and gurdwaras with lamps.",
    ],
    faqs: festivalFaqs({
      name: "Guru Nanak Gurpurab",
      dateLabel: "Kartik Purnima (November)",
      intro:
        "Guru Nanak Gurpurab celebrates the birth of Guru Nanak Dev Ji, the founder of Sikhism. It is marked with continuous scripture reading, kirtan, lamps and langar.",
      highlights: [
        "Gurdwaras hold akhand path and kirtan.",
        "Langar is served to all visitors.",
        "Lamps and lights decorate homes and gurdwaras.",
      ],
      slug: "guru-nanak-gurpurab",
    }),
    keywords: [
      "gurpurab wishes",
      "guru nanak gurpurab",
      "sikh greeting",
      "gurpurab message",
    ],
    related: ["vaisakhi", "bandi-chhor-divas", "diwali"],
    featured: true,
  },
  {
    slug: "bandi-chhor-divas",
    name: "Bandi Chhor Divas",
    category: "sikh-jain",
    motif: "diya",
    tagline: "Freedom, light and the Guru's compassion.",
    blurb:
      "A Diwali-season Sikh greeting celebrating the release of Guru Hargobind Sahib.",
    intro:
      "Bandi Chhor Divas means the Day of Liberation. Sikhs remember Guru Hargobind Sahib's release from prison and the freeing of 52 princes. Gurdwaras glow with lamps and the Golden Temple is especially radiant on this day.",
    dateLabel: "Diwali season (October–November)",
    region: "Punjab and the Sikh diaspora",
    theme: {
      from: "#261a00",
      via: "#302105",
      to: "#3a2805",
      accent: "#f0c75e",
      accent2: "#ff9a3d",
    },
    fields: [
      fields.from(),
      fields.to(),
      fields.message("Happy Bandi Chhor Divas! May light and freedom find you."),
    ],
    defaultMessage:
      "Happy Bandi Chhor Divas! May light and freedom find you.",
    highlights: [
      "Visit the gurdwara and join the evening prayers.",
      "Light lamps at home and in the gurdwara.",
      "Remember Guru Hargobind Sahib's message of freedom.",
      "Share langar and sweets with the community.",
    ],
    faqs: festivalFaqs({
      name: "Bandi Chhor Divas",
      dateLabel: "Diwali season (October–November)",
      intro:
        "Bandi Chhor Divas commemorates Guru Hargobind Sahib's release from prison and the freedom of 52 princes. Sikhs celebrate with lamps, prayers and langar.",
      highlights: [
        "Gurdwaras are illuminated with lamps.",
        "Sikhs remember the Guru's message of freedom.",
        "Langar and sweets are shared with the community.",
      ],
      slug: "bandi-chhor-divas",
    }),
    keywords: [
      "bandi chhor divas",
      "sikh diwali",
      "guru hargobind",
      "sikh greeting",
    ],
    related: ["diwali", "guru-nanak-gurpurab", "vaisakhi"],
    featured: false,
  },
  {
    slug: "mahavir-jayanti",
    name: "Mahavir Jayanti",
    category: "sikh-jain",
    motif: "jain",
    tagline: "Celebrate ahimsa and inner victory.",
    blurb:
      "A calm, respectful greeting for the birth of Lord Mahavir.",
    intro:
      "Mahavir Jayanti celebrates the birth of Lord Mahavir, the 24th Tirthankara of Jainism. Jains mark the day with prayer, charity, processions and a renewed commitment to ahimsa, truth and non-possession.",
    dateLabel: "Chaitra month (March–April)",
    region: "Gujarat, Rajasthan, Bihar and across India",
    theme: {
      from: "#0f1a12",
      via: "#141f18",
      to: "#182a1d",
      accent: "#9ed36a",
      accent2: "#ffe08a",
    },
    fields: [
      fields.from(),
      fields.to(),
      fields.message("Jai Jinendra. May ahimsa and peace guide your day."),
    ],
    defaultMessage: "Jai Jinendra. May ahimsa and peace guide your day.",
    highlights: [
      "Visit a Jain temple for prayer and darshan.",
      "Take part in processions and community programmes.",
      "Practise charity and help those in need.",
      "Renew a commitment to ahimsa and simple living.",
    ],
    faqs: festivalFaqs({
      name: "Mahavir Jayanti",
      dateLabel: "Chaitra month (March–April)",
      intro:
        "Mahavir Jayanti celebrates the birth of Lord Mahavir, the 24th Tirthankara of Jainism. It is a day of prayer, charity and commitment to ahimsa.",
      highlights: [
        "Jain temples hold special prayers and darshan.",
        "Processions and community programmes mark the day.",
        "Charity and seva are central to the celebration.",
      ],
      slug: "mahavir-jayanti",
    }),
    keywords: [
      "mahavir jayanti wishes",
      "jai jinendra",
      "jain festival",
      "ahimsa greeting",
    ],
    related: ["paryushan", "diwali", "vaisakhi"],
    featured: true,
  },
  {
    slug: "paryushan",
    name: "Paryushan",
    category: "sikh-jain",
    motif: "jain",
    tagline: "Eight days of forgiveness and reflection.",
    blurb:
      "A thoughtful greeting for the Jain festival of fasting, study and forgiveness.",
    intro:
      "Paryushan is one of the most important Jain festivals. Over eight days, Jains fast, study the scriptures, practise self-discipline and end with Kshamavani, a day of asking and offering forgiveness.",
    dateLabel: "Bhadrapada month (August–September)",
    region: "Across India",
    theme: {
      from: "#101c1a",
      via: "#152621",
      to: "#19302c",
      accent: "#7fd1c0",
      accent2: "#c9e8a0",
    },
    fields: [
      fields.from(),
      fields.to(),
      fields.message("Michhami Dukkadam. May forgiveness and peace fill your heart."),
    ],
    defaultMessage:
      "Michhami Dukkadam. May forgiveness and peace fill your heart.",
    highlights: [
      "Fast and study the Jain scriptures.",
      "Attend temple discourses and community prayers.",
      "Practise restraint and reflection.",
      "Ask for and offer forgiveness on Kshamavani.",
    ],
    faqs: festivalFaqs({
      name: "Paryushan",
      dateLabel: "Bhadrapada month (August–September)",
      intro:
        "Paryushan is a major Jain festival of fasting, scripture study and reflection. It ends with Kshamavani, a day of mutual forgiveness.",
      highlights: [
        "Jains fast and study the scriptures.",
        "Temple discourses and community prayers are held.",
        "Kshamavani closes the festival with forgiveness.",
      ],
      slug: "paryushan",
    }),
    keywords: [
      "paryushan wishes",
      "kshamavani",
      "michhami dukkadam",
      "jain festival",
    ],
    related: ["mahavir-jayanti", "diwali", "guru-nanak-gurpurab"],
    featured: false,
  },
];

export const christianNewYearCelebrations: Celebration[] = [
  {
    slug: "christmas",
    name: "Christmas",
    category: "christian-newyear",
    motif: "cross",
    tagline: "Peace, joy and a little Christmas magic.",
    blurb:
      "A warm Christmas greeting for family, friends and the hope of the season.",
    intro:
      "Christmas celebrates the birth of Jesus Christ. Families gather for church services, decorate trees, exchange gifts and share a festive meal. The season is marked by carols, lights, charity and time together.",
    dateLabel: "December 25",
    region: "Worldwide",
    theme: {
      from: "#0c1f17",
      via: "#0f281d",
      to: "#123026",
      accent: "#ff6b6b",
      accent2: "#7ee3a8",
    },
    fields: [
      fields.from(),
      fields.to(),
      {
        key: "gift",
        label: "What are you sending?",
        type: "select",
        options: [
          "A prayer",
          "A warm hug",
          "Sweet treats",
          "A video call",
          "A little surprise",
        ],
        required: false,
        half: true,
        section: "who",
      },
      fields.message("May your Christmas be filled with peace, love and joy."),
    ],
    defaultMessage:
      "May your Christmas be filled with peace, love and joy.",
    highlights: [
      "Attend a Christmas Eve or Christmas Day service.",
      "Decorate the tree and light the house.",
      "Exchange gifts and share a festive meal.",
      "Sing carols and spend time with family.",
    ],
    faqs: festivalFaqs({
      name: "Christmas",
      dateLabel: "December 25",
      intro:
        "Christmas celebrates the birth of Jesus Christ. It is marked with church services, decorations, gifts, carols and family meals.",
      highlights: [
        "Families attend church and sing carols.",
        "Homes are decorated with trees and lights.",
        "Gifts and festive meals are shared.",
      ],
      slug: "christmas",
    }),
    keywords: [
      "christmas wishes",
      "merry christmas message",
      "christmas greeting link",
      "christmas invitation",
    ],
    related: ["new-year", "diwali", "birthday"],
    featured: true,
  },
  {
    slug: "new-year",
    name: "New Year",
    category: "christian-newyear",
    motif: "star",
    tagline: "A fresh page, a brighter year.",
    blurb:
      "A hopeful New Year greeting with a personal resolution and a reason to celebrate.",
    intro:
      "New Year marks a fresh calendar year. People reflect on the year gone by, make resolutions and celebrate with family and friends. It is a simple, universal moment to wish someone a brighter year ahead.",
    dateLabel: "January 1",
    region: "Worldwide",
    theme: {
      from: "#0b0f2a",
      via: "#120d35",
      to: "#1a1140",
      accent: "#ffd166",
      accent2: "#8fb3ff",
    },
    fields: [
      fields.from(),
      fields.to(),
      {
        key: "year",
        label: "Year",
        type: "text",
        placeholder: "2026",
        maxLength: 4,
        required: false,
        half: true,
        section: "details",
        inputMode: "numeric",
      },
      fields.message("Wishing you a year of good health, brave choices and joy."),
    ],
    defaultMessage:
      "Wishing you a year of good health, brave choices and joy.",
    highlights: [
      "Reflect on the year and set a few kind resolutions.",
      "Celebrate with family, friends or a quiet meal.",
      "Send wishes to people you have not spoken to in a while.",
      "Start the year with one small act of kindness.",
    ],
    faqs: festivalFaqs({
      name: "New Year",
      dateLabel: "January 1",
      intro:
        "New Year marks the start of a fresh calendar year. It is a universal moment for reflection, resolutions and wishes for the year ahead.",
      highlights: [
        "People reflect on the past year and make resolutions.",
        "Families and friends gather to celebrate.",
        "Messages and gifts are exchanged at midnight.",
      ],
      slug: "new-year",
    }),
    keywords: [
      "new year wishes",
      "happy new year message",
      "new year greeting link",
      "resolution card",
    ],
    related: ["christmas", "diwali", "birthday"],
    featured: true,
  },
];
