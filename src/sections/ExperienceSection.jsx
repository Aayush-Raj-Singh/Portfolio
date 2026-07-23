import SectionHeading from "../components/SectionHeading";
import TimelineItem from "../components/TimelineItem";
import { timeline } from "../data/careerProfile";

function ExperienceSection() {
  return (
    <section className="experience-section">
      <SectionHeading
        eyebrow="Journey"
        title="Experience & Growth"
        description="A synchronized view of education, internships, projects, certifications, research, and role targeting."
      />

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
