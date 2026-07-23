export const identity = {
  name: "Aayush Raj",
  title: "Cybersecurity Analyst",
  headline: "Cybersecurity Analyst | SOC | VAPT | Threat Intelligence",
  location: "Bengaluru, Karnataka, India",
  email: "aayush15raj0@gmail.com",
  linkedin: "https://linkedin.com/in/abhayaprabha",
  linkedinLabel: "linkedin.com/in/abhayaprabha",
  github: "https://github.com/Aayush-Raj-Singh",
  githubLabel: "github.com/Aayush-Raj-Singh",
  portfolio: "https://aayush-raj-singh.github.io/Portfolio/",
  portfolioLabel: "aayush-raj-singh.github.io/Portfolio",
  tryHackMe: "https://tryhackme.com/p/Abhayaprabha",
  tryHackMeLabel: "tryhackme.com/p/Abhayaprabha",
  resumeAsset: "assets/Aayush_Raj_Cyber_Security_Resume.pdf",
};

export const targetRoles = [
  "Cybersecurity Analyst",
  "SOC Analyst",
  "VAPT Analyst",
  "Threat Intelligence Analyst",
  "Security Automation Builder",
];

export const profileSummary =
  "Cybersecurity graduate with hands-on internship experience in SOC operations, vulnerability assessment, and penetration testing. I build practical security platforms for threat intelligence, CVE correlation, OEM advisory monitoring, Windows posture assessment, and analyst-ready reporting using Python, FastAPI, React, Docker, PostgreSQL, and machine learning.";

export const proofHighlights = [
  {
    value: "ISC2 CC",
    label: "Certified in Cybersecurity",
    detail: "Foundation in defensive security, risk, access control, and analyst workflows.",
  },
  {
    value: "Top 1%",
    label: "TryHackMe Rank",
    detail: "Hands-on labs across web security, network security, privilege escalation, VAPT, and SOC operations.",
  },
  {
    value: "40+",
    label: "High-Risk Weaknesses Found",
    detail: "Identified during internship-led risk assessment and remediation prioritization work.",
  },
  {
    value: "5+",
    label: "Security Platforms Built",
    detail: "Projects spanning CTI, vulnerability monitoring, Windows assessment, cryptographic analysis, and geospatial intelligence.",
  },
];

export const skillCategories = [
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    skills: [
      { name: "SOC Operations and Alert Triage", tier: "proficient" },
      { name: "Vulnerability Assessment and VAPT", tier: "proficient" },
      { name: "Threat Intelligence and OSINT", tier: "proficient" },
      { name: "Incident Response Workflows", tier: "intermediate" },
      { name: "MITRE ATT&CK and OWASP Mapping", tier: "intermediate" },
    ],
  },
  {
    id: "engineering",
    title: "Engineering",
    skills: [
      { name: "Python Security Automation", tier: "proficient" },
      { name: "FastAPI and REST APIs", tier: "proficient" },
      { name: "React.js and Frontend Dashboards", tier: "proficient" },
      { name: "Docker and Deployment Workflows", tier: "intermediate" },
      { name: "RBAC and Report Workflows", tier: "intermediate" },
    ],
  },
  {
    id: "tools",
    title: "Tools and Platforms",
    skills: [
      { name: "Nmap and Network Scanning", tier: "proficient" },
      { name: "Burp Suite and OWASP ZAP", tier: "intermediate" },
      { name: "Wireshark Traffic Analysis", tier: "intermediate" },
      { name: "Metasploit and Kali Linux", tier: "intermediate" },
      { name: "Splunk and SIEM Concepts", tier: "intermediate" },
    ],
  },
  {
    id: "cloud-devsecops",
    title: "Cloud and DevSecOps",
    skills: [
      { name: "Dockerized Security Services", tier: "intermediate" },
      { name: "Cloud Run and Cloudflare Pages", tier: "intermediate" },
      { name: "Secure API Deployment", tier: "intermediate" },
      { name: "Secrets and Environment Configuration", tier: "intermediate" },
      { name: "CI/CD and Static Build Checks", tier: "exploring" },
    ],
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    skills: [
      { name: "Threat Scoring and Clustering", tier: "intermediate" },
      { name: "Entropy and Feature Engineering", tier: "intermediate" },
      { name: "Random Forest Classification", tier: "intermediate" },
      { name: "BiLSTM Classification", tier: "intermediate" },
      { name: "NLP for Security Workflows", tier: "exploring" },
    ],
  },
];

