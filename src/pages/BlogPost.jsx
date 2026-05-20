import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data.js";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);
  const imageBasePath = post?.imageDir || (post?.slug ? `/blog/${post.slug}/images` : "");

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
        <div className="post-body">
          {(post.sections || []).map((section, index) => {
            if (section.type === "paragraph") {
              return <p key={index}>{section.text}</p>;
            }

            if (section.type === "heading") {
              return <h3 key={index}>{section.text}</h3>;
            }

            if (section.type === "figure") {
              return (
                <figure key={index} className="responsive-figure">
                  {section.image ? (
                    <img
                      src={`${imageBasePath}/${section.image}`}
                      alt={section.alt || ""}
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  ) : null}
                  <figcaption>{section.caption}</figcaption>
                </figure>
              );
            }

            return null;
          })}
          {post.references?.length ? (
            <div>
              <h3>References</h3>
              <p>
                {post.references.map((reference, referenceIndex) => (
                  <span key={referenceIndex}>
                    {reference}
                    {referenceIndex < post.references.length - 1 ? <><br /><br /></> : null}
                  </span>
                ))}
              </p>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
