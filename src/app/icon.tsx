import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          color: "#b9a6ff",
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          fontFamily: "sans-serif",
        }}
      >
        {site.profile.monogram}
      </div>
    ),
    { ...size },
  );
}
