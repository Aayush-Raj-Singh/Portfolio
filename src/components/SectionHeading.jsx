import ScrollReveal from "./ScrollReveal";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <ScrollReveal className="section-heading">
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
      <div className="section-divider" />
    </ScrollReveal>
  );
}

export default SectionHeading;
