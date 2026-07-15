import { SITE_NAME, SITE_TAGLINE } from "./site-data";

export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

export function BrandOgImage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#05070f",
        backgroundImage: "linear-gradient(160deg, #131a2e 0%, #05070f 55%)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          width: 96,
          height: 96,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
          fontSize: 56,
          fontWeight: 700,
          color: "#f8fafc",
        }}
      >
        C
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 48,
          fontSize: 64,
          fontWeight: 700,
          color: "#f8fafc",
          letterSpacing: "-0.02em",
        }}
      >
        {SITE_NAME}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 20,
          fontSize: 34,
          color: "#94a3b8",
          maxWidth: 900,
        }}
      >
        {SITE_TAGLINE}
      </div>
    </div>
  );
}
