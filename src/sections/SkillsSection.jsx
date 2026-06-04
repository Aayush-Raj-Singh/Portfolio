import { Suspense, lazy, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import SkillBar from "../components/SkillBar";
import { FiShield, FiCpu, FiTerminal, FiCode, FiTool } from "react-icons/fi";
import { skillCategories as profileSkillCategories } from "../data/careerProfile";

const RadarChart = lazy(() => import("../components/RadarChart"));

const iconMap = {
  cybersecurity: <FiShield size={22} />,
  engineering: <FiCode size={22} />,
  tools: <FiTerminal size={22} />,
  "cloud-devsecops": <FiTool size={22} />,
  "ai-ml": <FiCpu size={22} />,
};

const skillCategories = profileSkillCategories.map((category) => ({
  ...category,
  icon: iconMap[category.id],
}));

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("cybersecurity");
  const activeCat = skillCategories.find((c) => c.id === activeCategory);

  return (
    <section className="skills-section" id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Security Skill Matrix"
        description="Role-aligned skill coverage across SOC operations, VAPT, threat intelligence, security automation, cloud deployment, and AI/ML."
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
                  <span className="legend-dots">5/5</span> Proficient
                </span>
                <span className="legend-item">
                  <span className="legend-dots legend-mid">3/5</span> Intermediate
                </span>
                <span className="legend-item">
                  <span className="legend-dots legend-low">2/5</span> Exploring
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
            <Suspense fallback={<div className="radar-fallback">Loading chart...</div>}>
              <RadarChart
                labels={[
              "Security Operations",
                  "Vulnerability Management",
                  "Threat Intelligence",
                  "Penetration Testing",
                  "Security Automation",
                  "Cloud / DevSecOps",
                ]}
                values={[72, 70, 68, 64, 74, 58]}
              />
            </Suspense>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default SkillsSection;
