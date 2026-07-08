import type { Metadata } from "next";
import { BlogListingPage } from "@/components/blog/BlogListingPage";

export const metadata: Metadata = {
  title: "Cybersecurity Insights & Updates",
  description:
    "Stay informed with the latest trends, best practices, and expert insights to strengthen your security posture and stay ahead of evolving threats.",
  alternates: { canonical: "/blogs" },
};

export default function Page() {
  return <BlogListingPage />;
}
