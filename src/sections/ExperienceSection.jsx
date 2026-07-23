import SectionHeading from "../components/SectionHeading";
import TimelineItem from "../components/TimelineItem";
import ScrollReveal from "../components/ScrollReveal";
import { FiBriefcase, FiCalendar, FiMapPin, FiAward, FiCheckCircle } from "react-icons/fi";
import { experiences, timeline } from "../data/careerProfile";

function ExperienceSection() {
  return (
    <section className="experience-section">
      <SectionHeading
        eyebrow="Experience"
        title="Professional Experience & Training"
        description="Hands-on industry training, state government skill programs, certifications, and technical growth."
      />

      {experiences && experiences.length > 0 && (
        <div className="featured-experiences-grid">
          {experiences.map((exp) => (
            <ScrollReveal key={exp.title} className="experience-card">
              <div className="experience-card-header">
                <div>
                  <div className="experience-badge-wrap">
                    <span className="experience-badge">
                      <FiAward size={14} />
                      <span>{exp.badge}</span>
                    </span>
                    <span className="experience-period">
                      <FiCalendar size={14} />
                      <span>{exp.period}</span>
                    </span>
                  </div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-org">
                    <FiBriefcase size={15} />
                    <span>{exp.organization}</span>
                  </p>
                </div>
                <div className="experience-location">
                  <FiMapPin size={14} />
                  <span>{exp.location}</span>
                </div>
              </div>

              <ul className="experience-highlights">
                {exp.highlights.map((point) => (
                  <li key={point} className="experience-highlight-item">
                    <FiCheckCircle className="highlight-icon" size={16} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {exp.tags && (
                <div className="experience-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="experience-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>
      )}

      <div className="experience-timeline-divider">
        <h4 className="timeline-section-title">Career Milestones & Growth</h4>
      </div>

      <div className="timeline">
        <div className="timeline-line" />
        {timeline.map((item, i) => (
          <TimelineItem key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
