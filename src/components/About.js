import React, { useState } from 'react';
import { FaGraduationCap, FaLaptopCode, FaFootballBall, FaSlidersH } from 'react-icons/fa';
import Profile from "../images/admin.jpg";

const About = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: "Education",
      icon: <FaGraduationCap className="w-6 h-6" />,
      description: "After completing my baccalaureate in 2023, I joined Youcode School due to my passion for web development. In my first year, I learned the fundamentals of HTML, CSS, JavaScript, PHP, OOP, MVC, Laravel, React, Bootstrap, and Tailwind. By my second year, I chose to focus on Java development to broaden my skill set and tackle more complex backend challenges.",
      skills: ["HTML/CSS", "JavaScript", "PHP", "Laravel", "React", "Java"]
    },
    {
      title: "Experience",
      icon: <FaLaptopCode className="w-6 h-6" />,
      description: "In 2024, I gained hands-on experience as a Full-Stack Developer at ECOWATT MAROC, a startup. For 4 months, I worked with PHP/Laravel 10 for the backend and React.js for the frontend. This role not only improved my technical skills but also taught me the value of teamwork, meeting deadlines, and thriving in a fast-paced environment.",
      skills: ["Full Stack", "Laravel 10", "React.js", "Team Collaboration", "Agile"]
    },
    {
      title: "Interests",
      icon: <FaFootballBall className="w-6 h-6" />,
      description: "Outside of development, I'm passionate about football. I played for FATEH Inezegan, a local football team in my city. Additionally, I enjoy exploring new technologies and integrating them into real-world projects. Problem-solving is one of my greatest strengths, and I always strive to enhance my skills.",
      highlights: ["Football Player", "Tech Enthusiast", "Problem Solver"]
    },
    {
      title: "Agile Methodology",
      icon: <FaSlidersH className="w-6 h-6" />,
      description: "I strongly believe in the Agile methodology, which I apply to my projects. Whether personal or professional, Agile principles help me stay organized, meet deadlines, and continuously improve the quality of my work.",
      principles: ["Iterative Development", "Continuous Integration", "Sprint Planning"]
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-900 text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h3 className="text-5xl font-mono text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            About Me
          </span>
        </h3>

        <div className="relative group mb-24">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-gray-800 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-25"></div>
                <img
                  src={Profile}
                  alt="Hamza Lamin"
                  className="rounded-full w-32 h-32 object-cover relative border-2 border-cyan-400"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-mono text-cyan-400 mb-4">Hamza Lamin</h4>
                <p className="text-lg text-gray-300 leading-relaxed font-mono">
                  I am a Full-Stack Developer passionate about building scalable web applications 
                  and creating futuristic user experiences. I specialize in modern frameworks, 
                  efficient code, and collaborative projects that push boundaries.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setActiveSection(index)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className={`
                transform transition-all duration-300 ease-in-out
                ${activeSection === index ? 'scale-102 -translate-y-2' : ''}
              `}>
                <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-cyan-400 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gray-700 rounded-lg text-cyan-400">
                      {section.icon}
                    </div>
                    <h4 className="text-2xl font-mono text-cyan-400">{section.title}</h4>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 font-mono">
                    {section.description}
                  </p>

                  {section.skills && (
                    <div className="flex flex-wrap gap-2">
                      {section.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {section.highlights && (
                    <div className="flex flex-wrap gap-2">
                      {section.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}

                  {section.principles && (
                    <div className="flex flex-wrap gap-2">
                      {section.principles.map((principle, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm"
                        >
                          {principle}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="group relative px-8 py-3 bg-gray-800 text-cyan-400 overflow-hidden">
            <div className="absolute inset-0 w-3 bg-cyan-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative group-hover:text-gray-900 font-mono">View My Work</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;