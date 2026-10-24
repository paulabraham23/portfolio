import { getHomeProjects } from "@/content/site";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function WorkSection() {
  const projects = getHomeProjects();
  const published = projects.filter((p) => p.status === "published");
  const inDev = projects.filter((p) => p.status === "in-development");

  return (
    <section id="work" className="section scroll-mt-[var(--nav-h)]">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Selected work</p>
            <h2>Products built to ship.</h2>
            <p className="lede m-0">
              Real applications — published where ready, clearly marked when still in
              development. No fictional metrics.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-16">
          {published.map((project, i) => (
            <Reveal key={project.slug} delayMs={i * 60}>
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>

        {inDev.length > 0 ? (
          <div className="mt-20">
            <Reveal>
              <div className="mb-8 max-w-xl">
                <p className="eyebrow mb-3">In development</p>
                <h3 className="display m-0 text-[clamp(1.6rem,3vw,2.25rem)]">
                  Two more mobile apps — not yet published.
                </h3>
              </div>
            </Reveal>
            <div className="grid gap-12 md:grid-cols-2">
              {inDev.map((project, i) => (
                <Reveal key={project.slug} delayMs={i * 80}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
