import { motion } from "framer-motion";

const MotionDiv = motion.div;

const directionVariants = {
  up: { hidden: { opacity: 1, y: 24 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 1, y: -24 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 1, x: -24 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 1, x: 24 }, visible: { opacity: 1, x: 0 } },
  fade: { hidden: { opacity: 1 }, visible: { opacity: 1 } },
};

function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}) {
  const variant = directionVariants[direction] || directionVariants.up;

  return (
    <MotionDiv
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      variants={variant}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}

export default ScrollReveal;
