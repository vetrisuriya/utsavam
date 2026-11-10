import { ImageResponse } from "next/og";

export const alt =
  "Utsavam — one beautiful link for every celebration. Indian festival greeting and invitation cards.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #08050f 0%, #180d29 45%, #2a1408 100%)",
          padding: "68px 76px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(246,183,60,0.36), rgba(246,183,60,0) 68%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            left: -140,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(255,138,61,0.24), rgba(255,138,61,0) 70%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(160deg, #ffe6a3, #f6b73c, #e07a1f)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#2a1402",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            उ
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontSize: 30,
                fontWeight: 600,
                color: "#f8f0e2",
                letterSpacing: -0.4,
              }}
            >
              Utsavam
            </span>
            <span
              style={{
                fontSize: 16,
                color: "#bdb1cf",
                letterSpacing: 5,
                textTransform: "uppercase",
              }}
            >
              Celebrate together
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 18,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#f6b73c",
              fontWeight: 600,
            }}
          >
            Open source · Free forever · No signup
          </span>
          <span
            style={{
              marginTop: 22,
              fontSize: 88,
              lineHeight: 1.02,
              color: "#f8f0e2",
              fontWeight: 600,
              letterSpacing: -2.5,
              maxWidth: 900,
            }}
          >
            One beautiful link for every celebration.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.14)",
            paddingTop: 26,
          }}
        >
          <span style={{ fontSize: 24, color: "#d9cde8" }}>
            Diwali · Onam · Pongal · Christmas · Ramzan · Birthdays · Weddings
          </span>
          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: "#f6b73c",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            32 celebrations
          </span>
        </div>
      </div>
    ),
    size,
  );
}
