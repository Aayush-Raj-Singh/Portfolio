import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import { FiShield, FiCode, FiTerminal, FiAward } from "react-icons/fi";
import { portfolioMetrics } from "../data/portfolioMetrics";

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
    desc: "50+ security credentials and badges backed by continuous lab practice.",
  },
];

const stats = [
  { value: String(portfolioMetrics.featuredProjects), label: "Featured Projects" },
  {
    value: String(portfolioMetrics.securityCredentialsAndBadges),
    label: "Security Credentials",
  },
  {
    value: String(portfolioMetrics.tryHackMeBadges),
    label: "TryHackMe Badges",
  },
  { value: String(portfolioMetrics.securityTools), label: "Core Tools" },
];

function AboutSection() {
  const baseUrl = import.meta.env.BASE_URL || "/";

  return (
    <section className="about-section" id="about">
      <SectionHeading
        eyebrow="About Me"
        title="Defending the Digital Frontier"
        description="Final-year B.Tech CSE Cyber Security student building a career in defensive security, blending practical blue team operations with automation and ethical hacking."
      />

      <div className="about-content">
        <ScrollReveal direction="left" className="about-image-wrap">
          <div className="about-image-container">
            <img
              src={`${baseUrl}assets/pp.jpg`}
              alt="Aayush Raj portrait"
              className="about-image"
              loading="lazy"
            />
            <div className="about-image-border" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="about-text">
          <h3 className="about-name">Aayush Raj</h3>
          <p className="about-role">Cyber Security Engineer | SOC-L1</p>
          <p className="about-bio">
            My focus is on detecting, analyzing, and responding to threats across
            endpoints and networks. I enjoy designing workflows that connect
            telemetry, alerts, and response actions into clean, actionable
            playbooks. Based in Bihar, India, open to internships and
            entry-level security roles worldwide.
          </p>

          <div className="about-stats">
            {stats.map((stat, i) => (
              <MotionDiv
                key={stat.label}
                className="about-stat"
                initial={{ opacity: 0, scale: 0.8 }}
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
