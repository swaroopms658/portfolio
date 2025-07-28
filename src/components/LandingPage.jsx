import React, { useEffect, useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./LandingPage.css";
import Chatbot from "../Chatbot";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
    if (!hasSpoken.current) {
      hasSpoken.current = true;
    }
  }, []);

  useEffect(() => {
    const rocket = document.querySelector(".rocket");
    if (rocket) {
      rocket.classList.add("launch");
    }
  }, []);

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
      <div className="rocket-container" aria-label="Rocket animation">
        <img src="/images/rocket.png" alt="Rocket" className="rocket" />
      </div>
      <div className="solar-system" aria-label="Skills planets orbiting">
        <div className="orbit orbit-1">
          <img src="/images/py.png" alt="Python" className="planet" />
        </div>
        <div className="orbit orbit-2">
          <img src="/images/js.png" alt="JavaScript" className="planet" />
        </div>
        <div className="orbit orbit-3">
          <img src="/images/sql.png" alt="SQL" className="planet" />
        </div>
      </div>
      <div className="shooting-stars" aria-hidden="true">
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>

      <header className="landing-header">
        <h1 className="typing">Welcome to Swaroop's Portfolio, I'm a SDE</h1>

        <HashLink
          smooth
          to="/#skills"
          className="cta-button"
          onClick={handleLearnMoreClick}
          aria-label="Learn more about skills and projects"
        >
          Learn More ▼
        </HashLink>

        {/* Chatbot Toggle Button */}
        <button
          className="chatbot-toggle"
          onClick={toggleChatbot}
          aria-pressed={showChatbot}
          aria-label="Toggle Chatbot"
          title="Toggle chatbot"
        >
          <i className="fas fa-comments" aria-hidden="true"></i> 🤖
        </button>

        {/* Chatbot Display */}
        {showChatbot && <Chatbot onClose={toggleChatbot} />}

        {/* Coding Profile Logos Section */}
        <section className="coding-profiles" aria-label="Coding Profiles">
          <h2 className="typing">👨🏻‍💻Coding Profiles👨🏻‍💻</h2>
          <div className="profiles-cards">
            {/* LeetCode Profile */}
            <div className="profile-badge">
              <a
                href="https://leetcode.com/u/Swaroop25/"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit LeetCode Profile"
                aria-label="LeetCode profile"
              >
                <img
                  src="/images/lc.png"
                  alt="LeetCode Logo"
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
                title="Visit HackerRank Profile"
                aria-label="HackerRank profile"
              >
                <img
                  src="/images/hr.png"
                  alt="HackerRank Logo"
                  className="profile-logo"
                />
              </a>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default LandingPage;
