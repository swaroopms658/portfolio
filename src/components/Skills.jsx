// src/components/Skills.jsx
import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "JavaScript", image: "/images/js.png" },
    { name: "React", image: "/images/react.png" },
    { name: "Machine Learning", image: "/images/ML.png" },
    { name: "SQL", image: "/images/sql.png" },
    { name: "django", image: "/images/dj.png" },
    { name: "Python", image: "/images/py.png" },
    { name: "Html", image: "/images/html.png" },
    { name: "CSS", image: "/images/css.png" },
    // Add more skills as needed
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
