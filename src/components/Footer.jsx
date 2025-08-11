import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>
        © 2025 Swaroop MS &nbsp;|&nbsp;
        <a href="mailto:youremail@example.com">Contact</a>
      </p>
      <div className="footer-icons">
        <a
          href="https://github.com/swaroopms658"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/swaroop-ms-238700223/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:youremail@example.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
