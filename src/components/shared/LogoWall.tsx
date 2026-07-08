import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/site-data";

export function LogoWall({
  heading = "Trusted by India's Leading Organizations",
}: {
  heading?: string;
}) {
  return (
    <section aria-labelledby="logo-wall-heading" className="mx-auto max-w-6xl px-6 py-16 text-center">
      <h2 id="logo-wall-heading" className="mb-10 text-lg font-semibold text-text-secondary">
        {heading}
      </h2>
      <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 grayscale opacity-80">
        {CLIENT_LOGOS.map((logo) => (
          <li key={logo.name}>
            <Image
              src={logo.src}
              alt={logo.name}
              width={120}
              height={32}
              className="h-8 w-auto object-contain"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
