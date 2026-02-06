function Contact() {
  return (
    <main className="page min-h-screen" id="main">
      <section className="page-hero">
        <p className="eyebrow">// Contact</p>
        <h1 className="page-title glitch" data-text="Contact Aayush Raj">
          Contact Aayush Raj
        </h1>
        <h2 className="page-subtitle">Let’s connect for security roles, projects, and collaborations.</h2>
        <p className="page-intro">
          I’m open to internships, entry-level cyber security roles, and collaborative security automation projects.
          Reach out via the form or connect through any platform below.
        </p>
      </section>

      <section className="panel contact-grid">
        <article className="contact-card">
          <div className="panel-title">Direct Channels</div>
          <p>Primary contact details for recruiters and security teams.</p>
          <ul className="contact-list">
            <li>
              Email: <a href="mailto:aayush.raj@myyahoo.com">aayush.raj@myyahoo.com</a>
            </li>
          </ul>
        </article>
        <form className="contact-form" action="#" method="post">
          <div className="panel-title">Send a Message</div>
          <div className="form-field">
            <label htmlFor="name">Full Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" placeholder="you@email.com" required />
          </div>
          <div className="form-field">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" placeholder="Security opportunity" required />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Share details about the opportunity"
              required
            ></textarea>
          </div>
          <div className="form-actions">
            <button className="btn primary" type="submit">
              Transmit Message
            </button>
            <span className="form-note">This form is UI-only until a backend is connected.</span>
          </div>
        </form>
      </section>

      <section className="panel">
        <div className="panel-title">Social Presence</div>
        <div className="social-icons" aria-label="Social profiles">
          <a
            className="social-icon tryhackme"
            href="https://tryhackme.com/p/Abhayaprabha"
            target="_blank"
            rel="noreferrer"
            aria-label="TryHackMe"
          >
            <img src="https://assets.tryhackme.com/img/logo/tryhackme_logo_full.svg" alt="TryHackMe" />
          </a>
          <a
            className="social-icon github"
            href="https://github.com/Aayush-Raj-Singh"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 0 1 6 0c2.28-1.56 3.29-1.24 3.29-1.24.66 1.64.25 2.86.12 3.16.77.85 1.23 1.93 1.23 3.25 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22 0 1.6-.02 2.88-.02 3.27 0 .32.22.69.83.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            className="social-icon linkedin"
            href="https://www.linkedin.com/in/aayush-raj-77a1bb237"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0zM5.337 7.433a2.062 2.062 0 1 1 0-4.123 2.062 2.062 0 0 1 0 4.123zM6.813 20.452H3.861V9h2.952v11.452zM20.447 20.452h-3.554v-5.569c0-1.328-.027-3.038-1.852-3.038-1.853 0-2.136 1.445-2.136 2.939v5.668H9.35V9h3.414v1.561h.046c.477-.9 1.636-1.85 3.367-1.85 3.598 0 4.262 2.368 4.262 5.455v6.286z" />
            </svg>
          </a>
          <a
            className="social-icon instagram"
            href="https://www.instagram.com/abhayaprabha/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm9.75 2.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
            </svg>
          </a>
          <a
            className="social-icon twitter"
            href="https://twitter.com/AayushR19149133"
            target="_blank"
            rel="noreferrer"
            aria-label="X / Twitter"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2H21.52l-7.248 8.292L22.5 22h-6.5l-5.1-6.596L5.2 22H1.9l7.75-8.86L1.5 2h6.6l4.6 6.034L18.244 2z" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;

