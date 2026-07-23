import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
  FiHeart,
  FiDownload,
} from "react-icons/fi";
import { identity } from "../data/careerProfile";

const socialLinks = [
  {
    icon: <FiGithub size={20} />,
    href: identity.github,
    label: "GitHub",
  },
  {
    icon: <FiLinkedin size={20} />,
    href: identity.linkedin,
    label: "LinkedIn",
  },
  {
    icon: <FiMail size={20} />,
    href: `mailto:${identity.email}`,
    label: "Email",
  },
];

const quickLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "cyber-labs", label: "Cyber Labs" },
  { id: "contact", label: "Contact" },
];

function SiteFooter() {
  const baseUrl = import.meta.env.BASE_URL || "/";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <button type="button" className="footer-logo" onClick={scrollToTop}>
            <span className="logo-text-main">ARS</span>
            <span className="logo-text-accent">();</span>
          </button>
          <p className="footer-tagline">
            Cybersecurity analyst focused on SOC operations, VAPT, threat
            intelligence, and security automation.
          </p>
          <div className="footer-status">
            <span className="status-dot" />
            <span>Open to internships and entry-level cybersecurity roles</span>
          </div>
          <div className="footer-cta-row">
            <a className="footer-email-link" href={`mailto:${identity.email}`}>
              <FiMail size={16} />
              <span>{identity.email}</span>
            </a>
            <a
              className="footer-resume-link"
              href={`${baseUrl}${identity.resumeAsset}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload size={16} />
              <span>Resume</span>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          {quickLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              className="footer-link"
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="footer-social">
          <h4 className="footer-heading">Connect</h4>
          <div className="footer-social-links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={link.label}
                className="footer-social-icon"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          (c) {new Date().getFullYear()} {identity.name}. Built with{" "}
          <FiHeart size={14} className="inline-heart" /> in {identity.location}.
        </p>
        <button
          type="button"
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FiArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}

export default SiteFooter;
