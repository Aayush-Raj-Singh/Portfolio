import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import { FiShield, FiCode, FiTerminal, FiAward } from "react-icons/fi";
import { portfolioMetrics } from "../data/portfolioMetrics";
import { identity, proofHighlights } from "../data/careerProfile";

const MotionDiv = motion.div;

const highlights = [
  {
    icon: <FiShield size={28} />,
    title: "Blue Team Focus",
    desc: "Threat detection, SIEM monitoring, and incident response workflows.",
  },
  {
    icon: <FiCode size={28} />,
    title: "Security Automation",
    desc: "Python and PowerShell scripting for faster triage and reporting.",
  },
  {
    icon: <FiTerminal size={28} />,
    title: "Ethical Hacking",
    desc: "Web app testing, recon, and OWASP or MITRE mapping in safe labs.",
  },
  {
    icon: <FiAward size={28} />,
    title: "Continuous Learning",
    desc: "Certifications, labs, research, and project work aligned to entry-level security roles.",
  },
];

const stats = [
  { value: String(portfolioMetrics.featuredProjects), label: "Featured Projects" },
  ...proofHighlights.slice(0, 3).map((item) => ({
    value: item.value,
    label: item.label,
  })),
];

function AboutSection() {
  const baseUrl = import.meta.env.BASE_URL || "/";

  return (
    <section className="about-section">
      <SectionHeading
        eyebrow="About Me"
        title="Cybersecurity Analyst Profile"
        description="B.Tech CSE (Cyber Security) graduate focused on SOC operations, VAPT, threat intelligence, and security automation."
      />

      <div className="about-content">
        <ScrollReveal direction="left" className="about-image-wrap">
          <div className="about-image-container">
            <img
              src={`${baseUrl}assets/profile.png`}
              alt="Aayush Raj portrait"
              className="about-image"
              loading="lazy"
              width="1254"
              height="1254"
              decoding="async"
            />
            <div className="about-image-border" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="about-text">
          <h3 className="about-name">{identity.name}</h3>
          <p className="about-role">{identity.headline}</p>
          <p className="about-bio">
            My focus is detecting, analyzing, and prioritizing security risks
            across endpoints, networks, applications, and public threat sources.
            I build practical workflows that connect telemetry, advisories,
            CVEs, indicators, dashboards, and reports into analyst-ready
            security outcomes. Based in {identity.location}, open to
            entry-level cybersecurity roles.
          </p>

          <div className="about-stats">
            {stats.map((stat, i) => (
              <MotionDiv
                key={stat.label}
                className="about-stat"
                initial={{ opacity: 1, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="stat-number">{stat.value}</span>
                <span className="stat-text">{stat.label}</span>
              </MotionDiv>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <div className="about-highlights">
        {highlights.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.1}>
            <div className="highlight-card">
              <div className="highlight-icon">{item.icon}</div>
              <h4 className="highlight-title">{item.title}</h4>
              <p className="highlight-desc">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
