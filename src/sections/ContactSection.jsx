import { useState, useRef } from "react";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import { identity } from "../data/careerProfile";

const contactInfo = [
  {
    icon: <FiMail size={22} />,
    label: "Email",
    value: identity.email,
    href: `mailto:${identity.email}`,
  },
  {
    icon: <FiMapPin size={22} />,
    label: "Location",
    value: identity.location,
    href: null,
  },
];

const contactSocials = [
  {
    icon: <FiGithub size={22} />,
    href: identity.github,
    label: "GitHub",
  },
  {
    icon: <FiLinkedin size={22} />,
    href: identity.linkedin,
    label: "LinkedIn",
  },
];

function ContactSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${identity.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.subject}`,
          _template: "box",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Connect"
        description="Open to internships, entry-level cybersecurity roles, SOC analyst work, VAPT opportunities, and security automation projects."
      />

      <div className="contact-layout">
        <ScrollReveal direction="left" className="contact-info-panel">
          <h3 className="contact-info-title">Get in Touch</h3>
          <p className="contact-info-desc">
            Recruiters, security teams, and collaborators can reach me directly
            for cybersecurity analyst, SOC, VAPT, threat intelligence, or
            security automation opportunities.
          </p>

          <div className="contact-details">
            {contactInfo.map((item) => (
              <div key={item.label} className="contact-detail">
                <div className="contact-detail-icon">{item.icon}</div>
                <div>
                  <span className="contact-detail-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="contact-detail-value">
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-detail-value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="contact-socials">
            {contactSocials.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="contact-social-icon"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="contact-form-panel">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form"
            autoComplete="off"
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Security opportunity or collaboration"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about the opportunity or project..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={`submit-btn ${status === "sending" ? "btn-sending" : ""} ${status === "success" ? "btn-success" : ""} ${status === "error" ? "btn-error" : ""}`}
              disabled={status === "sending"}
            >
              {status === "idle" && (
                <>
                  <FiSend size={18} />
                  <span>Send Message</span>
                </>
              )}
              {status === "sending" && (
                <>
                  <span className="btn-spinner" />
                  <span>Sending...</span>
                </>
              )}
              {status === "success" && (
                <>
                  <FiCheck size={18} />
                  <span>Message Sent!</span>
                </>
              )}
              {status === "error" && (
                <>
                  <FiAlertCircle size={18} />
                  <span>Failed - Try Again</span>
                </>
              )}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ContactSection;
