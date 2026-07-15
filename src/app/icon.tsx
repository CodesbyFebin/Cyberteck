import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
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
          background: "#05070f",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 340,
            height: 340,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
            fontSize: 220,
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
