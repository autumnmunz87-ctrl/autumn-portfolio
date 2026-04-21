"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="hero w-full text-left"
    >
      <h1 className="hero-title">
        Autumn Munz
      </h1>
      <p className="hero-subheader text-subheading-1 leading-relaxed">
        Designing solutions that unite groups and make tasks easier.
      </p>
    </motion.section>
  );
}
