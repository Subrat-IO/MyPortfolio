import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import profile2 from "../../assets/profile2.jpeg";

// Variants for staggered animation
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, // Delay between child animations
    },
  },
};

const fadeIn = (direction = "up", distance = 50, delay = 0) => {
  let x = 0, y = 0;
  if (direction === "left") x = -distance;
  if (direction === "right") x = distance;
  if (direction === "up") y = distance;
  if (direction === "down") y = -distance;

  return {
    hidden: { opacity: 0, x, y },
    show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, delay } },
  };
};

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <motion.div
        className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Side */}
        <motion.div
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
          variants={fadeIn("left", 60)}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight"
            variants={fadeIn("up", 30, 0.1)}
          >
            Hi, I am
          </motion.h1>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
            variants={fadeIn("up", 30, 0.2)}
          >
            Subrat Sethi
          </motion.h2>

          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight"
            variants={fadeIn("up", 30, 0.3)}
          >
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "Fullstack Developer",
                "Web Developer",
                "Front-End Developer",
                "Coder",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span
                  style={{
                    color: `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`,
                  }}
                >
                  {cursor}
                </span>
              )}
              displayTextRenderer={(text, i) => {
                return (
                  <span
                    style={{
                      color: `hsl(${(i * 90) % 360}, 80%, 60%)`,
                      fontWeight: "bold",
                    }}
                  >
                    {text}
                  </span>
                );
              }}
            />
          </motion.h3>

          <motion.p
            className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed"
            variants={fadeIn("up", 30, 0.4)}
          >
            Full Stack Developer specializing in the MERN stack, with hands-on
            experience building scalable web applications, RESTful APIs, and
            responsive UIs. Proficient in React, Node.js, Express, MongoDB, and
            MySQL, with a strong grasp of cloud deployment (Render, cPanel,
            Docker) and modern development practices. Known for writing clean,
            efficient code and collaborating in Agile environments to deliver
            impactful digital solutions.
          </motion.p>

          <motion.a
            href="https://drive.google.com/file/d/1l3E4vZUfbp-1yxPU9PN5QXAsujZ_iQdp/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
            variants={fadeIn("up", 30, 0.5)}
          >
            DOWNLOAD CV
          </motion.a>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          variants={fadeIn("right", 60)}
        >
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <motion.img
              src={profile2}
              alt="Subrat Sethi"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            />
          </Tilt>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
