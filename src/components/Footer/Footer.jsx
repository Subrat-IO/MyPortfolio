import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full">
      {/* Full-width Glassmorphised Footer */}
      <div className="w-full bg-white/10 backdrop-blur-xl border-t border-white/20 shadow-inner shadow-purple-900/20 p-8 flex flex-col items-center gap-6 opacity-20 transition-all duration-500 hover:opacity-100">
        
        {/* Logo / Name */}
        <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 tracking-wide">
          Subrat Sethi
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 mt-4">
          {[ 
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="text-white text-sm sm:text-base hover:bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text bg-transparent transition-all transform hover:scale-110 px-3 py-1 rounded-lg"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/subratroy.subrat.18/" },
            { icon: <FaTwitter />, link: "https://x.com/Subrat0302" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/subrat-sethi-941b17217/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/undefined_soul_0302/" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-purple-600 transition-transform transform hover:scale-125 text-xl"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-white text-sm text-center mt-4">
          © 2025 Subrat Sethi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
