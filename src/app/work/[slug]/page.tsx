import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MediaBlock } from "@/components/MediaBlock";
import { StatusBadge } from "@/components/StatusBadge";
import { getProjectBySlug, site } from "@/content/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return site.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.name,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = site.projects.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? site.projects[index - 1] : null;
  const next = index < site.projects.length - 1 ? site.projects[index + 1] : null;

  return (
    <article className="pb-24">
      <header className="border-b border-[var(--border)] pt-14 pb-12">
        <div className="container">
          <p className="eyebrow mb-4">
            <Link href="/#work" className="no-underline hover:text-[var(--accent)]">
              Work
            </Link>
            <span className="mx-2 text-[var(--fg-subtle)]">/</span>
            Case study
          </p>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} />
            <span className="text-xs uppercase tracking-[0.14em] text-[var(--fg-subtle)]">
              {project.category}
            </span>
          </div>
          <h1 className="display mb-6 max-w-[16ch] text-[clamp(2.5rem,7vw,5rem)]">
            {project.name}
          </h1>
          <p className="lede mb-8">{project.shortDescription}</p>
          <div className="btn-group">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="btn btn-primary"
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
              </a>
            ))}
            <Link href="/#work" className="btn">
              All work
            </Link>
          </div>
        </div>
      </header>

      <div className="container mt-12 grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="space-y-8 lg:sticky lg:top-[calc(var(--nav-h)+1.5rem)] lg:self-start">
          {project.media.map((media, i) => (
            <MediaBlock key={`${project.slug}-media-${i}`} media={media} priority={i === 0} />
          ))}
          <dl className="grid gap-5 border border-[var(--border)] bg-[var(--bg-elevated)] p-6 text-sm">
            <div>
              <dt className="text-[var(--fg-subtle)]">Role</dt>
              <dd className="mt-1 text-[var(--fg)]">{project.role}</dd>
            </div>
            <div>
              <dt className="text-[var(--fg-subtle)]">Audience</dt>
              <dd className="mt-1 text-[var(--fg)]">{project.audience}</dd>
            </div>
            {project.technologies.length > 0 ? (
              <div>
                <dt className="text-[var(--fg-subtle)]">Technologies</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="border border-[var(--border)] px-2 py-1">
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>
            ) : (
              <div>
                <dt className="text-[var(--fg-subtle)]">Technologies</dt>
                <dd className="mt-1 text-[var(--fg-subtle)]">Pending verified stack details</dd>
              </div>
            )}
          </dl>
        </aside>

        <div className="space-y-12">
          <CaseBlock title="Overview" body={project.overview} />
          <CaseBlock title="Problem" body={project.problem} />
          {project.parentExperience ? (
            <CaseBlock title="Parent experience" body={project.parentExperience} />
          ) : null}
          {project.childExperience ? (
            <CaseBlock title="Child experience" body={project.childExperience} />
          ) : null}
          {project.designFlows && project.designFlows.length > 0 ? (
            <CaseList title="Design & flows" items={project.designFlows} />
          ) : null}
          {project.architecture ? (
            <CaseBlock title="Architecture" body={project.architecture} />
          ) : null}
          {project.productDecisions.length > 0 ? (
            <CaseList title="Product decisions" items={project.productDecisions} />
          ) : null}
          {project.engineeringChallenges.length > 0 ? (
            <CaseList title="Engineering challenges" items={project.engineeringChallenges} />
          ) : null}
          {project.decisionsTradeoffs && project.decisionsTradeoffs.length > 0 ? (
            <CaseList title="Decisions & trade-offs" items={project.decisionsTradeoffs} />
          ) : null}
          {project.verifiedOutcomes.length > 0 ? (
            <CaseList title="Verified outcomes" items={project.verifiedOutcomes} />
          ) : null}
          {project.lessons.length > 0 ? (
            <CaseList title="Lessons" items={project.lessons} />
          ) : null}
          {project.nextImprovements.length > 0 ? (
            <CaseList title="Next improvements" items={project.nextImprovements} />
          ) : null}
        </div>
      </div>

      <nav
        className="container mt-20 grid gap-4 border-t border-[var(--border)] pt-10 sm:grid-cols-2"
        aria-label="Adjacent projects"
      >
        {prev ? (
          <Link href={`/work/${prev.slug}`} className="group border border-[var(--border)] p-5 no-underline">
            <span className="text-xs uppercase tracking-[0.14em] text-[var(--fg-subtle)]">Previous</span>
            <span className="mt-2 block font-[family-name:var(--font-display)] text-xl font-semibold group-hover:text-[var(--accent)]">
              {prev.name}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="group border border-[var(--border)] p-5 text-right no-underline sm:justify-self-end sm:text-right"
          >
            <span className="text-xs uppercase tracking-[0.14em] text-[var(--fg-subtle)]">Next</span>
            <span className="mt-2 block font-[family-name:var(--font-display)] text-xl font-semibold group-hover:text-[var(--accent)]">
              {next.name}
            </span>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}

function CaseBlock({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h2 className="display mb-4 text-2xl">{title}</h2>
      <p className="m-0 max-w-[42rem] text-[var(--fg-muted)]">{body}</p>
    </section>
  );
}

function CaseList({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h2 className="display mb-4 text-2xl">{title}</h2>
      <ul className="list-clean list-ruled max-w-[42rem]">
        {items.map((item) => (
          <li key={item} className="text-[var(--fg-muted)]">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
