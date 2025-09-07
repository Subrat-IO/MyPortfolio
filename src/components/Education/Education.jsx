import React from "react";
import { education } from "../../constants"; // Ensure this is correctly structured

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[6vw] md:px-[10vw] lg:px-[15vw] font-sans bg-skills-gradient clip-path-custom-3 relative"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto font-medium">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white hidden sm:block"></div>

        {/* Education Items */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`mb-20 relative flex flex-col sm:flex-row items-center ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 sm:-translate-x-1/2 bg-white border-4 border-purple-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full z-20 flex items-center justify-center shadow-md">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`relative bg-gray-900 border border-white/20 rounded-xl shadow-lg shadow-purple-500/20 p-6 sm:p-8 backdrop-blur-md w-full sm:max-w-[500px] ${
                index % 2 === 0
                  ? "sm:ml-20 text-left"
                  : "sm:mr-20 text-left sm:text-right"
              } mt-20 sm:mt-0 transition-transform duration-300 hover:scale-105`}
            >
              {/* School Logo and Text */}
              <div className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center gap-6`}>
                <div className="w-20 h-16 rounded-md overflow-hidden bg-white">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  <h4 className="text-sm text-gray-300">{edu.school}</h4>
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-2 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
