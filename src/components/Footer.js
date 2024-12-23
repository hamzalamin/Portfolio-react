import React, { useEffect } from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left side: Copyright text */}
        <p className="text-sm md:text-base text-center font-mono md:text-left">
          © 2024 Hamza Lamin. All rights reserved.
        </p>

        {/* Right side: Social media or contact links */}
        <div className="flex space-x-6 justify-center md:justify-end">
          <a
            href="https://github.com/hamzalamin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 font-mono hover:text-cyan-500 transition-all"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hamzalamin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 font-mono hover:text-cyan-500 transition-all"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hamzalamin80@gmail.com"
            className="text-cyan-400 font-mono hover:text-cyan-500 transition-all"
          >
            Email
          </a>
          <a
            href="https://www.instagram.com/hamzalamin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 font-mono hover:text-cyan-500 transition-all"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
