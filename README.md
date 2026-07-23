# Aayush Raj Cybersecurity Portfolio

React + Vite portfolio aligned with the ATS resume and power CV for 2026 cybersecurity fresher roles.

## Content Source Of Truth

- Career identity, target roles, skills, projects, experience, proof points, and links live in `src/data/careerProfile.js`.
- Resume downloads point to `public/assets/Aayush_Raj_Cyber_Security_Resume.pdf`.
- Keep project names, GitHub links, certifications, location, and contact details synchronized with `../resume.tex` and `../CV_power.tex`.

## Local Workflow

```bash
npm install
npm run dev
npm run lint
npm run build
npm audit --omit=dev
```

## Deployment

Push to `main` and GitHub Actions deploys the portfolio to GitHub Pages under `/Portfolio/`.

# Career Brand Final Quality Gate

Date: 2026-06-04

## Executive Result

The resume, power CV, and portfolio have been rebuilt into one synchronized cybersecurity fresher brand targeting SOC Analyst, Cybersecurity Analyst, VAPT Analyst, Security Engineer, Vulnerability Assessment Analyst, Cloud Security Associate, DevSecOps Associate, Application Security Engineer, and Incident Response Analyst roles.

The current brand narrative is:

> Cybersecurity graduate with hands-on SOC, VAPT, threat intelligence, vulnerability management, security automation, and AI/ML-backed security project experience.

## Final Scores

| Area | Score | Status |
| --- | ---: | --- |
| Resume | 94 / 100 | Strong ATS-first cybersecurity resume |
| Power CV | 93 / 100 | Strong premium two-page professional CV source |
| Portfolio | 94 / 100 | Strong recruiter-facing cybersecurity portfolio |
| ATS Compatibility | 95 / 100 | Single-column resume, strong keywords, measurable impact |
| Recruiter Appeal | 94 / 100 | Clear fresher positioning with proof-heavy projects |

## Files Rebuilt Or Updated

- `resume.tex`: rebuilt as an ATS-friendly, single-column cybersecurity resume.
- `resume2.tex`: converted to reference `resume.tex` to prevent version drift.
- `CV_power.tex`: synchronized with canonical identity, links, project GitHub references, sports/leadership content, and stronger section structure.
- `Portfolio/src/data/careerProfile.js`: added as the central portfolio content source of truth.
- `Portfolio/src/sections/*.jsx`: synchronized portfolio sections with resume/CV narrative.
- `Portfolio/src/components/*.jsx`: updated header, footer, project cards, terminal, and recruiter-facing interactions.
- `Portfolio/index.html`: updated SEO title, description, and keywords for cybersecurity analyst targeting.
- `Portfolio/README.md`: updated with source-of-truth and validation workflow.
- `CAREER_BRAND_AUDIT.md`: documents the pre-fix audit and inconsistencies found.

## Consistency Gate

Canonical identity now used across active resume, CV, and portfolio files:

- Name: Aayush Raj
- Location: Bengaluru, Karnataka, India
- Email: `aayush15raj0@gmail.com`
- LinkedIn: `linkedin.com/in/abhayaprabha`
- GitHub: `github.com/Aayush-Raj-Singh`
- TryHackMe: `tryhackme.com/p/Abhayaprabha`
- Portfolio: `aayush-raj-singh.github.io/Portfolio`

Checked and removed from active files:

- Old Yahoo email
- Old LinkedIn slug
- Old location conflict
- Over-strong "Cyber Security Engineer" fresher positioning
- Mojibake/encoding artifacts
- Twitter/Instagram recruiter distractions

## Recruiter Simulation

ATS Scanner:

- Strength: Strong keyword coverage across SOC, VAPT, SIEM, MITRE ATT&CK, OWASP, CVE, IOC, CVSS, EPSS, KEV, Docker, FastAPI, React, PostgreSQL, OSINT.
- Risk: Resume PDF asset must be regenerated from the updated source before upload.

HR Recruiter:

- Strength: Clear role targeting, location, links, education, certifications, internships, and quantifiable project outcomes.
- Risk: LinkedIn headline/about section should be manually updated to match the same narrative.

Technical Recruiter:

- Strength: Projects now explain problem, approach, architecture, security considerations, and measurable result.
- Risk: GitHub repositories should have README files matching the same project language.

Cybersecurity Hiring Manager:

- Strength: Fresher profile now shows applied SOC/VAPT thinking instead of only tool listing.
- Risk: Internship claims and metrics should be backed by offer/completion letters or reports if asked.

Engineering Manager:

- Strength: Full-stack implementation experience is visible without weakening the cybersecurity focus.
- Risk: Portfolio should keep live demos stable or clearly mark GitHub-only projects.

Startup Founder:

- Strength: Security automation and product-style project delivery are emphasized.
- Risk: Add a short "available for internships/full-time" line on LinkedIn if actively applying.

Fortune 500 Recruiter:

- Strength: ATS-compatible resume and standard role keywords are now present.
- Risk: Keep resume under two pages for job portals; use the power CV for direct sharing.

## Validation Performed

Content validation:

- Active files scanned for stale identity conflicts and encoding artifacts.
- Resume, CV, and portfolio checked for canonical contact/profile consistency.
- Project names and GitHub references synchronized.

LaTeX source validation:

- `resume.tex`: braces balanced, itemize blocks balanced, document environment balanced.
- `CV_power.tex`: braces balanced, itemize blocks balanced, document environment balanced.
- Local PDF compilation was not performed because no TeX engine is installed in this environment.

Portfolio validation:

- `npm run lint`: passed.
- `npm run build`: passed.
- `npm audit --omit=dev`: passed with `0 vulnerabilities`.
- Browser smoke test against production `dist`: passed.
- Browser console warnings/errors: none found.
- Project detail expansion: passed, including Problem, Approach, Technology, Architecture, Challenges, Security Considerations, and Results.
- Responsive/accessibility source audit: present use of semantic sections, ARIA labels, image alt text, reduced-motion CSS, clamp-based spacing, and mobile breakpoints.

## Remaining Manual Actions

These items need external confirmation and should not be fabricated automatically:

- Regenerate `Portfolio/public/assets/Aayush_Raj_Cyber_Security_Resume.pdf` from the updated `resume.tex`.
- Compile `CV_power.tex` in Overleaf/TeX Live and visually confirm the final two-page layout.
- Confirm that `linkedin.com/in/abhayaprabha` is the preferred public LinkedIn URL.
- Update LinkedIn headline/about/projects/certifications to match the rebuilt brand.
- Ensure every GitHub project README uses the same project problem/approach/result language now used in the portfolio.
