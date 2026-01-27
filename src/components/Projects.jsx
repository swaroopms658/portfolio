import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star, Code2 } from "lucide-react";
import { fetchGithubProjects } from "../services/githubService";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchGithubProjects();
      setProjects(data);
      setLoading(false);
    };
    getProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="projects-section">
        <h2 className="section-title">Synthesizing Data...</h2>
        <div className="loading-spinner"></div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Dynamic Projects
      </motion.h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.article
            key={project.id || index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotateY: 15,
              rotateX: -10,
              z: 100,
              boxShadow: "0 30px 60px rgba(0, 255, 204, 0.4)"
            }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
            className="ubuntu-card"
            tabIndex={0}
            aria-label={`Project: ${project.title}`}
            style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
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
              <div className="project-meta">
                {project.language && (
                  <span className="tech-tag">
                    <Code2 size={14} /> {project.language}
                  </span>
                )}
                {project.stars > 0 && (
                  <span className="stars-tag">
                    <Star size={14} fill="currentColor" /> {project.stars}
                  </span>
                )}
              </div>
            </main>
            <footer className="ubuntu-card-footer">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
                aria-label={`View ${project.title} on GitHub`}
              >
                View Repository <ExternalLink size={16} />
              </a>
            </footer>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

