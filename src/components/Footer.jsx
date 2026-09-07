import { site } from "../data.js";

const year = new Date().getFullYear();

// Only links with a value are rendered — an empty footer beats a dead link.
const buildLinks = () =>
  [
    site.email ? { label: "Email", href: `mailto:${site.email}` } : null,
    site.github ? { label: "GitHub", href: site.github } : null,
    site.linkedin ? { label: "LinkedIn", href: site.linkedin } : null,
    site.scholar ? { label: "Scholar", href: site.scholar } : null,
    site.orcid ? { label: "ORCID", href: site.orcid } : null
  ].filter(Boolean);

export default function Footer() {
  const links = buildLinks();

  return (
    <footer className="site-footer">
      <div>
        <p className="footer-title">{site.name || "Shriyans Shindadkar"}</p>
        {site.tagline ? <p className="footer-text">{site.tagline}</p> : null}
      </div>

      {links.length ? (
        <div className="footer-links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}

      <div className="footer-meta">
        <span>&copy; {year}</span>
        <span>Built with React + Vite</span>
      </div>
    </footer>
  );
}
