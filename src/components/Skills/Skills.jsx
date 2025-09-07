import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <motion.div
      className="text-center mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </motion.div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-6 justify-between">
      {SkillsInfo.map((category, index) => (
        <motion.div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:shadow-[0_0_25px_4px_rgba(130,69,236,0.5)] transition-shadow duration-500"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6 text-center">
            {category.title}
          </h3>

          {/* Skill Items */}
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center justify-center bg-transparent border-2 border-gray-700 rounded-3xl py-3 px-3 text-center cursor-pointer transition-transform duration-300 hover:scale-110 hover:border-purple-500 hover:shadow-[0_0_15px_3px_rgba(130,69,236,0.5)]"
                  whileHover={{ scale: 1.15 }}
                >
                  {skill.logo && (
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-8 h-8 sm:w-10 sm:h-10 mb-2"
                    />
                  )}
                  <span className="text-xs sm:text-sm text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </Tilt>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
