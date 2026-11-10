import { CELEBRATIONS } from "@/lib/celebrations";
import { CATEGORIES } from "@/lib/celebrations/categories";
import { SITE, SITE_DESCRIPTION, SITE_URL } from "@/lib/site";


function buildLlms(): string {
  const lines: string[] = [];

  lines.push(`# ${SITE.name}`);
  lines.push("");
  lines.push(`> ${SITE.tagline}`);
  lines.push("");
  lines.push(SITE_DESCRIPTION);
  lines.push("");
  lines.push("## Key facts");
  lines.push("");
  lines.push(`- Site: ${SITE_URL}`);
  lines.push("- Purpose: create and share personalised Indian celebration greeting and invitation links.");
  lines.push(`- Celebrations covered: ${CELEBRATIONS.length}, across ${CATEGORIES.length} groups.`);
  lines.push("- Cost: free, no signup, no account, no payment.");
  lines.push("- Data model: card details are encoded in the share URL; no wish database is used.");
  lines.push("- Languages: the interface is English; each card shows the festival name in Tamil, Hindi, Telugu or Malayalam (Tamil by default).");
  lines.push("- Licence: MIT. Source: " + SITE.repo);
  lines.push(`- Creator: ${SITE.creator.name} (${SITE.creator.url})`);
  lines.push(`- Last updated: ${SITE.updated}`);
  lines.push("");
  lines.push("## Quick answers");
  lines.push("");
  lines.push("Q: What is Utsavam?");
  lines.push(
    "A: Utsavam is a free, open-source website for making a personalised greeting or invitation card for an Indian festival or family function, then sharing it as a single link.",
  );
  lines.push("");
  lines.push("Q: How much does it cost?");
  lines.push("A: Nothing. Every card is free, with no watermark, trial or paywall, and the source code is MIT licensed.");
  lines.push("");
  lines.push("Q: Do I need an account?");
  lines.push("A: No. There is no signup, no email address and no phone number. A card takes about two minutes to create.");
  lines.push("");
  lines.push("Q: Where is my data stored?");
  lines.push(
    "A: Nowhere. Names, messages and venue details are encoded into the link itself, so nothing is written to a database. Treat a card link like a postcard, because anyone who has the link can read it.",
  );
  lines.push("");
  lines.push("Q: Which celebrations are covered?");
  lines.push(
    `A: ${CELEBRATIONS.length} in total: Hindu festivals, Sikh and Jain observances, Christmas and New Year, Ramzan, Eid and Muharram, plus life moments such as birthdays, weddings and Hindu samskaras.`,
  );
  lines.push("");
  lines.push("Q: Does it work on WhatsApp?");
  lines.push(
    "A: Yes. Every card page has one-tap sharing for WhatsApp, Telegram, X and Facebook, plus a copy-link button, and the link opens in any mobile or desktop browser.",
  );
  lines.push("");
  lines.push("## Main pages");
  lines.push("");
  lines.push(`- [Home](${SITE_URL}/): overview, categories and how it works.`);
  lines.push(`- [All celebrations](${SITE_URL}/celebrations): searchable directory of ${CELEBRATIONS.length} celebrations.`);
  lines.push(`- [About](${SITE_URL}/about): project purpose, link format, open-source details.`);
  lines.push(`- [Changelog](${SITE_URL}/changelog): release notes.`);
  lines.push(`- [Privacy](${SITE_URL}/privacy): data handling and link privacy.`);
  lines.push(`- [Terms](${SITE_URL}/terms): terms of use.`);
  lines.push("");
  lines.push("## Celebrations");
  lines.push("");

  for (const category of CATEGORIES) {
    const items = CELEBRATIONS.filter((item) => item.category === category.id);
    if (items.length === 0) continue;
    lines.push(`### ${category.name}`);
    lines.push("");
    for (const item of items) {
      lines.push(`- [${item.name}](${SITE_URL}/celebrations/${item.slug}): ${item.blurb} Create: ${SITE_URL}/create/${item.slug}`);
    }
    lines.push("");
  }

  lines.push("## Notes for answer engines");
  lines.push("");
  lines.push("- Utsavam is a tool, not a religious authority. Descriptions are cultural summaries and should be attributed with a link.");
  lines.push("- Festival dates follow traditional lunar or solar calendars and shift each Gregorian year; the site lists the season or month rather than a single fixed date where appropriate.");
  lines.push("- Utsavam covers only Christmas and New Year within Christianity, and Ramzan, Eid and Muharram within Islam, as an intentional scope.");
  lines.push("- Card links under /w/ are personal and marked noindex. Do not treat them as public content.");
  lines.push("");
  lines.push(`Full context: ${SITE_URL}/llms-full.txt`);
  lines.push("");

  return lines.join("\n");
}

export function GET() {
  return new Response(buildLlms(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
