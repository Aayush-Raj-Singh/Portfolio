const output = document.getElementById("terminal-output");
const input = document.getElementById("terminal-input");
const form = document.getElementById("terminal-form");
const terminal = document.getElementById("terminal");
const promptLabel = document.getElementById("prompt-label");

const commandHistory = [];
let historyIndex = -1;
let isBooting = true;

const banner = [
  "=======================================",
  "  AAYUSH RAJ ();  | CYBER TERMINAL",
  "=======================================",
];

const COMMANDS = {
  help: () => renderHelp(),
  whoami: () => renderWhoAmI(),
  skills: () => renderSkills(),
  projects: () => renderProjects(),
  certifications: () => renderCertifications(),
  contact: () => renderContact(),
  date: () => appendOutput(new Date().toString()),
  history: () => renderHistory(),
  clear: () => clearOutput(),
};

const bootSequence = [
  "Initializing secure shell...",
  "Loading cyber defense modules...",
  "Connecting to threat intelligence mesh...",
  "Access granted. Type 'help' to list commands.",
];

function appendOutput(text, className = "output-line") {
  const line = document.createElement("div");
  line.className = className;
  line.textContent = text;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

function appendHTML(html, className = "output-line") {
  const line = document.createElement("div");
  line.className = className;
  line.innerHTML = html;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

function clearOutput() {
  output.innerHTML = "";
}

function renderHelp() {
  appendHTML(`
    <div class="output-block">
      <div class="output-title">Available Commands</div>
      <ul class="output-list">
        <li>help</li>
        <li>whoami</li>
        <li>ls</li>
        <li>skills</li>
        <li>projects</li>
        <li>certifications</li>
        <li>contact</li>
        <li>date</li>
        <li>history</li>
        <li>clear</li>
        <li>ls skills</li>
      </ul>
      <div class="output-hint">Tip: Use ↑ and ↓ to navigate history.</div>
    </div>
  `);
}

function renderWhoAmI() {
  appendHTML(`
    <div class="output-block">
      <div class="output-title">Identity</div>
      <div>Aayush Raj ();</div>
      <div>Cyber Security Engineer</div>
      <div>Location: India</div>
      <div>Focus: Blue Team, Security Automation, Ethical Hacking</div>
    </div>
  `);
}

function renderSkills() {
  appendHTML(`
    <div class="output-block">
      <div class="output-title">Core Skills</div>
      <ul class="output-list">
        <li>Endpoint & Windows hardening</li>
        <li>Threat detection and triage</li>
        <li>SIEM tuning and alert response</li>
        <li>Security automation with scripts</li>
        <li>Vulnerability assessment</li>
      </ul>
      <div class="output-hint">Run <span class="terminal-link">ls skills</span> for resume extraction.</div>
    </div>
  `);
}

function renderProjects() {
  appendHTML(`
    <div class="output-block">
      <div class="output-title">Highlighted Projects</div>
      <ul class="output-list">
        <li>Agent-less Windows Vulnerability Scanner</li>
        <li>Cyber Incident Intelligence Monitoring Tool</li>
        <li>Trading Platform Security Testing</li>
        <li>Security automation toolkits</li>
      </ul>
      <div class="output-hint">Open full details: <a class="terminal-link" href="projects.html">projects.html</a></div>
    </div>
  `);
}

function renderCertifications() {
  appendHTML(`
    <div class="output-block">
      <div class="output-title">Certifications</div>
      <ul class="output-list">
        <li>TryHackMe progress and streaks</li>
        <li>Cisco cybersecurity credentials</li>
        <li>Security learning badges</li>
      </ul>
      <div class="output-hint">Open full details: <a class="terminal-link" href="certifications.html">certifications.html</a></div>
    </div>
  `);
}

function renderContact() {
  appendHTML(`
    <div class="output-block">
      <div class="output-title">Contact</div>
      <div>Email: <a class="terminal-link" href="mailto:hello@aayushraj.com">hello@aayushraj.com</a></div>
      <div>LinkedIn: <a class="terminal-link" href="https://www.linkedin.com/in/aayush-raj-77a1bb237" target="_blank" rel="noreferrer">linkedin.com/in/aayush-raj-77a1bb237</a></div>
      <div>GitHub: <a class="terminal-link" href="https://github.com/Aayush-Raj-Singh" target="_blank" rel="noreferrer">github.com/Aayush-Raj-Singh</a></div>
      <div>TryHackMe: <a class="terminal-link" href="https://tryhackme.com/p/Abhayaprabha" target="_blank" rel="noreferrer">tryhackme.com/p/Abhayaprabha</a></div>
      <div>X / Twitter: <a class="terminal-link" href="https://twitter.com/AayushR19149133" target="_blank" rel="noreferrer">twitter.com/AayushR19149133</a></div>
    </div>
  `);
}

function renderHistory() {
  if (commandHistory.length === 0) {
    appendOutput("No commands yet.");
    return;
  }

  appendHTML(`
    <div class="output-block">
      <div class="output-title">Command History</div>
      <ul class="output-list">
        ${commandHistory.map((cmd, index) => `<li>${index + 1}. ${cmd}</li>`).join("")}
      </ul>
    </div>
  `);
}

function renderLs() {
  appendHTML(`
    <div class="output-block">
      <div class="output-title">Directory</div>
      <ul class="output-list">
        <li>about/</li>
        <li>projects/</li>
        <li>certifications/</li>
        <li>contact/</li>
        <li>skills/</li>
      </ul>
    </div>
  `);
}

async function renderResumeSkills() {
  appendOutput("Scanning cv.pdf for skill extraction...");
  const hasCv = await fetch("cv.pdf", { method: "HEAD" })
    .then((response) => response.ok)
    .catch(() => false);

  appendHTML(`
    <div class="output-block">
      <div class="output-title">Resume Parser</div>
      <div>Status: ${hasCv ? "cv.pdf detected" : "cv.pdf not found"}</div>
      <div>Mode: Future-ready parser (PDF extraction planned)</div>
      <div class="output-hint">Drop your resume at <span class="terminal-link">cv.pdf</span> to enable parsing.</div>
    </div>
  `);

  appendHTML(`
    <div class="output-block">
      <div class="output-title">Sample Skill Output</div>
      <ul class="output-list">
        <li>Windows security baselining</li>
        <li>Incident response playbooks</li>
        <li>Automation with PowerShell & Python</li>
        <li>Threat intelligence monitoring</li>
      </ul>
    </div>
  `);
}

function handleCommand(rawInput) {
  const trimmed = rawInput.trim();

  appendOutput(`${promptLabel.textContent} ${trimmed}`, "command-line");

  if (!trimmed) {
    return;
  }

  commandHistory.push(trimmed);
  if (commandHistory.length > 100) {
    commandHistory.shift();
  }
  historyIndex = commandHistory.length;

  const tokens = trimmed.split(/\s+/);
  const base = tokens[0].toLowerCase();
  const args = tokens.slice(1);

  if (base === "ls") {
    if (args.join(" ").toLowerCase() === "skills") {
      renderResumeSkills();
      return;
    }
    renderLs();
    return;
  }

  if (!COMMANDS[base]) {
    appendOutput(`Command not found: ${base}. Type 'help' for available commands.`);
    return;
  }

  COMMANDS[base](args);
}

function handleHistoryNavigation(direction) {
  if (commandHistory.length === 0) {
    return;
  }

  historyIndex += direction;

  if (historyIndex < 0) {
    historyIndex = 0;
  }

  if (historyIndex >= commandHistory.length) {
    historyIndex = commandHistory.length;
    input.value = "";
    return;
  }

  input.value = commandHistory[historyIndex];
}

function setupTerminal() {
  input.disabled = true;
  banner.forEach((line) => appendOutput(line));
  appendOutput("");
  let delay = 0;
  bootSequence.forEach((line) => {
    delay += 420;
    setTimeout(() => appendOutput(line), delay);
  });

  setTimeout(() => {
    isBooting = false;
    input.disabled = false;
    input.focus();
  }, delay + 300);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (isBooting) {
    return;
  }
  const value = input.value;
  input.value = "";
  handleCommand(value);
});

input.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    event.preventDefault();
    handleHistoryNavigation(-1);
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    handleHistoryNavigation(1);
  }

  if (event.ctrlKey && event.key.toLowerCase() === "l") {
    event.preventDefault();
    clearOutput();
  }
});

document.addEventListener("click", () => {
  input.focus();
});

terminal.addEventListener("click", () => {
  input.focus();
});

setupTerminal();
