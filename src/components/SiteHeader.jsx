import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
];

function SiteHeader() {
  const baseUrl = import.meta.env.BASE_URL || "/";
  return (
    <header className="site-header">
      <div className="logo-block">
        <img className="logo-image" src={`${baseUrl}assets/pp.jpg`} alt="Aayush Raj portrait" />
        <div className="logo-text">
          <div className="logo">ARS();</div>
          <span className="logo-sub">SOC-L1</span>
        </div>
      </div>
      <nav className="site-nav" aria-label="Primary">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="nav-meta" aria-label="System status">
        <span className="meta-title">System</span>
        <span className="meta-item">Status: Online</span>
        <span className="meta-item">Role: Blue Team</span>
        <span className="meta-item">Region: Bihar, India</span>
      </div>
    </header>
  );
}

export default SiteHeader;
