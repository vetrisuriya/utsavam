import type { Celebration, FieldDef } from "./types";

const HIDDEN_DETAIL_KEYS = new Set([
  "from",
  "to",
  "message",
  "celebrant",
  "child",
  "baby",
  "name",
  "bride",
  "groom",
  "partner1",
  "partner2",
  "family",
  "parents",
]);

const DATE_FORMATTER = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function sanitizeValues(
  celebration: Celebration,
  raw: Record<string, unknown> | undefined,
): Record<string, string> {
  const values: Record<string, string> = {};
  if (!raw) return values;

  for (const field of celebration.fields) {
    const value = raw[field.key];
    if (typeof value !== "string") continue;
    const trimmed = value.trim().slice(0, field.maxLength ?? 400);
    if (trimmed) values[field.key] = trimmed;
  }

  return values;
}

export function formatFieldValue(field: FieldDef, value: string): string {
  if (!value) return "";

  if (field.type === "date") {
    const parts = value.split("-").map(Number);
    if (parts.length === 3 && parts.every(Number.isFinite)) {
      const [year, month, day] = parts;
      return DATE_FORMATTER.format(new Date(Date.UTC(year, month - 1, day)));
    }
    return value;
  }

  if (field.type === "time") {
    const [hoursRaw, minutesRaw] = value.split(":");
    const hours = Number(hoursRaw);
    const minutes = Number(minutesRaw);
    if (Number.isFinite(hours) && Number.isFinite(minutes)) {
      const suffix = hours >= 12 ? "PM" : "AM";
      const displayHours = hours % 12 || 12;
      return `${displayHours}:${String(minutes).padStart(2, "0")} ${suffix}`;
    }
    return value;
  }

  return value;
}

export function getRecipient(
  celebration: Celebration,
  values: Record<string, string>,
): string {
  if (values.to) return values.to;
  if (values.celebrant) return values.celebrant;
  if (values.child) return values.child;
  if (values.baby) return values.baby;
  if (values.name) return values.name;
  if (values.bride && values.groom) return `${values.bride} & ${values.groom}`;
  if (values.partner1 && values.partner2)
    return `${values.partner1} & ${values.partner2}`;
  if (values.family) return values.family;
  return "you";
}

export function getSender(
  celebration: Celebration,
  values: Record<string, string>,
): string {
  return (
    values.from ||
    values.parents ||
    values.family ||
    (celebration.category === "life" ? "The family" : "A friend")
  );
}

export function getMessage(
  celebration: Celebration,
  values: Record<string, string>,
): string {
  return values.message?.trim() || celebration.defaultMessage;
}

export function getDetails(
  celebration: Celebration,
  values: Record<string, string>,
): Array<{ label: string; value: string }> {
  return celebration.fields
    .filter(
      (field) =>
        !HIDDEN_DETAIL_KEYS.has(field.key) &&
        field.type !== "textarea" &&
        Boolean(values[field.key]),
    )
    .map((field) => ({
      label: field.key === "age" ? "Turning" : field.label,
      value:
        field.key === "age"
          ? values[field.key]
          : formatFieldValue(field, values[field.key]),
    }));
}

export function getInvitationLine(
  celebration: Celebration,
  values: Record<string, string>,
): string {
  const sender = getSender(celebration, values);
  const recipient = getRecipient(celebration, values);

  if (celebration.category === "life") {
    return `${sender} invites you to celebrate ${recipient}`;
  }

  return `${sender} sent you a ${celebration.name} wish`;
}

export function getInvitationSubject(
  celebration: Celebration,
  values: Record<string, string>,
): string | null {
  if (values.bride && values.groom) return `${values.bride} & ${values.groom}`;
  if (values.partner1 && values.partner2)
    return `${values.partner1} & ${values.partner2}`;

  const person = values.celebrant || values.child || values.baby || values.name;
  if (person) {
    if (celebration.slug === "birthday") return `Happy birthday, ${person}!`;
    return `${person}'s ${celebration.name}`;
  }

  if (values.family) return values.family;
  return null;
}

export function getShareTitle(
  celebration: Celebration,
  values: Record<string, string>,
): string {
  const sender = getSender(celebration, values);
  const recipient = getRecipient(celebration, values);

  if (celebration.category === "life") {
    return `${sender} invited you to ${recipient}'s ${celebration.name}`;
  }

  return `${sender} sent you a ${celebration.name} wish`;
}

export function getShareText(
  celebration: Celebration,
  values: Record<string, string>,
): string {
  return getShareTitle(celebration, values);
}

export function getEventNoun(celebration: Celebration): string {
  return celebration.category === "life" ? "invitation" : "greeting";
}

export function isInvitation(celebration: Celebration): boolean {
  return celebration.category === "life";
}

export function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}
