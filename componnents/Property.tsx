"use client";
import React from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  des: string;
  image: string;
  tech: string[];
  live: string;
  github: string;
}

interface FeaturedWorkProps {
  projects: Project[];
}

function Property({ projects }: FeaturedWorkProps) {
  const stats = [
    { title: "Years Experience", value: "3+" },
    { title: "Completed Projects", value: `${projects.length}+` },
    { title: "Happy Clients", value: `${projects.length}+` },
    { title: "Client Satisfaction", value: "100%" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" as const },
    },
  };

  return (
    <div className="w-full px-4 py-16 sm:py-20">
      <motion.div
        className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="flex min-h-35 flex-col items-center justify-center rounded-2xl border border-[#e5e7eb] bg-white px-4 py-6 text-center shadow-sm"
          >
            <h3 className="mb-2 text-2xl font-bold text-[#4b40e0] sm:text-3xl">
              {item.value}
            </h3>
            <p className="text-sm font-medium text-gray-600">{item.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Property;
