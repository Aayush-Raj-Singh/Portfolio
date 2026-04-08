import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import GitHubStats from "../components/GitHubStats";
import ScrollReveal from "../components/ScrollReveal";

const projects = [
  {
    title: "KrishiMitra AI",
    description:
      "A FastAPI + React Native AI agriculture platform using AWS Bedrock for intelligent crop recommendations.",
    image: "assets/project-krishimitra.png",
    problem:
      "Farmers lacked localized, data-driven agricultural guidance, relying on generalized advice disconnected from real-time environmental data.",
    action:
      "Built a full-stack AI platform integrating a FastAPI backend, PostgreSQL, and AWS Bedrock to process soil data and generate localized AI farming recommendations.",
    result:
      "Deployed a scalable microservices architecture enabling near real-time intelligent crop insights across web and mobile platforms securely.",
    tags: ["React Native", "FastAPI", "AWS Bedrock", "PostgreSQL"],
    github: "https://github.com/Aayush-Raj-Singh/KRISHI-MITRA-AI",
    live: null
  },
  {
    title: "Crime Hotspot Mapping Tool",
    description:
      "GIS and data visualization dashboard to predict and map critical urban crime hotspots based on incident density.",
    image: "assets/project-crime-hotspot.png",
    problem:
      "Law enforcement struggled to allocate patrol resources effectively without spatial visualization of historical incident frequency.",
    action:
      "Engineered a geospatial mapping tool using Python data science libraries to aggregate incident schemas and render dense predictive heatmaps of city sectors.",
    result:
      "Provided a visual intelligence dashboard that accelerates risk assessment and streamlines rapid response resource allocation for security teams.",
    tags: ["Data Analytics", "GIS Mapping", "Python", "Predictive Intel"],
    github: "https://github.com/Aayush-Raj-Singh/Crime-Hotspot-Mapping-Tool",
    live: null
  },
  {
    title: "Agent-less Windows System Vulnerability Scanner",
    description:
      "Agent-less Windows weakness detector assessing OS, services, and network subsystems without endpoint installation.",
    image: "assets/project-vuln-scanner.png",
    problem:
      "Manual vulnerability assessment across Windows endpoints took 3+ hours per system with high false positive rates and no standardized reporting.",
    action:
      "Built an agent-less Python scanner that remotely correlates live system state against CVE databases, mapping 50+ components automatically without requiring agent installation on endpoints.",
    result:
      "Reduced assessment time by ~60%, eliminated false positives through exploit availability correlation, and generated compliance-aligned reports with risk scoring and remediation guidance.",
    tags: ["Python", "Network Analysis", "CVE Database", "Windows"],
    github: "https://github.com/Aayush-Raj-Singh/AGENT-LESS-WINDOWS-SYSTEM-VULNERABILITY-SCANNER",
  },
  {
    title: "Cyber Threat Intelligence AI System",
    description:
      "ML-powered threat intelligence platform for near real-time cyber incident tracking focused on Indian cyberspace.",
    image: "assets/project-threat-intel.png",
    problem:
      "India's critical infrastructure lacked real-time, localized threat intelligence — existing tools focused on Western threat landscapes, missing regional indicators and attack patterns.",
    action:
      "Developed data aggregation pipelines scraping web forums, paste sites, and social platforms. Built an ML-powered correlation engine to classify and prioritize 200+ threat indicators for CII protection.",
    result:
      "Delivered actionable intelligence for Critical Information Infrastructure protection with near real-time alerting, significantly improving threat awareness for India-specific cyber incidents.",
    tags: ["Machine Learning", "Web Scraping", "Threat Intel", "Pipelines"],
    github: "https://github.com/Aayush-Raj-Singh/CYBER-THREAT-INTELLIGENCE-AI-SYSTEM",
  },
  {
    title: "Cryptographic Algorithm Identifier",
    description:
      "ML classifier identifying modern cryptographic algorithms from encrypted datasets using statistical feature extraction.",
    image: "assets/project-crypto-id.png",
    problem:
      "During forensic analysis, encrypted data samples often lack metadata about the encryption method used, making decryption and analysis extremely time-consuming.",
    action:
      "Created a machine learning classifier leveraging statistical feature extraction and pattern recognition techniques to fingerprint encrypted data and identify the algorithm used (AES, RSA, DES, Blowfish, etc.).",
    result:
      "Achieved high classification accuracy across multiple encryption methods, enabling faster forensic workflows by eliminating manual algorithm identification guesswork.",
    tags: ["AI/ML", "Cryptanalysis", "Pattern Recognition", "Python"],
    github: "https://github.com/Aayush-Raj-Singh/CRYPTOGRAPHIC-ALGORITHM-IDENTIFIER",
  },
  {
    title: "OEM Vulnerability Monitoring Tool",
    description:
      "Automated patch tracking system monitoring security advisories across 10+ OEM portals for IT and OT equipment.",
    image: "assets/project-oem-monitor.png",
    problem:
      "Security teams manually checked 10+ vendor advisory portals daily for new patches — a slow, error-prone process causing critical exposures to go unnoticed for days.",
    action:
      "Built an automated monitoring system that scrapes OEM security advisory portals, classifies severity levels, and deploys real-time alerting for critical and high-severity vulnerabilities.",
    result:
      "Reduced threat awareness latency by ~70% for critical/high-severity exposures, ensuring security teams receive immediate notification of new advisories across all monitored vendors.",
    tags: ["Web Scraping", "Security Advisory", "Automation", "Alerting"],
    github: "https://github.com/Aayush-Raj-Singh/OEM-VULNERABILITY-MONITORING-TOOL",
  },
];

function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured Projects"
        description="Software engineering logic combined with deep cyber defense integrations. Click 'View Case Study' for the Problem → Action → Result breakdown."
      />

      <div className="projects-grid">
        {projects.map((project, i) => (
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
