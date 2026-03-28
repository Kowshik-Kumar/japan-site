"use client";

import { motion } from "framer-motion";

const petals = [
  { left: "8%", size: 8, delay: 0.2, duration: 16 },
  { left: "16%", size: 10, delay: 1.1, duration: 14 },
  { left: "24%", size: 7, delay: 2.4, duration: 15 },
  { left: "33%", size: 9, delay: 1.8, duration: 17 },
  { left: "42%", size: 6, delay: 0.5, duration: 13 },
  { left: "51%", size: 8, delay: 3.1, duration: 15 },
  { left: "61%", size: 9, delay: 2.2, duration: 16 },
  { left: "70%", size: 7, delay: 0.9, duration: 12 },
  { left: "79%", size: 10, delay: 2.8, duration: 14 },
  { left: "88%", size: 8, delay: 1.7, duration: 16 },
];

export function FloatingPetals() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {petals.map((petal, index) => (
        <motion.span
          key={`${petal.left}-${index}`}
          className="absolute top-[-8%] rounded-full bg-[var(--sakura)]/40 blur-[1px]"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size * 0.7,
            borderRadius: "65% 35% 60% 40%",
          }}
          animate={{
            y: ["0vh", "108vh"],
            x: [0, 18, -10, 14, 0],
            rotate: [0, 80, 140, 260],
            opacity: [0, 0.8, 0.55, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      ))}
    </div>
  );
}
