import { NextResponse, type NextRequest } from "next/server";
import { MAX_WISH_CODE_LENGTH, decodeWish } from "@/lib/codec";
import { CELEBRATION_SLUGS } from "@/lib/celebrations";

const KNOWN_SLUGS = new Set(CELEBRATION_SLUGS);

/**
 * Personal card links are streamed, so `notFound()` inside the page would keep
 * a 200 status. Validate the payload before rendering and rewrite malformed
 * links to the static 404 route, which responds with a real 404.
 */
export function proxy(request: NextRequest) {
  const code = request.nextUrl.pathname.slice("/w/".length);

  if (!code || code.length > MAX_WISH_CODE_LENGTH) {
    return NextResponse.rewrite(new URL("/_not-found", request.url));
  }

  const payload = decodeWish(code);

  if (!payload || !KNOWN_SLUGS.has(payload.e)) {
    return NextResponse.rewrite(new URL("/_not-found", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/w/:code",
};
