import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const ciscoBadges = [
  {
    title: "Python Essentials 1",
    desc: "Python basics, syntax, and core programming concepts.",
    img: "https://images.credly.com/size/680x680/images/19e742ef-13be-4d26-87ed-ac8f5fd0643c/image.png",
    href: "https://www.credly.com/org/cisco/badge/python-essentials-1.1",
    tag: "Cisco",
  },
  {
    title: "Python Essentials 2",
    desc: "Intermediate Python: OOP, files, exceptions, modules.",
    img: "https://images.credly.com/size/680x680/images/3f802526-7274-4230-91ab-f6d1a35340e6/image.png",
    href: "https://www.credly.com/org/cisco/badge/python-essentials-2",
    tag: "Cisco",
  },
  {
    title: "Ethical Hacker",
    desc: "Ethical hacking workflow: scope, test, report, mitigate.",
    img: "https://images.credly.com/size/680x680/images/242902b5-f527-42ad-865e-977c9e1b5b58/image.png",
    href: "https://www.credly.com/org/cisco/badge/ethical-hacker",
    tag: "Cisco",
  },
  {
    title: "CCNA: Introduction to Networks",
    desc: "Network fundamentals, IP addressing, and connectivity.",
    img: "https://images.credly.com/size/680x680/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png",
    href: "https://www.credly.com/org/cisco/badge/ccna-introduction-to-networks",
    tag: "Cisco",
  },
  {
    title: "CCNA: SRWE",
    desc: "Switching, routing, WLANs, and troubleshooting.",
    img: "https://images.credly.com/size/680x680/images/f4ccdba9-dd65-4349-baad-8f05df116443/CCNASRWE__1_.png",
    href: "https://pacybersecurity.org/cisco-ccna-switching-routing-and-wireless-essentials/",
    tag: "Cisco",
  },
  {
    title: "CCNA: ENSA",
    desc: "Enterprise networking, security, and automation.",
    img: "https://images.credly.com/size/680x680/images/0a6d331e-8abf-4272-a949-33f754569a76/CCNAENSA__1_.png",
    href: "https://www.credly.com/org/cisco/badge/ccna-enterprise-networking-security-and-automation",
    tag: "Cisco",
  },
  {
    title: "Computer Hardware Basics",
    desc: "Hardware basics, components, repair, and troubleshooting.",
    img: "https://images.credly.com/size/680x680/images/68c0b94d-f6ac-40b1-a0e0-921439eb092e/image.png",
    href: "https://www.credly.com/org/cisco/badge/computer-hardware-basics",
    tag: "Cisco",
  },
];

