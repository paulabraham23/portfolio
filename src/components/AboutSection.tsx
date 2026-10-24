import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function AboutSection() {
  return (
    <section id="about" className="section scroll-mt-[var(--nav-h)] border-t border-[var(--border)]">
      <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <div className="section-head mb-0">
            <p className="eyebrow">About</p>
            <h2>Builder first.</h2>
          </div>
        </Reveal>
        <Reveal delayMs={80}>
          <div className="prose-block text-[1.05rem]">
            {site.profile.about.map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-[var(--border)] pt-6">
              {site.profile.interests.map((interest) => (
                <li key={interest} className="text-sm text-[var(--fg-muted)]">
                  {interest}
                </li>
              ))}
            </ul>
            {site.profile.location ? (
              <p className="mt-6 text-sm text-[var(--fg-subtle)]">
                Based in {site.profile.location}. Preparing for undergraduate applications —
                Fall 2027.
              </p>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
