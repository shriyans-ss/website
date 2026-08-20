const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-title">Shriyans Shindadkar</p>
        <p className="footer-text">Neuroscience &amp; robotics.</p>
      </div>

      {/*
        TODO: add your real links, then delete this comment.
        Do not ship placeholder handles — an empty footer beats a dead link.

        <div className="footer-links">
          <a href="mailto:you@example.com">Email</a>
          <a href="https://github.com/USERNAME" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/USERNAME" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://scholar.google.com/citations?user=ID" target="_blank" rel="noreferrer">Scholar</a>
        </div>
      */}

      <div className="footer-meta">
        <span>&copy; {year}</span>
        <span>Built with React + Vite</span>
      </div>
    </footer>
  );
}
