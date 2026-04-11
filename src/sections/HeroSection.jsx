import { Suspense, lazy, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiMail,
  FiDownload,
  FiArrowDown,
  FiTerminal,
  FiX,
} from "react-icons/fi";
import TriageChallenge from "../components/TriageChallenge";

const MotionDiv = motion.div;
const Terminal = lazy(() => import("../components/Terminal"));

const roles = [
  "Cyber Security Engineer",
  "Blue Team Defender",
  "Security Automation Builder",
  "Ethical Hacker",
];

const socialLinks = [
  {
    icon: <FiLinkedin size={20} />,
    href: "https://www.linkedin.com/in/aayush-raj-77a1bb237",
    label: "LinkedIn",
  },
  {
    icon: <FiGithub size={20} />,
    href: "https://github.com/Aayush-Raj-Singh",
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
    href: "https://tryhackme.com/p/Abhayaprabha",
    label: "TryHackMe",
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

function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const baseUrl = import.meta.env.BASE_URL || "/";

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const shouldPause = !isDeleting && displayText === currentRole;
    const shouldAdvance = isDeleting && displayText === "";

    const timeout = window.setTimeout(() => {
      if (shouldPause) {
        setIsDeleting(true);
        return;
      }

      if (shouldAdvance) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }

      setDisplayText((previousText) =>
        isDeleting
          ? currentRole.substring(0, Math.max(previousText.length - 1, 0))
          : currentRole.substring(0, previousText.length + 1)
      );
    }, shouldPause ? 2000 : isDeleting ? 40 : 80);

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

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
            Hi, I&apos;m <span className="hero-name">Aayush Raj</span>
          </h1>

          <div className="hero-role">
            <span className="role-prefix">{"> "}</span>
            <span className="role-text">{displayText}</span>
            <span className="role-cursor">|</span>
          </div>

          <p className="hero-summary">
            Final-year B.Tech CSE Cyber Security student focused on blue team
            defense, security automation, and ethical hacking. Building resilient
            systems and actionable intelligence for modern threat landscapes.
          </p>

          <div className="hero-ctas">
            <button
              className="cta-primary"
              onClick={() => scrollToSection("contact")}
            >
              <FiMail size={18} />
              <span>Hire Me</span>
            </button>
            <button
              className="cta-secondary"
              onClick={() => scrollToSection("projects")}
            >
              <span>View Projects</span>
            </button>
            <a
              className="cta-outline"
              href={`${baseUrl}assets/Aayush_Raj_Cybersecurity_Resume.pdf`}
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
                rel="noreferrer"
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
                <span className="card-title-text">ABHAYAPRABHA</span>
              </div>
              <div className="hero-card-body">
                <div className="code-line">
                  <span className="code-keyword">const</span>{" "}
                  <span className="code-var">engineer</span> ={" "}
                  <span className="code-bracket">{"{"}</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-key">name</span>:{" "}
                  <span className="code-string">"Aayush Raj"</span>,
                </div>
                <div className="code-line code-indent">
                  <span className="code-key">role</span>:{" "}
                  <span className="code-string">"Cyber Security Engineer"</span>,
                </div>
                <div className="code-line code-indent">
                  <span className="code-key">focus</span>:{" "}
                  <span className="code-bracket">[</span>
                  <span className="code-string">"Blue Team"</span>,{" "}
                  <span className="code-string">"Automation"</span>,{" "}
                  <span className="code-string">"Ethical Hacking"</span>
                  <span className="code-bracket">]</span>,
                </div>
                <div className="code-line code-indent">
                  <span className="code-key">status</span>:{" "}
                  <span className="code-string">"Open to work"</span>,
                </div>
                <div className="code-line code-indent">
                  <span className="code-key">location</span>:{" "}
                  <span className="code-string">"Bihar, India"</span>,
                </div>
                <div className="code-line">
                  <span className="code-bracket">{"}"}</span>;
                </div>
                <div className="code-line code-blank" />
                <button
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
