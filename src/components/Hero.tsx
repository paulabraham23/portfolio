import Link from "next/link";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] pt-[clamp(3.5rem,10vw,6.5rem)] pb-[clamp(4rem,12vw,8rem)]">
      <div className="container relative">
        <div className="pointer-events-none absolute -right-8 top-4 hidden h-[22rem] w-[22rem] md:block" aria-hidden>
          <div className="absolute inset-0 rounded-full border border-[var(--accent-line)] opacity-60" />
          <div className="absolute inset-8 rounded-full border border-[var(--border-strong)]" />
          <div className="absolute inset-[4.5rem] bg-[radial-gradient(circle_at_30%_30%,var(--accent-soft),transparent_65%)]" />
          <div className="absolute left-[18%] top-[42%] h-px w-[64%] bg-[var(--accent-line)]" />
          <div className="absolute left-[42%] top-[18%] h-[64%] w-px bg-[var(--border-strong)]" />
        </div>

        <Reveal>
          <p className="eyebrow mb-6">{site.profile.tagline}</p>
        </Reveal>

        <Reveal delayMs={80}>
          <h1 className="display mb-8 max-w-[14ch] text-[clamp(2.8rem,8.5vw,6.25rem)]">
            {site.profile.heroHeadline}
          </h1>
        </Reveal>

        <Reveal delayMs={140}>
          <p className="lede mb-10 max-w-[34rem]">{site.profile.heroSupport}</p>
        </Reveal>

        <Reveal delayMs={200}>
          <div className="btn-group">
            <Link href="#work" className="btn btn-primary">
              Explore my work
            </Link>
            <Link href="/resume" className="btn">
              View résumé
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
