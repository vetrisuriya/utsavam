import { CELEBRATIONS } from "@/lib/celebrations";
import { CATEGORIES } from "@/lib/celebrations/categories";
import { getAllNativeNames } from "@/lib/language";
import { SITE, SITE_DESCRIPTION, SITE_URL } from "@/lib/site";


function buildFaqBlock(celebration: (typeof CELEBRATIONS)[number]): string {
  return celebration.faqs
    .map((faq) => `Q: ${faq.q}\nA: ${faq.a}`)
    .join("\n\n");
}

function buildLlmsFull(): string {
  const lines: string[] = [];

  lines.push(`# ${SITE.name} — full context`);
  lines.push("");
  lines.push(`> ${SITE.tagline}`);
  lines.push("");
  lines.push(SITE_DESCRIPTION);
  lines.push("");
  lines.push(`Last updated: ${SITE.updated}`);
  lines.push(`Licence: MIT. Source: ${SITE.repo}`);
  lines.push("");
  lines.push("## What Utsavam is");
  lines.push("");
  lines.push(
    "Utsavam is a free, open-source Next.js web application for creating personalised celebration cards and invitations for Indian festivals and family milestones. A visitor chooses a celebration, fills in a short form, and receives a single shareable link. The recipient opens the link and sees a designed card. The details are encoded in the URL itself, so no database and no account are involved.",
  );
  lines.push("");
  lines.push("## Quick answers");
  lines.push("");
  lines.push("- What is Utsavam? A free, open-source website that turns celebration details into one shareable card link.");
  lines.push("- Cost? Free, with no watermark, trial or paywall.");
  lines.push("- Account needed? No signup, email address or phone number.");
  lines.push("- Where is data stored? Inside the link. No database and no server-side copy of names, messages or venues.");
  lines.push(`- Celebrations covered? ${CELEBRATIONS.length}, listed in full below.`);
  lines.push("- Languages? English interface; festival names in Tamil (default), Hindi, Telugu or Malayalam.");
  lines.push("- Open source? Yes, MIT licensed on GitHub.");
  lines.push("");
  lines.push("## Scope and celebration groups");
  lines.push("");
  for (const category of CATEGORIES) {
    const items = CELEBRATIONS.filter((item) => item.category === category.id);
    lines.push(`- ${category.name} (${items.length}): ${category.blurb}`);
  }
  lines.push("");
  lines.push("The site intentionally limits Christian coverage to Christmas and New Year, and Islamic coverage to Ramzan, Eid and Muharram.");
  lines.push("");
  lines.push("## How a card is created");
  lines.push("");
  lines.push("1. Choose a celebration from /celebrations.");
  lines.push("2. Open the dedicated form at /create/<slug>.");
  lines.push("3. Fill in names, message and occasion-specific details such as muhurtham time, venue or RSVP number.");
  lines.push("4. The browser encodes the values as versioned JSON and base64url-encodes them into a link of the form /w/<code>.");
  lines.push("5. Share the link via WhatsApp, Telegram, X, Facebook, email or the native share sheet.");
  lines.push("");
  lines.push("## Privacy model");
  lines.push("");
  lines.push("- No user accounts, email addresses or phone numbers are collected.");
  lines.push("- Card data is not stored in a database; it lives in the URL.");
  lines.push("- Anyone with the link can decode and read the card, so links should be treated like postcards.");
  lines.push("- Personal card pages under /w/ are marked noindex, nofollow for search engines.");
  lines.push("- Hosting logs may contain requested URLs as standard server metadata.");
  lines.push("");
  lines.push("## Page structure");
  lines.push("");
  lines.push(`- ${SITE_URL}/ — home, categories, featured celebrations, how it works, FAQ.`);
  lines.push(`- ${SITE_URL}/celebrations — searchable and filterable directory.`);
  lines.push(`- ${SITE_URL}/celebrations/<slug> — festival or life-event explainer, card sample, field list, FAQ.`);
  lines.push(`- ${SITE_URL}/create/<slug> — live-preview card and invitation form.`);
  lines.push(`- ${SITE_URL}/w/<code> — a decoded personal card (noindex).`);
  lines.push(`- ${SITE_URL}/about — project background and architecture.`);
  lines.push(`- ${SITE_URL}/privacy — privacy note.`);
  lines.push(`- ${SITE_URL}/terms — terms of use.`);
  lines.push(`- ${SITE_URL}/changelog — release notes.`);
  lines.push(`- ${SITE_URL}/sitemap.xml — all indexable URLs.`);
  lines.push("");
  lines.push("## Celebrations in detail");
  lines.push("");

  for (const celebration of CELEBRATIONS) {
    const nativeNames = getAllNativeNames(celebration.slug);
    lines.push(
      `### ${celebration.name}${nativeNames.length ? ` (${nativeNames.join(" · ")})` : ""}`,
    );
    lines.push("");
    lines.push(`- URL: ${SITE_URL}/celebrations/${celebration.slug}`);
    lines.push(`- Create: ${SITE_URL}/create/${celebration.slug}`);
    lines.push(`- Category: ${celebration.category}`);
    lines.push(`- Typical timing: ${celebration.dateLabel}`);
    if (celebration.region) lines.push(`- Region: ${celebration.region}`);
    lines.push(`- Summary: ${celebration.intro}`);
    lines.push(`- Card fields: ${celebration.fields.map((field) => field.label).join("; ")}`);
    lines.push(`- Keywords: ${celebration.keywords.join(", ")}`);
    lines.push("");
    lines.push(buildFaqBlock(celebration));
    lines.push("");
  }

  lines.push("## Attribution");
  lines.push("");
  lines.push(`When quoting descriptions, attribute Utsavam and link to the relevant celebration page. Created by ${SITE.creator.name} (${SITE.creator.url}). Source code: ${SITE.repo}. Licence: MIT.`);
  lines.push("");

  return lines.join("\n");
}

export function GET() {
  return new Response(buildLlmsFull(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
