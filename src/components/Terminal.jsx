import { useEffect, useMemo, useRef, useState } from "react";

const bootLines = [
  "Initializing defensive workspace...",
  "Loading investigation shortcuts...",
  "Type 'help' to inspect commands.",
];

const helpLines = [
  "help            list commands",
  "whoami          profile summary",
  "skills          jump to skills",
  "projects        jump to projects",
  "certifications  jump to certifications",
  "contact         jump to contact",
  "resume          open resume",
  "email           open email draft",
  "clear           clear output",
];

function Terminal() {
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [lines, setLines] = useState([
    "=======================================",
    " AAYUSH RAJ | SECURITY TERMINAL",
    "=======================================",
    "",
  ]);
  const [isBooting, setIsBooting] = useState(true);
  const baseUrl = import.meta.env.BASE_URL || "/";
  const resumeUrl = `${baseUrl}assets/Aayush_Raj_Cybersecurity_Resume.pdf`;

  const commandMap = useMemo(
    () => ({
      help: () => helpLines,
      whoami: () => [
        "Aayush Raj",
        "Cyber security engineer focused on blue-team and automation work.",
        "Best fit: SOC, analyst, and security engineering roles.",
      ],
      skills: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        return ["Jumping to the skills section..."];
      },
      projects: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        return ["Jumping to the projects section..."];
      },
      certifications: () => {
        document
          .getElementById("cyber-labs")
          ?.scrollIntoView({ behavior: "smooth" });
        return ["Jumping to certifications and labs..."];
      },
      contact: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        return ["Jumping to the contact section..."];
      },
      resume: () => {
        window.open(resumeUrl, "_blank", "noopener,noreferrer");
        return ["Opening resume in a new tab..."];
      },
      email: () => {
        window.location.href = "mailto:aayush.raj@myyahoo.com";
        return ["Opening email client..."];
      },
      clear: () => "__CLEAR__",
    }),
    [resumeUrl]
  );

  useEffect(() => {
    const timeouts = bootLines.map((line, index) =>
      window.setTimeout(() => {
        setLines((current) => [...current, line]);
        if (index === bootLines.length - 1) {
          setLines((current) => [...current, ""]);
          setIsBooting(false);
        }
      }, (index + 1) * 260)
    );

    return () => {
      timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  useEffect(() => {
    outputRef.current?.scrollTo({
      top: outputRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [lines]);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isBooting]);

  const handleCommand = (command) => {
    const trimmed = command.trim();

    setLines((current) => [...current, `cyber@aayush:~$ ${trimmed || ""}`]);

    if (!trimmed) {
      return;
    }

    setHistory((current) => [...current, trimmed]);
    setHistoryIndex(-1);

    const action = commandMap[trimmed.toLowerCase()];

    if (!action) {
      setLines((current) => [
        ...current,
        "Command not found. Type 'help' for available commands.",
      ]);
      return;
    }

    const result = action();

    if (result === "__CLEAR__") {
      setLines([
        "=======================================",
        " AAYUSH RAJ | SECURITY TERMINAL",
        "=======================================",
        "",
      ]);
      return;
    }

    setLines((current) => [...current, ...result, ""]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isBooting) {
      return;
    }

    handleCommand(input);
    setInput("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp" && history.length > 0) {
      event.preventDefault();
      const nextIndex =
        historyIndex === -1 ? history.length - 1 : Math.max(historyIndex - 1, 0);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
    }

    if (event.key === "ArrowDown" && history.length > 0) {
      event.preventDefault();
      if (historyIndex === -1) {
        return;
      }

      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setInput("");
        return;
      }

      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
    }
  };

  return (
    <section className="terminal" id="terminal" aria-label="Interactive terminal">
      <div className="terminal-header">
        <div className="terminal-controls">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="terminal-title">security-shell</div>
        <div className="terminal-status">{isBooting ? "booting" : "ready"}</div>
      </div>
      <div className="terminal-body">
        <div
          className="terminal-output"
          aria-live="polite"
          ref={outputRef}
        >
          {lines.map((line, index) => (
            <div
              key={`${line}-${index}`}
              className={line.startsWith("cyber@aayush") ? "command-line" : "output-line"}
            >
              {line || <span className="output-spacer" aria-hidden="true" />}
            </div>
          ))}
        </div>
        <form className="terminal-input" onSubmit={handleSubmit} autoComplete="off">
          <span className="prompt-label">cyber@aayush:~$</span>
          <input
            ref={inputRef}
            type="text"
            name="command"
            spellCheck="false"
            aria-label="Terminal command"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isBooting}
          />
        </form>
      </div>
    </section>
  );
}

export default Terminal;
