import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function AchievementsSection() {
  const awards = site.achievements.filter((a) => a.kind === "award");
  const certificates = site.achievements.filter((a) => a.kind === "certificate");

  return (
    <section
      id="achievements"
      className="section scroll-mt-[var(--nav-h)] border-t border-[var(--border)]"
    >
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Achievements</p>
            <h2>Evidence, not ornament.</h2>
            <p className="lede m-0">
              Two entrepreneurship event wins, plus Python and robotics certificates. Names,
              ranks, and credential links can be attached when verified.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h3 className="eyebrow mb-6">Awards</h3>
            <ul className="list-clean list-ruled">
              {awards.map((item) => (
                <li key={item.id}>
                  <AchievementRow item={item} />
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delayMs={80}>
            <h3 className="eyebrow mb-6">Certificates</h3>
            <ul className="list-clean list-ruled">
              {certificates.map((item) => (
                <li key={item.id}>
                  <AchievementRow item={item} />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function AchievementRow({ item }: { item: (typeof site.achievements)[number] }) {
  return (
    <article>
      <h4 className="m-0 font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.02em]">
        {item.title}
      </h4>
      <p className="mt-2 text-sm text-[var(--fg-subtle)]">
        {item.organization ?? "Organization pending"}
        {item.date ? ` · ${item.date}` : " · Date pending"}
      </p>
      <p className="mt-3 max-w-[36rem] text-[var(--fg-muted)]">{item.description}</p>
      {item.evidenceUrl ? (
        <a
          href={item.evidenceUrl}
          className="mt-3 inline-block text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          View evidence
        </a>
      ) : (
        <p className="mt-3 text-sm text-[var(--fg-subtle)]">Evidence link pending</p>
      )}
    </article>
  );
}
