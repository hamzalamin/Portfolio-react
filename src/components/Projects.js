import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDatabase, FaCode, FaDesktop, FaLaptopCode } from "react-icons/fa";

import { ExternalLink, Github, ChevronRight, X } from "lucide-react";
import ITLens from "../images/Lens2-mg.jpg";
import Citronix from "../images/citronix-image.jpg";
import MajesticCup from "../images/MajesticCup-image.jpg";
import SmartBank from "../images/smartBank-image.jpg";
import LibeUp from "../images/libeUp-image.jpg";
import Card from "../images/card-image.jpg";
import Evento from "../images/Evento-image.jpg";
import Portfolio from "../images/3L3A0311.JPG";
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projects = [
    {
      title: "iTLens: IT Survey API",
      description:
        "iTLens is an IT survey application built using Spring Boot, offering structured surveys with chapters, sub-chapters, and a variety of question types.",
      longDescription: `iTLens is a powerful platform designed for creating and managing IT surveys. It features a flexible structure with chapters, sub-chapters, and various question types, enabling seamless user participation and statistical analysis. Built with Spring Boot and a RESTful architecture, iTLens integrates smoothly with other systems and supports databases like PostgreSQL and MySQL. It leverages Spring Data JPA, Lombok, and MapStruct for efficient development. With JUnit 5 and Mockito for testing, Swagger for API documentation, and integration with Jenkins, Docker, and SonarQube for CI/CD, iTLens provides a reliable and scalable solution for IT survey creation and data analysis.`,
      link: "https://github.com/hamzalamin/iTLens",
      demo: "#",
      imageUrl: ITLens,
      technologies:
        "Spring Boot, Spring Data JPA, Lombok, MapStruct, JUnit 5, Mockito, Swagger, Jenkins, Docker, SonarQube, PostgreSQL",
      category: "backend",
      highlights: [
        "Comprehensive Survey Structure with Chapters and Questions",
        "Multiple Question Types (Single Choice, Multiple Choice)",
        "Efficient Database Integration with Spring Data JPA",
        "Centralized Exception Handling with @RestControllerAdvice",
        "Automatic API Documentation with Swagger",
        "Continuous Integration with Jenkins and Docker",
        "Quality Analysis with SonarQube",
      ],
    },
    {
      title: "Citronix: Lemon Farm Management System",
      description:
        "Citronix is a farm management application for lemon farms, designed to track production, harvest, and sales while optimizing tree productivity based on age.",
      longDescription: `Citronix is a comprehensive management solution for lemon farms, designed to streamline farm and field tracking, as well as tree, harvest, and sales management. The platform allows farm details to be managed, fields to be associated with farms, and tree information to be tracked, including age and productivity. It also enables the management of seasonal harvests and sales, linking revenue to specific harvests. Built with Spring Boot and a layered architecture, Citronix ensures data integrity with Spring validation and JUnit/Mockito testing. Lombok simplifies entity management, while MapStruct facilitates efficient data transformation. Selenium is used for end-to-end testing to ensure functionality across the application. The solution provides a reliable and efficient approach to lemon farm management.`,
      link: "https://github.com/hamzalamin/Citronix",
      demo: "#",
      imageUrl: Citronix,
      technologies:
        "Spring Boot, JUnit, Mockito, Lombok, MapStruct, Spring Data JPA, PostgreSQL",
      category: "backend",
      highlights: [
        "Comprehensive Farm, Field, and Tree Management",
        "Tree Productivity Calculation Based on Age",
        "Seasonal Harvest Tracking and Sales Recording",
        "Data Validation with Spring Annotations",
        "Unit Testing with JUnit and Mockito",
        "Simplified Entity Management with Lombok and Builder Pattern",
        "DTO and Entity Conversion with MapStruct",
      ],
    },
    {
      title: "MajesticCup: Football Tournament Management API",
      description:
        "MajesticCup is a secure and efficient API for managing football tournaments, supporting team and player management, match results, and statistics tracking.",
      longDescription: `MajesticCup offers a comprehensive solution for managing football competitions in an elimination-style format. The platform allows easy management of teams, players, and competition rounds, while automatically generating matchups based on previous results. It tracks match outcomes, goals, assists, cards, and provides public access to top scorers and other statistics. With JWT Authentication and role-based access, it ensures secure endpoints for administrators and operators. Built with Spring Boot and MongoDB, MajesticCup supports real-time updates and seamless data handling. Selenium is used for end-to-end testing, ensuring the platform's functionality across all features. This solution provides a user-friendly, secure, and reliable platform for tournament organizers and fans alike.`,
      link: "https://github.com/hamzalamin/MajesticCup-",
      demo: "#",
      imageUrl: MajesticCup,
      technologies: "Spring Boot, MongoDB, JWT, Spring Security, RESTful API",
      category: "backend",
      highlights: [
        "Comprehensive Tournament Management",
        "Real-Time Match Results and Statistics",
        "JWT-Based Authentication and Role Management",
        "Automated Matchup Generation",
        "MongoDB Integration for Efficient Data Handling",
      ],
    },
    {
      title: "SmartBank: Credit Simulation Interface",
      description:
        "SmartBank offers a sleek and intuitive interface for simulating personal and mortgage loans, guiding users through a step-by-step process.",
      longDescription: `SmartBank simplifies loan simulation with an intuitive interface and real-time updates. Users navigate through three tabs—financial information, personal details, and contact information—and see live summaries of their loan details, including amount, interest rate, monthly payments, and total cost. Built with HTML, Sass, and JavaScript (ES6), the platform offers a smooth and responsive experience. Selenium is used for automated testing to ensure functionality across all interactions, providing users with a reliable tool for simulating loans.`,
      link: "https://github.com/hamzalamin/SmartBank",
      demo: "#",
      imageUrl: SmartBank,
      technologies:
        "Java EE, JPA, Hibernate, JSP, SASS, JavaScript, JUnit, Mockito, Tomcat",
      category: "fullstack",
      highlights: [
        "Step-by-Step Loan Simulation Process",
        "Dynamic Real-Time Summary with JavaScript",
        "Clean and Modern UI Design",
        "Mobile-Responsive Layout",
        "Efficient User Input and Calculation Flow",
      ],
    },
    {
      title: "LIBE-UP: Library in One CLICK",
      description:
        "LIBE-UP is a platform designed to simplify the management, reservation, and sale of books, offering an enriched user experience for administrators, operators, and users.",
      longDescription: `LIBE-UP revolutionizes book management by offering intuitive features for users, operators, and administrators. Users can securely register, browse, filter, and view detailed book information, reserve books, and generate invoices. Operators can add and manage books, track reservations, and view analytics. Administrators have control over book categories and operator accounts, as well as access to platform performance insights. LIBE-UP ensures smooth navigation, a robust reservation system, and efficient management, making it an ideal solution for all users involved in the book management process.`,
      link: "https://github.com/hamzalamin/Priject_fill_rouge-fin-d-tude-",
      demo: "#",
      imageUrl: LibeUp,
      technologies: "Laravel, HTML, CSS, Bootstrap, JavaScript, Docker",
      category: "fullstack",
      highlights: [
        "Multi-Role Management (User, Operator, Admin)",
        "Efficient Book Reservation System",
        "Advanced Filtering and Search Capabilities",
        "Comprehensive Analytics and Reporting",
        "Seamless Email Notification Integration",
      ],
    },
    {
      title: "BizCard: Digital Business Card Management",
      description:
        "BizCard is a responsive platform providing users with a seamless interface to manage, create, and interact with their digital business cards efficiently.",
      longDescription: `BizCard simplifies the management of digital business cards with features like creating, editing, deleting, and marking cards as favorites. Developed using React.js or Vue.js, it offers a responsive design and seamless device compatibility. Axios enables smooth API interactions, and state management ensures efficient handling of user data. The platform is optimized with unit testing to guarantee reliable functionality, delivering an intuitive and modern user experience.`,
      link: "https://github.com/hamzalamin/BizCard",
      demo: "#",
      imageUrl: Card,
      technologies:
        "Laravel, Laravel Sanctum, ReactJS, REST API, Docker, React.js, Axios, HTML, CSS, Responsive Design",
      category: "fullstack",
      highlights: [
        "Modern and Intuitive User Interface",
        "Seamless API Integration with Axios",
        "Efficient State Management",
        "Responsive Design for Cross-Device Compatibility",
        "Unit Testing for Reliable Components",
      ],
    },
    {
      title: "Evento: Event Management Platform",
      description:
        "Evento is an innovative platform for managing and booking event tickets, offering an optimal experience for participants, organizers, and administrators.",
      longDescription: `Evento simplifies event management with user-friendly features for all stakeholders. Users can securely register, explore events, and reserve seats with automatic ticket generation. Organizers can create and manage events, access reservation statistics, and choose reservation approval methods. Administrators handle user access, event category management, and event validation. With robust management and seamless navigation, Evento ensures an efficient experience for everyone involved.`,
      link: "https://github.com/hamzalamin/Evento",
      demo: "#",
      imageUrl: Evento,
      technologies: "Laravel, Blade, MySQL, Docker, JavaScript, HTML&CSS",
      category: "fullstack",
      highlights: [
        "User Registration and Secure Authentication",
        "Event Filtering and Detailed Views",
        "Reservation Management with Ticket Generation",
        "Statistics Dashboard for Organizers and Admins",
        "Role-based Access Control and Approval Workflows",
      ],
    },
    {
      title: "My-Portfolio",
      description:
        "This is my personal portfolio, showcasing my skills, projects, and achievements as a web developer.",
      longDescription: `**My-Portfolio** showcases technical expertise and creativity with a responsive design that adapts to different screen sizes. Featuring a clean layout, it presents skills and projects in a professional manner. Interactive elements enhance user experience with smooth navigation and engaging animations.`,
      link: "https://github.com/hamzalamin/Portfolio-react",
      demo: "https://hamzalamin.github.io/Portfolio-react/",
      imageUrl: Portfolio,
      technologies: "React.js, Tailwind CSS",
      category: "frontend",
      highlights: [
        "Responsive and Modern UI",
        "Showcase of Web Development Skills",
        "Optimized for Performance",
        "Customizable Components",
      ],
    },
    {
      title: "ITLens: Angular Survey Creation Application",
      description:
        "ITLens is an Angular-based application for creating and managing IT surveys, enabling users to interact with surveys through intuitive and efficient interfaces.",
      longDescription: `**ITLens** is a platform designed to simplify survey creation and management within the IT domain. The first version focuses on managing survey entities such as surveys, editions, subjects, questions, and answers, with future versions planned to include response collection, survey participation, and enhanced security features. The application follows a feature-based architecture for easy scalability and maintenance, with a component-based design for maximum reusability. It uses Angular and TypeScript, and leverages input/output decorators and Signals for efficient parent-child component interaction. **ITLens** provides a structured, user-friendly solution for survey management.`,
      link: "https://github.com/hamzalamin/ITLens-Angular",
      demo: "#",
      imageUrl: ITLens,
      technologies: "Angular, TypeScript, TailwindCSS",
      category: "frontend",
      highlights: [
        "Efficient Survey Entity Management (Survey, Subject, Question, Answer)",
        "CRUD Operations for Entities",
        "Feature-Based Architecture for Maintainability",
        "Standalone Components for Reusability",
        "Parent-Child Communication with @Input, @Output, and Signals",
      ],
    },
  ];

  const filters = [
    { label: "All Projects", value: "all", icon: <FaDatabase /> },
    { label: "Backend", value: "backend", icon: <FaCode /> },
    { label: "Frontend", value: "frontend", icon: <FaDesktop /> },
    { label: "Full Stack", value: "fullstack", icon: <FaLaptopCode /> },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 font-mono bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-800 rounded-xl font-mono max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-mono text-cyan-400">{project.title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <div className="aspect-video mb-6 rounded-lg overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-mono text-cyan-400 mb-2">
              Project Overview
            </h4>
            <p className="text-gray-300 font-mono whitespace-pre-line">
              {project.longDescription}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-mono text-cyan-400 mb-2">
              Key Features
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.highlights?.map((highlight, idx) => (
                <li key={idx} className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-mono text-cyan-400 mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.split(",").map((tech, idx) => (
                <span
                  key={idx}
                  className="text-sm px-3 py-1 bg-gray-700 text-cyan-400 rounded-full"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 bg-cyan-400 text-gray-900 rounded-full hover:bg-cyan-300 transition-colors duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              View Source
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-colors duration-300"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-16 bg-gray-900 min-h-screen relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
            My Projects Portfolio
          </h2>
          <p className="text-gray-400 text-xl font-mono max-w-3xl mx-auto">
            Explore my journey through code. Each project represents a unique
            challenge solved with passion and precision.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, index) => (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full font-mono transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.value
                  ? "bg-cyan-400 text-gray-900"
                  : "bg-gray-800 text-cyan-400 hover:bg-gray-700"
              }`}
            >
              {filter.icon}
              <span>{filter.label}</span>
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
                className="group relative bg-gray-800 rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-mono text-cyan-400 mb-3 relative inline-block">
                    {project.title}
                    <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500" />
                  </h3>
                  <p className="text-gray-400 font-mono text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex font-mono flex-wrap gap-2 mb-4">
                    {project.technologies
                      .split(",")
                      .slice(0, 3)
                      .map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-gray-700 text-cyan-400 rounded-full"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    {project.technologies.split(",").length > 3 && (
                      <span className="text-xs font-mono px-2 py-1 bg-gray-700 text-cyan-400 rounded-full">
                        +{project.technologies.split(",").length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-cyan-400 font-mono">
                      Click to view details
                    </span>
                    <ChevronRight className="w-5 h-5 text-cyan-400 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-xl font-mono mb-6">
            Discover more of my work on GitHub
          </p>
          <a
            href="https://github.com/hamzalamin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gray-800 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 group"
          >
            <Github className="w-5 h-5 mr-2" />
            <span className="font-mono">View GitHub Profile</span>
            <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => {
              setIsModalOpen(false);
              setSelectedProject(null);
            }}
          />
        )}
      </AnimatePresence>
      <style jsx>{`
        /* Scrollbar styling */
        .overflow-y-auto::-webkit-scrollbar {
          width: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(34, 211, 238, 0.3);
          border-radius: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 211, 238, 0.5);
        }
      `}</style>
    </section>
  );
};

export default Projects;
