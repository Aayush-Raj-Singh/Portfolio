import { useMemo, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import GitHubStats from "../components/GitHubStats";
import ScrollReveal from "../components/ScrollReveal";

const projects = [
  {
    title: "KrishiMitra AI",
    category: "Applied AI",
    badge: "Applied AI",
    description:
      "A FastAPI and React Native agriculture platform using AWS Bedrock for localized crop recommendations.",
    image: "assets/project-krishimitra.png",
    impact:
      "Brings mobile, backend, and AI-assisted crop guidance into one usable workflow.",
    problem:
      "Farmers often rely on generic advice that does not reflect local conditions or recent field data.",
    action:
      "Built a full-stack platform with FastAPI, PostgreSQL, and AWS Bedrock to process inputs and return localized recommendations.",
    result:
      "Delivered a usable AI workflow for crop guidance across web and mobile surfaces.",
    tags: ["React Native", "FastAPI", "AWS Bedrock", "PostgreSQL"],
    github: "https://github.com/Aayush-Raj-Singh/KRISHI-MITRA-AI",
    live: null,
  },
  {
    title: "Crime Hotspot Mapping Tool",
    category: "Analytics",
    badge: "Analytics",
    description:
      "GIS-based incident mapping tool for spotting urban crime hotspots from historical records.",
    image: "assets/project-crime-hotspot.png",
    impact:
      "Turns raw incident records into a map-first view for faster prioritization.",
    problem:
      "Without spatial visualization, it is harder to see where incidents cluster and where response effort should go first.",
    action:
      "Used Python data workflows and GIS mapping to process incidents and render hotspot visualizations.",
    result:
      "Made dense crime data easier to interpret during planning and operational review.",
    tags: ["Data Analytics", "GIS Mapping", "Python", "Predictive Intel"],
    github: "https://github.com/Aayush-Raj-Singh/CRIME-HOTSPOT-MAPPING-PROJECT",
    live: null,
  },
  {
    title: "Agent-less Windows System Vulnerability Scanner",
    category: "Security Automation",
    badge: "Security Automation",
    description:
      "Agent-less Windows scanner that checks OS, services, and network exposure without endpoint installation.",
    image: "assets/project-vuln-scanner.png",
    impact:
      "Cuts endpoint assessment time by about 60% while keeping findings report-ready.",
    problem:
      "Manual Windows assessments are slow, inconsistent, and difficult to scale across many endpoints.",
    action:
      "Built a Python scanner that correlates live system data with CVE references and generates structured findings.",
    result:
      "Reduced repetitive assessment effort and improved the consistency of reporting.",
    tags: ["Python", "Network Analysis", "CVE Database", "Windows"],
    github:
      "https://github.com/Aayush-Raj-Singh/AGENT-LESS-WINDOWS-SYSTEM-VULNERABILITY-SCANNER",
    live: null,
  },
  {
    title: "Cyber Threat Intelligence AI System",
    category: "Threat Intel",
    badge: "Threat Intel",
    description:
      "Threat-intelligence pipeline for tracking cyber incidents and indicators with an India-focused lens.",
    image: "assets/project-threat-intel.png",
    impact:
      "Surfaces India-focused indicators faster than relying only on generic threat feeds.",
    problem:
      "Regional threat context is often underrepresented in generic intelligence workflows.",
    action:
      "Built collection and classification pipelines across public sources, then prioritized indicators with ML-assisted processing.",
    result:
      "Produced a workflow for monitoring region-specific cyber activity in near real time.",
    tags: ["Machine Learning", "Web Scraping", "Threat Intel", "Pipelines"],
    github:
      "https://github.com/Aayush-Raj-Singh/CYBER-THREAT-INTELLIGENCE-AI-SYSTEM",
    live: null,
  },
  {
    title: "Cryptographic Algorithm Identifier",
    category: "Applied AI",
    badge: "Applied AI",
    description:
      "Machine learning classifier for identifying likely cryptographic algorithms from encrypted data samples.",
    image: "assets/project-crypto-id.png",
    impact:
      "Helps forensic triage by narrowing the likely encryption family early.",
    problem:
      "Encrypted samples often arrive without useful metadata, which slows down forensic analysis.",
    action:
      "Used statistical feature extraction and machine learning to classify likely algorithms from ciphertext characteristics.",
    result:
      "Improved early-stage analysis by reducing manual guesswork during algorithm identification.",
    tags: ["AI/ML", "Cryptanalysis", "Pattern Recognition", "Python"],
    github:
      "https://github.com/Aayush-Raj-Singh/CRYPTOGRAPHIC-ALGORITHM-IDENTIFIER",
    live: null,
  },
  {
    title: "OEM Vulnerability Monitoring Tool",
    category: "Security Automation",
    badge: "Security Automation",
    description:
      "Automated tracker for security advisories across OEM portals used in IT and OT environments.",
    image: "assets/project-oem-monitor.png",
    impact:
      "Reduces patch-monitoring lag by roughly 70% across monitored vendor sources.",
    problem:
      "Manually checking many OEM advisory portals creates delay and increases the chance of missing critical updates.",
    action:
      "Built an automation workflow to monitor vendor advisories, classify severity, and flag important updates quickly.",
    result:
      "Improved visibility into newly published advisories and reduced manual monitoring effort.",
    tags: ["Web Scraping", "Security Advisory", "Automation", "Alerting"],
    github:
      "https://github.com/Aayush-Raj-Singh/OEM-VULNERABILITY-MONITORING-TOOL",
    live: null,
  },
];

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
        title="Featured Projects"
        description="Security projects across automation, applied AI, analytics, and threat intelligence. Open each case study for the problem, build approach, and result."
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
