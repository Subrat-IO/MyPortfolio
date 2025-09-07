import React, { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiBook,
  FiBriefcase,
  FiLayers,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "about", icon: <FiUser size={20} />, label: "About" },
    { id: "skills", icon: <FiLayers size={20} />, label: "Skills" },
    { id: "experience", icon: <FiBriefcase size={20} />, label: "Experience" },
    { id: "work", icon: <FiBook size={20} />, label: "Projects" },
    { id: "education", icon: <FiHome size={20} />, label: "Education" },
  ];

  const handleMenuClick = (id) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-[7vw] py-4 transition duration-300 ${
        isScrolled ? "bg-[#050414]/50 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Left: Logo / Name */}
        <div className="text-white font-bold text-lg cursor-pointer flex items-center gap-1">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Subrat</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Sethi</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Middle: Main Section Icons */}
        <div className="hidden md:flex justify-center flex-1">
          <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl px-6 py-3 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-white/30 ${
                  activeSection === item.id
                    ? "bg-[#8245ec]/40 text-white scale-110"
                    : "text-gray-300"
                }`}
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Subrat-IO"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex justify-center items-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-gray-300 hover:bg-[#8245ec]/30 hover:text-white transition-all duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/subrat-sethi-941b17217/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex justify-center items-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-gray-300 hover:bg-[#8245ec]/30 hover:text-white transition-all duration-300"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX className="text-3xl text-[#8245ec]" onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu className="text-3xl text-[#8245ec]" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414]/80 backdrop-blur-lg rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuClick(item.id)}
                  className={`cursor-pointer px-4 py-2 rounded-lg hover:bg-[#8245ec]/30 hover:text-white ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4 mt-2">
              <a
                href="https://github.com/Subrat-IO"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/subrat-sethi-941b17217/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
