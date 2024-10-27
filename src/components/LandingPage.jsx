// src/components/LandingPage.jsx
import React, { useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import "./LandingPage.css";

const LandingPage = () => {
  
  const hasSpoken = useRef(false);

  
  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.pitch = 1;
    utterance.rate = 0.75;
    window.speechSynthesis.speak(utterance);
  };

  
  useEffect(() => {
    // Check if speech has already been spoken
    if (!hasSpoken.current) {
      speakText(
        "Welcome to Swaroop's Portfolio. Click the button below to know more."
      );
      hasSpoken.current = true; // Mark that speech has occurred
    }
  }, []);

  return (
    <div id="home" className="landing-page">
      <div className="profile-container">
        <img src="/swaroop.jpeg" alt="Profile" className="profile-image" />
      </div>
      <header className="landing-header">
        <h1 className="typing">
          🌟 Welcome to Swaroop's Portfolio. Click the button below to know
          more.
        </h1>
        <HashLink smooth to="/#skills" className="cta-button">
          Learn More
        </HashLink>
      </header>
    </div>
  );
};

export default LandingPage;
