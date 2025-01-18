import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "SentimentGPT",
      description:
        "Sentiment GPT is a sentiment analysis web application developed using the Django framework and integrated with the Hugging Face Transformers library. This application accurately assesses the sentiment (positive, negative, or neutral) of given text inputs, providing a reliable sentiment score.",
      githubUrl: "https://github.com/swaroopms658?tab=repositories",
    },
    {
      title: "Color Quantization Compressor",
      description:
        "Implemented an image compression application using an unsupervised machine learning algorithm. The application compresses images by reducing the color palette to a specified number of colors. In this project, the original image was compressed using 16 colors.",
      githubUrl: "https://github.com/swaroopms658?tab=repositories",
    },
    {
      title: "ML Web App",
      description:
        "Developed an ML-powered web application for predicting diabetes and classifying customers.",
      githubUrl: "https://github.com/swaroopms658?tab=repositories",
    },
    {
      title: "Recipe Management System",
      description:
        "Implemented a secure recipe ordering system using Django and Python. Users can create, update, delete, and read recipes. Authentication is implemented for security. Users can also update their profiles, including name, description, and profile picture.",
      githubUrl: "https://github.com/swaroopms658?tab=repositories",
    },
    {
      title: "Personal Portfolio",
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
          <div key={index} className="ubuntu-card">
            <div className="ubuntu-card-header">
              <div className="ubuntu-dots">
                <span className="ubuntu-dot red"></span>
                <span className="ubuntu-dot yellow"></span>
                <span className="ubuntu-dot green"></span>
              </div>
              <div className="ubuntu-title">{project.title}</div>
            </div>
            <div className="ubuntu-card-content">
              <p>{project.description}</p>
            </div>
            <div className="ubuntu-card-footer">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
