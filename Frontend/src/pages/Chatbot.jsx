import React from 'react';
import './Chatbot.css';

const Chatbot = () => {
  return (
    <div className="chatbot-overlay">
      <div className="chatbot-message">
        <h1>👋 Hi, I'm <span className="highlight">Bhoomi AI</span></h1>
        <p>
          I'm your intelligent farming assistant here to guide you with tips, tools, and support for a better, greener future. 🌿
        </p>
        <button className="chatbot-btn">💬 Let's Chat</button>
      </div>
    </div>
  );
};

export default Chatbot;
