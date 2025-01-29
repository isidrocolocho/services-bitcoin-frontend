import React from 'react';
import { FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0F3715] py-8 flex flex-col items-center font-sans">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:justify-between px-4">
        {/* Texto y Logo */}
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
          <p className="text-xl md:text-2xl font-medium text-[#F2F2F2] leading-relaxed">
            Bitcoin: Financial freedom for everyone.
          </p>
          <Link to="/" className="mt-4 inline-block">
            <img
              src="/images/SatoshiLog.png"
              alt="Logo"
              className="h-10 w-auto mx-auto md:mx-0"
            />
          </Link>
        </div>

        {/* Botones */}
        <div className="flex flex-col md:flex-row gap-4">
          <button className="flex items-center justify-center gap-2 px-6 py-2 border border-[#F2F2F2] text-[#F2F2F2] font-bold text-sm rounded transition hover:bg-[#CCBB8E] hover:text-[#0F3715]">
            Contact Us
            <span className="text-base transform rotate-[-45deg]">➔</span> {/* Changed the rotation */}
          </button>
          <button className="px-6 py-2 bg-[#CCBB8E] text-[#0F3715] font-bold text-sm rounded transition hover:bg-[#BF8D30] hover:text-[#F2F2F2]">
            More information
          </button>
        </div>
      </div>

      {/* Redes sociales */}
      <div className="mt-8 flex gap-4 justify-center">
        <Link
          to="#"
          className="text-gray-500 text-xl transition hover:text-[#10217D]"
        >
          <FiTwitter />
        </Link>
        <Link
          to="#"
          className="text-gray-500 text-xl transition hover:text-[#10217D]"
        >
          <FiInstagram />
        </Link>
        <Link
          to="#"
          className="text-gray-500 text-xl transition hover:text-[#10217D]"

        >
          <FiFacebook />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
