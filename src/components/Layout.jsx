import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer.jsx";
import { hasAbout } from "../data.js";

// About only appears in the nav once data/about.yaml actually has a bio.
const navLinks = [
  { to: "/", label: "Home" },
  hasAbout ? { to: "/about", label: "About" } : null,
  { to: "/books", label: "Books" },
  { to: "/blog", label: "Blog" },
  { to: "/interests", label: "Interests" }
].filter(Boolean);

const brandImage = "site-logo.png";

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
              viewTransition
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

      <main className="site-main" id="main">
        <div className="page" key={location.pathname}>
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}
