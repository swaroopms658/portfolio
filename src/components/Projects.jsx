import React from "react";
import "./Projects.css";
import Skills from "./Skills";

const Projects = () => {
  const projects = [
    {
      title: "conference_event_planner",
      description:
        "Developed a comprehensive Event Planner Web Application that streamlines event planning for users by providing key functionalities such as venue selection, meals selection, and final cost estimation. This project incorporates modern web development tools and state management techniques to offer a seamless and dynamic user experience.",
      githubUrl: "https://github.com/swaroopms658?tab=repositories",
    },
    {
      title: "Color Quantization Compressor",
      description:
        " Implemented an image compression application using an unsupervised machine learning algorithm. The application compressesimages by reducing the color palette to a specified number of colors. In this project, the original image was compressed using 16 colors",
      githubUrl: "https://github.com/swaroopms658?tab=repositories",
    },
    {
      title: "ML Web App",
      description:
        "Demonstrates the process of building a web application that utilizes a machinelearning model. Functional Model Demonstration: A working example of the web app is included for reference, showcasing itscapabilities. Diverse Model Applications: Provides implementations for two distinct machine learning models: one for predicting diabetes diagnosis and another for customer category prediction.",
      githubUrl: "https://github.com/swaroopms658?tab=repositories",
    },
    {
      title: "Restaurant Management System",
      description:
        "• A C++-based restaurant management system that efficiently handles orders, inventory, and sales data. Menu Management: Defines and updates the restaurant’s menu items, including prices and descriptions. Order Processing: Takes customer orders,calculates total costs, and tracks item availability. Inventory Tracking: Monitors stock levels of food items and alerts when supplies are low. Sales Reporting: Generates daily, weekly, and monthly sales reports, including revenue, item popularity, and profit margins.",
      githubUrl: "https://github.com/swaroopms658?tab=repositories",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
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
