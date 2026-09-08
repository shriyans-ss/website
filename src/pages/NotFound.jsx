import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page-content">
      <section className="section">
        <div className="section-header">
          <h2>Page not found</h2>
        </div>
        <p className="section-subtitle">
          That page doesn't exist. Try the blog, the bookshelf, or head back home.
        </p>
        <div className="hero-actions">
          <Link className="btn primary" viewTransition to="/">
            Back home
          </Link>
          <Link className="btn ghost" viewTransition to="/blog">
            Read the blog
          </Link>
        </div>
      </section>
    </div>
  );
}
