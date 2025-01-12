import React, { useState } from 'react';
import {
  FaGraduationCap,
  FaLaptopCode,
  FaFootballBall,
  FaSlidersH,
} from "react-icons/fa";
import Profile from "../images/admin.jpg";
import ParticleNetwork from './SectionBackground';
import DownloadCv from './Download'; 

const About = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sections = [
    {
      title: "Education",
      icon: <FaGraduationCap className="w-6 h-6" />,
      description:
        "After completing my baccalaureate in 2023, I joined Youcode School due to my passion for web development. In my first year, I learned the fundamentals of HTML, CSS, JavaScript, PHP, OOP, MVC, Laravel, React, Bootstrap, and Tailwind. By my second year, I chose to focus on Java development to broaden my skill set and tackle more complex backend challenges.",
      skills: ["HTML/CSS", "JavaScript", "PHP", "Laravel", "React", "Java"],
    },
    {
      title: "Experience",
      icon: <FaLaptopCode className="w-6 h-6" />,
      description:
        "In 2024, I gained hands-on experience as a Full-Stack Developer at ECOWATT MAROC, a startup. For 4 months, I worked with PHP/Laravel 10 for the backend and React.js for the frontend. This role not only improved my technical skills but also taught me the value of teamwork, meeting deadlines, and thriving in a fast-paced environment.",
      skills: [
        "Full Stack",
        "Laravel 10",
        "React.js",
        "Team Collaboration",
        "Agile",
      ],
    },
    {
      title: "Agile Methodology",
      icon: <FaSlidersH className="w-6 h-6" />,
      description:
        "I strongly believe in the Agile methodology, which I apply to my projects. Whether personal or professional, Agile principles help me stay organized, meet deadlines, and continuously improve the quality of my work.",
      principles: [
        "Iterative Development",
        "Continuous Integration",
        "Sprint Planning",
      ],
    },
    {
      title: "Interests",
      icon: <FaFootballBall className="w-6 h-6" />,
      description:
        "Outside of development, I'm passionate about football. I played for FATEH Inezegan, a local football team in my city. Additionally, I enjoy exploring new technologies and integrating them into real-world projects. Problem-solving is one of my greatest strengths, and I always strive to enhance my skills.",
      highlights: ["Football Player", "Tech Enthusiast", "Problem Solver"],
    },
  ];

  
  return (
    <section id="about" className="py-16 bg-gray-900 text-white min-h-screen relative overflow-hidden">
      <ParticleNetwork />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
        <h3 className="text-5xl font-mono text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            About Me
          </span>
        </h3>

        <div className="relative group mb-24 transform transition-all duration-500 hover:-translate-y-2">
          <div className="absolute inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg blur-lg group-hover:opacity-75 transition-all duration-1000" />

          <div className="relative bg-gray-800/90 backdrop-blur-sm rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-25 group-hover:opacity-100 animate-pulse" />
                <img
                  src={Profile}
                  alt="Hamza Lamin"
                  className="rounded-full w-32 h-32 object-cover relative border-2 border-cyan-400 transform transition-transform duration-500"
                />
                <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-300" />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-mono text-cyan-400 mb-4 relative inline-block">
                  Hamza Lamin
                  <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500" />
                </h4>
                <p className="text-lg text-gray-300 leading-relaxed font-mono">
                  I am a Full-Stack Developer passionate about building scalable
                  web applications and creating futuristic user experiences. I
                  specialize in modern frameworks, efficient code, and
                  collaborative projects that push boundaries.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveSection(index)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className="relative bg-gray-800/80 rounded-xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-border-slide" />
                
                <div className="relative m-[2px] bg-gray-800 rounded-xl p-6 h-full">
                  <div className="absolute -top-2 right-6 p-4 bg-gray-800 rounded-xl border-2 border-cyan-400 transform -rotate-12 transition-transform duration-300 group-hover:rotate-0">
                    <div className="text-cyan-400">
                      {section.icon}
                    </div>
                  </div>

                  <h4 className="text-2xl font-mono text-cyan-400 mb-8 relative inline-block">
                    {section.title}
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-cyan-400 to-transparent" />
                  </h4>

                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <div className="relative z-10 p-4 bg-gray-800/90 backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-2">
                      <p className="text-gray-300 leading-relaxed font-mono">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  {(section.skills || section.highlights || section.principles) && (
                    <div className="flex flex-wrap gap-2">
                      {(section.skills || section.highlights || section.principles)?.map((item, i) => (
                        <span
                          key={i}
                          className="relative px-4 py-1 bg-gray-700 text-cyan-400 rounded-lg text-sm group/tag"
                        >
                          <span className="relative font-mono z-10 transition-colors duration-300 group-hover/tag:text-gray-900">
                            {item}
                          </span>
                          <div className="absolute inset-0 bg-cyan-400 rounded-lg opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300" />
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="absolute top-1/2 right-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-700" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <DownloadCv />
        </div>
      </div>
    </section>
  );
};

export default About;