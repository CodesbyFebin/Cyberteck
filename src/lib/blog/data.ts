import type { BlogCategory, BlogPost, BlogTag } from "./types";

export const BLOG_CATEGORIES: BlogCategory[] = [
  { slug: "all", label: "All Topics", count: 56 },
  { slug: "ai-security", label: "AI Security", count: 12 },
  { slug: "cloud-security", label: "Cloud Security", count: 10 },
  { slug: "compliance", label: "Compliance", count: 8 },
  { slug: "data-protection", label: "Data Protection", count: 9 },
  { slug: "identity-security", label: "Identity Security", count: 7 },
  { slug: "threat-intelligence", label: "Threat Intelligence", count: 6 },
  { slug: "industry-insights", label: "Industry Insights", count: 4 },
];

export const POPULAR_TAGS: BlogTag[] = [
  { slug: "zero-trust", label: "Zero Trust" },
  { slug: "soc-2", label: "SOC 2" },
  { slug: "iso-27001", label: "ISO 27001" },
  { slug: "gdpr", label: "GDPR" },
  { slug: "devsecops", label: "DevSecOps" },
  { slug: "ransomware", label: "Ransomware" },
  { slug: "data-privacy", label: "Data Privacy" },
  { slug: "cyber-resilience", label: "Cyber Resilience" },
];

// First 9 of 56 posts (page 1), transcribed verbatim from the source
// screenshot. Posts 10-56 are not yet provided — pagination below is wired
// to a real total (56 across 7 pages of 9) so the UI is honest even though
// only page 1's content exists.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "cloud-security-best-practices-2024",
    category: "Cloud Security",
    title: "Cloud Security Best Practices for 2024",
    excerpt: "Explore essential strategies to secure your cloud environment and protect sensitive data.",
    date: "2024-05-06",
    readTimeMinutes: 5,
    iconTheme: "cloud",
  },
  {
    slug: "how-ai-is-transforming-cybersecurity",
    category: "AI Security",
    title: "How AI is Transforming Cybersecurity",
    excerpt: "Discover how AI and machine learning are helping organizations detect, respond, and prevent threats faster.",
    date: "2024-05-02",
    readTimeMinutes: 6,
    iconTheme: "ai",
  },
  {
    slug: "future-of-identity-security-passwordless-world",
    category: "Identity Security",
    title: "The Future of Identity Security in a Passwordless World",
    excerpt: "Understand the shift towards passwordless authentication and its impact on modern security.",
    date: "2024-04-29",
    readTimeMinutes: 4,
    iconTheme: "identity",
  },
  {
    slug: "iso-27001-complete-implementation-guide",
    category: "Compliance",
    title: "ISO 27001: A Complete Implementation Guide",
    excerpt: "A step-by-step guide to implementing ISO 27001 and building a robust information security management system.",
    date: "2024-04-25",
    readTimeMinutes: 7,
    iconTheme: "compliance",
  },
  {
    slug: "top-cyber-threats-to-watch-2024",
    category: "Threat Intelligence",
    title: "Top Cyber Threats to Watch in 2024",
    excerpt: "An overview of the most significant cyber threats organizations need to prepare for this year.",
    date: "2024-04-22",
    readTimeMinutes: 6,
    iconTheme: "threat",
  },
  {
    slug: "data-privacy-compliance-gdpr-vs-ccpa",
    category: "Data Protection",
    title: "Data Privacy Compliance: GDPR vs. CCPA",
    excerpt: "Key differences between GDPR and CCPA and what you need to know to stay compliant.",
    date: "2024-04-18",
    readTimeMinutes: 5,
    iconTheme: "data",
  },
  {
    slug: "building-a-secure-devsecops-pipeline",
    category: "DevSecOps",
    title: "Building a Secure DevSecOps Pipeline",
    excerpt: "Integrate security into your DevOps pipeline and deliver secure software faster.",
    date: "2024-04-15",
    readTimeMinutes: 6,
    iconTheme: "devsecops",
  },
  {
    slug: "achieving-soc-2-compliance-what-you-need-to-know",
    category: "Compliance",
    title: "Achieving SOC 2 Compliance: What You Need to Know",
    excerpt: "Understand the requirements, benefits, and process of achieving SOC 2 compliance.",
    date: "2024-04-11",
    readTimeMinutes: 5,
    iconTheme: "compliance",
  },
  {
    slug: "5-steps-to-build-a-cyber-resilient-organization",
    category: "Cyber Resilience",
    title: "5 Steps to Build a Cyber Resilient Organization",
    excerpt: "Practical steps to strengthen your organization's resilience and bounce back from cyber incidents.",
    date: "2024-04-08",
    readTimeMinutes: 4,
    iconTheme: "resilience",
  },
];

export const TOTAL_POSTS = 56;
export const POSTS_PER_PAGE = 9;
