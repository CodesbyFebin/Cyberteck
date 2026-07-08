export type BlogCategory = {
  slug: string;
  label: string;
  count: number;
};

export type BlogTag = {
  slug: string;
  label: string;
};

export type BlogPost = {
  slug: string;
  category: string; // BlogCategory.label
  title: string;
  excerpt: string;
  date: string; // ISO
  readTimeMinutes: number;
  iconTheme: "cloud" | "ai" | "identity" | "compliance" | "threat" | "data" | "devsecops" | "resilience";
};
