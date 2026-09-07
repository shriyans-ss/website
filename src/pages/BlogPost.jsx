import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { blogPosts, isDraft } from "../data.js";

function Figure({ src, alt, caption }) {
  const [failed, setFailed] = useState(false);

  // Hide the whole figure when the image is missing so we never leave a
  // dangling caption pointing at nothing.
  if (src && failed) {
    return null;
  }

  return (
    <figure className="responsive-figure">
      {src ? (
        <img src={src} alt={alt || ""} loading="lazy" onError={() => setFailed(true)} />
      ) : null}
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

function Section({ section, imageBasePath }) {
  if (section.type === "paragraph") {
    return <p>{section.text}</p>;
  }

  if (section.type === "heading") {
    return <h3>{section.text}</h3>;
  }

  if (section.type === "list") {
    const items = (section.items || []).map((item, index) => (
      <li key={index}>{item}</li>
    ));

    return section.ordered ? (
      <ol className="post-list ordered">{items}</ol>
    ) : (
      <ul className="post-list">{items}</ul>
    );
  }

  if (section.type === "figure") {
    return (
      <Figure
        src={section.image ? `${imageBasePath}/${section.image}` : ""}
        alt={section.alt}
        caption={section.caption}
      />
    );
  }

  return null;
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);
  const rawBase = post?.imageDir || (post?.slug ? `blog/${post.slug}/images` : "");
  // Strip any leading slash so assets resolve against Vite's relative base ("./"),
  // which keeps them working under a GitHub Pages project subpath.
  const imageBasePath = rawBase.replace(/^\/+/, "");

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
      <article className="section">
        <Link className="text-link back-link" to="/blog">
          Back to the blog
        </Link>
        <div className="post-header">
          <p className="card-meta">
            <time dateTime={post.date_iso}>{post.date}</time>
            {isDraft(post) ? <span className="draft-badge">Draft</span> : null}
          </p>
          <h1>{post.title}</h1>
          <p className="post-authors">{(post.authors || []).join(", ")}</p>
          {post.affiliation ? (
            <p className="post-affiliation">{post.affiliation}</p>
          ) : null}
          {post.advisors?.length ? (
            <p className="post-advisors">
              <span className="post-advisors-label">Advisors</span>{" "}
              {post.advisors.join(", ")}
            </p>
          ) : null}
        </div>
        {isDraft(post) ? (
          <p className="draft-notice">
            This post is a draft. It is visible only when running the site
            locally and is excluded from the published build.
          </p>
        ) : null}
        <p className="post-excerpt">{post.excerpt}</p>
        <div className="card-tags">
          {(post.tags || []).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="post-body">
          {(post.sections || []).map((section, index) => (
            <Section key={index} section={section} imageBasePath={imageBasePath} />
          ))}
          {post.references?.length ? (
            <div className="post-references">
              <h3>References</h3>
              <ol className="reference-list">
                {post.references.map((reference, index) => (
                  <li key={index}>{reference}</li>
                ))}
              </ol>
            </div>
          ) : null}
        </div>
      </article>
    </div>
  );
}
