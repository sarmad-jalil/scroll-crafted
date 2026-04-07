import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number; // negative = slower, positive = faster
  offset?: number;
}

/**
 * ParallaxSection: Creates a parallax scrolling effect.
 * Uses Framer Motion's useScroll + useTransform to map scroll progress
 * to a translateY value, making content move at different speeds.
 */
const ParallaxSection = ({
  children,
  className = "",
  speed = 0.3,
  offset = 100,
}: ParallaxSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset * speed, -offset * speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
