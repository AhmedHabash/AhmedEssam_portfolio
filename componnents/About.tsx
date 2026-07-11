"use client";

import Image from "next/image";
import { FolderCode, Palette, Users } from "lucide-react";
import FadeInSection from "./FadeInSection";
import { motion } from "framer-motion";
const tecdata = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "mongodb",
  "Git",
  "GitHub",
];
const tools = ["Figma", "postman", "vercel", "canva"];
const soft_skills = [
  "teamwork",
  "leadership",
  "communication",
  "problem solving",
  "time management",
];
const about_des = [
  "As a Full Stack MERN Developer, I specialize in building digital products that are both scalable and thoughtfully designed. My journey started with a simple curiosity: how can complex systems be made intuitive for real people to use.",
  "From building Studivo — an AI-powered marketplace for university students — to deploying full-stack applications with real-world authentication and data flows, I bring the same principle to every project: functionality and design should never compete, they should complement each other.",
  "Currently deepening my expertise through Egypt's NTI Full Stack scholarship, I'm always looking for the next challenge that pushes my skills further.",
];
function About() {
  return (
    <section id="about" className="capitalize w-full my-26">
      <div className="w-[80%] m-auto text-center">
        <FadeInSection delay={0.2}>
          <h1 className="relative inline-block text-3xl font-bold after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:h-[2px] after:w-[80%] after:bg-[#4b40e0] after:content-['']">
            About Me & Experience
          </h1>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-20">
          <div className="image">
            <div className="overflow-hidden  group rounded-xl  relative border-2 border-[#4b40e0] mx-auto text-center ">
              <FadeInSection delay={0.4}>
                <Image
                  className="object-cover my-4 block m-auto transition-transform rounded-2xl duration-500 group border-2 border-[#4b40e0]"
                  src="/me2.jpeg"
                  alt="Ahmed Essam"
                  width={400}
                  height={350}
                />
              </FadeInSection>
            </div>

            <div className="text-start mt-5 w-full">
              {about_des.map((item, i) => {
                return (
                  <p className="mb-4 text-sm text-gray-800 " key={i}>
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
          <div>
            <div className="tec mb-2">
              <div className="flex items-center gap-2 mb-5">
                <FolderCode size={20} color="#4b40e0" />
                <h1 className="text-2xl font-bold">technalogies & Skills</h1>
              </div>

              <div className="flex flex-wrap gap-3">
                {tecdata.map((item, i) => {
                  return (
                    <motion.span
                      className="bg-[#e2dfff] text-[#4b40e0] p-2 rounded-full"
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {item}
                    </motion.span>
                  );
                })}
              </div>
            </div>
            <div className="tools mb-2">
              <div className="flex items-center gap-4 mb-5">
                <Palette size={20} color="#4b40e0" />
                <h1 className="text-2xl font-bold  text-start"> tools</h1>
              </div>
              <div className="flex flex-wrap gap-3 text-start">
                {tools.map((item, i) => {
                  return (
                    <motion.span
                      className="bg-[#e2dfff] text-[#4b40e0] p-2 rounded-full"
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {item}
                    </motion.span>
                  );
                })}
              </div>
            </div>
            <div className="soft mb-2">
              <div className="flex items-center gap-4 mb-5">
                <Users size={20} color="#4b40e0" />
                <h1 className="text-2xl font-bold  text-start">soft skills</h1>
              </div>
              <div className="flex flex-wrap gap-3">
                {soft_skills.map((item, i) => {
                  return (
                    <motion.span
                      className="bg-[#e2dfff] text-[#4b40e0] p-2 rounded-full"
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {item}
                    </motion.span>
                  );
                })}
              </div>
              <motion.div
                className="capitalize text-center mt-6 py-4 rounded-xl bg-[#131b2e]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-2xl  font-bold text-[#f6f8fb]">
                  lets work together
                </h1>
                <h2 className="  text-[#f6f8fb] opacity-55">
                  ready to build something amazing?
                </h2>

                <motion.a
                  href="/Ahmed_Essam_AbdElaziz.pdf"
                  download="Ahmed_Essam_AbdElaziz.pdf"
                  className="bg-[#ffffff] inline-block capitalize font-semibold mt-4 cursor-pointer w-[80%] hover:bg-[rgba(255,255,255,0.8)] transition duration-300 text-[#131b2e] px-2 py-1.5 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  get in toutch
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
