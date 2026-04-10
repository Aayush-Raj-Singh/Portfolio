import { motion } from "framer-motion";

const MotionSpan = motion.span;

const tierLevels = {
  proficient: { dots: 5, label: "Proficient", color: "var(--accent-primary)" },
  intermediate: { dots: 3, label: "Intermediate", color: "var(--accent-orange)" },
  exploring: { dots: 2, label: "Exploring", color: "var(--accent-secondary)" },
};

function SkillBar({ name, tier = "intermediate", icon }) {
  const config = tierLevels[tier] || tierLevels.intermediate;
  const totalDots = 5;

  return (
    <div className="skill-tier-item">
      <div className="skill-tier-header">
        {icon && <span className="skill-tier-icon">{icon}</span>}
        <span className="skill-tier-name">{name}</span>
        <span className="skill-tier-label" style={{ color: config.color }}>
          {config.label}
        </span>
      </div>
      <div className="skill-tier-dots">
        {Array.from({ length: totalDots }, (_, i) => (
          <MotionSpan
            key={i}
            className={`tier-dot ${i < config.dots ? "tier-dot-filled" : ""}`}
            style={i < config.dots ? { background: config.color, boxShadow: `0 0 8px ${config.color}` } : {}}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillBar;
