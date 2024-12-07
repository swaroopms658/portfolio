// src/components/Skills.jsx
import React from "react";
import "./Skills.css";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", image: "/images/html.png" },
    { name: "CSS", image: "/images/css.png" },
    { name: "JavaScript", image: "/images/js.png" },
    { name: "React", image: "/images/react.png" },
  ];

  const backendSkills = [
    { name: "Python", image: "/images/py.png" },
    { name: "SQL", image: "/images/sql.png" },
  ];

  const frameworkSkills = [
    { name: "Bootstrap", image: "/images/bs.png" },
    { name: "Django", image: "/images/dj.png" },
    { name: "Scikit Learn", image: "/images/sl.png" },
  ];

  const trendingSkills = [
    { name: "Machine Learning", image: "/images/ML.png" },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      <div className="skills-category">
        <h3>Frontend</h3>
        <div className="skills-container">
          {frontendSkills.map((skill, index) => (
            <div key={index} className="mac-screen-card">
              {/* Header with traffic light dots */}
              <div className="mac-screen-header">
                <div className="mac-dots">
                  <span className="mac-dot red"></span>
                  <span className="mac-dot yellow"></span>
                  <span className="mac-dot green"></span>
                </div>
              </div>

              {/* Content Area */}
              <div className="mac-screen-content">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="skill-image"
                />
                <p>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <h3>Backend</h3>
        <div className="skills-container">
          {backendSkills.map((skill, index) => (
            <div key={index} className="mac-screen-card">
              <div className="mac-screen-header">
                <div className="mac-dots">
                  <span className="mac-dot red"></span>
                  <span className="mac-dot yellow"></span>
                  <span className="mac-dot green"></span>
                </div>
              </div>
              <div className="mac-screen-content">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="skill-image"
                />
                <p>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <h3>Frameworks</h3>
        <div className="skills-container">
          {frameworkSkills.map((skill, index) => (
            <div key={index} className="mac-screen-card">
              <div className="mac-screen-header">
                <div className="mac-dots">
                  <span className="mac-dot red"></span>
                  <span className="mac-dot yellow"></span>
                  <span className="mac-dot green"></span>
                </div>
              </div>
              <div className="mac-screen-content">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="skill-image"
                />
                <p>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <h3>Trending Technologies</h3>
        <div className="skills-container">
          {trendingSkills.map((skill, index) => (
            <div key={index} className="mac-screen-card">
              <div className="mac-screen-header">
                <div className="mac-dots">
                  <span className="mac-dot red"></span>
                  <span className="mac-dot yellow"></span>
                  <span className="mac-dot green"></span>
                </div>
              </div>
              <div className="mac-screen-content">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="skill-image"
                />
                <p>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
