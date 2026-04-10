import { useState, useEffect } from "react";
import { useTheme } from "../context/useTheme";
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from "react-icons/fi";

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
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
                onClick={() => scrollTo(link.id)}
                className={`nav-link ${activeSection === link.id ? "nav-active" : ""}`}
                aria-current={activeSection === link.id ? "page" : undefined}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <a
              className="resume-btn"
              href={`${baseUrl}assets/Aayush_Raj_Cybersecurity_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View and download resume"
            >
              <FiDownload size={16} />
              <span>Resume</span>
            </a>

            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            <button
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

      {/* Mobile Overlay */}
      <div
        className={`mobile-nav-overlay ${mobileOpen ? "mobile-nav-open" : ""}`}
        onClick={() => setMobileOpen(false)}
      >
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
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <FiX size={24} />
            </button>
          </div>
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`mobile-link ${activeSection === link.id ? "mobile-link-active" : ""}`}
                aria-current={activeSection === link.id ? "page" : undefined}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="mobile-nav-footer">
            <a
              className="resume-btn mobile-resume"
              href={`${baseUrl}assets/Aayush_Raj_Cybersecurity_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload size={16} />
              <span>View Resume</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default SiteHeader;
