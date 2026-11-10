import type { WishPayload } from "./celebrations/types";

export const MAX_WISH_CODE_LENGTH = 6000;

export function encodeWish(payload: WishPayload): string {
  const json = JSON.stringify(payload);
  const bytes = new TextEncoder().encode(json);

  let binary = "";
  const chunkSize = 0x8000;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }

  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

export function decodeWish(code: string): WishPayload | null {
  try {
    const normalized = code.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized.padEnd(
      normalized.length + ((4 - (normalized.length % 4)) % 4),
      "=",
    );
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    const json = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
    const parsed: unknown = JSON.parse(json);

    if (!parsed || typeof parsed !== "object") return null;
    const candidate = parsed as Partial<WishPayload>;

    if (candidate.v !== 1 || typeof candidate.e !== "string") return null;
    if (!candidate.f || typeof candidate.f !== "object") return null;

    const fields: Record<string, string> = {};
    for (const [key, value] of Object.entries(candidate.f)) {
      if (typeof value === "string") {
        fields[key] = value.slice(0, 500);
      }
    }

    return {
      v: 1,
      e: candidate.e,
      f: fields,
      t: typeof candidate.t === "number" ? candidate.t : undefined,
    };
  } catch {
    return null;
  }
}

export function buildWishUrl(origin: string, code: string): string {
  return `${origin.replace(/\/+$/, "")}/w/${code}`;
}
