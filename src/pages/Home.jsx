import { Link } from "react-router-dom";
import PostTitleLink from "../components/PostTitleLink.jsx";
import { blogPosts, interests, isDraft, site } from "../data.js";
import Connectome from "../components/Connectome.jsx";

export default function Home() {
  return (
    <div className="page-content">
      <section className="hero">
        <Connectome />
        <div className="hero-text">
          <h1>{site.hero?.headline}</h1>
          {site.hero?.intro ? (
            <p className="hero-copy">{site.hero.intro}</p>
          ) : null}
          <div className="hero-actions">
            <Link className="btn primary" viewTransition to="/blog">
              Read the latest
            </Link>
            <Link className="btn ghost" viewTransition to="/books">
              Browse the shelf
            </Link>
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
          <Link className="text-link" viewTransition to="/blog">
            View all posts
          </Link>
        </div>
        <div className="card-grid">
          {blogPosts.slice(0, 1).map((post) => (
            <article key={post.slug || post.title} className="card">
              <p className="card-meta">
                <time dateTime={post.date_iso}>{post.date}</time>
                {isDraft(post) ? <span className="draft-badge">Draft</span> : null}
              </p>
              <h3>
                {post.slug ? (
                  <PostTitleLink to={`/blog/${post.slug}`}>
                    {post.title}
                  </PostTitleLink>
                ) : (
                  post.title
                )}
              </h3>
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
          <Link className="text-link" viewTransition to="/interests">
            Explore focus areas
          </Link>
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
