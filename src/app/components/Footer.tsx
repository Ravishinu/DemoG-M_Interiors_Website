import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  const phoneNumber = "+919487288218";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="relative bg-black">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Copyright */}
      <div className="py-[2rem] px-[1rem]">
        <h1 className="text-white text-end">copyrights@G&MInteriors</h1>
      </div>
    </div>
  );
};

export default Footer;