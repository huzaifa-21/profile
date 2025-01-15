"use client";
import { FC, useEffect } from "react";
import { motion, Variants, HTMLMotionProps, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props extends HTMLMotionProps<"div"> {
  text: string;
  delay?: number;
  replay?: boolean;
  duration?: number;
  center?: boolean;
}

const WavyText: FC<Props> = ({
  text,
  delay = 0,
  duration = 0.05,
  replay = true,
  center = false,
  ...props
}: Props) => {
  const controls = useAnimation();

  // Use `useInView` hook to trigger when the element is in view
  const [ref, inView] = useInView({
    threshold: 1, // Adjust the threshold if necessary
    triggerOnce: false, // Set this to true if you want the animation to trigger only once
  });

  useEffect(() => {
    if (inView) {
      // Start animation when element is in view
      controls.start("visible");
    } else {
      // Reset animation when the element goes out of view
      controls.start("hidden");
    }
  }, [inView, controls]);

  const letters = Array.from(text);

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      ref={ref}
      style={{
        display: "flex",
        overflow: "hidden",
        justifyContent: center ? "center" : "initial",
      }}
      variants={container}
      initial="hidden"
      animate={controls} // Using the animation controls to manage the animation state
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default WavyText;
