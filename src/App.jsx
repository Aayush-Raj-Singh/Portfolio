import { createElement, lazy, Suspense } from "react";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import ScrollProgress from "./components/ScrollProgress";
import HeroSection from "./sections/HeroSection";
import ErrorBoundary from "./components/ErrorBoundary";

const AboutSection = lazy(() => import("./sections/AboutSection"));
const SkillsSection = lazy(() => import("./sections/SkillsSection"));
const ProjectsSection = lazy(() => import("./sections/ProjectsSection"));
const SocialProofSection = lazy(() => import("./sections/SocialProofSection"));
const CyberLabsSection = lazy(() => import("./sections/CyberLabsSection"));
const ExperienceSection = lazy(() => import("./sections/ExperienceSection"));
const ContactSection = lazy(() => import("./sections/ContactSection"));

function LazySection({ id, Component }) {
  return (
    <div id={id} className="section-slot">
      <Suspense fallback={<div className="section-loader" role="status">Loading section...</div>}>
        {createElement(Component)}
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ScrollProgress />
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <LazySection id="about" Component={AboutSection} />
        <LazySection id="skills" Component={SkillsSection} />
        <LazySection id="projects" Component={ProjectsSection} />
        <LazySection id="social-proof" Component={SocialProofSection} />
        <LazySection id="cyber-labs" Component={CyberLabsSection} />
        <LazySection id="experience" Component={ExperienceSection} />
        <LazySection id="contact" Component={ContactSection} />
      </main>
      <SiteFooter />
    </ErrorBoundary>
  );
}

export default App;
