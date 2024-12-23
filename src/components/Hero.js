import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import myImage from "../images/chacoco.png";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const phrases = [
    "Full-Stack Developer",
    "Problem Solver",
    "Creative Thinker",
    "Software architect"
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const typeText = async () => {
      const phrase = phrases[currentPhraseIndex];
      for (let i = 0; i <= phrase.length; i++) {
        setDisplayText(phrase.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));

      for (let i = phrase.length; i >= 0; i--) {
        setDisplayText(phrase.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 50));
      }

      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    };

    typeText();
  }, [currentPhraseIndex]);

  return (
    <section className="min-h-screen bg-gray-900 text-white relative overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900 opacity-50" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 md:pr-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-cyan-400">Hamza Lamin</span>
            </h1>

            <div className="h-20">
              <span className="text-2xl md:text-3xl font-mono">
                I'm a{" "}
                <span className="text-cyan-400 inline-block min-w-[20ch]">
                  {displayText}
                  <span className="animate-blink">|</span>
                </span>
              </span>
            </div>

            <div className="flex-1">
              <p className="text-lg text-gray-300 leading-relaxed font-mono">
                Passionate about creating elegant solutions through code.
                Turning ideas into reality with modern web technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/hamzalamin",
                  label: "GitHub",
                },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/hamza-lamin-a0440a296/",
                  label: "LinkedIn",
                },
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/fourteenunregistered__/",
                  label: "Instagram",
                },
                {
                  icon: FaEnvelope,
                  href: "mailto:hamzalamin80@gmail.com",
                  label: "Email",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-cyan-400 rounded-lg blur transition-all opacity-20 group-hover:opacity-100" />
                  <social.icon
                    size={28}
                    className="relative text-cyan-400 transition-transform duration-300 transform group-hover:scale-110 group-hover:text-white"
                  />
                </a>
              ))}

              <a
                href="#contact"
                className="relative inline-flex items-center px-8 py-3 overflow-hidden font-mono font-medium text-cyan-400 border border-cyan-400 rounded-lg group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-cyan-400 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="relative group-hover:text-gray-900">
                  Contact me
                </span>
              </a>
            </div>
          </div>

          <div className="relative w-full md:w-[80%] mx-auto">
            <div className="relative z-10 transform transition-transform duration-700 hover:scale-105">
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900" />

                <img
                  src={myImage}
                  alt="Hamza Lamin"
                  className={` w-[110%] h-[110%] object-contain scale-90 transition-opacity duration-700 -mt-6 ${
                    isImageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => setIsImageLoaded(true)}
                />
              </div>
            </div>

            <div className="absolute -inset-4 bg-cyan-400/10 rounded-2xl blur-lg -z-10" />
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-transparent rounded-2xl blur-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
