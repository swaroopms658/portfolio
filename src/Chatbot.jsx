// src/components/Chatbot.jsx
import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! Type 'home', 'skills', 'projects' to navigate.",
    },
  ]);

  // Function to scroll to the specified section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handle text input and determine scrolling based on keywords
  const handleSend = () => {
    const userMessage = input.trim().toLowerCase();
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: input },
    ]);

    let botResponse =
      "I didn't understand that. Try 'home', 'skills', 'projects', or 'contact'.";
    let sectionId = "";

    switch (userMessage) {
      case "home":
        botResponse = "Navigating to Home...";
        sectionId = "home";
        break;
      case "skills":
        botResponse = "Navigating to Skills...";
        sectionId = "skills";
        break;
      case "projects":
        botResponse = "Navigating to Projects...";
        sectionId = "projects";
        break;
      case "contact":
        botResponse = "Navigating to Contact...";
        sectionId = "contact";
        break;
      default:
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: botResponse },
        ]);
        setInput("");
        return;
    }

    // Send bot response and scroll to the specified section
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "bot", text: botResponse },
    ]);
    setInput(""); // Clear the input field

    // Scroll to section after a short delay for response visibility
    setTimeout(() => {
      scrollToSection(sectionId);
      onClose(); // Close the chatbot
    }, 500); // Short delay for response visibility
  };

  return (
    <div className="chatbot-overlay" onClick={onClose}>
      <div className="chatbot-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.sender === "bot"
                  ? "chatbot-bot-message"
                  : "chatbot-user-message"
              }
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            placeholder="Type a command..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
