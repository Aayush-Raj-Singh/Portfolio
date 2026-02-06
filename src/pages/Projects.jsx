function Projects() {
  return (
    <main className="page min-h-screen" id="main">
      <section className="page-hero">
        <p className="eyebrow">// Projects</p>
        <h1 className="page-title glitch" data-text="Security Projects">
          Security Projects
        </h1>
        <h2 className="page-subtitle">Defense, automation, and ethical testing in action.</h2>
        <p className="page-intro">
          A selection of projects focused on blue team readiness, vulnerability management, and automation. Each entry
          includes the tools used, the security impact delivered, and a GitHub repository link.
        </p>
      </section>

      <section className="projects-grid">
        <article className="project-card">
          <h3 className="project-title">Agent-less Windows System Vulnerability Scanner</h3>
          <p className="project-desc">
            Agent-less Windows weakness detector assessing OS, services, and network subsystems without endpoint installs.
          </p>
          <div className="project-tags">
            <span className="tag">Python</span>
            <span className="tag">Network Analysis</span>
            <span className="tag">CVE Database</span>
            <span className="tag">Windows</span>
          </div>
          <div className="project-meta">
            <div>
              <span>Security Impact</span> Automated CVE discovery and exploit correlation across 50+ components.
            </div>
            <div>
              <span>Highlights</span> Risk scoring, remediation guidance, and compliance alignment.
            </div>
          </div>
          <div className="project-actions">
            <a
              href="https://github.com/Aayush-Raj-Singh/AGENT-LESS-WINDOWS-SYSTEM-VULNERABILITY-SCANNER"
              target="_blank"
              rel="noreferrer"
            >
              View Repository
            </a>
          </div>
        </article>

        <article className="project-card">
          <h3 className="project-title">Cyber Threat Intelligence AI System</h3>
          <p className="project-desc">
            ML-powered threat intelligence platform for near real-time cyber incident tracking in Indian cyberspace.
          </p>
          <div className="project-tags">
            <span className="tag">Machine Learning</span>
            <span className="tag">Web Scraping</span>
            <span className="tag">Threat Intel</span>
            <span className="tag">Pipelines</span>
          </div>
          <div className="project-meta">
            <div>
              <span>Security Impact</span> Actionable intelligence for Critical Information Infrastructure (CII).
            </div>
            <div>
              <span>Highlights</span> 200+ indicators processed from web and social sources.
            </div>
          </div>
          <div className="project-actions">
            <a
              href="https://github.com/Aayush-Raj-Singh/CYBER-THREAT-INTELLIGENCE-AI-SYSTEM"
              target="_blank"
              rel="noreferrer"
            >
              View Repository
            </a>
          </div>
        </article>

        <article className="project-card">
          <h3 className="project-title">Cryptographic Algorithm Identifier</h3>
          <p className="project-desc">
            ML classifier that identifies modern cryptographic algorithms from encrypted datasets.
          </p>
          <div className="project-tags">
            <span className="tag">AI/ML</span>
            <span className="tag">Cryptanalysis</span>
            <span className="tag">Pattern Recognition</span>
            <span className="tag">Python</span>
          </div>
          <div className="project-meta">
            <div>
              <span>Security Impact</span> Improved classification accuracy across encryption methods.
            </div>
            <div>
              <span>Highlights</span> Feature extraction + statistical pattern analysis.
            </div>
          </div>
          <div className="project-actions">
            <a
              href="https://github.com/Aayush-Raj-Singh/CRYPTOGRAPHIC-ALGORITHM-IDENTIFIER"
              target="_blank"
              rel="noreferrer"
            >
              View Repository
            </a>
          </div>
        </article>

        <article className="project-card">
          <h3 className="project-title">OEM Vulnerability Monitoring Tool</h3>
          <p className="project-desc">
            Automated patch tracking system monitoring security advisories across 10+ OEM portals for IT and OT equipment.
          </p>
          <div className="project-tags">
            <span className="tag">Web Scraping</span>
            <span className="tag">Security Advisory</span>
            <span className="tag">Automation</span>
            <span className="tag">Alerting</span>
          </div>
          <div className="project-meta">
            <div>
              <span>Security Impact</span> Reduced threat awareness latency by ~70%.
            </div>
            <div>
              <span>Highlights</span> Real-time alerting for critical/high-severity exposures.
            </div>
          </div>
          <div className="project-actions">
            <a
              href="https://github.com/Aayush-Raj-Singh/OEM-VULNERABILITY-MONITORING-TOOL"
              target="_blank"
              rel="noreferrer"
            >
              View Repository
            </a>
          </div>
        </article>
      </section>

      <section className="panel">
        <div className="panel-title">Project Focus Areas</div>
        <ul className="panel-list">
          <li>Agent-less Windows assessment covering OS, services, and network subsystems without endpoint installation.</li>
          <li>50+ components analyzed per scan with CVE mapping and exploitability correlation.</li>
          <li>Risk scoring + remediation guidance embedded to cut manual assessment effort by ~60%.</li>
          <li>Threat intel pipelines aggregating web forums, paste sites, and social sources at scale.</li>
          <li>200+ indicators processed and correlated to prioritize critical signals for CII protection.</li>
          <li>OEM advisory monitoring across 10+ vendor portals for IT/OT exposure visibility.</li>
          <li>Real-time alerting for critical/high-severity exposures, reducing awareness latency by ~70%.</li>
          <li>ML-based cryptographic algorithm classification using feature extraction + pattern recognition.</li>
          <li>Automation-first design to improve response speed, repeatability, and reporting clarity.</li>
        </ul>
      </section>
    </main>
  );
}

export default Projects;

