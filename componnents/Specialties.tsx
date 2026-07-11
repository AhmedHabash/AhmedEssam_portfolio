"use client";
import { CodeXmlIcon, HexagonIcon, RocketIcon } from "lucide-react";
import { motion } from "framer-motion";
export const coreSpecialties = [
  {
    icon: <CodeXmlIcon />,
    title: "Front-end Development",
    description:
      "Building responsive and high-performance web applications using React, Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    icon: <HexagonIcon />,
    title: "Back-end Development",
    description:
      "Developing secure RESTful APIs with Node.js, Express.js, MongoDB, JWT Authentication, and scalable backend architecture.",
  },
  {
    icon: <RocketIcon />,
    title: "Full Stack Solutions",
    description:
      "Integrating frontend and backend seamlessly while focusing on performance, maintainability, and user experience.",
  },
];

function Specialties() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="w-full py-24 bg-[#f3f5f6]">
      <div className="w-[85%] max-w-6xl m-auto text-center">
        <motion.h1
          className="relative inline-block m-auto text-3xl font-bold after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[2px] after:w-[80%] after:bg-[#4b40e0] after:content-[''] "
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Core Specialties
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {coreSpecialties.map((item, i) => {
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 justify-center items-center text-center gap-4"
                whileHover={{ y: -8 }}
              >
                <div className="p-4 bg-indigo-50 rounded-full text-[#4b40e0] [&>svg]:w-8 [&>svg]:h-8">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2 text-gray-900">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 [word-spacing:2px] tracking-tight text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Specialties;
