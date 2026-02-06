import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const titles = {
  "/": "Aayush_Raj (); | Cyber Security Engineer",
  "/about": "About | Aayush Raj ();",
  "/projects": "Projects | Aayush Raj ();",
  "/certifications": "Certifications | Aayush Raj ();",
  "/contact": "Contact | Aayush Raj ();",
};

function Layout() {
  const location = useLocation();
  const baseUrl = import.meta.env.BASE_URL || "/";

  useEffect(() => {
    const title = titles[location.pathname] || titles["/"];
    document.title = title;
  }, [location.pathname]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="bg-video-wrap" aria-hidden="true">
        <video className="bg-video" autoPlay muted loop playsInline poster={`${baseUrl}assets/ar.jpeg`}>
          <source src={`${baseUrl}assets/hacker-terminal.webm`} type="video/webm" />
          <source src={`${baseUrl}assets/hacker-terminal.mp4`} type="video/mp4" />
        </video>
      </div>
      <div className="bg-grid" aria-hidden="true"></div>
      <div className="scanline" aria-hidden="true"></div>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </>
  );
}

export default Layout;
