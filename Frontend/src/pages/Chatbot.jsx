import React from "react";
import { useTranslation } from "react-i18next";

const Chatbot = () => {
  const { t } = useTranslation();

  return (
    <div className="chatbot-overlay">
      <div className="chatbot-message">
        <h1>
          👋 {t("chatbot.greeting1")} <span className="highlight">{t("chatbot.name")}</span>
        </h1>
        <p>{t("chatbot.description")}</p>
        <button className="chatbot-btn">{t("chatbot.button")}</button>
      </div>
    </div>
  );
};

export default Chatbot;

