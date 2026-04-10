import { useMemo, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import { motion } from "framer-motion";
import {
  FiAward,
  FiBriefcase,
  FiExternalLink,
  FiFolder,
  FiLinkedin,
  FiUsers,
} from "react-icons/fi";

const MotionDiv = motion.div;
const MotionA = motion.a;

const tryHackMeStats = [
  { value: "Top 1%", label: "Global Rank" },
  { value: "Diamond", label: "League" },
  { value: "22", label: "Badges" },
  { value: "232", label: "Rooms" },
  { value: "34K+", label: "Points" },
  { value: "128", label: "Streak Days" },
];

const linkedInHighlights = [
  {
    icon: <FiBriefcase size={16} />,
    label: "Experience",
    value: "Timeline",
  },
  {
    icon: <FiFolder size={16} />,
    label: "Projects",
    value: "Portfolio",
  },
  {
    icon: <FiAward size={16} />,
    label: "Credentials",
    value: "Certs",
  },
  {
    icon: <FiUsers size={16} />,
    label: "Network",
    value: "Connect",
  },
];

const securityTools = [
  { name: "Kali Linux", category: "OS" },
  { name: "Nmap", category: "Scanning" },
  { name: "Burp Suite", category: "Web Testing" },
  { name: "Wireshark", category: "Network" },
  { name: "Metasploit", category: "Exploitation" },
  { name: "Splunk", category: "SIEM" },
  { name: "OWASP ZAP", category: "Web Testing" },
  { name: "Volatility", category: "Forensics" },
];

const certificateGroups = [
  {
    id: "core-security",
    label: "Core Security",
    items: [
      {
        title: "Introduction to Cybersecurity",
        desc: "Cisco foundation course covering threat types, safe computing, and core cyber security concepts.",
        img: "assets/certificates/intro-to-cybersecurity.png",
        href: "assets/certificates/intro-to-cybersecurity.pdf",
        tag: "Cisco",
      },
      {
        title: "Cybersecurity Essentials",
        desc: "Cisco course covering attacker tactics, CIA fundamentals, and common defensive controls.",
        img: "assets/certificates/cybersecurity-essentials.png",
        href: "assets/certificates/cybersecurity-essentials.pdf",
        tag: "Cisco",
      },
      {
        title: "Ethical Hacker",
        desc: "Cisco Networking Academy course on reconnaissance, testing workflow, and responsible reporting.",
        img: "assets/certificates/ethical-hacker-cisco.png",
        href: "assets/certificates/ethical-hacker-cisco.pdf",
        tag: "Cisco",
      },
      {
        title: "Ethical Hacking",
        desc: "12-week NPTEL course completed with a passing score and Elite result.",
        img: "assets/certificates/ethical-hacking-nptel.png",
        href: "assets/certificates/ethical-hacking-nptel.pdf",
        tag: "NPTEL",
      },
      {
        title: "Cisco AICTE Virtual Internship 2024",
        desc: "Structured cybersecurity internship completed through Cisco Networking Academy and AICTE.",
        img: "assets/certificates/cisco-cybersecurity-internship.png",
        href: "assets/certificates/cisco-cybersecurity-internship.pdf",
        tag: "Cisco + AICTE",
      },
      {
        title: "Cyber Security Associate",
        desc: "3-month mentorship program focused on beginner-level cyber security foundations.",
        img: "assets/certificates/pregrad-cyber-security-associate.png",
        href: "assets/certificates/pregrad-cyber-security-associate.pdf",
        tag: "Pregrad",
      },
      {
        title: "Cybersecurity Course",
        desc: "Skill India Digital course completed through Tech Mahindra Foundation.",
        img: "assets/certificates/tech-mahindra-cybersecurity.png",
        href: "assets/certificates/tech-mahindra-cybersecurity.pdf",
        tag: "Skill India",
      },
      {
        title: "Advance Ethical Hacking Bootcamp",
        desc: "Bootcamp participation focused on ethical hacking fundamentals and lab exposure.",
        img: "assets/certificates/advance-ethical-hacking-bootcamp.png",
        href: "assets/certificates/advance-ethical-hacking-bootcamp.pdf",
        tag: "YHills",
      },
      {
        title: "Blockchain and its Applications",
        desc: "NPTEL course covering blockchain fundamentals, consensus, and secure distributed applications.",
        img: "assets/certificates/blockchain-and-its-applications.png",
        href: "assets/certificates/blockchain-and-its-applications.pdf",
        tag: "NPTEL",
      },
    ],
  },
  {
    id: "networking",
    label: "Networking",
    items: [
      {
        title: "Networking Essentials",
        desc: "Core networking fundamentals, protocols, and basic network setup concepts.",
        img: "assets/certificates/networking-essentials.png",
        href: "assets/certificates/networking-essentials.pdf",
        tag: "Cisco",
      },
      {
        title: "Introduction to Packet Tracer",
        desc: "Cisco Packet Tracer workflow and network simulation basics.",
        img: "assets/certificates/packet-tracer.png",
        href: "assets/certificates/packet-tracer.pdf",
        tag: "Cisco",
      },
      {
        title: "Computer Hardware Basics",
        desc: "Endpoint components and troubleshooting basics useful for system assessment.",
        img: "assets/certificates/computer-hardware-basics.png",
        href: "assets/certificates/computer-hardware-basics.pdf",
        tag: "Cisco",
      },
      {
        title: "CCNA: Introduction to Networks",
        desc: "Network addressing, switching, and foundational connectivity concepts.",
        img: "assets/certificates/ccna-introduction-to-networks.png",
        href: "assets/certificates/ccna-introduction-to-networks.pdf",
        tag: "Cisco",
      },
      {
        title: "CCNA: SRWE",
        desc: "Switching, routing, wireless essentials, and troubleshooting practice.",
        img: "assets/certificates/ccna-srwe.png",
        href: "assets/certificates/ccna-srwe.pdf",
        tag: "Cisco",
      },
      {
        title: "CCNA: ENSA",
        desc: "Enterprise networking, automation, and network security concepts.",
        img: "assets/certificates/ccna-ensa.png",
        href: "assets/certificates/ccna-ensa.pdf",
        tag: "Cisco",
      },
    ],
  },
  {
    id: "job-simulations",
    label: "Job Simulations",
    items: [
      {
        title: "TATA Cybersecurity Analyst",
        desc: "IAM fundamentals, strategy assessment, and platform integration tasks completed through Forage.",
        img: "assets/certificates/tata-cybersecurity-analyst.png",
        href: "assets/certificates/tata-cybersecurity-analyst.pdf",
        tag: "Forage",
      },
      {
        title: "Mastercard Cybersecurity Job Simulation",
        desc: "Phishing simulation design and result analysis tasks completed through Forage.",
        img: "assets/certificates/mastercard-cybersecurity-job-simulation.png",
        href: "assets/certificates/mastercard-cybersecurity-job-simulation.pdf",
        tag: "Forage",
      },
      {
        title: "ANZ Cyber Security Management",
        desc: "Social engineering investigation and digital investigation tasks completed through Forage.",
        img: "assets/certificates/anz-cyber-security-management.png",
        href: "assets/certificates/anz-cyber-security-management.pdf",
        tag: "Forage",
      },
    ],
  },
  {
    id: "automation-coding",
    label: "Programming",
    items: [
      {
        title: "Programming Essentials in Python",
        desc: "PCAP-aligned Python fundamentals covering syntax, data structures, and exceptions.",
        img: "assets/certificates/pcap-programming-essentials-in-python.png",
        href: "assets/certificates/pcap-programming-essentials-in-python.pdf",
        tag: "OpenEDG",
      },
      {
        title: "Python Essentials 1",
        desc: "Python syntax, variables, control flow, and foundational scripting skills.",
        img: "assets/certificates/python-essentials-1.png",
        href: "assets/certificates/python-essentials-1.pdf",
        tag: "Cisco",
      },
      {
        title: "Python Essentials 2",
        desc: "Modules, OOP, exceptions, and more advanced Python practice.",
        img: "assets/certificates/python-essentials-2.png",
        href: "assets/certificates/python-essentials-2.pdf",
        tag: "Cisco",
      },
      {
        title: "JavaScript Essentials 1",
        desc: "JavaScript basics relevant to web tooling and frontend security testing contexts.",
        img: "assets/certificates/javascript-essentials-1.png",
        href: "assets/certificates/javascript-essentials-1.pdf",
        tag: "Cisco + OpenEDG",
      },
      {
        title: "C Training",
        desc: "Spoken Tutorial completion certificate for C programming with strong fundamentals in syntax and logic building.",
        img: "assets/certificates/c-training.png",
        href: "assets/certificates/c-training.pdf",
        tag: "IIT Bombay",
      },
      {
        title: "C++ Training",
        desc: "Spoken Tutorial completion certificate covering C++ syntax, control flow, and object-oriented basics.",
        img: "assets/certificates/cpp-training.png",
        href: "assets/certificates/cpp-training.pdf",
        tag: "IIT Bombay",
      },
      {
        title: "HTML Training",
        desc: "Web structure and markup fundamentals that support safer web application testing and analysis.",
        img: "assets/certificates/html-training.png",
        href: "assets/certificates/html-training.pdf",
        tag: "IIT Bombay",
      },
      {
        title: "Foundations of AI",
        desc: "Microsoft and AICTE internship focused on core AI concepts that complement security automation work.",
        img: "assets/certificates/foundations-of-ai.png",
        href: "assets/certificates/foundations-of-ai.pdf",
        tag: "Microsoft + AICTE",
      },
    ],
  },
  {
    id: "workshops",
    label: "Workshops",
    items: [
      {
        title: "Digital Defenders CTF 2023 Masterclass",
        desc: "Assessment completed after the webinar on network analysis and tools.",
        img: "assets/certificates/digital-defenders-ctf-webinar.png",
        href: "assets/certificates/digital-defenders-ctf-webinar.pdf",
        tag: "CySecK",
      },
      {
        title: "HackingFlix Ethical Hacking Workshop",
        desc: "Participation workshop on ethical hacking, cyber security, and digital forensics.",
        img: "assets/certificates/hackingflix-ethical-hacking-workshop.png",
        href: "assets/certificates/hackingflix-ethical-hacking-workshop.pdf",
        tag: "HackingFlix",
      },
    ],
  },
];

const thmBadges = [
  {
    title: "3 Day Streak",
    desc: "Maintained a 3-day learning streak on TryHackMe.",
    img: "https://assets.tryhackme.com/room-badges/aa8accced29d0f7c00473f894db6fc39.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/3-day-streak",
    tag: "TryHackMe",
  },
  {
    title: "OWASP Top 10",
    desc: "Explored the most critical web application risks.",
    img: "https://assets.tryhackme.com/room-badges/26b6041b96419e48bf8f8a76af041daf.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/owasp-10",
    tag: "TryHackMe",
  },
  {
    title: "Web Fundamentals",
    desc: "Built core knowledge of the web and HTTP.",
    img: "https://assets.tryhackme.com/room-badges/e4ae71fdc31532b08e47bf9fc528d66f.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/web-fund",
    tag: "TryHackMe",
  },
  {
    title: "Blue Team",
    desc: "Defensive security fundamentals and monitoring.",
    img: "https://assets.tryhackme.com/room-badges/643f6eee005d6440a74b1e7e9228b462.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/blue",
    tag: "TryHackMe",
  },
  {
    title: "Terminaled",
    desc: "Command-line skills and terminal workflow.",
    img: "https://assets.tryhackme.com/room-badges/d2f3b5bfdb6712f8d4ed09c919bf8d2e.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/terminaled",
    tag: "TryHackMe",
  },
  {
    title: "Security Awareness",
    desc: "Strengthened security awareness and safe practices.",
    img: "https://assets.tryhackme.com/room-badges/5056dd6e19c22ee4fa1b93b38a9ddb2d.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/security-awareness",
    tag: "TryHackMe",
  },
  {
    title: "World Wide Web",
    desc: "Learned how the world wide web works.",
    img: "https://assets.tryhackme.com/room-badges/39cd95cbdedb33abbc80e8937b60989b.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/world-wide-web",
    tag: "TryHackMe",
  },
  {
    title: "Network Fundamentals",
    desc: "Strengthened core networking concepts across ports, protocols, and traffic flow.",
    img: "https://assets.tryhackme.com/room-badges/13a2fd2082253cef3bc77578c43bc953.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/network-fundamentals",
    tag: "TryHackMe",
  },
  {
    title: "Defrosted Five",
    desc: "Advent of Cyber side quest completion.",
    img: "https://assets.tryhackme.com/room-badges/5b6d2c8055f7f769706da17f6e1b6ea0.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/defrostedfive",
    tag: "TryHackMe",
  },
  {
    title: "AOC Side Quest",
    desc: "Advent of Cyber side quest completion.",
    img: "https://assets.tryhackme.com/room-badges/67607bc83178823c0967e0b254866d12.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/aoc5sidequest2",
    tag: "TryHackMe",
  },
  {
    title: "3 Million Legend",
    desc: "Community milestone achievement.",
    img: "https://assets.tryhackme.com/room-badges/3ac6a41c766ab0216284c5f77abe7f5a.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/3-million-legend",
    tag: "TryHackMe",
  },
  {
    title: "Mr Robot",
    desc: "Completed the Mr Robot challenge room and applied practical exploitation steps.",
    img: "https://assets.tryhackme.com/room-badges/dc45865c6c8b994309f772d05645cde1.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/mr-robot",
    tag: "TryHackMe",
  },
  {
    title: "Bronze League",
    desc: "Weekly league placement achievement.",
    img: "https://assets.tryhackme.com/room-badges/9db728a67798c3c7cd1a3e664114e1b0.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/bronze-league",
    tag: "TryHackMe",
  },
  {
    title: "Silver League",
    desc: "Weekly league placement achievement.",
    img: "https://assets.tryhackme.com/room-badges/e53b59a415ebb4f28c2e88bb0de963be.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/silver-league",
    tag: "TryHackMe",
  },
  {
    title: "Diamond League",
    desc: "Reached Diamond League placement through consistent weekly performance.",
    img: "https://assets.tryhackme.com/room-badges/f5f3ee2a55107eecd83699907c61816b.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/diamond-league",
    tag: "TryHackMe",
  },
  {
    title: "7 Day Streak",
    desc: "Maintained a 7-day learning streak.",
    img: "https://assets.tryhackme.com/room-badges/223b29696a3b24b7bec49b0b17f7317b.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/7-day-streak",
    tag: "TryHackMe",
  },
  {
    title: "30 Day Streak",
    desc: "Maintained a 30-day learning streak.",
    img: "https://assets.tryhackme.com/room-badges/664e33274dbb85de160f81681d1768a3.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/30-day-streak",
    tag: "TryHackMe",
  },
  {
    title: "90 Day Streak",
    desc: "Maintained a 90-day learning streak through consistent lab practice.",
    img: "https://assets.tryhackme.com/room-badges/86bc7606714ecdff0b13c1ee900fead8.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/90-day-streak",
    tag: "TryHackMe",
  },
  {
    title: "Advent of Cyber 2024",
    desc: "Completed Advent of Cyber 2024.",
    img: "https://assets.tryhackme.com/room-badges/621d9c31ce4266a2787c9c4561646788.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/adventofcyber2024",
    tag: "TryHackMe",
  },
  {
    title: "Advent of Cyber 2025",
    desc: "Completed Advent of Cyber 2025.",
    img: "https://assets.tryhackme.com/room-badges/309a27aa9da764c07e456b0ac55228b0.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/advent-of-cyber-2025",
    tag: "TryHackMe",
  },
  {
    title: "Session Held",
    desc: "Participated in a TryHackMe live session and community learning event.",
    img: "https://assets.tryhackme.com/room-badges/3e999926f2d09525c8b2327c9238a0ea.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/session-held",
    tag: "TryHackMe",
  },
  {
    title: "Career Ready",
    desc: "Completed a TryHackMe career readiness milestone focused on practical progression.",
    img: "https://assets.tryhackme.com/room-badges/6820d77114bdc2f3e2159cb778465e18.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/careerreadybadge",
    tag: "TryHackMe",
  },
];

const coCurricularActivities = [
  {
    title: "DAKSH 2023 Badminton",
    desc: "Secured 1st position in the badminton event during DAKSH 2023 at Government Engineering College, West Champaran.",
    img: "assets/certificates/co-curricular-daksh-badminton.jpg",
    href: "assets/certificates/co-curricular-daksh-badminton.jpg",
    tag: "Sports",
  },
  {
    title: "DAKSH 2023 Event Appreciation",
    desc: "Received appreciation for contribution and support during the successful completion of the DAKSH 2023 event.",
    img: "assets/certificates/co-curricular-daksh-appreciation.jpg",
    href: "assets/certificates/co-curricular-daksh-appreciation.jpg",
    tag: "College Event",
  },
  {
    title: "Group Discussion Participation",
    desc: "Participated in a group discussion event organized by the Navaachar Club at Government Engineering College, West Champaran.",
    img: "assets/certificates/co-curricular-group-discussion.jpg",
    href: "assets/certificates/co-curricular-group-discussion.jpg",
    tag: "Communication",
  },
  {
    title: "Data Privacy Awareness Quiz",
    desc: "Completed the Data Privacy Awareness Quiz conducted through MyGov and DSCI.",
    img: "assets/certificates/co-curricular-data-privacy-awareness.jpg",
    href: "assets/certificates/co-curricular-data-privacy-awareness.jpg",
    tag: "Awareness",
  },
  {
    title: "Startup India Learning Program",
    desc: "Completed the Startup India learning program certificate tracked through MyGov.",
    img: "assets/certificates/co-curricular-startup-india-learning.png",
    href: "assets/certificates/co-curricular-startup-india-learning.pdf",
    tag: "Entrepreneurship",
  },
];

function CyberLabsSection() {
  const [activeTab, setActiveTab] = useState("core-security");
  const baseUrl = import.meta.env.BASE_URL || "/";

  const groups = useMemo(
    () => [
      ...certificateGroups.map((group) => ({
        ...group,
        count: group.items.length,
      })),
      {
        id: "tryhackme",
        label: "TryHackMe Badges",
        count: thmBadges.length,
        items: thmBadges,
      },
      {
        id: "co-curricular",
        label: "Co-Curricular",
        count: coCurricularActivities.length,
        items: coCurricularActivities,
      },
    ],
    []
  );

  const activeGroup = groups.find((group) => group.id === activeTab) ?? groups[0];

  return (
    <section className="cyberlabs-section" id="cyber-labs">
      <SectionHeading
        eyebrow="Cybersecurity Labs"
        title="Certifications & Badges"
        description="Continuous learning across cyber defense, networking, and hands-on security labs."
      />

      <ScrollReveal>
        <div className="tools-showcase">
          <h3 className="tools-title">Security Arsenal</h3>
          <div className="tools-grid">
            {securityTools.map((tool, i) => (
              <MotionDiv
                key={tool.name}
                className="tool-chip"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <span className="tool-name">{tool.name}</span>
                <span className="tool-category">{tool.category}</span>
              </MotionDiv>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <div className="badge-tabs" role="tablist" aria-label="Certificate groups">
        {groups.map((group) => (
          <button
            key={group.id}
            className={`badge-tab ${activeTab === group.id ? "tab-active" : ""}`}
            onClick={() => setActiveTab(group.id)}
            role="tab"
            aria-selected={activeTab === group.id}
          >
            {group.label} ({group.count}+)
          </button>
        ))}
      </div>

      <p className="badges-helper">
        Curated from the 55+ item archive. Security items appear first, and
        extra co-curricular records are grouped in the final tab.
      </p>

      <div className="badges-grid">
        {activeGroup.items.map((badge, i) => (
          <MotionA
            key={badge.title}
            href={badge.href.startsWith("http") ? badge.href : `${baseUrl}${badge.href}`}
            target="_blank"
            rel="noreferrer"
            className="badge-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="badge-icon-wrap">
              {badge.img ? (
                <img
                  src={badge.img.startsWith("http") ? badge.img : `${baseUrl}${badge.img}`}
                  alt={`${badge.title} preview`}
                  loading="lazy"
                />
              ) : (
                <div className="badge-placeholder" aria-hidden="true">
                  <span className="badge-placeholder-brand">TRYHACKME</span>
                  <span className="badge-placeholder-text">{badge.title}</span>
                </div>
              )}
            </div>
            <div className="badge-info">
              <h4 className="badge-name">{badge.title}</h4>
              <p className="badge-desc-text">{badge.desc}</p>
              <div className="badge-footer">
                <span className="badge-tag-label">{badge.tag}</span>
                <FiExternalLink size={14} />
              </div>
            </div>
          </MotionA>
        ))}
      </div>

      <ScrollReveal>
        <div className="thm-profile">
          <h3 className="thm-profile-title">Profiles</h3>
          <div className="profile-grid">
            <div className="profile-card">
              <div className="profile-card-header">
                <span className="profile-card-kicker">Hands-On Lab Profile</span>
                <h4 className="profile-card-title">TryHackMe</h4>
              </div>
              <div className="profile-card-body">
                <div className="thm-frame">
                  <iframe
                    src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=2484703"
                    title="TryHackMe public profile badge"
                    loading="lazy"
                  />
                </div>
                <div className="profile-stat-grid" aria-label="TryHackMe profile stats">
                  {tryHackMeStats.map((stat) => (
                    <div key={stat.label} className="profile-stat-chip">
                      <span className="profile-stat-value">{stat.value}</span>
                      <span className="profile-stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="https://tryhackme.com/p/Abhayaprabha"
                target="_blank"
                rel="noreferrer"
                className="thm-link"
              >
                <FiExternalLink size={16} />
                View Full TryHackMe Profile
              </a>
            </div>

            <div className="profile-card linkedin-profile-card">
              <div className="profile-card-header">
                <span className="profile-card-kicker">Professional Profile</span>
                <h4 className="profile-card-title">LinkedIn</h4>
              </div>
              <div className="profile-card-body">
                <div className="linkedin-spotlight">
                  <div className="linkedin-brand-row">
                    <span className="linkedin-brand-icon">
                      <FiLinkedin size={20} />
                    </span>
                    <span className="linkedin-brand-label">linkedin.com/in/abhayaprabha</span>
                  </div>
                  <div className="linkedin-identity-block">
                    <h5 className="linkedin-name">Aayush Raj</h5>
                    <span className="linkedin-handle">@abhayaprabha</span>
                  </div>
                  <div className="linkedin-feature-grid" aria-label="LinkedIn profile contents">
                    {linkedInHighlights.map((item) => (
                      <div key={item.label} className="linkedin-feature-card">
                        <span className="linkedin-feature-icon">{item.icon}</span>
                        <div className="linkedin-feature-copy">
                          <span className="linkedin-feature-label">{item.label}</span>
                          <span className="linkedin-feature-value">{item.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <a
                href="https://in.linkedin.com/in/abhayaprabha?trk=profile-badge"
                target="_blank"
                rel="noreferrer"
                className="thm-link profile-link-linkedin"
              >
                <FiExternalLink size={16} />
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default CyberLabsSection;
