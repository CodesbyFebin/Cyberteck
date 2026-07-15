import { ImageResponse } from "next/og";
import { BrandOgImage, OG_IMAGE_SIZE } from "@/lib/brand-og-image";

export const size = OG_IMAGE_SIZE;
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<BrandOgImage />, { ...size });
}
