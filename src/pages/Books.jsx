import { books } from "../data.js";

const MAX_RATING = 5;

const clampRating = (rating) =>
  Math.min(MAX_RATING, Math.max(0, Math.round(rating || 0)));

export default function Books() {
  return (
    <div className="page-content">
      <section className="section">
        <div className="section-header">
          <h2>Bookshelf</h2>
          <p className="section-subtitle">A non-exhaustive list of books I've read</p>
        </div>
        <div className="card-grid">
          {books.map((book) => (
            <article key={book.title} className="card">
              <div className="card-header">
                <p className="card-meta">{book.genre}</p>
                {book.rating ? (
                  <span
                    className="rating"
                    aria-label={`Rated ${clampRating(book.rating)} out of ${MAX_RATING}`}
                  >
                    <span aria-hidden="true">
                      {"★".repeat(clampRating(book.rating))}
                      {"☆".repeat(MAX_RATING - clampRating(book.rating))}
                    </span>
                  </span>
                ) : null}
              </div>
              <h3>{book.title}</h3>
              <p className="card-text">{book.description}</p>
              <div className="card-footer">
                <span>{book.author}</span>
                <span>{book.year}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
