"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <main
      id="hero"
      className="w-full h-screen flex flex-col justify-center items-center bg-[#f6f8fb] "
    >
      <motion.div
        className="max-w-[500px] px-6 capitalize"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl font-bold text-[#191c1e] mb-4"
        >
          hi I'm ahmed essam a{" "}
          <span className="text-[#4b40e0]">Creative Developer</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="text-[16px] mb-6">
          I build architectural digital experiences that balance rigorous
          technical structure with high-end creative flair. Specializing in
          high-performance web applications and fluid UI/UX systems.
        </motion.p>
        <motion.div variants={itemVariants} className="flex gap-4">
          <motion.a
            href="#projects"
            className="bg-[#4b40e0] sm:text-sm text-white px-2 py-1.5 rounded-3xl hover:scale-105 font-bold active:scale-95 cursor-pointer transition-transform duration-300 text-center flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            view my work <ArrowRight className="inline size-5 ml-2" />
          </motion.a>
          <motion.a
            href="#about"
            className="bg-[#ffffff] border sm:text-[10px] border-[#4b40e0] text-[#4b40e0] px-4  py-1.5 rounded-3xl hover:scale-105 font-bold active:scale-95 cursor-pointer transition-transform duration-300 text-center flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read about me <ArrowRight className="inline size-5 ml-2" />
          </motion.a>
        </motion.div>
      </motion.div>
    </main>
  );
}

export default Hero;
