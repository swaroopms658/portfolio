// src/components/Header.jsx
import React, { useState, useRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Close menu on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  // Highlight active link
  const getActiveClass = (hash) =>
    window.location.hash === hash ? "active" : "";

  return (
    <header className="header" role="banner">
      <div className="nav-container">
        {/* "S" in "Swaroop" wrapped in a span for special styling */}
        <div className="logo" tabIndex={0} aria-label="Homepage">
          <img src="/logo.png" alt="Logo" className="logo-image" />
          <span className="logo-s">S</span>waroop
        </div>
        <nav
          className={`nav-menu ${isOpen ? "open" : ""}`}
          ref={navRef}
          aria-label="Main navigation"
        >
          <ul className="nav-links">
            <li>
              <HashLink
                smooth
                to="/#home"
                onClick={toggleMenu}
                className={getActiveClass("#home")}
              >
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#skills"
                onClick={toggleMenu}
                className={getActiveClass("#skills")}
              >
                Skills
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#projects"
                onClick={toggleMenu}
                className={getActiveClass("#projects")}
              >
                Projects
              </HashLink>
            </li>
            <li>
              <a
                href="/swaroop_resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume (PDF)"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") toggleMenu();
          }}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
