import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sky Growth Agency";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0c4a6e 0%, #0ea5e9 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: "white",
            marginBottom: 20,
            letterSpacing: "-2px",
          }}
        >
          SKY 1000X
        </div>
        <div
          style={{
            fontSize: 32,
            color: "rgba(255,255,255,0.85)",
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          Scale Your Business to 1000x
        </div>
      </div>
    ),
    { ...size }
  );
}
