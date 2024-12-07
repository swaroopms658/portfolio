// src/components/Header.jsx
import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="nav-container">
        {/* "S" in "Swaroop" wrapped in a span for special styling */}
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="logo-image" />
          <span className="logo-s">S</span>waroop
        </div>
        <div className={`nav-menu ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <HashLink smooth to="/#home" onClick={toggleMenu}>
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#skills" onClick={toggleMenu}>
                Skills
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#projects" onClick={toggleMenu}>
                Projects
              </HashLink>
            </li>

            <li>
              <a href="/Swaroop_resume.pdf" download="">
                Download Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
