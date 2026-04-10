import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";
import { FiAward, FiTrendingUp, FiStar, FiShield } from "react-icons/fi";
import { portfolioMetrics } from "../data/portfolioMetrics";

const MotionDiv = motion.div;

const proofItems = [
  {
    icon: <FiAward size={28} />,
    metric: String(portfolioMetrics.displayedArchiveItems),
    label: "Archive-Backed Records",
    detail:
      "28+ selected certificates, 22+ TryHackMe badges, and 5+ co-curricular entries now shown in the portfolio.",
    color: "var(--accent-primary)",
  },
  {
    icon: <FiShield size={28} />,
    metric: String(portfolioMetrics.featuredProjects),
    label: "Featured Security Projects",
    detail:
      "Built across automation, applied AI, analytics, and threat intelligence.",
    color: "var(--accent-secondary)",
  },
  {
    icon: <FiTrendingUp size={28} />,
    metric: portfolioMetrics.threatIndicatorsProcessed,
    label: "Threat Indicators Processed",
    detail:
      "From the India-focused cyber threat intelligence pipeline highlighted in the project section.",
    color: "var(--accent-tertiary)",
  },
  {
    icon: <FiStar size={28} />,
    metric: portfolioMetrics.windowsComponentsAssessed,
    label: "Windows Components Assessed",
    detail:
      "Mapped and reviewed through the agent-less scanner workflow with CVE-linked reporting.",
    color: "var(--accent-primary)",
  },
];

const evidenceCards = [
  {
    kicker: "Credentials Breakdown",
    title: "50+ security credentials and badges selected",
    copy:
      "The security-facing part of the archive now includes core security, networking, programming, workshops, and expanded hands-on lab badges.",
    points: [
      "9+ core security certificates",
      "6+ networking certificates",
      "8+ programming and automation credentials",
      "22+ TryHackMe badges",
    ],
  },
  {
    kicker: "Project Coverage",
    title: "Measured work, not placeholder numbers",
    copy:
      "The proof section now reflects what is actually shown elsewhere in the portfolio instead of older generic counts.",
    points: [
      "10+ OEM portals tracked",
      "~70% faster advisory visibility",
      "~60% faster Windows assessment time",
      "6+ featured project case studies",
    ],
  },
  {
    kicker: "Hands-On Signals",
    title: "Practice backed by labs and tooling",
    copy:
      "The portfolio evidence spans both structured labs and project delivery, which is stronger than isolated certificates alone.",
    points: [
      "8+ tools listed in the security arsenal",
      "OWASP Top 10 and Blue Team lab badges",
      "Advent of Cyber 2024 and 2025",
      "Co-curricular tab retained as a separate final group",
    ],
  },
];

function SocialProofSection() {
  return (
    <section className="social-proof-section" id="social-proof">
      <SectionHeading
        eyebrow="Quantifiable Impact"
        title="Impact in Numbers"
      />

      <div className="proof-metrics">
        {proofItems.map((item, i) => (
          <MotionDiv
            key={item.label}
            className="proof-metric"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
          >
            <div className="proof-metric-icon" style={{ color: item.color }}>
              {item.icon}
            </div>
            <div className="proof-metric-number" style={{ color: item.color }}>
              {item.metric}
            </div>
            <div className="proof-metric-label">{item.label}</div>
            <div className="proof-metric-detail">{item.detail}</div>
          </MotionDiv>
        ))}
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
    </section>
  );
}

export default SocialProofSection;
