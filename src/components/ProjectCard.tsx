import Link from "next/link";
import type { Project } from "@/content/site";
import { MediaBlock } from "./MediaBlock";
import { StatusBadge } from "./StatusBadge";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const media = project.media[0];

  return (
    <article
      className={`group grid gap-6 border-t border-[var(--border)] pt-8 ${
        featured ? "lg:grid-cols-[1.15fr_0.85fr] lg:gap-10" : "md:grid-cols-[0.95fr_1.05fr]"
      }`}
    >
      <div className={featured ? "lg:order-2" : ""}>
        {media ? <MediaBlock media={media} /> : null}
      </div>
      <div className={`flex flex-col ${featured ? "lg:order-1 lg:justify-end" : ""}`}>
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} />
          <span className="text-xs uppercase tracking-[0.14em] text-[var(--fg-subtle)]">
            {project.category}
          </span>
        </div>
        <h3
          className={`font-[family-name:var(--font-display)] font-semibold tracking-[-0.03em] ${
            featured ? "text-[clamp(2rem,4vw,3.25rem)]" : "text-[clamp(1.5rem,3vw,2rem)]"
          }`}
        >
          <Link href={`/work/${project.slug}`} className="no-underline hover:text-[var(--accent)]">
            {project.name}
          </Link>
        </h3>
        <p className="mt-4 max-w-[36rem] text-[var(--fg-muted)]">{project.shortDescription}</p>
        <p className="mt-3 text-sm text-[var(--fg-subtle)]">Role: {project.role}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={`/work/${project.slug}`} className="btn">
            Case study
          </Link>
          {project.links
            .filter((l) => l.external)
            .slice(0, 1)
            .map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
        </div>
      </div>
    </article>
  );
}
