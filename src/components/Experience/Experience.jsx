import React from "react";
import { experiences } from "../../constants"; // Make sure this is correct

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[6vw] md:px-[10vw] lg:px-[15vw] font-sans bg-skills-gradient clip-path-custom-2 relative"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto font-medium">
          A collection of my work experience and the roles I have taken in
          various organizations.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white hidden sm:block"></div>

        {/* Experience Items */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`mb-20 relative flex flex-col sm:flex-row items-center ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 sm:-translate-x-1/2 bg-white border-4 border-purple-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full z-20 flex items-center justify-center shadow-md">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Experience Card */}
            <div
              className={`relative bg-gray-900 border border-white/20 rounded-xl shadow-lg shadow-purple-500/20 p-6 sm:p-8 backdrop-blur-md w-full sm:max-w-[500px] ${
                index % 2 === 0
                  ? "sm:ml-20 text-left"
                  : "sm:mr-20 text-left sm:text-right"
              } mt-20 sm:mt-0 transition-transform duration-300 hover:scale-105`}
            >
              {/* Role, Company & Logo */}
              <div
                className={`flex items-center gap-6 ${
                  index % 2 !== 0 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm text-gray-300">{experience.company}</h4>
                  <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-400">{experience.desc}</p>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#8245ec] text-gray-300 px-3 py-1 text-xs sm:text-sm rounded-md mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
