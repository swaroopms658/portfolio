import React from "react";
import "./Projects.css";
import Skills from "./Skills";

const Projects = () => {
  const projects = [
    {
      title: "Color Quantization Compressor",
      description:
        " Implemented an image compression application using an unsupervised machine learning algorithm. The application compressesimages by reducing the color palette to a specified number of colors. In this project, the original image was compressed using 16 colors",
      githubUrl: "https://github.com/swaroopms658?tab=repositories",
    },
    {
      title: "ML Web App",
      description:
        "Developed an ML-powered web application for predicting diabetes and classifying customers",
      githubUrl: "https://github.com/swaroopms658?tab=repositories",
    },
    {
      title: "Recipe Management System",
      description:
        "Implemented a secure recipe ordering system using Django and Python. Users can create, update, delete, and read recipes. Authentication is implemented for security. Users can also update their profiles, including name, description, and profile picture.",
      githubUrl: "https://github.com/swaroopms658?tab=repositories",
    },
    {
      title: "Personal Porfolio",
      description:
        "Developed a full-featured portfolio with voice and chatbot capabilities.",
      githubUrl: "https://github.com/swaroopms658?tab=repositories",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="code-editor-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button
              className="github-button"
              onClick={() => window.open(project.githubUrl, "_blank")}
            >
              View on GitHub
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
