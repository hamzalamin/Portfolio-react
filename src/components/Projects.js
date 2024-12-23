import React, { useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import ITLens from "../images/survey-image.jpg";
import Citronix from "../images/citronix-image.jpg";
import MajesticCup from "../images/MajesticCup-image.jpg";
import SmartBank from "../images/smartBank-image.jpg";
import LibeUp from "../images/libeUp-image.jpg";
import Card from "../images/card-image.jpg";
import Evento from "../images/Evento-image.jpg";
import Portfolio from "../images/3L3A0311.JPG";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "ITLens",
      description:
        "ITLens is a robust survey application designed for the IT domain, focusing on providing structured surveys that help gather meaningful data for IT-related topics. The core functionality of the platform revolves around the creation and management of surveys, divided into chapters and sub-chapters, each containing various questions tailored to specific needs. Built with Spring Boot, ITLens ensures a seamless and scalable experience for users.",
      link: "https://github.com/hamzalamin/ITLens",
      demo: "#",
      imageUrl: ITLens,
      technologies:
        "Spring Boot (REST API), PostgreSQL, JUnit 5, Mockito, Jenkins, Docker",
      category: "backend",
    },
    {
      title: "Citronix",
      description:
        "The Citronix project aims to develop a management application for a lemon farm, enabling farmers to track production, harvesting, and sales of their products. The application will facilitate the management of farms, fields, trees, harvests, and sales, while optimizing the tracking of tree productivity based on their age.",
      link: "https://github.com/hamzalamin/Citronix",
      demo: "#",
      imageUrl: Citronix,
      technologies:
        "Spring Boot (REST API), PostgreSQL, JUnit 5, Mockito, Selenium",
      category: "backend",
    },
    {
      title: "MajesticCup",
      description:
        "MajesticCup is a secure API designed for managing football competitions in a knockout format. it allows administrators to organize tournaments, manage teams and players, automate competition phases via a draw system, and track real-time statistics. The application uses JWT for authentication and manages role-based access control (Admin, User).",
      link: "https://github.com/hamzalamin/MajesticCup-",
      demo: "#",
      imageUrl: MajesticCup,
      technologies: "Spring Boot (REST API), MongoDB, Spring Security (JWT)",
      category: "backend",
    },
    {
      title: "SmartBank",
      description:
        "SmartBank is an application designed to help clients simulate and calculate their loan monthly payments. It provides an intuitive user interface that allows users to easily input loan details and receive accurate calculations. The system ensures efficient loan management and user-friendly experience.",
      link: "https://github.com/hamzalamin/simulation",
      demo: "#",
      imageUrl: SmartBank,
      technologies:
        "Java EE, JPA, Hibernate, JSP, JSTL, SASS, JavaScript, JUnit, Mockito, Tomcat",
      category: "fullstack",
    },
    {
      title: "LIBE-UP Library",
      description:
        "The Library Management System allows users to browse, reserve, and purchase books with different user roles: Admin, Operator, and User. Admins manage book categories and operator accounts, while operators oversee the books, reservations, and customers. Users can reserve books for specified periods and receive email notifications if they fail to return them on time.",
      link: "https://github.com/hamzalamin/Priject_fill_rouge-fin-d-tude-",
      demo: "#",
      imageUrl: LibeUp,
      technologies: "Laravel, HTML, CSS, Bootstrap, JavaScript, Docker",
      category: "fullstack",
    },
    {
      title: "Digital Business Card",
      description:
        "This project involves the development of a RESTful API for managing digital business cards. Built with Laravel and secured using Laravel Sanctum for authentication and access policies, users can create, edit, and delete their own business cards. The API allows users to personalize their business card information and ensures secure interactions with role-based access control.",
      link: "https://github.com/hamzalamin/Digital-BizCard",
      demo: "#",
      imageUrl: Card,
      technologies: "Laravel, Laravel Sanctum, ReactJS, REST API, Docker",
      category: "fullstack",
    },
    {
      title: "Evento",
      description:
        "Evento is an application designed for managing and reserving seats for events. It enables users to browse available events, select seats, and make reservations easily. The platform provides a responsive and user-friendly interface, with interactive features to enhance the user experience. Administrators can manage events and track reservations.",
      link: "https://github.com/hamzalamin/EVENTO-",
      demo: "#",
      imageUrl: Evento,
      technologies: "Laravel, HTML, CSS, Bootstrap, JavaScript, Docker",
      category: "fullstack",
    },
    {
      title: "My-Portfolio",
      description:
        "This is my personal portfolio, showcasing my skills, projects, and achievements as a web developer. Built with React.js and styled with Tailwind CSS, this portfolio features a clean and responsive design with sections such as a hero banner, about me, and more. It is designed to give potential employers or collaborators an overview of my technical abilities and passion for web development.",
      link: "https://github.com/hamzalamin/Portfolio-react",
      demo: "https://hamzalamin.github.io/Portfolio-react/",
      imageUrl: Portfolio,
      technologies: "React Js, Tailwind CSS",
      category: "frontend",
    },
  ];

  const filters = [
    { label: "All Projects", value: "all" },
    { label: "Backend", value: "backend" },
    { label: "Frontend", value: "frontend" },
    { label: "Full Stack", value: "fullstack" },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-16 bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-mono mb-6">
            My Projects Portfolio
          </h2>
          <p className="text-gray-400 text-xl font-mono max-w-3xl mx-auto">
            Explore my journey through code. Each project represents a unique
            challenge solved with passion and precision.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full font-mono transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-cyan-400 text-gray-900"
                  : "bg-gray-800 text-cyan-400 hover:bg-gray-700"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
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
                <h3 className="text-xl font-mono font-bold text-cyan-400 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.split(",").map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-700 text-cyan-400 rounded-full"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    <span className="font-mono">Source Code</span>
                  </a>
                  <a
                    href={project.demo || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="font-mono">View Project</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
