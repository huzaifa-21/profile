"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

type AnimatedSection = {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
};

const AnimatedSection = ({ children, delay = 0 }: AnimatedSection) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });

  const variants: Variants = {
    hidden: { opacity: 0, y: 40 },
    spring: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("spring");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};
export default AnimatedSection;
