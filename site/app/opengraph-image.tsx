import { ImageResponse } from "next/og";

export const alt = "Ezequiel Menegas — AI Product Manager";
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
            AI Product Manager
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.1 }}>
            Ezequiel Menegas
          </div>
          <div style={{ fontSize: 30, color: "#a1a1aa", maxWidth: 900 }}>
            Product strategy, AI solutions architecture and hands-on engineering — from idea
            to production.
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, fontSize: 20, color: "#71717a" }}>
          <span>Product Management</span>
          <span>·</span>
          <span>AI Solutions Architecture</span>
          <span>·</span>
          <span>AI Engineering</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
