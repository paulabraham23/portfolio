import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Résumé",
  description: `One-page résumé for ${site.profile.name}.`,
};

export default function ResumePage() {
  const pdf = site.contact.resumePdf;

  return (
    <div className="pb-24">
      <header className="border-b border-[var(--border)] pt-14 pb-10">
        <div className="container flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">Résumé</p>
            <h1 className="display m-0 text-[clamp(2.4rem,6vw,4rem)]">{site.profile.name}</h1>
            <p className="mt-4 max-w-xl text-[var(--fg-muted)]">{site.resume.summary}</p>
          </div>
          <div className="btn-group">
            {pdf ? (
              <a href={pdf} className="btn btn-primary" download>
                Download PDF
              </a>
            ) : (
              <span className="btn cursor-not-allowed opacity-50" aria-disabled="true">
                PDF coming soon
              </span>
            )}
            <Link href="/" className="btn">
              Back to portfolio
            </Link>
          </div>
        </div>
      </header>

      <div className="container mt-12 grid gap-12 lg:grid-cols-[1fr_18rem]">
        <div className="space-y-12">
          <ResumeBlock title="Selected work">
            <ul className="list-clean list-ruled">
              {site.projects.map((p) => (
                <li key={p.slug}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <strong className="font-[family-name:var(--font-display)] text-lg font-semibold">
                      {p.name}
                    </strong>
                    <span className="text-xs uppercase tracking-[0.12em] text-[var(--fg-subtle)]">
                      {p.status.replace("-", " ")}
                    </span>
                  </div>
                  <p className="mt-2 text-[var(--fg-muted)]">{p.shortDescription}</p>
                  {p.links[0] ? (
                    <a
                      href={p.links[0].href}
                      className="mt-2 inline-block text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.links[0].label}
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </ResumeBlock>

          <ResumeBlock title="Experience">
            <ul className="list-clean list-ruled">
              {site.timeline.map((item) => (
                <li key={item.id}>
                  <strong className="font-[family-name:var(--font-display)] text-lg font-semibold">
                    {item.title}
                  </strong>
                  <p className="mt-1 text-sm text-[var(--fg-subtle)]">
                    {item.organization ?? "Organization pending"} ·{" "}
                    {item.dateLabel ?? "Date pending"}
                  </p>
                  <p className="mt-2 text-[var(--fg-muted)]">{item.description}</p>
                </li>
              ))}
            </ul>
          </ResumeBlock>

          <ResumeBlock title="Achievements">
            <ul className="list-clean list-ruled">
              {site.achievements.map((a) => (
                <li key={a.id}>
                  <strong className="font-[family-name:var(--font-display)] text-lg font-semibold">
                    {a.title}
                  </strong>
                  <p className="mt-1 text-sm text-[var(--fg-subtle)]">
                    {a.organization ?? "Organization pending"}
                    {a.date ? ` · ${a.date}` : ""}
                  </p>
                  <p className="mt-2 text-[var(--fg-muted)]">{a.description}</p>
                </li>
              ))}
            </ul>
          </ResumeBlock>
        </div>

        <aside className="space-y-8 lg:sticky lg:top-[calc(var(--nav-h)+1.5rem)] lg:self-start">
          <ResumeBlock title="Education">
            <ul className="list-clean space-y-4">
              {site.education.map((ed) => (
                <li key={ed.resultLabel}>
                  <p className="m-0 text-sm text-[var(--fg-subtle)]">{ed.level}</p>
                  <p className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold">
                    {ed.resultValue}
                  </p>
                  <p className="mt-1 text-sm text-[var(--fg-muted)]">{ed.resultLabel}</p>
                </li>
              ))}
            </ul>
          </ResumeBlock>

          <ResumeBlock title="Skills">
            <ul className="flex flex-wrap gap-2">
              {site.resume.skillsVerified.map((skill) => (
                <li
                  key={skill}
                  className="border border-[var(--border)] px-3 py-1 text-sm text-[var(--fg-muted)]"
                >
                  {skill}
                </li>
              ))}
            </ul>
            {site.resume.skillsPlaceholderNote ? (
              <p className="mt-4 text-sm text-[var(--fg-subtle)]">
                {site.resume.skillsPlaceholderNote}
              </p>
            ) : null}
          </ResumeBlock>

          <ResumeBlock title="Contact">
            <ul className="list-clean space-y-2 text-sm">
              {site.contact.email ? (
                <li>
                  <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                </li>
              ) : (
                <li className="text-[var(--fg-subtle)]">Email pending</li>
              )}
              {site.contact.github ? (
                <li>
                  <a href={site.contact.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
              ) : null}
              {site.contact.linkedin ? (
                <li>
                  <a href={site.contact.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              ) : null}
            </ul>
          </ResumeBlock>
        </aside>
      </div>
    </div>
  );
}

function ResumeBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="eyebrow mb-5">{title}</h2>
      {children}
    </section>
  );
}
