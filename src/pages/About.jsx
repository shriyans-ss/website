import { about, site } from "../data.js";

export default function About() {
  const paragraphs = about.bio || [];

  return (
    <div className="page-content">
      <section className="section">
        <div className="section-header">
          <h2>About</h2>
          {about.subtitle ? (
            <p className="section-subtitle">{about.subtitle}</p>
          ) : null}
        </div>

        <div className="about-layout">
          {about.photo ? (
            <img
              className="about-photo"
              src={about.photo.replace(/^\/+/, "")}
              alt={site.name || "Portrait"}
            />
          ) : null}

          <div className="about-body">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {about.affiliation ? (
              <p className="about-affiliation">{about.affiliation}</p>
            ) : null}

            {about.now?.text ? (
              <div className="about-now">
                <p className="card-meta">Now{about.now.date ? ` — ${about.now.date}` : ""}</p>
                <p>{about.now.text}</p>
              </div>
            ) : null}

            {about.cv ? (
              <a className="btn ghost" href={about.cv} target="_blank" rel="noreferrer">
                Download CV
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
