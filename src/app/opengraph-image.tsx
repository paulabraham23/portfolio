import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#09090b",
          color: "#f3efe8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#b9a6ff", fontSize: 28, letterSpacing: "0.16em" }}>
          {site.profile.wordmark.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            {site.profile.heroHeadline}
          </div>
          <div style={{ display: "flex", color: "#b7b0a5", fontSize: 28, maxWidth: 780 }}>
            {site.profile.heroSupport}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
