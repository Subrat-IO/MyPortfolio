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
   <nav className={`fixed top-0 w-full z-50 py-4 transition duration-300 ${isScrolled ? "bg-[#050414]/50 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
  <div className="flex justify-between items-center px-[7vw]">
    {/* Logo */}
    <div className="hidden md:flex items-center gap-1 text-white font-bold text-lg">
      <span className="text-[#8245ec]">&lt;</span>
      <span>Subrat</span>
      <span className="text-[#8245ec]">/</span>
      <span>Sethi</span>
      <span className="text-[#8245ec]">&gt;</span>
    </div>

    {/* Middle Menu - always visible */}
    <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl px-6 py-3 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_4px_10px_rgba(0,0,0,0.3)] transition-all duration-300 mx-auto">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleMenuClick(item.id)}
          className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-white/30 ${
            activeSection === item.id ? "bg-[#8245ec]/40 text-white scale-110" : "text-gray-300"
          }`}
          title={item.label}
        >
          {item.icon}
        </button>
      ))}
    </div>

    {/* Social Icons */}
    <div className="hidden md:flex space-x-4">
      <a href="https://github.com/Subrat-IO" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex justify-center items-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-gray-300 hover:bg-[#8245ec]/30 hover:text-white transition-all duration-300">
        <FaGithub size={20} />
      </a>
      <a href="https://www.linkedin.com/in/subrat-sethi-941b17217/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex justify-center items-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-gray-300 hover:bg-[#8245ec]/30 hover:text-white transition-all duration-300">
        <FaLinkedin size={20} />
      </a>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
