import React, { useState, useEffect } from 'react';
import { FaPaintBrush, FaServer, FaTools } from "react-icons/fa";

const getPercentageForLevel = (level) => {
  switch (level.toLowerCase()) {
    case 'advanced': return 90;
    case 'intermediate': return 75;
    default: return 60;
  }
};

const SkillCard = ({ category, isFlipped, onFlip }) => {
  return (
    <div 
      className="relative w-full h-96 cursor-pointer perspective-1000"
      onClick={onFlip}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="h-full p-6 bg-gradient-to-br from-cyan-900 to-gray-900 rounded-xl shadow-lg">
            <div className="flex flex-col items-center h-full">
              <div className="mb-4 transform transition-transform group-hover:scale-110">
                {category.icon}
              </div>
              <h4 className="text-2xl font-bold text-cyan-400 mb-4">
                {category.title}
              </h4>
              <p className="text-gray-300 text-center mb-6">
                {category.description}
              </p>
              <div className="mt-auto text-cyan-400 text-sm">
                Click to see skills →
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="h-full p-6 bg-gradient-to-br from-gray-900 to-cyan-900 rounded-xl shadow-lg">
            <div className="flex flex-col h-full">
              <h5 className="text-xl font-bold text-cyan-400 mb-4 text-center">
                {category.title}
              </h5>
              <div className="space-y-4 flex-grow overflow-y-auto">
                {category.items.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>{item.name}</span>
                      <span className="text-cyan-400">
                        {getPercentageForLevel(item.level)}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-cyan-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${getPercentageForLevel(item.level)}%`,
                          animation: 'progress 1.5s ease-out'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-auto text-cyan-400 text-sm text-center">
                Click to flip back ←
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [inView, setInView] = useState(false);

  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      icon: <FaPaintBrush className="text-5xl text-cyan-400" />,
      items: [
        { name: "HTML", level: "Advanced" },
        { name: "CSS", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "React.js", level: "" }
      ]
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications",
      icon: <FaServer className="text-5xl text-cyan-400" />,
      items: [
        { name: "PHP", level: "Advanced" },
        { name: "Java", level: "Intermediate" },
        { name: "Laravel", level: "Advanced" },
        { name: "Spring Boot", level: "Advanced" },
        { name: "Hibernate", level: "Intermediate" },
        { name: "Jakarta EE (JEE)", level: "Intermediate" },
        { name: "JPA", level: "Intermediate" },
        { name: "Spring Framework", level: "Intermediate" }
      ]
    },
    {
      title: "Tools & Technologies",
      description: "DevOps, Databases, and Development Tools",
      icon: <FaTools className="text-5xl text-cyan-400" />,
      items: [
        { name: "MySQL", level: "Advanced" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MongoDB", level: "" },
        { name: "Docker", level: "" },
        { name: "Git", level: "Advanced" },
        { name: "Maven", level: "Intermediate" },
        { name: "Jenkins", level: "" },
        { name: "SonarQube", level: "" },
        { name: "Selenium", level: "" },
        { name: "UML", level: "Advanced" }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      const rect = skillsSection?.getBoundingClientRect();
      if (rect && rect.top <= window.innerHeight && rect.bottom >= 0) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCardFlip = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section
      id="skills"
      className={`py-20 bg-gray-900 text-white transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h3 className="text-5xl font-mono text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Technical Skills
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              category={category}
              isFlipped={flippedCards[index]}
              onFlip={() => handleCardFlip(index)}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        @keyframes progress {
          from { width: 0; }
        }

        /* Monospace font for all text in the skills section */
        .space-y-4, .text-sm, .text-xl, .text-2xl, .font-bold {
          font-family: 'Courier New', Courier, monospace;
        }

        /* Optional: custom scrollbar style */
        .space-y-4::-webkit-scrollbar {
          width: 6px;
        }

        .space-y-4::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 10px;
        }

        .space-y-4::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
      `}</style>
    </section>
  );
};

export default Skills;
