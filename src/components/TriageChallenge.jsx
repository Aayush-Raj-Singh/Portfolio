import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiShield, FiCheck, FiX, FiRefreshCw, FiArrowRight } from "react-icons/fi";

const challenges = [
  {
    id: 1,
    title: "SQL Injection Detection",
    scenario: "A web application's Apache access logs show the following entries. One contains a SQL injection attempt.",
    logs: [
      { num: 1, text: '192.168.1.45  GET  /index.html              200  0.023s' },
      { num: 2, text: '10.0.0.12     GET  /api/users                200  0.089s' },
      { num: 3, text: "172.16.0.8    GET  /login?id=1' OR '1'='1    403  0.002s" },
      { num: 4, text: '192.168.1.45  POST /contact                  200  0.145s' },
      { num: 5, text: '10.0.0.12     GET  /favicon.ico              200  0.011s' },
    ],
    answer: 3,
    explanation: "Line 3 contains a classic SQL injection payload: `id=1' OR '1'='1`. The single quotes break out of the SQL query, and the OR condition always evaluates to true, potentially bypassing authentication. The 403 response suggests a WAF may have blocked it.",
  },
  {
    id: 2,
    title: "XSS Attack Identification",
    scenario: "Your SIEM flagged these HTTP request parameters. Identify the Cross-Site Scripting (XSS) attempt.",
    logs: [
      { num: 1, text: 'GET /search?q=cybersecurity+tools            200' },
      { num: 2, text: 'GET /profile?user=aayush_raj                 200' },
      { num: 3, text: 'POST /feedback  body={rating:5,msg:"great"}  200' },
      { num: 4, text: 'GET /search?q=<script>alert(document.cookie)</script>  200' },
      { num: 5, text: 'GET /about                                   200' },
    ],
    answer: 4,
    explanation: "Line 4 injects a `<script>` tag via the search query parameter. If the application reflects this input without sanitization, it will execute JavaScript in the victim's browser — stealing cookies or session tokens. This is a Reflected XSS attack.",
  },
  {
    id: 3,
    title: "Privilege Escalation Indicator",
    scenario: "Review these Linux syslog entries from a production server. One indicates a potential privilege escalation attempt.",
    logs: [
      { num: 1, text: 'sshd[4821]: Accepted publickey for deploy    port 22' },
      { num: 2, text: 'CRON[5012]: (www-data) CMD (/usr/bin/backup.sh)' },
      { num: 3, text: 'sudo[6134]: www-data : TTY=pts/2 ; COMMAND=/bin/bash' },
      { num: 4, text: 'systemd[1]: Started Daily log rotation.' },
      { num: 5, text: 'kernel: [UFW BLOCK] IN=eth0 SRC=10.0.0.5' },
    ],
    answer: 3,
    explanation: "Line 3 shows `www-data` (a low-privilege web server user) running `sudo /bin/bash` — attempting to get a root shell. Web service accounts should never need interactive shell access. This is a classic privilege escalation indicator requiring immediate investigation.",
  },
];

function TriageChallenge() {
  const [isOpen, setIsOpen] = useState(false);
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState(null); // null | 'correct' | 'wrong'

  const challenge = challenges[challengeIndex];

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsed = parseInt(userAnswer, 10);
    if (parsed === challenge.answer) {
      setResult("correct");
    } else {
      setResult("wrong");
    }
  };

  const handleReset = () => {
    setResult(null);
    setUserAnswer("");
    setChallengeIndex((prev) => (prev + 1) % challenges.length);
  };

  const handleClose = () => {
    setIsOpen(false);
    setResult(null);
    setUserAnswer("");
  };

  const scrollToContact = () => {
    handleClose();
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const scrollToProjects = () => {
    handleClose();
    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <button className="triage-trigger" onClick={() => setIsOpen(true)}>
        <FiShield size={18} />
        <span>Test Your Security Instinct</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="triage-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="triage-modal"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="triage-header">
                <div className="triage-alert-badge">
                  <span className="triage-alert-dot" />
                  LIVE ALERT — SOC TRIAGE CHALLENGE
                </div>
                <button className="triage-close" onClick={handleClose}>
                  <FiX size={20} />
                </button>
              </div>

              {result === null && (
                <>
                  <h3 className="triage-title">{challenge.title}</h3>
                  <p className="triage-scenario">{challenge.scenario}</p>

                  <div className="triage-logs">
                    {challenge.logs.map((log) => (
                      <div
                        key={log.num}
                        className={`triage-log-line ${userAnswer === String(log.num) ? "log-selected" : ""}`}
                        onClick={() => setUserAnswer(String(log.num))}
                      >
                        <span className="log-num">{log.num}</span>
                        <span className="log-text">{log.text}</span>
                      </div>
                    ))}
                  </div>

                  <form className="triage-form" onSubmit={handleSubmit}>
                    <div className="triage-input-group">
                      <span className="triage-prompt">{"> "} Suspicious line #:</span>
                      <input
                        type="number"
                        min="1"
                        max="5"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="_"
                        required
                        className="triage-input"
                      />
                    </div>
                    <button type="submit" className="triage-submit">
                      <FiShield size={16} />
                      Submit Triage
                    </button>
                  </form>
                </>
              )}

              {result === "correct" && (
                <motion.div
                  className="triage-result triage-correct"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="result-icon result-success">
                    <FiCheck size={32} />
                  </div>
                  <h3 className="result-title">🎯 THREAT NEUTRALIZED</h3>
                  <p className="result-text">
                    You correctly identified the threat on line {challenge.answer}.
                  </p>
                  <div className="result-explanation">
                    <p>{challenge.explanation}</p>
                  </div>
                  <p className="result-pitch">
                    This is exactly the kind of triage I do daily.
                    Let's talk about how I can protect your systems.
                  </p>
                  <div className="result-actions">
                    <button className="result-btn result-btn-primary" onClick={scrollToContact}>
                      <span>Hire Me</span>
                      <FiArrowRight size={16} />
                    </button>
                    <button className="result-btn result-btn-secondary" onClick={handleReset}>
                      <FiRefreshCw size={16} />
                      <span>Next Challenge</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {result === "wrong" && (
                <motion.div
                  className="triage-result triage-wrong"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="result-icon result-fail">
                    <FiX size={32} />
                  </div>
                  <h3 className="result-title">❌ MISSED THREAT</h3>
                  <p className="result-text">
                    The threat was on line {challenge.answer}.
                  </p>
                  <div className="result-explanation">
                    <p>{challenge.explanation}</p>
                  </div>
                  <p className="result-pitch">
                    Security requires sharp eyes — I've trained mine through
                    200+ lab hours and real-world projects. Let me show you.
                  </p>
                  <div className="result-actions">
                    <button className="result-btn result-btn-primary" onClick={handleReset}>
                      <FiRefreshCw size={16} />
                      <span>Try Another</span>
                    </button>
                    <button className="result-btn result-btn-secondary" onClick={scrollToProjects}>
                      <span>See My Projects</span>
                      <FiArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default TriageChallenge;
