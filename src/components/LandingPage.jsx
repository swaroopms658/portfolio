import React, { useEffect, useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./LandingPage.css";
import Chatbot from "../Chatbot";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
    if (!hasSpoken.current) {
      hasSpoken.current = true;
    }
  }, []);

  // Handle button click
  const handleLearnMoreClick = () => {
    speakText(
      "Clicking this button will navigate you to skills and projects section. Thank you"
    );
  };

  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div id="home" className="landing-page">
      <div className="solar-system">
        <div className="sun"></div>
        <div className="orbit orbit-1">
          <img src="/images/py.png" alt="Planet 1" className="planet" />
        </div>
        <div className="orbit orbit-2">
          <img src="/images/js.png" alt="Planet 2" className="planet" />
        </div>
        <div className="orbit orbit-3">
          <img src="/images/sql.png" alt="Planet 3" className="planet" />
        </div>
      </div>
      <div className="shooting-stars">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
      <div className="profile-container">
        <img src="/swaroop .jpeg" alt="Hi" className="profile-image" />
      </div>

      <header className="landing-header">
        <h1 className="typing">Welcome to Swaroop's Portfolio, I'm a SDE</h1>

        <HashLink
          smooth
          to="/#skills"
          className="cta-button"
          onClick={handleLearnMoreClick}
        ></HashLink>

        {/* Chatbot Toggle Button */}
        <button className="chatbot-toggle" onClick={toggleChatbot}>
          <i className="fas fa-comments"></i> 🤖
        </button>

        {/* Chatbot Display */}
        {showChatbot && <Chatbot onClose={toggleChatbot} />}

        {/* Coding Profile Logos Section */}
        <div className="coding-profiles">
          <h2 className="typing">👨🏻‍💻Coding Profiles👨🏻‍💻</h2>
          <div className="profiles-cards">
            {/* LeetCode Profile */}
            <div className="profile-badge">
              <a
                href="https://leetcode.com/u/Swaroop25/"
                target="_blank"
                rel="noopener noreferrer"
                title="LeetCode Profile"
              >
                <img
                  src="/images/lc.png"
                  alt="LeetCode"
                  className="profile-logo"
                />
              </a>
            </div>

            {/* HackerRank Profile */}
            <div className="profile-badge">
              <a
                href="https://www.hackerrank.com/profile/swaroopms658"
                target="_blank"
                rel="noopener noreferrer"
                title="HackerRank Profile"
              >
                <img
                  src="/images/hr.png"
                  alt="HackerRank"
                  className="profile-logo"
                />
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
