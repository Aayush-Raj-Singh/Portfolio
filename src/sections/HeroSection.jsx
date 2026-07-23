import { Suspense, lazy, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiArrowDown,
  FiTerminal,
  FiX,
} from "react-icons/fi";
import TriageChallenge from "../components/TriageChallenge";
import { identity, profileSummary, targetRoles } from "../data/careerProfile";

const MotionDiv = motion.div;
const Terminal = lazy(() => import("../components/Terminal"));

const socialLinks = [
  {
    icon: <FiLinkedin size={20} />,
    href: identity.linkedin,
    label: "LinkedIn",
  },
  {
    icon: <FiGithub size={20} />,
    href: identity.github,
    label: "GitHub",
  },
  {
    icon: (
      <img
        src="https://assets.tryhackme.com/img/logo/tryhackme_logo_full.svg"
        alt="TryHackMe"
        style={{ width: 24, height: 18, filter: "brightness(1.2)" }}
      />
    ),
    href: identity.tryHackMe,
    label: "TryHackMe",
  },
  {
    icon: <FiMail size={20} />,
    href: `mailto:${identity.email}`,
    label: "Email",
  },
];

function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const baseUrl = import.meta.env.BASE_URL || "/";

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    const currentRole = targetRoles[roleIndex];
    const shouldPause = !isDeleting && displayText === currentRole;
    const shouldAdvance = isDeleting && displayText === "";

    const timeout = window.setTimeout(() => {
      if (shouldPause) {
        setIsDeleting(true);
        return;
      }

      if (shouldAdvance) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % targetRoles.length);
        return;
      }

      setDisplayText((previousText) =>
        isDeleting
          ? currentRole.substring(0, Math.max(previousText.length - 1, 0))
          : currentRole.substring(0, previousText.length + 1)
      );
    }, shouldPause ? 2000 : isDeleting ? 40 : 80);

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, shouldReduceMotion]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const roleText = shouldReduceMotion ? targetRoles[0] : displayText;

  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="hero-bg-glow hero-glow-1" aria-hidden="true" />
      <div className="hero-bg-glow hero-glow-2" aria-hidden="true" />

      <div className="hero-content">
        <MotionDiv
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="hero-eyebrow">
            <span className="eyebrow-dot" />
            Available for opportunities
          </span>

          <h1 className="hero-title">
            Hi, I&apos;m <span className="hero-name">{identity.name}</span>
          </h1>

          <div className="hero-role">
            <span className="role-prefix">{"> "}</span>
            <span className="role-text">{roleText}</span>
            <span className="role-cursor">|</span>
          </div>

          <p className="hero-summary">
            {profileSummary}
          </p>

          <div className="hero-ctas">
            <button
              type="button"
              className="cta-primary"
              onClick={() => scrollToSection("contact")}
            >
              <FiMail size={18} />
              <span>Hire Me</span>
            </button>
            <button
              type="button"
              className="cta-secondary"
              onClick={() => scrollToSection("projects")}
            >
              <span>View Projects</span>
            </button>
            <a
              className="cta-outline"
              href={`${baseUrl}${identity.resumeAsset}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload size={18} />
              <span>View Resume</span>
            </a>
          </div>

          <div className="hero-socials">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={link.label}
                className="hero-social-icon"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <TriageChallenge />
        </MotionDiv>

        <MotionDiv
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {terminalOpen ? (
            <div className="terminal-wrapper">
              <button
                type="button"
                className="terminal-close-btn"
                onClick={() => setTerminalOpen(false)}
                aria-label="Close terminal"
              >
                <FiX size={18} />
              </button>
              <Suspense
                fallback={
                  <div className="terminal-skeleton">Loading terminal...</div>
                }
              >
                <Terminal />
              </Suspense>
            </div>
          ) : (
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="card-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <span className="card-title-text">SECURITY PROFILE</span>
              </div>
              <div className="hero-card-body">
                <div className="code-line">
                  <span className="code-keyword">const</span>{" "}
                  <span className="code-var">engineer</span> ={" "}
                  <span className="code-bracket">{"{"}</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-key">name</span>:{" "}
                  <span className="code-string">"{identity.name}"</span>,
                </div>
                <div className="code-line code-indent">
                  <span className="code-key">role</span>:{" "}
                  <span className="code-string">"{identity.title}"</span>,
                </div>
                <div className="code-line code-indent">
                  <span className="code-key">focus</span>:{" "}
                  <span className="code-bracket">[</span>
                  <span className="code-string">"SOC"</span>,{" "}
                  <span className="code-string">"VAPT"</span>,{" "}
                  <span className="code-string">"Threat Intel"</span>
                  <span className="code-bracket">]</span>,
                </div>
                <div className="code-line code-indent">
                  <span className="code-key">status</span>:{" "}
                  <span className="code-string">"Open to work"</span>,
                </div>
                <div className="code-line code-indent">
                  <span className="code-key">location</span>:{" "}
                  <span className="code-string">"{identity.location}"</span>,
                </div>
                <div className="code-line">
                  <span className="code-bracket">{"}"}</span>;
                </div>
                <div className="code-line code-blank" />
                <button
                  type="button"
                  className="terminal-toggle-btn"
                  onClick={() => setTerminalOpen(true)}
                >
                  <FiTerminal size={16} />
                  <span>Open Interactive Terminal</span>
                </button>
              </div>
            </div>
          )}
        </MotionDiv>
      </div>

      <button
        type="button"
        className="scroll-indicator"
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to about section"
      >
        <FiArrowDown size={20} />
      </button>
    </section>
  );
}

export default HeroSection;
