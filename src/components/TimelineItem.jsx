import { motion } from "framer-motion";

const MotionDiv = motion.div;

function TimelineItem({ item, index = 0 }) {
  const isEven = index % 2 === 0;

  return (
    <MotionDiv
      className={`timeline-item ${isEven ? "timeline-left" : "timeline-right"}`}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="timeline-dot" />
      <div className="timeline-content">
        <span className="timeline-date">{item.date}</span>
        <h3 className="timeline-title">{item.title}</h3>
        <p className="timeline-desc">{item.description}</p>
        {item.badge && <span className="timeline-badge">{item.badge}</span>}
      </div>
    </MotionDiv>
  );
}

export default TimelineItem;
