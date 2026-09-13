import { ImageResponse } from "next/og";

export const alt = "Ezequiel Menegas — AI Product Manager & AI Solutions Architect";
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
          background: "#0a0a0b",
          color: "#f4f4f5",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 9999,
              background: "#818cf8",
            }}
          />
          <div
            style={{
              fontSize: 24,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#a5b0ff",
            }}
          >
            AI Product Builder
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.1 }}>
            Ezequiel Menegas
          </div>
          <div style={{ fontSize: 40, fontWeight: 500, color: "#f4f4f5" }}>
            AI Product Manager &amp; AI Solutions Architect
          </div>
          <div style={{ fontSize: 30, color: "#a1a1aa", maxWidth: 900 }}>
            Turning complex business problems into AI products — from discovery and strategy to
            architecture, engineering and production.
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, fontSize: 20, color: "#71717a" }}>
          <span>Product</span>
          <span>·</span>
          <span>AI</span>
          <span>·</span>
          <span>Architecture</span>
          <span>·</span>
          <span>Engineering</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
