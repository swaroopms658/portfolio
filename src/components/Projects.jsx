import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "AIBOM",
    description: `Designed and implemented a real-time AIBOM solution for automated Bill of Materials (BOM) generation.
Developed a robust backend with FastAPI and an interactive frontend using React.
Integrated PowerShell for security vulnerability scanning and model analysis to enhance system security.
Implemented a DFS algorithm to efficiently process ZIP archives for comprehensive BOM generation and analysis.`,
    githubUrl: "https://github.com/swaroopms658?tab=repositories",
  },
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

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <article
            key={index}
            className="ubuntu-card"
            tabIndex={0}
            aria-label={`Project: ${project.title}`}
          >
            <header className="ubuntu-card-header">
              <div className="ubuntu-dots" aria-hidden="true">
                <span className="ubuntu-dot red"></span>
                <span className="ubuntu-dot yellow"></span>
                <span className="ubuntu-dot green"></span>
              </div>
              <h3 className="ubuntu-title">{project.title}</h3>
            </header>
            <main className="ubuntu-card-content">
              <p>{project.description}</p>
            </main>
            <footer className="ubuntu-card-footer">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
                aria-label={`View ${project.title} on GitHub`}
              >
                View on GitHub
              </a>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
