import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Books from "../pages/Books.jsx";
import Blog from "../pages/Blog.jsx";
import BlogPost from "../pages/BlogPost.jsx";
import Interests from "../pages/Interests.jsx";
import Footer from "./Footer.jsx";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/books", label: "Books" },
  { to: "/blog", label: "Blog" },
  { to: "/interests", label: "Interests" }
];

export default function Layout() {
  const location = useLocation();

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand">
          <div className="brand-mark">Q</div>
          <div>
            <p className="brand-title">Quiet Futures Lab</p>
            <p className="brand-subtitle">Research, reading, and experiments</p>
          </div>
        </div>
        <nav className="site-nav">
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

      <div className="flow-ticker" aria-hidden="true">
        <div className="ticker-track">
          <span className="ticker-item">
            Study archive / Field notes / Signal mapping / Quiet experiments /
            Reading shelf / Research drafts /
          </span>
          <span className="ticker-item">
            Study archive / Field notes / Signal mapping / Quiet experiments /
            Reading shelf / Research drafts /
          </span>
        </div>
      </div>

      <main className="site-main">
        <div className="page" key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/interests" element={<Interests />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}
