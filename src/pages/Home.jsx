import { blogPosts, books, interests } from "../data.js";

export default function Home() {
  return (
    <div className="page-content">
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">Calm, focused, and readable</p>
          <h1>Maps of curiosity, shared in small batches.</h1>
          <p className="hero-copy">
            A minimalist home for research threads, book notes, and the
            experiments that keep the questions open.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#/blog">
              Read the latest
            </a>
            <a className="btn ghost" href="#/books">
              Browse the shelf
            </a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="panel-card">
            <p className="panel-label">Open invitation</p>
            <h3>Neuroscience x robotics</h3>
            <p className="panel-text">
              I'm always curious and eager to learn more about neuroscience and
              robotics! Please reach out to share something you're interested in;
              I always love hearing about people working in wetlabs and drylabs.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Latest writing</h2>
          <a className="text-link" href="#/blog">
            View all posts
          </a>
        </div>
        <div className="card-grid">
          {blogPosts.slice(0, 3).map((post) => (
            <article key={post.title} className="card">
              <p className="card-meta">{post.date}</p>
              <h3>{post.title}</h3>
              <p className="card-text">{post.excerpt}</p>
              <div className="card-tags">
                {(post.tags || []).slice(0, 3).map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Signals and interests</h2>
          <a className="text-link" href="#/interests">
            Explore focus areas
          </a>
        </div>
        <div className="card-grid">
          {interests.slice(0, 3).map((interest) => (
            <article key={interest.title} className="card">
              <p className="card-meta">Focus area</p>
              <h3>{interest.title}</h3>
              <p className="card-text">{interest.description}</p>
              <ul className="topic-list">
                {(interest.topics || []).slice(0, 3).map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
