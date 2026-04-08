import SectionHeading from "../components/SectionHeading";
import TimelineItem from "../components/TimelineItem";

const timelineData = [
  {
    date: "2022",
    title: "Started B.Tech CSE Cyber Security",
    description:
      "Began formal education in computer science with a specialization in cybersecurity. Started building foundations in networking, operating systems, and programming.",
    badge: "Education",
  },
  {
    date: "2023",
    title: "Cisco CCNA Certifications",
    description:
      "Completed CCNA: Introduction to Networks, Switching, Routing & Wireless Essentials, and Enterprise Networking, Security & Automation certifications.",
    badge: "Certification",
  },
  {
    date: "2023",
    title: "TryHackMe Journey Begins",
    description:
      "Started hands-on cybersecurity labs on TryHackMe. Earned OWASP Top 10, Blue Team, Web Fundamentals, and Security Awareness badges.",
    badge: "Lab Work",
  },
  {
    date: "2024",
    title: "OEM Vulnerability Monitoring Tool",
    description:
      "Built an automated patch tracking system monitoring security advisories across 10+ OEM portals, reducing threat awareness latency by ~70%.",
    badge: "Project",
  },
  {
    date: "2024",
    title: "Advent of Cyber 2024",
    description:
      "Completed TryHackMe's Advent of Cyber 2024 event, including side quests. Earned multiple event badges and maintained learning streaks.",
    badge: "Event",
  },
  {
    date: "2025",
    title: "Cyber Threat Intelligence AI System",
    description:
      "Developed an ML-powered threat intelligence platform focused on Indian cyberspace, processing 200+ threat indicators from diverse sources.",
    badge: "Project",
  },
  {
    date: "2025",
    title: "Cryptographic Algorithm Identifier",
    description:
      "Created an ML classifier to identify cryptographic algorithms from encrypted datasets using statistical feature extraction and pattern recognition.",
    badge: "Project",
  },
  {
    date: "2026",
    title: "Agent-less Windows Vulnerability Scanner",
    description:
      "Engineered an agent-less vulnerability scanner assessing 50+ Windows components with CVE mapping, risk scoring, and remediation guidance.",
    badge: "Project",
  },
  {
    date: "2026",
    title: "Seeking Entry-Level Security Roles",
    description:
      "Final year of B.Tech. Actively seeking internships and entry-level positions in SOC operations, blue team defense, and security automation.",
    badge: "Career",
  },
];

function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <SectionHeading
        eyebrow="Journey"
        title="Experience & Growth"
        description="My cybersecurity learning timeline — from education to real-world projects and certifications."
      />

      <div className="timeline">
        <div className="timeline-line" />
        {timelineData.map((item, i) => (
          <TimelineItem key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
