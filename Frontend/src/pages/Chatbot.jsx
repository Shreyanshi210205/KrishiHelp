import React from "react";
import { useTranslation } from "react-i18next";
import './Chatbot.css'
const Chatbot = () => {
  const { t } = useTranslation();

  return (
    <div className="chatbot-overlay">
      <div className="chatbot-message">
        <h1>
          👋 {t("chatbot.greeting1")} <span className="highlight">{t("chatbot.name")}</span>
        </h1>
        <p>{t("chatbot.description")}</p>
        <a href="https://huggingface.co/spaces/saumyaai/hackaifarming">
        <button className="chatbot-btn">{t("chatbot.button")}

        </button>
        </a>
      </div>
    </div>
  );
};

export default Chatbot;

