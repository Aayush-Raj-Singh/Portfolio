import { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/useTheme";
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from "react-icons/fi";
import { identity } from "../data/careerProfile";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "cyber-labs", label: "Cyber Labs" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function SiteHeader() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);
  const baseUrl = import.meta.env.BASE_URL || "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      return undefined;
    }

    previousFocusRef.current = document.activeElement;
    document.body.classList.add("menu-open");
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = document.querySelectorAll(
        "#mobile-nav-panel button:not([disabled]), #mobile-nav-panel a[href]"
      );
      if (!focusable.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus?.();
    };
  }, [mobileOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={`site-header ${scrolled ? "header-scrolled" : ""}`} id="site-header">
        <div className="header-inner">
          <button
            type="button"
            className="header-logo"
            onClick={() => scrollTo("hero")}
            aria-label="ARS(); home"
          >
            <span className="logo-text-main">ARS</span>
            <span className="logo-text-accent">();</span>
          </button>

          <nav className="header-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`nav-link ${activeSection === link.id ? "nav-active" : ""}`}
                aria-current={activeSection === link.id ? "location" : undefined}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <a
              className="resume-btn"
              href={`${baseUrl}${identity.resumeAsset}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View and download resume"
            >
              <FiDownload size={16} />
              <span>Resume</span>
            </a>

            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-panel"
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-nav-overlay mobile-nav-open" onClick={() => setMobileOpen(false)}>
        <nav
          id="mobile-nav-panel"
          className="mobile-nav-panel"
          onClick={(e) => e.stopPropagation()}
          aria-label="Mobile navigation"
        >
          <div className="mobile-nav-header">
            <span className="logo-text-main">
              ARS<span className="logo-text-accent">();</span>
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <FiX size={24} />
            </button>
          </div>
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className={`mobile-link ${activeSection === link.id ? "mobile-link-active" : ""}`}
                aria-current={activeSection === link.id ? "location" : undefined}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="mobile-nav-footer">
            <a
              className="resume-btn mobile-resume"
              href={`${baseUrl}${identity.resumeAsset}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload size={16} />
              <span>View Resume</span>
            </a>
          </div>
        </nav>
        </div>
      )}
    </>
  );
}

export default SiteHeader;