export const projects = [
  {
    title: "Cyber Threat Intelligence AI System",
    category: "Threat Intelligence",
    badge: "Flagship Security",
    description:
      "Production-style CTI platform for threat ingestion, IOC extraction, correlation, scoring, clustering, and analyst dashboards.",
    image: "assets/project-threat-intel.png",
    impact:
      "Turns scattered OSINT and API-driven signals into structured intelligence artifacts for SOC-style analysis.",
    problem:
      "Security teams need faster ways to convert public threat signals into usable indicators, severity context, and investigation artifacts.",
    approach:
      "Built ingestion, normalization, IOC extraction, ML-assisted scoring, clustering, and dashboard workflows around analyst use cases.",
    technology:
      "Python, FastAPI, React.js, SQLite, Docker, machine learning, OSINT feeds, REST APIs.",
    architecture:
      "API-first backend for ingestion and enrichment, React dashboard for analyst review, structured JSON artifacts for repeatable investigation output.",
    challenges:
      "Normalizing noisy external sources, keeping scoring explainable, and presenting security context without overwhelming the analyst.",
    securityConsiderations:
      "Focuses on IOC handling, severity classification, source transparency, and safe artifact generation for defensive workflows.",
    result:
      "Delivered a recruiter-ready CTI workflow covering IOC extraction, threat analytics, scoring, clustering, and reportable evidence.",
    tags: ["Python", "FastAPI", "React.js", "SQLite", "Docker", "Machine Learning"],
    github: "https://github.com/Aayush-Raj-Singh/CYBER-THREAT-INTELLIGENCE-AI-SYSTEM",
    live: null,
    featured: true,
  },
  {
    title: "Agent-less Windows Vulnerability Scanner",
    category: "Vulnerability Management",
    badge: "Flagship Security",
    description:
      "Agent-less Windows security assessment platform for CVE correlation, posture analysis, compliance checks, and reporting.",
    image: "assets/project-vuln-scanner.png",
    impact:
      "Reduces repetitive assessment effort by about 60% through automated telemetry collection and report generation.",
    problem:
      "Manual Windows assessments are slow, inconsistent, and difficult to scale without installing endpoint agents.",
    approach:
      "Collected Windows-native telemetry remotely, correlated findings with CVE context, and generated structured reports for analyst review.",
    technology:
      "Python, FastAPI, React.js, PowerShell, WinRM, Docker, SQLite, CVE references.",
    architecture:
      "FastAPI service coordinates scan workflows, PowerShell/WinRM handles remote-safe collection, and React presents assets, risks, and reports.",
    challenges:
      "Keeping scans remote-safe, avoiding endpoint installation, preserving report state, and presenting results in multiple export formats.",
    securityConsiderations:
      "Includes RBAC authentication, report metadata, audit-friendly outputs, and separation between scan orchestration and analyst review.",
    result:
      "Implemented asset inventory, posture checks, CVE mapping, trend views, run-now scheduling, and JSON/CSV/HTML/PDF reporting.",
    tags: ["Python", "FastAPI", "React.js", "PowerShell", "WinRM", "Docker"],
    github:
      "https://github.com/Aayush-Raj-Singh/AGENT-LESS-WINDOWS-SYSTEM-VULNERABILITY-SCANNER",
    live: null,
    featured: true,
  },
  {
    title: "OEM Vulnerability Monitoring Tool",
    category: "Vulnerability Intelligence",
    badge: "Flagship Security",
    description:
      "Enterprise-style advisory monitoring platform for OEM security updates across IT and OT ecosystems.",
    image: "assets/project-oem-monitor.png",
    impact:
      "Reduces manual advisory monitoring effort by roughly 70% across monitored vendor sources.",
    problem:
      "Manually checking OEM security advisories creates lag and increases the chance of missing high-priority exposures.",
    approach:
      "Built automated advisory ingestion, exploit-aware enrichment, severity grouping, alerting, and dashboard/report workflows.",
    technology:
      "Python, FastAPI, React.js, PostgreSQL, Docker, CVSS, EPSS, KEV, exploit intelligence.",
    architecture:
      "Backend ingestion and enrichment layer feeds a PostgreSQL intelligence store, while React dashboards expose risk, vendor, and alert views.",
    challenges:
      "Handling inconsistent advisory formats, keeping refresh workflows reliable, and making risk signals useful for prioritization.",
    securityConsiderations:
      "Uses CVSS, EPSS, KEV, and exploit context to reduce false prioritization and surface exposures with practical analyst value.",
    result:
      "Delivered advisory analytics, vendor grouping, Slack/webhook alerting, automated reporting, and exploit-aware risk scoring.",
    tags: ["Python", "FastAPI", "React.js", "PostgreSQL", "Docker", "CVSS / EPSS / KEV"],
    github: "https://github.com/Aayush-Raj-Singh/OEM-VULNERABILITY-MONITORING-TOOL",
    live: null,
    featured: true,
  },
  {
    title: "Cryptographic Algorithm Identifier",
    category: "Applied AI",
    badge: "Security AI",
    description:
      "AI-powered ciphertext classification platform using entropy analysis and Random Forest models.",
    image: "assets/project-crypto-id.png",
    impact:
      "Helps forensic triage by narrowing likely encryption families early in analysis.",
    problem:
      "Encrypted samples often arrive without metadata, slowing down forensic analysis and algorithm identification.",
    approach:
      "Extracted statistical features from ciphertext and trained machine learning models to classify likely algorithms.",
    technology:
      "Python, FastAPI, React.js, Scikit-learn, entropy analysis, Random Forest.",
    architecture:
      "Prediction API receives ciphertext features, applies trained classification logic, and returns real-time inference output to the UI.",
    challenges:
      "Making classification useful despite limited metadata and separating statistical signal from sample noise.",
    securityConsiderations:
      "Designed for defensive analysis and education, with no decryption or offensive misuse features.",
    result:
      "Delivered a practical real-time prediction workflow for cryptographic analysis and security learning.",
    tags: ["Python", "FastAPI", "React.js", "Scikit-learn", "Random Forest"],
    github: "https://github.com/Aayush-Raj-Singh/CRYPTOGRAPHIC-ALGORITHM-IDENTIFIER",
    live: null,
  },
  {
    title: "Crime Hotspot Mapping Tool",
    category: "Research and Analytics",
    badge: "Research",
    description:
      "Geospatial crime analytics platform using clustering, hotspot detection, and ML-assisted FIR classification.",
    image: "assets/project-crime-hotspot.png",
    impact:
      "Achieved 94.1% BiLSTM-assisted classification accuracy and improved spatial query latency by 8.8x.",
    problem:
      "Dense crime records are difficult to interpret without spatial clustering, hotspot views, and classification support.",
    approach:
      "Built geospatial analytics with DBSCAN clustering, KDE hotspot detection, PostGIS indexing, and BiLSTM-based FIR classification.",
    technology:
      "Python, FastAPI, React.js, PostgreSQL, PostGIS, DBSCAN, KDE, BiLSTM, GIS dashboards.",
    architecture:
      "Spatial database stores geocoded incidents, analytics services generate hotspot intelligence, and dashboards visualize patterns for review.",
    challenges:
      "Balancing classification accuracy, geospatial query performance, and clear map-first presentation.",
    securityConsiderations:
      "Relevant to public safety analytics and cyber-adjacent intelligence workflows where evidence quality and responsible data handling matter.",
    result:
      "Published the hybrid DBSCAN-KDE research at a national conference and delivered an interactive analytics workflow.",
    tags: ["Python", "FastAPI", "React.js", "PostGIS", "DBSCAN", "BiLSTM"],
    github: "https://github.com/Aayush-Raj-Singh/CRIME-HOTSPOT-MAPPING-PROJECT",
    live: null,
  },
  {
    title: "KrishiMitra AI",
    category: "Applied AI",
    badge: "Applied AI",
    description:
      "FastAPI and React Native agriculture platform using AI-assisted workflows for localized crop guidance.",
    image: "assets/project-krishimitra.png",
    impact:
      "Shows software engineering range beyond security through a full-stack AI product workflow.",
    problem:
      "Farmers often rely on generic advice that does not reflect local context or recent field inputs.",
    approach:
      "Built backend, mobile, and AI-assisted recommendation flows around practical agriculture use cases.",
    technology:
      "FastAPI, React Native, PostgreSQL, AI-assisted recommendations, Docker-oriented development.",
    architecture:
      "API backend processes inputs, data storage persists user and domain records, and mobile/web clients present recommendations.",
    challenges:
      "Aligning local runtime dependencies, persistent configuration, and practical data paths across backend and mobile surfaces.",
    securityConsiderations:
      "Applies secure configuration, role-aware backend patterns, and production-readiness practices from security engineering work.",
    result:
      "Delivered a functional AI-assisted product path that supports the broader software engineering side of the profile.",
    tags: ["React Native", "FastAPI", "PostgreSQL", "AI", "Docker"],
    github: "https://github.com/Aayush-Raj-Singh/KRISHI-MITRA-AI",
    live: null,
  },
];

