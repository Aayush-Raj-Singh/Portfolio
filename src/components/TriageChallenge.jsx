import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiCheck, FiRefreshCw, FiShield, FiX } from "react-icons/fi";

const MotionDiv = motion.div;

const challenges = [
  {
    id: 1,
    title: "SQL injection detection",
    scenario:
      "A web application's Apache access logs show the following entries. One contains a SQL injection attempt.",
    logs: [
      { num: 1, text: "192.168.1.45  GET  /index.html              200  0.023s" },
      { num: 2, text: "10.0.0.12     GET  /api/users                200  0.089s" },
      { num: 3, text: "172.16.0.8    GET  /login?id=1' OR '1'='1    403  0.002s" },
      { num: 4, text: "192.168.1.45  POST /contact                  200  0.145s" },
      { num: 5, text: "10.0.0.12     GET  /favicon.ico              200  0.011s" },
    ],
    answer: 3,
    explanation:
      "Line 3 contains a classic SQL injection payload. The single quotes break out of the expected query and the OR condition can always evaluate to true, potentially bypassing authentication.",
  },
  {
    id: 2,
    title: "XSS attack identification",
    scenario:
      "Your SIEM flagged these HTTP request parameters. Identify the cross-site scripting attempt.",
    logs: [
      { num: 1, text: "GET /search?q=cybersecurity+tools            200" },
      { num: 2, text: "GET /profile?user=aayush_raj                 200" },
      { num: 3, text: 'POST /feedback  body={rating:5,msg:"great"}  200' },
      { num: 4, text: "GET /search?q=<script>alert(document.cookie)</script>  200" },
      { num: 5, text: "GET /about                                   200" },
    ],
    answer: 4,
    explanation:
      "Line 4 injects a script tag into the search query. If reflected without sanitization, the browser could execute the payload and expose cookies or session data.",
  },
  {
    id: 3,
    title: "Privilege escalation indicator",
    scenario:
      "Review these Linux syslog entries from a production server. One indicates a potential privilege escalation attempt.",
    logs: [
      { num: 1, text: "sshd[4821]: Accepted publickey for deploy    port 22" },
      { num: 2, text: "CRON[5012]: (www-data) CMD (/usr/bin/backup.sh)" },
      { num: 3, text: "sudo[6134]: www-data : TTY=pts/2 ; COMMAND=/bin/bash" },
      { num: 4, text: "systemd[1]: Started Daily log rotation." },
      { num: 5, text: "kernel: [UFW BLOCK] IN=eth0 SRC=10.0.0.5" },
    ],
    answer: 3,
    explanation:
      "Line 3 shows the web-server user attempting to launch a privileged shell. That is a strong escalation signal and should trigger immediate investigation.",
  },
];

function TriageChallenge() {
  const [isOpen, setIsOpen] = useState(false);
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState(null);

  const challenge = challenges[challengeIndex];

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(Number.parseInt(userAnswer, 10) === challenge.answer ? "correct" : "wrong");
  };

  const handleReset = () => {
    setResult(null);
    setUserAnswer("");
    setChallengeIndex((current) => (current + 1) % challenges.length);
  };

  const handleClose = () => {
    setIsOpen(false);
    setResult(null);
    setUserAnswer("");
  };

  const scrollTo = (id) => {
    handleClose();
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 220);
  };

  return (
    <>
      <button className="triage-trigger" onClick={() => setIsOpen(true)}>
        <FiShield size={18} />
        <span>Test Your Security Instinct</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            className="triage-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <MotionDiv
              className="triage-modal"
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 30 }}
              transition={{ type: "spring", damping: 24 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="triage-header">
                <div className="triage-alert-badge">
                  <span className="triage-alert-dot" />
                  LIVE ALERT - SOC TRIAGE CHALLENGE
                </div>
                <button
                  className="triage-close"
                  onClick={handleClose}
                  aria-label="Close challenge"
                >
                  <FiX size={20} />
                </button>
              </div>

              {result === null && (
                <>
                  <h3 className="triage-title">{challenge.title}</h3>
                  <p className="triage-scenario">{challenge.scenario}</p>

                  <div className="triage-logs">
                    {challenge.logs.map((log) => (
                      <button
                        key={log.num}
                        type="button"
                        className={`triage-log-line ${userAnswer === String(log.num) ? "log-selected" : ""}`}
                        onClick={() => setUserAnswer(String(log.num))}
                      >
                        <span className="log-num">{log.num}</span>
                        <span className="log-text">{log.text}</span>
                      </button>
                    ))}
                  </div>

                  <form className="triage-form" onSubmit={handleSubmit}>
                    <div className="triage-input-group">
                      <span className="triage-prompt">{">"} Suspicious line #:</span>
                      <input
                        type="number"
                        min="1"
                        max="5"
                        value={userAnswer}
                        onChange={(event) => setUserAnswer(event.target.value)}
                        placeholder="_"
                        required
                        className="triage-input"
                      />
                    </div>
                    <button type="submit" className="triage-submit">
                      <FiShield size={16} />
                      Submit triage
                    </button>
                  </form>
                </>
              )}

              {result === "correct" && (
                <MotionDiv
                  className="triage-result triage-correct"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="result-icon result-success">
                    <FiCheck size={32} />
                  </div>
                  <h3 className="result-title">Threat neutralized</h3>
                  <p className="result-text">
                    You correctly identified the threat on line {challenge.answer}.
                  </p>
                  <div className="result-explanation">
                    <p>{challenge.explanation}</p>
                  </div>
                  <p className="result-pitch">
                    Fast triage, clear escalation, and practical explanations are
                    exactly the workflows I want to bring to a security team.
                  </p>
                  <div className="result-actions">
                    <button
                      className="result-btn result-btn-primary"
                      onClick={() => scrollTo("contact")}
                    >
                      <span>Hire Me</span>
                      <FiArrowRight size={16} />
                    </button>
                    <button
                      className="result-btn result-btn-secondary"
                      onClick={handleReset}
                    >
                      <FiRefreshCw size={16} />
                      <span>Next challenge</span>
                    </button>
                  </div>
                </MotionDiv>
              )}

              {result === "wrong" && (
                <MotionDiv
                  className="triage-result triage-wrong"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="result-icon result-fail">
                    <FiX size={32} />
                  </div>
                  <h3 className="result-title">Missed threat</h3>
                  <p className="result-text">
                    The threat was on line {challenge.answer}.
                  </p>
                  <div className="result-explanation">
                    <p>{challenge.explanation}</p>
                  </div>
                  <p className="result-pitch">
                    Security work rewards pattern recognition, disciplined
                    investigation, and repetition. That is why my portfolio
                    emphasizes hands-on labs and project-based learning.
                  </p>
                  <div className="result-actions">
                    <button
                      className="result-btn result-btn-primary"
                      onClick={handleReset}
                    >
                      <FiRefreshCw size={16} />
                      <span>Try another</span>
                    </button>
                    <button
                      className="result-btn result-btn-secondary"
                      onClick={() => scrollTo("projects")}
                    >
                      <span>See my projects</span>
                      <FiArrowRight size={16} />
                    </button>
                  </div>
                </MotionDiv>
              )}
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
}

export default TriageChallenge;
