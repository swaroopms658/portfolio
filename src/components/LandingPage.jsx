// src/components/LandingPage.jsx
import React, { useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import "./LandingPage.css";

const LandingPage = () => {
  // Create a ref to store whether speech has been triggered
  const hasSpoken = useRef(false);

  // Function to trigger speech
  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.pitch = 1;
    utterance.rate = 0.75;
    window.speechSynthesis.speak(utterance);
  };

  // Set up the speech effect for the "Learn More" button only
  useEffect(() => {
    // Check if speech has already been spoken
    if (!hasSpoken.current) {
      hasSpoken.current = true; // Mark that speech has occurred
    }
  }, []);

  // Handle button click
  const handleLearnMoreClick = () => {
    speakText(
      "clicking this button will navigate you to skills and projects section Thank you"
    );
  };

  return (
    <div id="home" className="landing-page">
      <div className="profile-container">
        <img src="/swaroop.jpeg" alt="Profile" className="profile-image" />
      </div>
      <header className="landing-header">
        <h1 className="typing">🌟 Welcome to Swaroop's Portfolio</h1>
        <HashLink
          smooth
          to="/#skills"
          className="cta-button"
          onClick={handleLearnMoreClick}
        >
          Learn More
        </HashLink>
      </header>
    </div>
  );
};

export default LandingPage;
