function Certifications() {
  return (
    <main className="page min-h-screen" id="main">
      <section className="page-hero">
        <p className="eyebrow">// Certifications</p>
        <h1 className="page-title glitch" data-text="Certifications">
          Certifications
        </h1>
        <h2 className="page-subtitle">Continuous learning across cyber defense, networking, and labs.</h2>
        <p className="page-intro">
          A snapshot of cybersecurity learning progress, certifications, and badges. Links are ready to connect to proof
          pages or verification IDs.
        </p>
      </section>

      <section className="cert-grid">
        <article className="cert-card">
          <h3 className="cert-title">TryHackMe Progress</h3>
          <p className="cert-desc">
            Hands-on labs focused on SOC operations, blue team workflows, and offensive security fundamentals.
          </p>
          <div className="cert-meta">
            <div>
              <span>Status</span> Active learning streak
            </div>
            <div>
              <span>Focus</span> Blue Team + Ethical Hacking
            </div>
          </div>
          <div className="cert-actions">
            <a href="https://tryhackme.com/p/Abhayaprabha" target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        </article>

        <article className="cert-card">
          <h3 className="cert-title">Cisco Cybersecurity Certifications</h3>
          <p className="cert-desc">Foundational networking and security certifications to strengthen defensive fundamentals.</p>
          <div className="cert-meta">
            <div>
              <span>Status</span> Completed / In progress
            </div>
            <div>
              <span>Focus</span> Networking + Security
            </div>
          </div>
          <div className="cert-actions">
            <a href="#">Add verification link</a>
          </div>
        </article>

        <article className="cert-card">
          <h3 className="cert-title">Security Learning Badges</h3>
          <p className="cert-desc">Digital badges earned through labs, capture-the-flag challenges, and platform assessments.</p>
          <div className="cert-meta">
            <div>
              <span>Status</span> Ongoing
            </div>
            <div>
              <span>Focus</span> Practical security skills
            </div>
          </div>
          <div className="cert-actions">
            <a href="#">Add badge gallery</a>
          </div>
        </article>
      </section>

      <section className="panel">
        <div className="panel-title">Profiles</div>
        <div className="badge-frame">
          <iframe
            src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=2484703"
            title="TryHackMe public profile badge"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="panel">
        <div className="panel-title">Cisco Badges</div>
        <div className="badge-grid" aria-label="Cisco badge gallery">
          <a
            className="badge-item"
            href="https://www.credly.com/org/cisco/badge/python-essentials-1.1"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge-icon">
              <img
                src="https://images.credly.com/size/680x680/images/19e742ef-13be-4d26-87ed-ac8f5fd0643c/image.png"
                alt="Python Essentials 1 badge"
                loading="lazy"
              />
            </div>
            <div className="badge-details">
              <div className="badge-title">Python Essentials 1</div>
              <p className="badge-desc">Python basics, syntax, and core programming concepts.</p>
              <span className="badge-tag">Cisco</span>
            </div>
          </a>
          <a
            className="badge-item"
            href="https://www.credly.com/org/cisco/badge/python-essentials-2"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge-icon">
              <img
                src="https://images.credly.com/size/680x680/images/3f802526-7274-4230-91ab-f6d1a35340e6/image.png"
                alt="Python Essentials 2 badge"
                loading="lazy"
              />
            </div>
            <div className="badge-details">
              <div className="badge-title">Python Essentials 2</div>
              <p className="badge-desc">Intermediate Python: OOP, files, exceptions, modules.</p>
              <span className="badge-tag">Cisco</span>
            </div>
          </a>
          <a
            className="badge-item"
            href="https://www.credly.com/org/cisco/badge/ethical-hacker"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge-icon">
              <img
                src="https://images.credly.com/size/680x680/images/242902b5-f527-42ad-865e-977c9e1b5b58/image.png"
                alt="Ethical Hacker badge"
                loading="lazy"
              />
            </div>
            <div className="badge-details">
              <div className="badge-title">Ethical Hacker</div>
              <p className="badge-desc">Ethical hacking workflow: scope, test, report, mitigate.</p>
              <span className="badge-tag">Cisco</span>
            </div>
          </a>
          <a
            className="badge-item"
            href="https://www.credly.com/org/cisco/badge/ccna-introduction-to-networks"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge-icon">
              <img
                src="https://images.credly.com/size/680x680/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png"
                alt="CCNA: Introduction to Networks badge"
                loading="lazy"
              />
            </div>
            <div className="badge-details">
              <div className="badge-title">CCNA: Introduction to Networks</div>
              <p className="badge-desc">Network fundamentals, IP addressing, and connectivity.</p>
              <span className="badge-tag">Cisco</span>
            </div>
          </a>
          <a
            className="badge-item"
            href="https://pacybersecurity.org/cisco-ccna-switching-routing-and-wireless-essentials/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge-icon">
              <img
                src="https://images.credly.com/size/680x680/images/f4ccdba9-dd65-4349-baad-8f05df116443/CCNASRWE__1_.png"
                alt="CCNA: Switching, Routing, and Wireless Essentials badge"
                loading="lazy"
              />
            </div>
            <div className="badge-details">
              <div className="badge-title">CCNA: SRWE</div>
              <p className="badge-desc">Switching, routing, WLANs, and troubleshooting.</p>
              <span className="badge-tag">Cisco</span>
            </div>
          </a>
          <a
            className="badge-item"
            href="https://www.credly.com/org/cisco/badge/ccna-enterprise-networking-security-and-automation"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge-icon">
              <img
                src="https://images.credly.com/size/680x680/images/0a6d331e-8abf-4272-a949-33f754569a76/CCNAENSA__1_.png"
                alt="CCNA: Enterprise Networking, Security, and Automation badge"
                loading="lazy"
              />
            </div>
            <div className="badge-details">
              <div className="badge-title">CCNA: ENSA</div>
              <p className="badge-desc">Enterprise networking, security, and automation.</p>
              <span className="badge-tag">Cisco</span>
            </div>
          </a>
          <a
            className="badge-item"
            href="https://www.credly.com/org/cisco/badge/computer-hardware-basics"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge-icon">
              <img
                src="https://images.credly.com/size/680x680/images/68c0b94d-f6ac-40b1-a0e0-921439eb092e/image.png"
                alt="Computer Hardware Basics badge"
                loading="lazy"
              />
            </div>
            <div className="badge-details">
              <div className="badge-title">Computer Hardware Basics</div>
              <p className="badge-desc">Hardware basics, components, repair, and troubleshooting.</p>
              <span className="badge-tag">Cisco</span>
            </div>
          </a>
        </div>
      </section>

      <section className="panel">
        <div className="panel-title">TryHackMe Badges</div>
        <div className="badge-grid" aria-label="TryHackMe badge gallery">
          <a
            className="badge-item"
            href="https://tryhackme.com/Abhayaprabha/badges/owasp-10?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6558dd95fa0babfca273e135"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge-icon">
              <img
                src="https://assets.tryhackme.com/room-badges/26b6041b96419e48bf8f8a76af041daf.png"
                alt="TryHackMe OWASP Top 10 badge"
                loading="lazy"
              />
            </div>
            <div className="badge-details">
              <div className="badge-title">OWASP Top 10</div>
              <p className="badge-desc">Explored the most critical web application risks.</p>
              <span className="badge-tag">Achievement</span>
            </div>
          </a>
          <a
            className="badge-item"
            href="https://tryhackme.com/Abhayaprabha/badges/web-fund?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6558dd95fa0babfca273e135"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge-icon">
              <img
                src="https://assets.tryhackme.com/room-badges/e4ae71fdc31532b08e47bf9fc528d66f.png"
                alt="TryHackMe Web Fundamentals badge"
                loading="lazy"
              />
            </div>
            <div className="badge-details">
              <div className="badge-title">Web Fundamentals</div>
              <p className="badge-desc">Built core knowledge of the web and HTTP.</p>
              <span className="badge-tag">Achievement</span>
            </div>
          </a>
          <a
            className="badge-item"
            href="https://tryhackme.com/Abhayaprabha/badges/blue?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6558dd95fa0babfca273e135"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge-icon">
              <img
                src="https://assets.tryhackme.com/room-badges/643f6eee005d6440a74b1e7e9228b462.png"
                alt="TryHackMe Blue Team badge"
                loading="lazy"
              />
            </div>
            <div className="badge-details">
              <div className="badge-title">Blue Team</div>
              <p className="badge-desc">Defensive security fundamentals and monitoring.</p>
              <span className="badge-tag">Achievement</span>
            </div>
          </a>
          <a
            className="badge-item"
            href="https://tryhackme.com/Abhayaprabha/badges/terminaled?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6558dd95fa0babfca273e135"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge-icon">
              <img
                src="https://assets.tryhackme.com/room-badges/d2f3b5bfdb6712f8d4ed09c919bf8d2e.png"
                alt="TryHackMe Terminaled badge"
                loading="lazy"
              />
            </div>
            <div className="badge-details">
              <div className="badge-title">Terminaled</div>
              <p className="badge-desc">Command-line skills and terminal workflow.</p>
              <span className="badge-tag">Achievement</span>
            </div>
          </a>
          <a
            className="badge-item"
            href="https://tryhackme.com/Abhayaprabha/badges/security-awareness?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6558dd95fa0babfca273e135"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge-icon">
              <img
                src="https://assets.tryhackme.com/room-badges/5056dd6e19c22ee4fa1b93b38a9ddb2d.png"
                alt="TryHackMe Security Awareness badge"
                loading="lazy"
              />
            </div>
            <div className="badge-details">
              <div className="badge-title">Security Awareness</div>
              <p className="badge-desc">Strengthened security awareness and safe practices.</p>
              <span className="badge-tag">Achievement</span>
            </div>
          </a>
          <a
            className="badge-item"
            href="https://tryhackme.com/Abhayaprabha/badges/world-wide-web?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6558dd95fa0babfca273e135"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge-icon">
              <img
                src="https://assets.tryhackme.com/room-badges/39cd95cbdedb33abbc80e8937b60989b.png"
                alt="TryHackMe World Wide Web badge"
                loading="lazy"
              />
            </div>
            <div className="badge-details">
              <div className="badge-title">World Wide Web</div>
              <p className="badge-desc">Learned how the world wide web works.</p>
              <span className="badge-tag">Achievement</span>
            </div>
          </a>
          <a
            className="badge-item"
            href="https://tryhackme.com/Abhayaprabha/badges/defrostedfive?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6558dd95fa0babfca273e135"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge-icon">
              <img
                src="https://assets.tryhackme.com/room-badges/5b6d2c8055f7f769706da17f6e1b6ea0.png"
                alt="TryHackMe Defrosted Five badge"
                loading="lazy"
              />
            </div>
            <div className="badge-details">
              <div className="badge-title">Defrosted Five</div>
              <p className="badge-desc">Advent of Cyber side quest completion.</p>
              <span className="badge-tag">Event</span>
            </div>
          </a>
          <a
            className="badge-item"
            href="https://tryhackme.com/Abhayaprabha/badges/aoc5sidequest2?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6558dd95fa0babfca273e135"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge-icon">
              <img
                src="https://assets.tryhackme.com/room-badges/67607bc83178823c0967e0b254866d12.png"
                alt="TryHackMe AOC5 Side Quest 2 badge"
                loading="lazy"
              />
            </div>
            <div className="badge-details">
              <div className="badge-title">AOC Side Quest</div>
              <p className="badge-desc">Advent of Cyber side quest completion.</p>
              <span className="badge-tag">Event</span>
            </div>
          </a>
          <a
            className="badge-item"
            href="https://tryhackme.com/Abhayaprabha/badges/3-million-legend?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6558dd95fa0babfca273e135"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge-icon">
              <img
                src="https://assets.tryhackme.com/room-badges/3ac6a41c766ab0216284c5f77abe7f5a.png"
                alt="TryHackMe 3 Million Legend badge"
                loading="lazy"
              />
            </div>
            <div className="badge-details">
              <div className="badge-title">3 Million Legend</div>
              <p className="badge-desc">Community milestone achievement.</p>
              <span className="badge-tag">Milestone</span>
            </div>
          </a>
          <a
            className="badge-item"
            href="https://tryhackme.com/Abhayaprabha/badges/bronze-league?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6558dd95fa0babfca273e135"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge-icon">
              <img
                src="https://assets.tryhackme.com/room-badges/9db728a67798c3c7cd1a3e664114e1b0.png"
                alt="TryHackMe Bronze League badge"
                loading="lazy"
              />
            </div>
            <div className="badge-details">
              <div className="badge-title">Bronze League</div>
              <p className="badge-desc">Weekly league placement achievement.</p>
              <span className="badge-tag">League</span>
            </div>
          </a>
          <a
            className="badge-item"
            href="https://tryhackme.com/Abhayaprabha/badges/silver-league?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6558dd95fa0babfca273e135"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge-icon">
              <img
                src="https://assets.tryhackme.com/room-badges/e53b59a415ebb4f28c2e88bb0de963be.png"
                alt="TryHackMe Silver League badge"
                loading="lazy"
              />
            </div>
            <div className="badge-details">
              <div className="badge-title">Silver League</div>
              <p className="badge-desc">Weekly league placement achievement.</p>
              <span className="badge-tag">League</span>
            </div>
          </a>
          <a
            className="badge-item"
            href="https://tryhackme.com/Abhayaprabha/badges/7-day-streak?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6558dd95fa0babfca273e135"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge-icon">
              <img
                src="https://assets.tryhackme.com/room-badges/223b29696a3b24b7bec49b0b17f7317b.png"
                alt="TryHackMe 7 Day Streak badge"
                loading="lazy"
              />
            </div>
            <div className="badge-details">
              <div className="badge-title">7 Day Streak</div>
              <p className="badge-desc">Maintained a 7-day learning streak.</p>
              <span className="badge-tag">Streak</span>
            </div>
          </a>
          <a
            className="badge-item"
            href="https://tryhackme.com/Abhayaprabha/badges/30-day-streak?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6558dd95fa0babfca273e135"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge-icon">
              <img
                src="https://assets.tryhackme.com/room-badges/664e33274dbb85de160f81681d1768a3.png"
                alt="TryHackMe 30 Day Streak badge"
                loading="lazy"
              />
            </div>
            <div className="badge-details">
              <div className="badge-title">30 Day Streak</div>
              <p className="badge-desc">Maintained a 30-day learning streak.</p>
              <span className="badge-tag">Streak</span>
            </div>
          </a>
          <a
            className="badge-item"
            href="https://tryhackme.com/Abhayaprabha/badges/adventofcyber2024?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6558dd95fa0babfca273e135"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge-icon">
              <img
                src="https://assets.tryhackme.com/room-badges/621d9c31ce4266a2787c9c4561646788.png"
                alt="TryHackMe Advent of Cyber 2024 badge"
                loading="lazy"
              />
            </div>
            <div className="badge-details">
              <div className="badge-title">Advent of Cyber 2024</div>
              <p className="badge-desc">Completed Advent of Cyber 2024.</p>
              <span className="badge-tag">Event</span>
            </div>
          </a>
          <a
            className="badge-item"
            href="https://tryhackme.com/Abhayaprabha/badges/advent-of-cyber-2025?utm_campaign=social_share&utm_medium=social&utm_content=badge&utm_source=copy&sharerId=6558dd95fa0babfca273e135"
            target="_blank"
            rel="noreferrer"
          >
            <div className="badge-icon">
              <img
                src="https://assets.tryhackme.com/room-badges/309a27aa9da764c07e456b0ac55228b0.png"
                alt="TryHackMe Advent of Cyber 2025 badge"
                loading="lazy"
              />
            </div>
            <div className="badge-details">
              <div className="badge-title">Advent of Cyber 2025</div>
              <p className="badge-desc">Completed Advent of Cyber 2025.</p>
              <span className="badge-tag">Event</span>
            </div>
          </a>
        </div>
      </section>

      <section className="panel">
        <div className="panel-title">Learning Focus Areas</div>
        <ul className="panel-list">
          <li>Blue team monitoring + incident triage aligned with real-world Windows exposure analysis.</li>
          <li>CVE intelligence workflows: severity mapping, exploit availability checks, and remediation planning.</li>
          <li>Threat intelligence collection at scale (web forums, paste sites, social signals) for timely alerting.</li>
          <li>Indicator enrichment, correlation, and prioritization for Critical Information Infrastructure use cases.</li>
          <li>Secure automation pipelines for advisory tracking and real-time exposure alerts.</li>
          <li>Vendor advisory monitoring across 10+ OEM sources to improve patch awareness.</li>
          <li>ML and statistical feature extraction applied to cryptographic pattern recognition.</li>
          <li>Reporting discipline: risk scoring, compliance alignment, and decision-ready summaries.</li>
          <li>Operational focus on measurable outcomes: faster response, lower latency, higher signal quality.</li>
        </ul>
      </section>
    </main>
  );
}

export default Certifications;

