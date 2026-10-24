import Link from "next/link";
import { site } from "@/content/site";

export function SiteFooter() {
  // Static copyright year — avoid runtime Date during prerender.
  const year = 2026;
  const links = [
    site.contact.email
      ? { label: "Email", href: `mailto:${site.contact.email}`, external: false }
      : null,
    site.contact.github
      ? { label: "GitHub", href: site.contact.github, external: true }
      : null,
    site.contact.linkedin
      ? { label: "LinkedIn", href: site.contact.linkedin, external: true }
      : null,
    ...site.contact.otherProfiles.map((p) => ({
      label: p.label,
      href: p.href,
      external: p.external ?? true,
    })),
  ].filter(Boolean) as { label: string; href: string; external: boolean }[];

  return (
    <footer className="border-t border-[var(--border)] pb-10 pt-16">
      <div className="container grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="display mb-4 max-w-xl text-[clamp(2rem,4vw,3rem)]">
            Building next. Open to conversation.
          </h2>
          <p className="lede m-0">
            For admissions context, collaboration, or questions about the work —
            reach out through the channels below.
          </p>
        </div>
        <div className="flex flex-col justify-end gap-6">
          {links.length > 0 ? (
            <ul className="list-clean flex flex-wrap gap-x-6 gap-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[var(--fg)] no-underline hover:text-[var(--accent)]"
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/resume" className="no-underline hover:text-[var(--accent)]">
                  Résumé
                </Link>
              </li>
            </ul>
          ) : (
            <p className="m-0 text-[var(--fg-muted)]">
              Contact channels will appear here once configured in{" "}
              <code className="text-[var(--accent)]">src/content/site.ts</code>.
            </p>
          )}
          <p className="m-0 text-sm text-[var(--fg-subtle)]">
            © {year} {site.profile.name}. Built with care — evidence over exaggeration.
          </p>
        </div>
      </div>
    </footer>
  );
}
