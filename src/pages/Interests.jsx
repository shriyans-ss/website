import { interests } from "../data.js";

export default function Interests() {
  return (
    <div className="page-content">
      <section className="section">
        <div className="section-header">
          <h2>Interests</h2>
          <p className="section-subtitle">
            A snapshot of the domains shaping current work.
          </p>
        </div>
        <div className="card-grid">
          {interests.map((interest) => (
            <article key={interest.title} className="card">
              <p className="card-meta">Themes</p>
              <h3>{interest.title}</h3>
              <p className="card-text">{interest.description}</p>
              <ul className="topic-list">
                {(interest.topics || []).map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
              <div className="resource-list">
                {(interest.resources || []).map((resource) => (
                  <a
                    key={resource.name}
                    className="resource-link"
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {resource.name}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
