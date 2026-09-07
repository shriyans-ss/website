import { useEffect, useState } from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Books from "../pages/Books.jsx";
import Blog from "../pages/Blog.jsx";
import BlogPost from "../pages/BlogPost.jsx";
import Interests from "../pages/Interests.jsx";
import About from "../pages/About.jsx";
import NotFound from "../pages/NotFound.jsx";
import Footer from "./Footer.jsx";
import { blogPosts, hasAbout, interests } from "../data.js";

// About only appears in the nav once data/about.yaml actually has a bio.
const navLinks = [
  { to: "/", label: "Home" },
  hasAbout ? { to: "/about", label: "About" } : null,
  { to: "/books", label: "Books" },
  { to: "/blog", label: "Blog" },
  { to: "/interests", label: "Interests" }
].filter(Boolean);

const brandImage = "site-logo.png";

// The marquee reads from real content so it always reflects what is on the
// site, rather than a hard-coded list that drifts out of date.
const tickerTopics = Array.from(
  new Set([
    ...blogPosts.flatMap((post) => post.tags || []),
    ...interests.map((interest) => interest.title)
  ])
);

const tickerText = tickerTopics.length
  ? `${tickerTopics.join(" / ")} / `
  : "";

export default function Layout() {
  const location = useLocation();
  const [stuck, setStuck] = useState(false);

  // Show the header hairline only once the page has scrolled away from the top.
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Each route change should start at the top of the new page.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className={stuck ? "site-header is-stuck" : "site-header"}>
        <div className="brand">
          <img className="brand-mark brand-image" src={brandImage} alt="" />
          <div>
            <p className="brand-title">Shriyans's Website</p>
          </div>
        </div>
        <nav className="site-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      {tickerText ? (
        <div className="flow-ticker" aria-hidden="true">
          <div className="ticker-track">
            <span className="ticker-item">{tickerText}</span>
            <span className="ticker-item">{tickerText}</span>
          </div>
        </div>
      ) : null}

      <main className="site-main" id="main">
        <div className="page" key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/interests" element={<Interests />} />
            {hasAbout ? <Route path="/about" element={<About />} /> : null}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}
