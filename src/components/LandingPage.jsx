// src/components/LandingPage.jsx
import React from "react";
import { HashLink } from "react-router-hash-link";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div id="home" className="landing-page">
      <div className="profile-container">
        <img src="/swaroop.jpeg" alt="Profile" className="profile-image" />
      </div>
      <header className="landing-header">
        <h1 className="typing">Welcome to My Portfolio</h1>

        <HashLink smooth to="/#skills" className="cta-button">
          Learn More
        </HashLink>
      </header>
    </div>
  );
};

export default LandingPage;
