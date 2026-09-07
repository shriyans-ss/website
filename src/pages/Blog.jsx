import { Link } from "react-router-dom";
import { blogPosts, isDraft } from "../data.js";

export default function Blog() {
  return (
    <div className="page-content">
      <section className="section">
        <div className="section-header">
          <h2>Blog</h2>
          <p className="section-subtitle">Long-form thinking and project notes.</p>
        </div>
        <div className="card-grid">
          {blogPosts.map((post) => (
            <article key={post.title} className="card">
              <p className="card-meta">
                <time dateTime={post.date_iso}>{post.date}</time>
                {isDraft(post) ? <span className="draft-badge">Draft</span> : null}
              </p>
              <h3>
                <Link className="card-link" to={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              <p className="card-text">{post.excerpt}</p>
              <div className="card-tags">
                {(post.tags || []).map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="card-footer">
                <span>{(post.authors || []).join(", ")}</span>
                <Link className="btn primary" to={`/blog/${post.slug}`}>
                  Read post
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
