import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiMail,
  FiArrowUp,
  FiHeart,
} from "react-icons/fi";

const socialLinks = [
  {
    icon: <FiGithub size={20} />,
    href: "https://github.com/Aayush-Raj-Singh",
    label: "GitHub",
  },
  {
    icon: <FiLinkedin size={20} />,
    href: "https://www.linkedin.com/in/aayush-raj-77a1bb237",
    label: "LinkedIn",
  },
  {
    icon: <FiTwitter size={20} />,
    href: "https://twitter.com/AayushR19149133",
    label: "X / Twitter",
  },
  {
    icon: <FiInstagram size={20} />,
    href: "https://www.instagram.com/abhayaprabha/",
    label: "Instagram",
  },
  {
    icon: <FiMail size={20} />,
    href: "mailto:aayush.raj@myyahoo.com",
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
          <button className="footer-logo" onClick={scrollToTop}>
            <span className="logo-text-main">ARS</span>
            <span className="logo-text-accent">();</span>
          </button>
          <p className="footer-tagline">
            Cyber Security Engineer - Building resilient systems and actionable
            intelligence for modern threat landscapes.
          </p>
          <div className="footer-status">
            <span className="status-dot" />
            <span>Open to internships & entry-level security roles</span>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          {quickLinks.map((link) => (
            <button
              key={link.id}
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
                rel="noreferrer"
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
          (c) {new Date().getFullYear()} Aayush Raj. Crafted with{" "}
          <FiHeart size={14} className="inline-heart" /> in Bihar, India.
        </p>
        <button
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
