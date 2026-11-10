import type { Celebration } from "../types";
import { festivalFaqs, fields } from "../helpers";

export const hinduFestivals: Celebration[] = [
  {
    slug: "diwali",
    name: "Diwali",
    category: "hindu",
    motif: "diya",
    tagline: "Light up their day with a diya.",
    blurb:
      "A glowing greeting for the festival of lights, sweets, rangoli and new beginnings.",
    intro:
      "Diwali, also called Deepavali, is the Hindu festival of lights. Homes are cleaned, rows of clay diyas are lit, rangolis are drawn and sweets are shared to celebrate the victory of light over darkness and good over evil.",
    dateLabel: "Kartik Amavasya (October–November)",
    region: "Across India and the Hindu diaspora",
    theme: {
      from: "#150a2c",
      via: "#25102f",
      to: "#3b1220",
      accent: "#f6b73c",
      accent2: "#ff8a3d",
    },
    fields: [
      fields.from(),
      fields.to(),
      fields.message(
        "May your Diwali be filled with light, laughter and sweetness.",
      ),
    ],
    defaultMessage:
      "May your Diwali be filled with light, laughter and sweetness.",
    highlights: [
      "Light rows of clay diyas around doorways, balconies and courtyards.",
      "Draw colourful rangoli patterns with flowers, rice flour and petals.",
      "Share sweets, dry fruits and small gifts with family, friends and neighbours.",
      "Watch fireworks and celebrate with a pooja for Lakshmi and Ganesha.",
    ],
    faqs: festivalFaqs({
      name: "Diwali",
      dateLabel: "Kartik Amavasya (October–November)",
      intro:
        "Diwali, or Deepavali, is the Hindu festival of lights. It celebrates the triumph of light over darkness and is marked with diyas, rangoli, sweets, fireworks and family gatherings.",
      highlights: [
        "Homes are cleaned and decorated with diyas, rangoli and marigold garlands.",
        "Families perform Lakshmi pooja, exchange sweets and share gifts.",
        "Fireworks, lanterns and festive meals complete the celebration.",
      ],
      slug: "diwali",
    }),
    keywords: [
      "diwali greeting",
      "deepavali wishes",
      "diwali card link",
      "diwali message",
      "festival of lights",
    ],
    related: ["holi", "new-year", "ganesh-chaturthi"],
    featured: true,
  },
  {
    slug: "holi",
    name: "Holi",
    category: "hindu",
    motif: "colors",
    tagline: "Throw colour. Share joy.",
    blurb:
      "A bright, playful greeting for the festival of colours, gujiya and togetherness.",
    intro:
      "Holi is the Hindu festival of colours, celebrated at the arrival of spring. Friends and families gather to play with coloured powder and water, share sweets and let old disagreements dissolve.",
    dateLabel: "Phalguna Purnima (March)",
    region: "North India and across the diaspora",
    theme: {
      from: "#2a0f2e",
      via: "#3a1236",
      to: "#4b1230",
      accent: "#ff6ba8",
      accent2: "#ffd166",
    },
    fields: [
      fields.from(),
      fields.to(),
      {
        key: "color",
        label: "Pick a colour for them",
        type: "select",
        options: ["Pink", "Yellow", "Green", "Blue", "Purple", "Every colour"],
        required: false,
        half: true,
        section: "who",
      },
      fields.message("May your Holi be as colourful as your smile."),
    ],
    defaultMessage: "May your Holi be as colourful as your smile.",
    highlights: [
      "Play with gulal, coloured water and pichkari in the morning.",
      "Share gujiya, thandai and festive snacks with neighbours.",
      "Light the Holika bonfire on the eve of Holi.",
      "Forgive old differences and celebrate a fresh start.",
    ],
    faqs: festivalFaqs({
      name: "Holi",
      dateLabel: "Phalguna Purnima (March)",
      intro:
        "Holi is the Hindu festival of colours. It marks the arrival of spring and the victory of devotion over arrogance, and is celebrated with coloured powder, water, music and sweets.",
      highlights: [
        "People play with gulal and coloured water.",
        "Families share gujiya, thandai and other festive food.",
        "A Holika bonfire is lit the night before Holi.",
      ],
      slug: "holi",
    }),
    keywords: [
      "holi wishes",
      "happy holi message",
      "holi greeting link",
      "festival of colours",
    ],
    related: ["diwali", "navratri", "janmashtami"],
    featured: true,
  },
  {
    slug: "onam",
    name: "Onam",
    category: "hindu",
    motif: "lotus",
    tagline: "A sadya of love across the sea.",
    blurb:
      "Pookalam, payasam and the homecoming of King Mahabali — a warm Kerala greeting.",
    intro:
      "Onam is Kerala's harvest festival, welcoming the mythical King Mahabali. Homes are decorated with pookalam flower carpets, families prepare a grand sadya and the ten-day celebration honours prosperity, equality and togetherness.",
    dateLabel: "Chingam month (August–September)",
    region: "Kerala",
    theme: {
      from: "#0d2418",
      via: "#12301e",
      to: "#173a22",
      accent: "#ffcf5c",
      accent2: "#9ed36a",
    },
    fields: [
      fields.from(),
      fields.to(),
      fields.date("Sadya date"),
      fields.venue("Where is the sadya?"),
      fields.message("Onam wishes filled with pookalam, payasam and togetherness."),
    ],
    defaultMessage:
      "Onam wishes filled with pookalam, payasam and togetherness.",
    highlights: [
      "Draw a pookalam with fresh flowers outside the home.",
      "Serve a traditional Onam sadya on a banana leaf.",
      "Welcome King Mahabali with lights, music and family gatherings.",
      "Watch or take part in vallam kali boat races and cultural programmes.",
    ],
    faqs: festivalFaqs({
      name: "Onam",
      dateLabel: "Chingam month (August–September)",
      intro:
        "Onam is Kerala's harvest festival and the homecoming of King Mahabali. It is celebrated with pookalam flower carpets, a grand sadya and ten days of cultural programmes.",
      highlights: [
        "Families draw pookalam with fresh flowers.",
        "A traditional sadya is served on a banana leaf.",
        "Vallam kali boat races and cultural events draw crowds.",
      ],
      slug: "onam",
    }),
    keywords: [
      "onam wishes",
      "onam sadya invitation",
      "pookalam greeting",
      "malayalam onam message",
    ],
    related: ["vishu", "pongal", "ugadi"],
    featured: true,
  },
  {
    slug: "pongal",
    name: "Pongal",
    category: "hindu",
    motif: "sun",
    tagline: "Let the harvest overflow with joy.",
    blurb:
      "A Tamil harvest greeting for new rice, sugarcane and the sweetness of family.",
    intro:
      "Pongal is the Tamil harvest festival, celebrated over four days. Families boil the first rice of the harvest with jaggery and milk, decorate with kolam and thank the sun, the earth and the cattle that make the harvest possible.",
    dateLabel: "Thai month (January 14–17)",
    region: "Tamil Nadu",
    theme: {
      from: "#241306",
      via: "#301a08",
      to: "#3a1d0a",
      accent: "#ffb347",
      accent2: "#ffe08a",
    },
    fields: [
      fields.from(),
      fields.to(),
      fields.message("May your Pongal be full of sweetness, harvest and joy."),
    ],
    defaultMessage:
      "May your Pongal be full of sweetness, harvest and joy.",
    highlights: [
      "Draw kolam with rice flour at the doorstep.",
      "Boil new rice, milk and jaggery in a clay pot until it overflows.",
      "Honour cattle on Maattu Pongal with decorations and treats.",
      "Visit family, exchange sugarcane and share a festive meal.",
    ],
    faqs: festivalFaqs({
      name: "Pongal",
      dateLabel: "Thai month (January 14–17)",
      intro:
        "Pongal is the Tamil harvest festival. It thanks the sun, the land and the cattle for a good harvest and is celebrated with kolam, a bubbling pot of sweet pongal and family visits.",
      highlights: [
        "Families draw kolam at the entrance.",
        "Sweet pongal is cooked in a clay pot until it overflows.",
        "Cattle are honoured on Maattu Pongal.",
      ],
      slug: "pongal",
    }),
    keywords: [
      "pongal wishes",
      "tamil pongal message",
      "pongal greeting link",
      "thai pongal",
    ],
    related: ["makar-sankranti", "ugadi", "onam"],
    featured: true,
  },
  {
    slug: "navratri",
    name: "Navratri",
    category: "hindu",
    motif: "garba",
    tagline: "Nine nights. One shared rhythm.",
    blurb:
      "Garba, dandiya, Durga Puja and nine nights of devotion — a greeting for the goddess.",
    intro:
      "Navratri means nine nights. Across India, devotees honour the nine forms of Durga with fasting, prayer, garba and dandiya. In Bengal, the same season becomes Durga Puja, with magnificent pandals and community feasts.",
    dateLabel: "Ashwin month (September–October)",
    region: "Gujarat, Maharashtra, Bengal and across India",
    theme: {
      from: "#1b0d2e",
      via: "#2a0f33",
      to: "#3a0f2b",
      accent: "#ff8f3f",
      accent2: "#ffd166",
    },
    fields: [
      fields.from(),
      fields.to(),
      fields.message("Wishing you nine nights of light, dance and devotion."),
    ],
    defaultMessage:
      "Wishing you nine nights of light, dance and devotion.",
    highlights: [
      "Fast, pray and decorate the home for nine nights.",
      "Dance garba and dandiya with family and friends.",
      "Visit Durga Puja pandals and attend cultural programmes.",
      "Celebrate Vijayadashami with processions and festive meals.",
    ],
    faqs: festivalFaqs({
      name: "Navratri",
      dateLabel: "Ashwin month (September–October)",
      intro:
        "Navratri is a nine-night Hindu festival honouring the nine forms of Durga. It is celebrated with prayer, fasting, garba, dandiya and vibrant community events.",
      highlights: [
        "Devotees fast and pray for nine nights.",
        "Garba and dandiya fill courtyards and community halls.",
        "Durga Puja pandals and Vijayadashami processions mark the finale.",
      ],
      slug: "navratri",
    }),
    keywords: [
      "navratri wishes",
      "durga puja greeting",
      "garba invitation",
      "vijayadashami message",
    ],
    related: ["ganesh-chaturthi", "diwali", "raksha-bandhan"],
    featured: true,
  },
  {
    slug: "ganesh-chaturthi",
    name: "Ganesh Chaturthi",
    category: "hindu",
    motif: "modak",
    tagline: "Bappa arrives with blessings.",
    blurb:
      "Welcome Lord Ganesha with a colourful, modak-sweet celebration link.",
    intro:
      "Ganesh Chaturthi celebrates the birth of Lord Ganesha, the remover of obstacles. Homes and streets welcome clay idols of Bappa with music, flowers, modaks and ten days of devotion before the visarjan procession.",
    dateLabel: "Bhadrapada month (August–September)",
    region: "Maharashtra, Goa, Karnataka and across India",
    theme: {
      from: "#2a1000",
      via: "#341603",
      to: "#3d1c07",
      accent: "#ffb347",
      accent2: "#ff7a1a",
    },
    fields: [
      fields.from(),
      fields.to(),
      fields.message("Ganpati Bappa Morya! May every obstacle melt away."),
    ],
    defaultMessage: "Ganpati Bappa Morya! May every obstacle melt away.",
    highlights: [
      "Bring home a clay Ganesha idol and decorate the pooja space.",
      "Offer modak, durva grass and red flowers.",
      "Join community aarti, music and cultural programmes.",
      "Celebrate visarjan with a joyful procession.",
    ],
    faqs: festivalFaqs({
      name: "Ganesh Chaturthi",
      dateLabel: "Bhadrapada month (August–September)",
      intro:
        "Ganesh Chaturthi marks the birth of Lord Ganesha, the remover of obstacles. Families install clay idols, offer modaks and celebrate for ten days before visarjan.",
      highlights: [
        "Clay Ganesha idols are installed at home and in pandals.",
        "Devotees offer modak, durva and red flowers.",
        "Visarjan processions close the celebration.",
      ],
      slug: "ganesh-chaturthi",
    }),
    keywords: [
      "ganesh chaturthi wishes",
      "ganpati bappa morya",
      "ganesh greeting link",
      "modak invitation",
    ],
    related: ["navratri", "diwali", "janmashtami"],
    featured: true,
  },
  {
    slug: "janmashtami",
    name: "Janmashtami",
    category: "hindu",
    motif: "flute",
    tagline: "Celebrate the music of Krishna.",
    blurb:
      "A midnight celebration of Krishna's birth, with flute, butter and devotion.",
    intro:
      "Krishna Janmashtami celebrates the birth of Lord Krishna at midnight. Devotees fast, sing bhajans, decorate cradles and re-enact Krishna's life through dance and drama, especially in Mathura and Vrindavan.",
    dateLabel: "Bhadrapada month (August–September)",
    region: "Mathura, Vrindavan and across India",
    theme: {
      from: "#0b1733",
      via: "#0e1e3d",
      to: "#10264a",
      accent: "#6ea8ff",
      accent2: "#ffd166",
    },
    fields: [
      fields.from(),
      fields.to(),
      fields.message("May Krishna's flute fill your home with joy and devotion."),
    ],
    defaultMessage:
      "May Krishna's flute fill your home with joy and devotion.",
    highlights: [
      "Fast through the day and break the fast after midnight.",
      "Sing bhajans and decorate a cradle for baby Krishna.",
      "Re-enact Krishna's life through plays and dance.",
      "Share butter, mishri and festive sweets.",
    ],
    faqs: festivalFaqs({
      name: "Janmashtami",
      dateLabel: "Bhadrapada month (August–September)",
      intro:
        "Janmashtami celebrates the birth of Lord Krishna. Devotees fast, sing bhajans, decorate cradles and welcome Krishna at midnight.",
      highlights: [
        "Families fast and worship through the evening.",
        "Cradles and baby Krishna idols are decorated.",
        "Bhajans, dance dramas and sweets mark the night.",
      ],
      slug: "janmashtami",
    }),
    keywords: [
      "janmashtami wishes",
      "krishna janmashtami message",
      "janmashtami greeting",
      "dahi handi",
    ],
    related: ["ganesh-chaturthi", "diwali", "holi"],
    featured: true,
  },
  {
    slug: "raksha-bandhan",
    name: "Raksha Bandhan",
    category: "hindu",
    motif: "rakhi",
    tagline: "A thread that says I've got you.",
    blurb:
      "For brothers, sisters, cousins and friends — tie a rakhi across the miles.",
    intro:
      "Raksha Bandhan celebrates the bond between siblings. A rakhi is tied around the wrist as a promise of protection and care, followed by sweets, gifts and family time. The bond extends to cousins and chosen family too.",
    dateLabel: "Shravana Purnima (August)",
    region: "North and west India",
    theme: {
      from: "#2a0c1e",
      via: "#381026",
      to: "#43102c",
      accent: "#ff7eb6",
      accent2: "#ffd166",
    },
    fields: [
      fields.from(),
      fields.to("Who are you tying the rakhi for?"),
      {
        key: "bond",
        label: "Your bond",
        type: "select",
        options: ["Brother", "Sister", "Cousin", "Chosen family", "Friend"],
        required: false,
        half: true,
        section: "who",
      },
      fields.message("A thread of love, a lifetime of care. Happy Raksha Bandhan."),
    ],
    defaultMessage:
      "A thread of love, a lifetime of care. Happy Raksha Bandhan.",
    highlights: [
      "Tie a rakhi and apply tilak on the wrist.",
      "Exchange sweets and gifts with siblings.",
      "Send rakhis by post to family living far away.",
      "Celebrate with a family meal and photographs.",
    ],
    faqs: festivalFaqs({
      name: "Raksha Bandhan",
      dateLabel: "Shravana Purnima (August)",
      intro:
        "Raksha Bandhan celebrates the bond between siblings. A rakhi is tied as a promise of protection and care, followed by sweets, gifts and family time.",
      highlights: [
        "Sisters tie a rakhi on their brother's wrist.",
        "Families exchange sweets and gifts.",
        "Rakhis are often posted to siblings living abroad.",
      ],
      slug: "raksha-bandhan",
    }),
    keywords: [
      "raksha bandhan wishes",
      "rakhi message",
      "rakhi greeting link",
      "sibling celebration",
    ],
    related: ["diwali", "karva-chauth", "navratri"],
    featured: false,
  },
  {
    slug: "ugadi",
    name: "Ugadi",
    category: "hindu",
    motif: "mango",
    tagline: "A new year with all six tastes.",
    blurb:
      "A Telugu and Kannada new year greeting, served with Ugadi pachadi and mango leaves.",
    intro:
      "Ugadi marks the beginning of the new year in the Telugu and Kannada calendars. Homes are decorated with mango leaves, and the six tastes of Ugadi pachadi remind families that the year ahead will hold joy, sorrow, anger and sweetness alike.",
    dateLabel: "Chaitra month (March–April)",
    region: "Andhra Pradesh, Telangana and Karnataka",
    theme: {
      from: "#12260f",
      via: "#17301a",
      to: "#1b3a15",
      accent: "#dbc15a",
      accent2: "#9ed36a",
    },
    fields: [
      fields.from(),
      fields.to(),
      fields.message("Ugadi Subhakankshalu! May the new year bring sweet beginnings."),
    ],
    defaultMessage:
      "Ugadi Subhakankshalu! May the new year bring sweet beginnings.",
    highlights: [
      "Decorate doorways with fresh mango leaves.",
      "Prepare Ugadi pachadi with six distinct tastes.",
      "Listen to the Panchangam and new year predictions.",
      "Visit family and share festive food.",
    ],
    faqs: festivalFaqs({
      name: "Ugadi",
      dateLabel: "Chaitra month (March–April)",
      intro:
        "Ugadi is the new year festival of the Telugu and Kannada calendars. It is celebrated with mango leaves, Ugadi pachadi and family gatherings.",
      highlights: [
        "Doorways are decorated with mango leaves.",
        "Ugadi pachadi combines six tastes.",
        "Families listen to the Panchangam and share a festive meal.",
      ],
      slug: "ugadi",
    }),
    keywords: [
      "ugadi wishes",
      "ugadi subhakankshalu",
      "telugu new year",
      "kannada new year",
    ],
    related: ["vishu", "pongal", "makar-sankranti"],
    featured: false,
  },
  {
    slug: "makar-sankranti",
    name: "Makar Sankranti",
    category: "hindu",
    motif: "kite",
    tagline: "Rise with the sun, fly a kite.",
    blurb:
      "A harvest-and-sun celebration with til laddoo, kites and new beginnings.",
    intro:
      "Makar Sankranti marks the sun's journey into Capricorn and the end of winter. Across India it is celebrated with kites, sesame sweets, bonfires and harvest feasts, under names like Lohri, Pongal and Bihu.",
    dateLabel: "January 14–15",
    region: "Across India",
    theme: {
      from: "#1a1606",
      via: "#241d08",
      to: "#2d260b",
      accent: "#ffd166",
      accent2: "#ff9a3d",
    },
    fields: [
      fields.from(),
      fields.to(),
      fields.message("May the new sun bring you warmth, harvest and joy."),
    ],
    defaultMessage: "May the new sun bring you warmth, harvest and joy.",
    highlights: [
      "Fly kites from rooftops with family and neighbours.",
      "Share til laddoo, jaggery and sesame sweets.",
      "Light bonfires on Lohri and gather with community.",
      "Take a holy dip and give thanks for the harvest.",
    ],
    faqs: festivalFaqs({
      name: "Makar Sankranti",
      dateLabel: "January 14–15",
      intro:
        "Makar Sankranti marks the sun's entry into Capricorn. It is a harvest and sun festival celebrated with kites, sesame sweets and community gatherings.",
      highlights: [
        "Kites fill the sky from rooftops.",
        "Families share til laddoo and jaggery sweets.",
        "Bonfires and community meals mark the harvest.",
      ],
      slug: "makar-sankranti",
    }),
    keywords: [
      "makar sankranti wishes",
      "lohri message",
      "kite festival greeting",
      "til laddoo",
    ],
    related: ["pongal", "ugadi", "vishu"],
    featured: false,
  },
  {
    slug: "maha-shivratri",
    name: "Maha Shivratri",
    category: "hindu",
    motif: "trident",
    tagline: "Awake through the night for Shiva.",
    blurb:
      "A night of prayer, abhishekam and stillness in honour of Lord Shiva.",
    intro:
      "Maha Shivratri is the great night of Lord Shiva. Devotees fast, stay awake, offer abhishekam and chant Om Namah Shivaya. The night is associated with Shiva's cosmic dance and the union of Shiva and Parvati.",
    dateLabel: "Phalguna month (February–March)",
    region: "Across India, especially Ujjain and Varanasi",
    theme: {
      from: "#0b1026",
      via: "#0f1631",
      to: "#131b3d",
      accent: "#8fb3ff",
      accent2: "#c9a8ff",
    },
    fields: [
      fields.from(),
      fields.to(),
      fields.message("Har Har Mahadev. May Shiva's blessings bring you peace."),
    ],
    defaultMessage:
      "Har Har Mahadev. May Shiva's blessings bring you peace.",
    highlights: [
      "Fast and keep vigil through the night.",
      "Offer milk, honey and water in abhishekam.",
      "Chant Om Namah Shivaya and sing bhajans.",
      "Visit a Shiva temple and join the community pooja.",
    ],
    faqs: festivalFaqs({
      name: "Maha Shivratri",
      dateLabel: "Phalguna month (February–March)",
      intro:
        "Maha Shivratri is the great night of Lord Shiva. Devotees fast, keep vigil, offer abhishekam and chant Om Namah Shivaya.",
      highlights: [
        "Devotees fast and stay awake through the night.",
        "Milk, honey and water are offered to the Shivalinga.",
        "Temples hold special poojas and bhajans.",
      ],
      slug: "maha-shivratri",
    }),
    keywords: [
      "maha shivratri wishes",
      "har har mahadev",
      "shiva greeting",
      "om namah shivaya",
    ],
    related: ["navratri", "ram-navami", "diwali"],
    featured: false,
  },
  {
    slug: "ram-navami",
    name: "Ram Navami",
    category: "hindu",
    motif: "bow",
    tagline: "Celebrate the return of dharma.",
    blurb:
      "A serene greeting for the birth of Lord Rama, with paath, bhajan and family pooja.",
    intro:
      "Ram Navami celebrates the birth of Lord Rama, the seventh avatar of Vishnu. Devotees recite the Ramayana, sing bhajans and hold poojas, especially at Ayodhya, to honour Rama's life and the ideal of dharma.",
    dateLabel: "Chaitra month (March–April)",
    region: "Ayodhya and across India",
    theme: {
      from: "#2a1400",
      via: "#331b04",
      to: "#3b1f08",
      accent: "#ffb347",
      accent2: "#ffe08a",
    },
    fields: [
      fields.from(),
      fields.to(),
      fields.message("Jai Shri Ram. May dharma and peace always guide you."),
    ],
    defaultMessage: "Jai Shri Ram. May dharma and peace always guide you.",
    highlights: [
      "Recite the Ramayana or listen to a Ram Katha.",
      "Sing bhajans and offer pooja at home.",
      "Visit a Ram temple and join the community celebration.",
      "Share prasad and a festive meal with family.",
    ],
    faqs: festivalFaqs({
      name: "Ram Navami",
      dateLabel: "Chaitra month (March–April)",
      intro:
        "Ram Navami celebrates the birth of Lord Rama. Devotees recite the Ramayana, sing bhajans and hold poojas to honour dharma.",
      highlights: [
        "Families recite the Ramayana and sing bhajans.",
        "Temples hold special poojas and processions.",
        "Prasad and festive meals are shared.",
      ],
      slug: "ram-navami",
    }),
    keywords: [
      "ram navami wishes",
      "jai shri ram",
      "ram navami greeting",
      "ayodhya",
    ],
    related: ["maha-shivratri", "navratri", "diwali"],
    featured: false,
  },
  {
    slug: "karva-chauth",
    name: "Karva Chauth",
    category: "hindu",
    motif: "moon",
    tagline: "A fast, a moonrise, a promise.",
    blurb:
      "A loving greeting for couples who fast together and wait for the moon.",
    intro:
      "Karva Chauth is a one-day festival in which married women fast from sunrise to moonrise for the wellbeing of their husbands. Families gather, share stories and break the fast after offering water to the moon.",
    dateLabel: "Kartik month (October)",
    region: "North India",
    theme: {
      from: "#1a1026",
      via: "#231533",
      to: "#2b163d",
      accent: "#d9c6ff",
      accent2: "#ff9ab8",
    },
    fields: [
      fields.from(),
      fields.to(),
      fields.time("Moonrise time"),
      fields.message("May your bond stay as steady as the moon in the sky."),
    ],
    defaultMessage:
      "May your bond stay as steady as the moon in the sky.",
    highlights: [
      "Fast from sunrise and prepare the Karva Chauth thali.",
      "Listen to the Katha with family and friends.",
      "Offer water to the moon and break the fast together.",
      "Celebrate with a festive meal and gifts.",
    ],
    faqs: festivalFaqs({
      name: "Karva Chauth",
      dateLabel: "Kartik month (October)",
      intro:
        "Karva Chauth is a one-day festival where married women fast from sunrise to moonrise for their husband's wellbeing. The fast is broken after the moon is sighted.",
      highlights: [
        "Women fast through the day and prepare a festive thali.",
        "The Karva Chauth Katha is shared with family and friends.",
        "The fast ends after offering water to the moon.",
      ],
      slug: "karva-chauth",
    }),
    keywords: [
      "karva chauth wishes",
      "karva chauth message",
      "moonrise greeting",
      "couple festival",
    ],
    related: ["raksha-bandhan", "diwali", "navratri"],
    featured: false,
  },
  {
    slug: "vishu",
    name: "Vishu",
    category: "hindu",
    motif: "lantern",
    tagline: "Wake up to a year of prosperity.",
    blurb:
      "A Kerala new year greeting with Vishukkani, golden blossoms and family blessings.",
    intro:
      "Vishu is the Malayalam new year, celebrated on the first day of the Medam month. The day begins with Vishukkani — a carefully arranged tray of auspicious items — followed by Vishukkaineetam, a gift of money and blessings from elders.",
    dateLabel: "Medam month (April 14–15)",
    region: "Kerala",
    theme: {
      from: "#221a00",
      via: "#2e2303",
      to: "#3a2c06",
      accent: "#ffd166",
      accent2: "#ffe9a8",
    },
    fields: [
      fields.from(),
      fields.to(),
      fields.message("Vishu Ashamsakal! May your year be golden and prosperous."),
    ],
    defaultMessage:
      "Vishu Ashamsakal! May your year be golden and prosperous.",
    highlights: [
      "Arrange Vishukkani with flowers, fruits and a mirror.",
      "Seek blessings from elders and receive Vishukkaineetam.",
      "Light the Vishu vilakku and burst firecrackers.",
      "Share a festive sadya with family.",
    ],
    faqs: festivalFaqs({
      name: "Vishu",
      dateLabel: "Medam month (April 14–15)",
      intro:
        "Vishu is the Malayalam new year. It begins with Vishukkani and the giving of Vishukkaineetam, a gift of money and blessings.",
      highlights: [
        "Families arrange the auspicious Vishukkani tray.",
        "Elders give Vishukkaineetam to younger members.",
        "A festive sadya and firecrackers mark the day.",
      ],
      slug: "vishu",
    }),
    keywords: [
      "vishu wishes",
      "vishu ashamsakal",
      "malayalam new year",
      "vishukkani",
    ],
    related: ["onam", "ugadi", "pongal"],
    featured: false,
  },
  {
    slug: "chhath-puja",
    name: "Chhath Puja",
    category: "hindu",
    motif: "sun",
    tagline: "Thank the sun at the riverbank.",
    blurb:
      "A four-day Bihari celebration of the sun, the river and family wellbeing.",
    intro:
      "Chhath Puja is a four-day festival dedicated to Surya and Chhathi Maiya. Devotees gather at riverbanks and ponds to offer arghya at sunset and sunrise, thanking the sun for life, health and prosperity.",
    dateLabel: "Kartik month (October–November)",
    region: "Bihar, Jharkhand, Uttar Pradesh and Nepal",
    theme: {
      from: "#2b1200",
      via: "#361703",
      to: "#401b06",
      accent: "#ff9a3d",
      accent2: "#ffd166",
    },
    fields: [
      fields.from(),
      fields.to(),
      fields.message("Chhath Mahaparv ki shubhkamnayein. May the sun bless your family."),
    ],
    defaultMessage:
      "Chhath Mahaparv ki shubhkamnayein. May the sun bless your family.",
    highlights: [
      "Prepare the Chhath thali with fruits, thekua and sugarcane.",
      "Offer arghya to the setting sun at a riverbank or pond.",
      "Keep vigil and offer arghya again at sunrise.",
      "Share prasad and celebrate with family.",
    ],
    faqs: festivalFaqs({
      name: "Chhath Puja",
      dateLabel: "Kartik month (October–November)",
      intro:
        "Chhath Puja is a four-day festival dedicated to Surya and Chhathi Maiya. Devotees offer arghya to the sun at sunset and sunrise for family wellbeing.",
      highlights: [
        "Families prepare a Chhath thali with thekua and fruit.",
        "Devotees gather at riverbanks for sunset and sunrise arghya.",
        "Prasad is shared after the final offering.",
      ],
      slug: "chhath-puja",
    }),
    keywords: [
      "chhath puja wishes",
      "chhath mahaparv",
      "surya arghya",
      "bihar festival",
    ],
    related: ["diwali", "makar-sankranti", "navratri"],
    featured: false,
  },
];
