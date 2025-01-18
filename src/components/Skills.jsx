import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML", image: "/images/html.png" },
        { name: "CSS", image: "/images/css.png" },
        { name: "JavaScript", image: "/images/js.png" },
        { name: "React", image: "/images/react.png" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Python", image: "/images/py.png" },
        { name: "SQL", image: "/images/sql.png" },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { name: "Bootstrap", image: "/images/bs.png" },
        { name: "Django", image: "/images/dj.png" },
        { name: "Scikit Learn", image: "/images/sl.png" },
      ],
    },
    {
      category: "Trending Technologies",
      items: [
        { name: "Machine Learning", image: "/images/ML.png" },
        { name: "Hugging Face", image: "/images/huggingface.png" },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((category, index) => (
          <div key={index} className="skills-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-grid">
              {category.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="mac-card">
                  {/* MacOS header */}
                  <div className="mac-card-header">
                    <span className="mac-dot red"></span>
                    <span className="mac-dot yellow"></span>
                    <span className="mac-dot green"></span>
                  </div>
                  {/* Skill content */}
                  <div className="mac-card-content">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="skill-icon"
                    />
                    <p className="skill-name">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
