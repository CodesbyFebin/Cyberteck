import Link from "next/link";
import { Calendar, Clock, Cloud, BrainCircuit, Fingerprint, Scale, Radar, Database, GitBranch, ShieldCheck } from "lucide-react";
import type { BlogPost } from "@/lib/blog/types";

const ICON_BY_THEME: Record<BlogPost["iconTheme"], typeof Cloud> = {
  cloud: Cloud,
  ai: BrainCircuit,
  identity: Fingerprint,
  compliance: Scale,
  threat: Radar,
  data: Database,
  devsecops: GitBranch,
  resilience: ShieldCheck,
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogCard({ post }: { post: BlogPost }) {
  const Icon = ICON_BY_THEME[post.iconTheme];

  return (
    <li className="surface-card overflow-hidden">
      <Link href={`/blogs/${post.slug}`} className="block">
        <div className="flex h-36 items-center justify-center bg-bg-surface">
          <Icon className="h-12 w-12 text-accent-blue-light" aria-hidden="true" />
        </div>
        <div className="p-5">
          <span className="text-xs font-semibold uppercase tracking-wide text-accent-blue-light">
            {post.category}
          </span>
          <h3 className="mt-2 font-semibold text-text-primary">{post.title}</h3>
          <p className="mt-2 text-sm text-text-secondary">{post.excerpt}</p>
          <div className="mt-4 flex items-center gap-4 text-xs text-text-muted">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {post.readTimeMinutes} min read
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}
