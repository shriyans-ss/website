import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data.js";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="page-content">
        <section className="section">
          <h2>Post not found</h2>
          <p className="section-subtitle">
            That post is not available yet. Check the full list instead.
          </p>
          <Link className="text-link" to="/blog">
            Back to the blog
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="page-content">
      <section className="section">
        <Link className="text-link" to="/blog">
          Back to the blog
        </Link>
        <div className="post-header">
          <p className="card-meta">{post.date}</p>
          <h1>{post.title}</h1>
          <p className="post-authors">{(post.authors || []).join(", ")}</p>
        </div>
        <p className="post-excerpt">{post.excerpt}</p>
        <div className="card-tags">
          {(post.tags || []).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
