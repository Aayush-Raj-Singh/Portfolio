import { useEffect, useRef, useState } from "react";
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
import { contactLimits, validateContactInput } from "../lib/contact";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

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
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const abortControllerRef = useRef(null);
  const resetTimerRef = useRef(null);

  useEffect(() => () => {
    abortControllerRef.current?.abort();
    window.clearTimeout(resetTimerRef.current);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (!Object.hasOwn(initialFormData, name)) {
      return;
    }

    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validation = validateContactInput(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    abortControllerRef.current?.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;
    setStatus("sending");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${identity.email}`, {
        method: "POST",
        credentials: "omit",
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...validation.values,
          _subject: `Portfolio Contact: ${validation.values.subject}`,
          _template: "box",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData(initialFormData);
        setErrors({});
      } else {
        throw new Error("Form submission failed");
      }
      window.clearTimeout(resetTimerRef.current);
      resetTimerRef.current = window.setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      if (error?.name === "AbortError") {
        return;
      }
      setStatus("error");
    } finally {
      if (abortControllerRef.current === controller) {
        abortControllerRef.current = null;
      }
    }
  };

  return (
    <section className="contact-section">
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
                rel="noopener noreferrer"
                aria-label={link.label}
                className="contact-social-icon"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="contact-form-panel">
          <form onSubmit={handleSubmit} className="contact-form">
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
                  minLength="2"
                  maxLength={contactLimits.name}
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                />
                {errors.name && <p className="form-error" id="contact-name-error">{errors.name}</p>}
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
                  maxLength={contactLimits.email}
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                />
                {errors.email && <p className="form-error" id="contact-email-error">{errors.email}</p>}
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
                minLength="3"
                maxLength={contactLimits.subject}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "contact-subject-error" : undefined}
              />
              {errors.subject && <p className="form-error" id="contact-subject-error">{errors.subject}</p>}
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
                minLength="10"
                maxLength={contactLimits.message}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
              />
              {errors.message && <p className="form-error" id="contact-message-error">{errors.message}</p>}
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
            {status === "success" && (
              <p className="form-status form-status-success" role="status">
                Thanks—your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="form-status form-status-error" role="status">
                The message could not be sent. Please <a href={`mailto:${identity.email}`}>email Aayush directly</a> instead.
              </p>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ContactSection;
