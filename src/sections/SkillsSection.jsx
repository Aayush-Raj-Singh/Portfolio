import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import SkillBar from "../components/SkillBar";
import RadarChart from "../components/RadarChart";
import {
  FiShield,
  FiTarget,
  FiCpu,
  FiTerminal,
  FiCode,
  FiTool,
} from "react-icons/fi";

const skillCategories = [
  {
    id: "blueteam",
    title: "Blue Team",
    icon: <FiShield size={22} />,
    skills: [
      { name: "Threat Detection & Triage", tier: "proficient" },
      { name: "SIEM Monitoring & Alert Tuning", tier: "proficient" },
      { name: "Incident Response Workflows", tier: "proficient" },
      { name: "Log Analysis & Correlation", tier: "intermediate" },
    ],
  },
  {
    id: "offensive",
    title: "Offensive Security",
    icon: <FiTarget size={22} />,
    skills: [
      { name: "Web Application Testing", tier: "intermediate" },
      { name: "Recon & Enumeration", tier: "intermediate" },
      { name: "OWASP & MITRE Mapping", tier: "intermediate" },
      { name: "Safe Lab Simulations", tier: "proficient" },
    ],
  },
  {
    id: "automation",
    title: "Automation & Scripting",
    icon: <FiCpu size={22} />,
    skills: [
      { name: "Python", tier: "proficient" },
      { name: "PowerShell", tier: "intermediate" },
      { name: "Security Task Orchestration", tier: "intermediate" },
      { name: "API Integrations", tier: "intermediate" },
    ],
  },
  {
    id: "tools",
    title: "Security Tools",
    icon: <FiTerminal size={22} />,
    skills: [
      { name: "Kali Linux", tier: "intermediate" },
      { name: "Nmap", tier: "proficient" },
      { name: "Burp Suite", tier: "intermediate" },
      { name: "Wireshark", tier: "intermediate" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Development",
    icon: <FiCode size={22} />,
    skills: [
      { name: "React & JavaScript", tier: "proficient" },
      { name: "HTML & CSS / Tailwind", tier: "proficient" },
      { name: "Git & Version Control", tier: "proficient" },
      { name: "Responsive Web Design", tier: "intermediate" },
    ],
  },
  {
    id: "tooling",
    title: "Infrastructure & Tooling",
    icon: <FiTool size={22} />,
    skills: [
      { name: "Windows Event Logs", tier: "intermediate" },
      { name: "Network Security Tooling", tier: "intermediate" },
      { name: "Threat Intel Dashboards", tier: "intermediate" },
      { name: "Automated Reporting", tier: "intermediate" },
    ],
  },
];

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("blueteam");
  const activeCat = skillCategories.find((c) => c.id === activeCategory);

  return (
    <section className="skills-section" id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Technical Arsenal"
        description="Categorized skill proficiency across cybersecurity, development, and automation domains."
      />

      <div className="skills-layout">
        <ScrollReveal direction="left" className="skills-sidebar">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              className={`skill-category-btn ${activeCategory === cat.id ? "skill-cat-active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="skill-cat-icon">{cat.icon}</span>
              <span className="skill-cat-label">{cat.title}</span>
            </button>
          ))}
        </ScrollReveal>

        <ScrollReveal direction="right" className="skills-detail">
          {activeCat && (
            <div className="skills-detail-inner" key={activeCat.id}>
              <h3 className="skills-detail-title">
                {activeCat.icon}
                <span>{activeCat.title}</span>
              </h3>
              <div className="skills-tier-legend">
                <span className="legend-item">
                  <span className="legend-dots">●●●●●</span> Proficient
                </span>
                <span className="legend-item">
                  <span className="legend-dots legend-mid">●●●</span> Intermediate
                </span>
                <span className="legend-item">
                  <span className="legend-dots legend-low">●●</span> Exploring
                </span>
              </div>
              <div className="skills-bars">
                {activeCat.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    tier={skill.tier}
                  />
                ))}
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>

      {/* Radar Chart */}
      <ScrollReveal className="radar-section">
        <div className="radar-wrapper">
          <div className="radar-info">
            <h3 className="radar-heading">Cyber Security Skill Matrix</h3>
            <p className="radar-copy">
              Entry-level foundational view of cybersecurity capabilities,
              mapping core domains across operations, response, malware
              analysis, testing, exploitation, and red teaming.
            </p>
            <div className="radar-scale">
              <span className="scale-item">
                <span className="scale-dot scale-beginner" />
                Beginner
              </span>
              <span className="scale-item">
                <span className="scale-dot scale-intermediate" />
                Intermediate
              </span>
              <span className="scale-item">
                <span className="scale-dot scale-advanced" />
                Advanced
              </span>
            </div>
          </div>
          <div className="radar-chart" role="img" aria-label="Skill radar chart">
            <RadarChart
              labels={[
                "Security Operations",
                "Incident Response",
                "Malware Analysis",
                "Penetration Testing",
                "Exploitation",
                "Red Teaming",
              ]}
              values={[45, 42, 44, 25, 13, 40]}
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default SkillsSection;