export const timeline = [
  {
    date: "2022",
    title: "Started B.Tech CSE Cyber Security",
    description:
      "Built foundations in networking, operating systems, programming, databases, cryptography, and cyber forensics.",
    badge: "Education",
  },
  {
    date: "2023",
    title: "Built Hands-On Security Lab Habit",
    description:
      "Started structured TryHackMe practice across OWASP Top 10, Blue Team, Web Fundamentals, and Security Awareness.",
    badge: "Lab Work",
  },
  {
    date: "2024",
    title: "Delivered OEM Vulnerability Monitoring Tool",
    description:
      "Built an advisory intelligence workflow across 10+ vendor sources with exploit-aware prioritization and reporting.",
    badge: "Project",
  },
  {
    date: "2025",
    title: "Completed SOC / VAPT and Penetration Testing Internships",
    description:
      "Gained practical exposure to risk assessment, alert review, exploitation workflows, mitigation planning, and defensive operations.",
    badge: "Experience",
  },
  {
    date: "2025",
    title: "Expanded Cisco, CCNA, and Ethical Hacking Credentials",
    description:
      "Completed networking, cybersecurity, and ethical-hacking coursework that supports SOC and vulnerability assessment roles.",
    badge: "Certification",
  },
  {
    date: "2026",
    title: "Published Research and Built Final-Year Analytics Work",
    description:
      "Presented DBSCAN-KDE crime hotspot research and delivered a PostGIS-backed analytics platform with ML classification.",
    badge: "Research",
  },
  {
    date: "2026",
    title: "Seeking Entry-Level Cybersecurity Roles",
    description:
      "Targeting SOC Analyst, Cybersecurity Analyst, VAPT Analyst, Vulnerability Assessment, and Security Automation roles.",
    badge: "Career",
  },
];

export const securityTools = [
  { name: "Kali Linux", category: "OS" },
  { name: "Nmap", category: "Scanning" },
  { name: "Burp Suite", category: "Web Testing" },
  { name: "Wireshark", category: "Network" },
  { name: "Metasploit", category: "Exploitation" },
  { name: "Splunk", category: "SIEM" },
  { name: "OWASP ZAP", category: "Web Testing" },
  { name: "Volatility", category: "Forensics" },
];
