import { ImageResponse } from "next/og";
import { getCelebration } from "@/lib/celebrations";
import { CATEGORY_MAP } from "@/lib/celebrations/categories";
import { isInvitation } from "@/lib/celebrations/presentation";

export const alt = "A personalised celebration card from Utsavam";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function CelebrationOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const celebration = getCelebration(slug);
  const accent = celebration?.theme.accent ?? "#f6b73c";
  const from = celebration?.theme.from ?? "#08050f";
  const to = celebration?.theme.to ?? "#2a1408";
  const category = celebration ? CATEGORY_MAP[celebration.category] : null;
  const noun =
    celebration && isInvitation(celebration) ? "Invitation" : "Greeting card";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: `linear-gradient(140deg, ${from} 0%, ${to} 100%)`,
          padding: "64px 72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -140,
            width: 640,
            height: 640,
            borderRadius: 9999,
            background: `radial-gradient(circle, ${accent}55, ${accent}00 68%)`,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -240,
            left: -100,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: `radial-gradient(circle, ${accent}22, ${accent}00 70%)`,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: 15,
                border: `1px solid ${accent}66`,
                background: `${accent}22`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: accent,
                fontSize: 26,
                fontWeight: 700,
              }}
            >
              उ
            </div>
            <span
              style={{
                fontSize: 26,
                fontWeight: 600,
                color: "#f8f0e2",
              }}
            >
              Utsavam
            </span>
          </div>
          <span
            style={{
              fontSize: 18,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: accent,
              fontWeight: 600,
            }}
          >
            {category?.shortName ?? "Celebration"} · {noun}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              width: 88,
              height: 3,
              background: accent,
              display: "flex",
              borderRadius: 999,
            }}
          />
          <span
            style={{
              marginTop: 26,
              fontSize: 92,
              lineHeight: 1,
              fontWeight: 600,
              letterSpacing: -2.5,
              color: "#f8f0e2",
            }}
          >
            {celebration?.name ?? "Celebrate every moment"}
          </span>
          <span
            style={{
              marginTop: 24,
              fontSize: 32,
              lineHeight: 1.35,
              color: "#e6d9f2",
              maxWidth: 860,
            }}
          >
            {celebration?.tagline ??
              "Create a personalised celebration link in about two minutes."}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: 24,
          }}
        >
          <span style={{ fontSize: 22, color: "#bdb1cf" }}>
            Create and share a personal card — free, no signup
          </span>
          <span
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: accent,
              letterSpacing: 1.5,
              textTransform: "uppercase",
            }}
          >
            {celebration?.dateLabel ?? "Every festival"}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
