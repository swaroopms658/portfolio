import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Swaroop. All rights reserved.</p>
      <p>
        Contact me at <a href="mailto:swaroopms658@gmail.com">Email</a>.
      </p>
      <p>
        Connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/swaroop-ms-238700223/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
