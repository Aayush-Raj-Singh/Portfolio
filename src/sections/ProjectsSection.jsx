import { useMemo, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import GitHubStats from "../components/GitHubStats";
import ScrollReveal from "../components/ScrollReveal";
import { projects } from "../data/careerProfile";

function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    []
  );

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="projects-section" id="projects">
      <SectionHeading
        eyebrow="Portfolio"
        title="Security Project Case Studies"
        description="Recruiter-ready project stories covering problem, approach, technology, architecture, challenges, security considerations, results, and GitHub references."
      />

      <div className="project-filter-bar" role="tablist" aria-label="Project filters">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`project-filter-btn ${
              activeFilter === filter ? "project-filter-active" : ""
            }`}
            onClick={() => setActiveFilter(filter)}
            role="tab"
            aria-selected={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visibleProjects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="github-section">
          <GitHubStats username="Aayush-Raj-Singh" />
        </div>
      </ScrollReveal>
    </section>
  );
}

export default ProjectsSection;
