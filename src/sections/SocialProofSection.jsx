import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";
import { FiAward, FiTrendingUp, FiStar, FiShield } from "react-icons/fi";
import { portfolioMetrics } from "../data/portfolioMetrics";
import { proofHighlights } from "../data/careerProfile";

const MotionDiv = motion.div;

const icons = [FiAward, FiShield, FiTrendingUp, FiStar];

const evidenceCards = [
  {
    kicker: "Hands-on practice",
    title: "Security learning backed by labs and certifications",
    copy:
      "I have practiced core cybersecurity concepts through structured certifications, TryHackMe rooms, CTF-style exercises, and networking labs.",
    points: [
      "SOC and VAPT fundamentals",
      "Top 1% TryHackMe profile",
      "ISC2 Certified in Cybersecurity (CC)",
      "Cisco cybersecurity and CCNA track",
    ],
  },
  {
    kicker: "Projects I built",
    title: "Security tools developed from scratch",
    copy:
      "I built practical projects around threat intelligence, vulnerability monitoring, Windows posture assessment, cryptographic analysis, and geospatial analytics.",
    points: [
      "IOC extraction and threat scoring",
      "CVE correlation and Windows posture assessment",
      "CVSS / EPSS / KEV advisory enrichment",
      "Dashboards, reports, APIs, and automation",
    ],
  },
  {
    kicker: "Internship exposure",
    title: "Applied work in risk assessment and VAPT",
    copy:
      "My internship work helped me understand vulnerability discovery, risk prioritization, reporting, and how security findings are communicated.",
    points: [
      "15+ systems reviewed",
      "40+ high-risk weaknesses identified",
      "SIEM-style alert review exposure",
      "Mitigation and reporting support",
    ],
  },
];

function SocialProofSection() {
  return (
    <section className="social-proof-section" id="social-proof">
      <SectionHeading
        eyebrow="Proof of Work"
        title="What I Have Built and Practiced"
        description="A quick view of my certifications, labs, internships, projects, and measurable security outcomes."
      />

      <div className="proof-metrics">
        {proofHighlights.map((item, i) => {
          const Icon = icons[i % icons.length];

          return (
            <MotionDiv
              key={item.label}
              className="proof-metric"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
            >
              <div className="proof-metric-icon" style={{ color: "var(--accent-primary)" }}>
                <Icon size={28} />
              </div>
              <div className="proof-metric-number" style={{ color: "var(--accent-primary)" }}>
                {item.value}
              </div>
              <div className="proof-metric-label">{item.label}</div>
              <div className="proof-metric-detail">{item.detail}</div>
            </MotionDiv>
          );
        })}
      </div>

      <ScrollReveal>
        <div className="proof-evidence-grid">
          {evidenceCards.map((card, i) => (
            <MotionDiv
              key={card.title}
              className="proof-evidence-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <span className="proof-evidence-kicker">{card.kicker}</span>
              <h3 className="proof-evidence-title">{card.title}</h3>
              <p className="proof-evidence-copy">{card.copy}</p>
              <ul className="proof-evidence-points">
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </MotionDiv>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="proof-work-panel">
          <div>
            <span className="proof-evidence-kicker">Complete archive</span>
            <h3 className="proof-evidence-title">Certificates, labs, and activities are organized in one place</h3>
            <p className="proof-evidence-copy">
              I keep the broader archive available so reviewers can check my
              security learning, technical practice, TryHackMe badges, and
              co-curricular activities without overloading the resume.
            </p>
          </div>
          <div className="proof-work-stats">
            <div className="proof-mini-card">
              <span className="proof-metric-number">{portfolioMetrics.displayedArchiveItems}</span>
              <span className="proof-metric-label">Archive Items</span>
            </div>
            <div className="proof-mini-card">
              <span className="proof-metric-number">{portfolioMetrics.tryHackMeBadges}</span>
              <span className="proof-metric-label">TryHackMe Badges</span>
            </div>
            <div className="proof-mini-card">
              <span className="proof-metric-number">{portfolioMetrics.securityTools}</span>
              <span className="proof-metric-label">Core Tools</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default SocialProofSection;
