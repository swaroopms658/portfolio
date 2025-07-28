import React, { useState, useRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
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

  // Update active link based on scroll position
  useEffect(() => {
    const sections = ["home", "skills", "projects"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let current = "#home";

      for (let id of sections) {
        const sectionElement = document.getElementById(id);
        if (sectionElement && sectionElement.offsetTop <= scrollPosition) {
          current = `#${id}`;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header" role="banner">
      <div className="nav-container">
        <a
          href="#home"
          className="logo"
          aria-label="Go to Homepage"
          onClick={closeMenu}
        >
          <img src="/logo.png" alt="Logo" className="logo-image" />
          <span className="logo-s">S</span>waroop
        </a>

        <nav
          id="nav-menu"
          className={`nav-menu ${isOpen ? "open" : ""}`}
          ref={navRef}
          aria-label="Main navigation"
        >
          <ul className="nav-links">
            {[
              { id: "home", label: "Home", to: "/#home" },
              { id: "skills", label: "Skills", to: "/#skills" },
              { id: "projects", label: "Projects", to: "/#projects" },
            ].map(({ id, label, to }) => (
              <li key={id}>
                <HashLink
                  smooth
                  to={to}
                  onClick={closeMenu}
                  className={activeSection === `#${id}` ? "active" : ""}
                  aria-current={activeSection === `#${id}` ? "page" : undefined}
                >
                  {label}
                </HashLink>
              </li>
            ))}
            <li>
              <a
                href="/swaroop_resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume (PDF)"
                onClick={closeMenu}
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
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleMenu();
            }
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
