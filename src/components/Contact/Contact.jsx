import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { FiMail, FiUser, FiEdit3, FiSend } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const top = contactSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5o1eka8",
        "template_kzhg3zm",
        form.current,
        "tlBYSSrsPVpEnVWDY"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you! Reach out for any opportunities, collaboration, or questions.
        </p>
      </div>

      {/* Form Card */}
      <div
        className={`transform transition-all duration-1000 ease-in-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } w-full max-w-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg p-8 flex flex-col gap-4`}
      >
        <h3 className="text-xl font-bold text-white text-center mb-4">
          Connect With Me <span className="ml-1 animate-bounce">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          {/* Email */}
          <div className="relative">
            <FiMail className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full pl-10 pr-3 py-3 rounded-xl bg-[#131025]/80 text-white border border-gray-600 focus:outline-none focus:border-purple-500 placeholder-gray-400 transition"
            />
          </div>

          {/* Name */}
          <div className="relative">
            <FiUser className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full pl-10 pr-3 py-3 rounded-xl bg-[#131025]/80 text-white border border-gray-600 focus:outline-none focus:border-purple-500 placeholder-gray-400 transition"
            />
          </div>

          {/* Subject */}
          <div className="relative">
            <FiEdit3 className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full pl-10 pr-3 py-3 rounded-xl bg-[#131025]/80 text-white border border-gray-600 focus:outline-none focus:border-purple-500 placeholder-gray-400 transition"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            required
            className="w-full p-3 rounded-xl bg-[#131025]/80 text-white border border-gray-600 focus:outline-none focus:border-purple-500 placeholder-gray-400 transition"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-xl hover:scale-105 hover:opacity-90 transition-all duration-300"
          >
            Send <FiSend />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
