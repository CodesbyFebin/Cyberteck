import { Laptop, Globe, FileText, Shield, BarChart3, User } from "lucide-react";

export function BlogHero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 pb-12 pt-8 lg:flex-row">
      <div className="max-w-xl">
        <h1 className="font-display text-4xl font-bold text-text-primary sm:text-5xl">
          Cybersecurity Insights &amp; Updates
        </h1>
        <p className="mt-4 text-text-secondary">
          Stay informed with the latest trends, best practices, and expert insights to strengthen
          your security posture and stay ahead of evolving threats.
        </p>
      </div>

      <div className="relative flex h-48 w-full max-w-sm items-center justify-center lg:h-56" aria-hidden="true">
        <div className="glass-panel flex h-32 w-48 items-center justify-center rounded-card shadow-glow">
          <Laptop className="h-14 w-14 text-accent-blue-light" />
        </div>
        {[
          { Icon: Globe, className: "left-2 top-2" },
          { Icon: FileText, className: "right-4 top-0" },
          { Icon: Shield, className: "left-0 bottom-4" },
          { Icon: User, className: "right-0 bottom-6" },
          { Icon: BarChart3, className: "right-8 bottom-0" },
        ].map(({ Icon, className }, i) => (
          <div
            key={i}
            className={`glass-panel absolute flex h-9 w-9 items-center justify-center ${className}`}
          >
            <Icon className="h-4 w-4 text-accent-violet-light" />
          </div>
        ))}
      </div>
    </section>
  );
}
