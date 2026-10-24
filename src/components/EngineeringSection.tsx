import Link from "next/link";
import { site } from "@/content/site";
import { MediaBlock } from "./MediaBlock";
import { Reveal } from "./Reveal";
import { StatusBadge } from "./StatusBadge";

export function EngineeringSection() {
  return (
    <section id="engineering" className="section scroll-mt-[var(--nav-h)] border-t border-[var(--border)]">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Engineering in the real world</p>
            <h2>Systems, not skill lists.</h2>
            <p className="lede m-0">
              Technical ownership across startup infrastructure, event websites, and an
              ongoing engineering role — documented with honesty about what can be shared.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-12">
          {site.engineering.map((item, i) => (
            <Reveal key={item.id} delayMs={i * 70} as="article">
              <div className="grid gap-8 border border-[var(--border)] bg-[var(--bg-elevated)] p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10">
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <StatusBadge status={item.status} />
                    {item.timeline ? (
                      <span className="text-xs uppercase tracking-[0.14em] text-[var(--fg-subtle)]">
                        {item.timeline}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="display m-0 text-[clamp(1.6rem,3vw,2.4rem)]">{item.title}</h3>
                  <p className="mt-3 text-sm text-[var(--fg-subtle)]">
                    {item.organization ?? "Organization name pending"} · {item.role}
                  </p>
                </div>
                <div className="prose-block">
                  <p>{item.problem}</p>
                  <ul className="mt-4 list-clean">
                    {item.implementation.map((line) => (
                      <li
                        key={line}
                        className="border-t border-[var(--border)] py-3 text-[var(--fg-muted)] first:border-t-0 first:pt-0"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                  {item.confidentialNote ? (
                    <p className="mt-4 text-sm text-[var(--fg-subtle)]">{item.confidentialNote}</p>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20">
            <div className="mb-8 max-w-xl">
              <p className="eyebrow mb-3">Event websites</p>
              <h3 className="display m-0 text-[clamp(1.6rem,3vw,2.25rem)]">
                Sites for real events.
              </h3>
              <p className="mt-4 text-[var(--fg-muted)]">
                Gallery entries are editable in the central content file. Placeholders stay
                visible until screenshots and names are supplied.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {site.eventSites.map((event) => (
                <article key={event.id} className="grid gap-4">
                  <MediaBlock media={event.media} />
                  <div>
                    <h4 className="m-0 font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.02em]">
                      {event.name ?? "Event website"}
                    </h4>
                    {event.description ? (
                      <p className="mt-2 text-sm text-[var(--fg-muted)]">{event.description}</p>
                    ) : null}
                    {event.url ? (
                      <a
                        href={event.url}
                        className="mt-3 inline-block text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit site
                      </a>
                    ) : (
                      <p className="mt-2 text-sm text-[var(--fg-subtle)]">URL pending</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-8 text-sm text-[var(--fg-subtle)]">
              Looking for product case studies?{" "}
              <Link href="#work" className="text-[var(--fg-muted)]">
                Jump to selected work
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
