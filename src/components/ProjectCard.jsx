import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiChevronDown,
  FiTarget,
  FiTool,
  FiTrendingUp,
  FiLayers,
  FiAlertTriangle,
  FiShield,
} from "react-icons/fi";

const MotionArticle = motion.article;
const MotionDiv = motion.div;

function ProjectCard({ project, index = 0 }) {
  const [expanded, setExpanded] = useState(false);
  const baseUrl = import.meta.env.BASE_URL || "/";
  const caseStudyItems = [
    { label: "Problem", text: project.problem, icon: <FiTarget size={16} />, className: "par-problem" },
    { label: "Approach", text: project.approach ?? project.action, icon: <FiTool size={16} />, className: "par-action" },
    { label: "Technology", text: project.technology, icon: <FiLayers size={16} />, className: "par-action" },
    { label: "Architecture", text: project.architecture, icon: <FiLayers size={16} />, className: "par-action" },
    { label: "Challenges", text: project.challenges, icon: <FiAlertTriangle size={16} />, className: "par-problem" },
    { label: "Security Considerations", text: project.securityConsiderations, icon: <FiShield size={16} />, className: "par-result" },
    { label: "Results", text: project.result, icon: <FiTrendingUp size={16} />, className: "par-result" },
  ].filter((item) => item.text);

  return (
    <MotionArticle
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {project.image && (
        <div className="project-card-image">
          <img
            src={`${baseUrl}${project.image}`}
            alt={`${project.title} preview`}
            loading="lazy"
          />
          <div className="project-card-image-overlay" />
        </div>
      )}

      <div className="project-card-content">
        <div className="project-card-header">
          <div className="project-card-heading">
            {project.badge && (
              <span className="project-card-badge">{project.badge}</span>
            )}
            <h3 className="project-card-title">{project.title}</h3>
          </div>

          <div className="project-card-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="project-link"
              >
                <FiGithub size={16} />
                <span>GitHub</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live demo`}
                className="project-link"
              >
                <FiExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        <p className="project-card-desc">{project.description}</p>

        {project.impact && (
          <div className="project-impact-strip">
            <span className="project-impact-label">Impact</span>
            <p className="project-impact-copy">{project.impact}</p>
          </div>
        )}

        <button
          type="button"
          className={`case-study-toggle ${expanded ? "case-study-open" : ""}`}
          onClick={() => setExpanded((open) => !open)}
        >
          <span>View Case Study</span>
          <FiChevronDown size={16} />
        </button>

        <AnimatePresence>
          {expanded && (
            <MotionDiv
              className="case-study-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="case-study-inner">
                {caseStudyItems.map((item) => (
                  <div className="par-item" key={item.label}>
                    <div className={`par-icon ${item.className}`}>{item.icon}</div>
                    <div>
                      <span className="par-label">{item.label}</span>
                      <p className="par-text">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>

        <div className="project-card-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </MotionArticle>
  );
}

export default ProjectCard;
