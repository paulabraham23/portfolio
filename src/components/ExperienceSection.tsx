import { site } from "@/content/site";
import { Reveal } from "./Reveal";

const KIND_LABEL: Record<(typeof site.timeline)[number]["kind"], string> = {
  internship: "Internship",
  founder: "Founder",
  engineering: "Engineering",
  events: "Events",
  ongoing: "Ongoing",
};

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section scroll-mt-[var(--nav-h)] border-t border-[var(--border)]"
    >
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Experience</p>
            <h2>A timeline of ownership.</h2>
            <p className="lede m-0">
              Internship, founder work, infrastructure, event sites, and an ongoing technical
              role — with date and organization placeholders where details are still private.
            </p>
          </div>
        </Reveal>

        <ol className="list-clean">
          {site.timeline.map((item, i) => (
            <Reveal key={item.id} as="li" delayMs={i * 50}>
              <article className="grid gap-4 border-t border-[var(--border)] py-8 md:grid-cols-[11rem_1fr] md:gap-10">
                <div className="text-sm text-[var(--fg-subtle)]">
                  <p className="m-0 uppercase tracking-[0.14em]">{KIND_LABEL[item.kind]}</p>
                  <p className="mt-2 m-0">{item.dateLabel ?? "Date pending"}</p>
                </div>
                <div>
                  <h3 className="m-0 font-[family-name:var(--font-display)] text-[clamp(1.35rem,2.5vw,1.85rem)] font-semibold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--fg-subtle)]">
                    {item.organization ?? "Organization pending"}
                  </p>
                  <p className="mt-4 max-w-[40rem] text-[var(--fg-muted)]">{item.description}</p>
                  {item.highlights.length > 0 ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.highlights.map((h) => (
                        <li
                          key={h}
                          className="border border-[var(--border)] px-3 py-1 text-xs text-[var(--fg-muted)]"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <div className="mt-8 grid gap-6 border border-[var(--border)] bg-[var(--bg-elevated)] p-6 md:grid-cols-2 md:p-8">
            <div>
              <p className="eyebrow mb-3">Education</p>
              <h3 className="display m-0 text-2xl">Scores that are verified.</h3>
            </div>
            <dl className="m-0 grid gap-5">
              {site.education.map((ed) => (
                <div key={ed.resultLabel} className="border-t border-[var(--border)] pt-4 first:border-t-0 first:pt-0">
                  <dt className="text-sm text-[var(--fg-subtle)]">{ed.level}</dt>
                  <dd className="mt-1 flex flex-wrap items-baseline gap-3">
                    <span className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.03em]">
                      {ed.resultValue}
                    </span>
                    <span className="text-sm text-[var(--fg-muted)]">{ed.resultLabel}</span>
                  </dd>
                  {ed.school ? (
                    <p className="mt-2 text-sm text-[var(--fg-muted)]">{ed.school}</p>
                  ) : (
                    <p className="mt-2 text-sm text-[var(--fg-subtle)]">School name pending</p>
                  )}
                  {ed.notes ? (
                    <p className="mt-2 text-sm text-[var(--fg-subtle)]">{ed.notes}</p>
                  ) : null}
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