const thmBadges = [
  {
    title: "OWASP Top 10",
    desc: "Explored the most critical web application risks.",
    img: "https://assets.tryhackme.com/room-badges/26b6041b96419e48bf8f8a76af041daf.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/owasp-10",
    tag: "Achievement",
  },
  {
    title: "Web Fundamentals",
    desc: "Built core knowledge of the web and HTTP.",
    img: "https://assets.tryhackme.com/room-badges/e4ae71fdc31532b08e47bf9fc528d66f.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/web-fund",
    tag: "Achievement",
  },
  {
    title: "Blue Team",
    desc: "Defensive security fundamentals and monitoring.",
    img: "https://assets.tryhackme.com/room-badges/643f6eee005d6440a74b1e7e9228b462.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/blue",
    tag: "Achievement",
  },
  {
    title: "Terminaled",
    desc: "Command-line skills and terminal workflow.",
    img: "https://assets.tryhackme.com/room-badges/d2f3b5bfdb6712f8d4ed09c919bf8d2e.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/terminaled",
    tag: "Achievement",
  },
  {
    title: "Security Awareness",
    desc: "Strengthened security awareness and safe practices.",
    img: "https://assets.tryhackme.com/room-badges/5056dd6e19c22ee4fa1b93b38a9ddb2d.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/security-awareness",
    tag: "Achievement",
  },
  {
    title: "World Wide Web",
    desc: "Learned how the world wide web works.",
    img: "https://assets.tryhackme.com/room-badges/39cd95cbdedb33abbc80e8937b60989b.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/world-wide-web",
    tag: "Achievement",
  },
  {
    title: "Defrosted Five",
    desc: "Advent of Cyber side quest completion.",
    img: "https://assets.tryhackme.com/room-badges/5b6d2c8055f7f769706da17f6e1b6ea0.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/defrostedfive",
    tag: "Event",
  },
  {
    title: "AOC Side Quest",
    desc: "Advent of Cyber side quest completion.",
    img: "https://assets.tryhackme.com/room-badges/67607bc83178823c0967e0b254866d12.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/aoc5sidequest2",
    tag: "Event",
  },
  {
    title: "3 Million Legend",
    desc: "Community milestone achievement.",
    img: "https://assets.tryhackme.com/room-badges/3ac6a41c766ab0216284c5f77abe7f5a.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/3-million-legend",
    tag: "Milestone",
  },
  {
    title: "Bronze League",
    desc: "Weekly league placement achievement.",
    img: "https://assets.tryhackme.com/room-badges/9db728a67798c3c7cd1a3e664114e1b0.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/bronze-league",
    tag: "League",
  },
  {
    title: "Silver League",
    desc: "Weekly league placement achievement.",
    img: "https://assets.tryhackme.com/room-badges/e53b59a415ebb4f28c2e88bb0de963be.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/silver-league",
    tag: "League",
  },
  {
    title: "7 Day Streak",
    desc: "Maintained a 7-day learning streak.",
    img: "https://assets.tryhackme.com/room-badges/223b29696a3b24b7bec49b0b17f7317b.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/7-day-streak",
    tag: "Streak",
  },
  {
    title: "30 Day Streak",
    desc: "Maintained a 30-day learning streak.",
    img: "https://assets.tryhackme.com/room-badges/664e33274dbb85de160f81681d1768a3.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/30-day-streak",
    tag: "Streak",
  },
  {
    title: "Advent of Cyber 2024",
    desc: "Completed Advent of Cyber 2024.",
    img: "https://assets.tryhackme.com/room-badges/621d9c31ce4266a2787c9c4561646788.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/adventofcyber2024",
    tag: "Event",
  },
  {
    title: "Advent of Cyber 2025",
    desc: "Completed Advent of Cyber 2025.",
    img: "https://assets.tryhackme.com/room-badges/309a27aa9da764c07e456b0ac55228b0.png",
    href: "https://tryhackme.com/Abhayaprabha/badges/advent-of-cyber-2025",
    tag: "Event",
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

function CyberLabsSection() {
  const [activeTab, setActiveTab] = useState("cisco");

  const badges = activeTab === "cisco" ? ciscoBadges : thmBadges;

  return (
    <section className="cyberlabs-section" id="cyber-labs">
      <SectionHeading
        eyebrow="Cybersecurity Labs"
        title="Certifications & Badges"
        description="Continuous learning across cyber defense, networking, and hands-on security labs."
      />

      {/* Security Tools */}
      <ScrollReveal>
        <div className="tools-showcase">
          <h3 className="tools-title">Security Arsenal</h3>
          <div className="tools-grid">
            {securityTools.map((tool, i) => (
              <motion.div
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
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Badge Tabs */}
      <div className="badge-tabs">
        <button
          className={`badge-tab ${activeTab === "cisco" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("cisco")}
        >
          Cisco Certifications ({ciscoBadges.length})
        </button>
        <button
          className={`badge-tab ${activeTab === "thm" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("thm")}
        >
          TryHackMe Badges ({thmBadges.length})
        </button>
      </div>

      {/* Badge Grid */}
      <div className="badges-grid">
        {badges.map((badge, i) => (
          <motion.a
            key={badge.title}
            href={badge.href}
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
              <img src={badge.img} alt={`${badge.title} badge`} loading="lazy" />
            </div>
            <div className="badge-info">
              <h4 className="badge-name">{badge.title}</h4>
              <p className="badge-desc-text">{badge.desc}</p>
              <div className="badge-footer">
                <span className="badge-tag-label">{badge.tag}</span>
                <FiExternalLink size={14} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* TryHackMe Profile Embed */}
      <ScrollReveal>
        <div className="thm-profile">
          <h3 className="thm-profile-title">TryHackMe Profile</h3>
          <div className="thm-frame">
            <iframe
              src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=2484703"
              title="TryHackMe public profile badge"
              loading="lazy"
            />
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
      </ScrollReveal>
    </section>
  );
}

export default CyberLabsSection;
