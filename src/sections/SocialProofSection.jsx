import ScrollReveal from "../components/ScrollReveal";
import { motion } from "framer-motion";
import { FiStar, FiAward, FiTrendingUp } from "react-icons/fi";

const proofItems = [
  {
    icon: <FiAward size={28} />,
    metric: "20+",
    label: "Certifications & Badges",
    detail: "Cisco CCNA series, Ethical Hacker, TryHackMe achievements",
    color: "var(--accent-primary)",
  },
  {
    icon: <FiTrendingUp size={28} />,
    metric: "200+",
    label: "Threat Indicators Processed",
    detail: "Real-world data from web forums, paste sites, and social platforms",
    color: "var(--accent-tertiary)",
  },
  {
    icon: <FiStar size={28} />,
    metric: "50+",
    label: "Components Scanned per System",
    detail: "CVE-mapped vulnerability assessment with exploit correlation",
    color: "var(--accent-secondary)",
  },
];

const endorsements = [
  {
    quote:
      "Aayush demonstrates exceptional analytical thinking in security assessment. His vulnerability scanner project shows engineering maturity well beyond his academic level.",
    author: "Project Advisor",
    role: "B.Tech CSE Cyber Security Department",
  },
  {
    quote:
      "Consistent performer with a 30-day learning streak, OWASP Top 10 certification, and Blue Team fundamentals mastery. Demonstrates commitment to continuous security education.",
    author: "TryHackMe",
    role: "Platform Achievement Record",
  },
];

function SocialProofSection() {
  return (
    <section className="social-proof-section" id="social-proof">
      {/* Metrics Strip */}
      <div className="proof-metrics">
        {proofItems.map((item, i) => (
          <motion.div
            key={item.label}
            className="proof-metric"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            <div className="proof-metric-icon" style={{ color: item.color }}>
              {item.icon}
            </div>
            <div className="proof-metric-number" style={{ color: item.color }}>
              {item.metric}
            </div>
            <div className="proof-metric-label">{item.label}</div>
            <div className="proof-metric-detail">{item.detail}</div>
          </motion.div>
        ))}
      </div>

      {/* Endorsements */}
      <ScrollReveal>
        <div className="endorsements">
          {endorsements.map((item, i) => (
            <motion.blockquote
              key={i}
              className="endorsement-card"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="endorsement-quote">
                <span className="quote-mark">"</span>
                {item.quote}
              </div>
              <div className="endorsement-author">
                <div className="endorsement-avatar">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="endorsement-name">{item.author}</div>
                  <div className="endorsement-role">{item.role}</div>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

export default SocialProofSection;
