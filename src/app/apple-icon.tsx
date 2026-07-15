import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#05070f",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 120,
            height: 120,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
            fontSize: 78,
            fontWeight: 700,
            color: "#f8fafc",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          C
        </div>
      </div>
    ),
    { ...size }
  );
}
