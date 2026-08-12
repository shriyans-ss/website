import { books } from "../data.js";

const renderRating = (rating) => "*".repeat(Math.max(0, rating || 0));

export default function Books() {
  return (
    <div className="page-content">
      <section className="section">
        <div className="section-header">
          <h2>Bookshelf</h2>
<<<<<<< HEAD
          <p className="section-subtitle">A non-exhaustive list of books I've read</p>
=======
          <p className="section-subtitle">Notes on what keeps the mind sharp.</p>
>>>>>>> cb42d9064916943a488ce4de44523d96ca2c49f1
        </div>
        <div className="card-grid">
          {books.map((book) => (
            <article key={book.title} className="card">
              <div className="card-header">
                <p className="card-meta">{book.genre}</p>
                <span className="rating">{renderRating(book.rating)}</span>
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
