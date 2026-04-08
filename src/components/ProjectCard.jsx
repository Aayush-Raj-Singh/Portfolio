import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronDown, FiTarget, FiTool, FiTrendingUp } from "react-icons/fi";

function ProjectCard({ project, index = 0 }) {
  const [expanded, setExpanded] = useState(false);
  const baseUrl = import.meta.env.BASE_URL || "/";

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Project Screenshot */}
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
          <div className="project-card-icon">
            <FiGithub size={24} />
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
                <FiGithub size={20} />
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
                <FiExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>

        {/* PAR Case Study - Expandable */}
        <button
          className={`case-study-toggle ${expanded ? "case-study-open" : ""}`}
          onClick={() => setExpanded(!expanded)}
        >
          <span>View Case Study</span>
          <FiChevronDown size={16} />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              className="case-study-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="case-study-inner">
                {project.problem && (
                  <div className="par-item">
                    <div className="par-icon par-problem">
                      <FiTarget size={16} />
                    </div>
                    <div>
                      <span className="par-label">Problem</span>
                      <p className="par-text">{project.problem}</p>
                    </div>
                  </div>
                )}
                {project.action && (
                  <div className="par-item">
                    <div className="par-icon par-action">
                      <FiTool size={16} />
                    </div>
                    <div>
                      <span className="par-label">Action</span>
                      <p className="par-text">{project.action}</p>
                    </div>
                  </div>
                )}
                {project.result && (
                  <div className="par-item">
                    <div className="par-icon par-result">
                      <FiTrendingUp size={16} />
                    </div>
                    <div>
                      <span className="par-label">Result</span>
                      <p className="par-text">{project.result}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
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
    </motion.article>
  );
}

export default ProjectCard;
