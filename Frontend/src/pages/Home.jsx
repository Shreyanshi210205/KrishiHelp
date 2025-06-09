import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import img1 from '../assets/images/cropdigi.jpg';
import img2 from '../assets/images/bots.jpg';
import img3 from '../assets/images/assist.jpg';
import icon1 from '../assets/icons/login.png';
import icon2 from '../assets/icons/dashboard.png';
import icon3 from '../assets/icons/Ai Assistant.png';
import icon4 from '../assets/icons/gear.png';
import team from '../assets/images/ourTeam.png'

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const services = [
    {
      title: t("home.crop_title"),
      image: img1,
      description: t("home.crop_desc")
    },
    {
      title: t("home.bots_title"),
      image: img2,
      description: t("home.bots_desc")
    },
    {
      title: t("home.sustain_title"),
      image: img3,
      description: t("home.sustain_desc")
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="overlay">
          <h1>{t("home.welcome")}</h1>
          <p>{t("home.intro")}</p>
          <button onClick={() => navigate("/tools")}>{t("home.get_started")}</button>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2>{t("home.services_heading")}</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Guide Section */}
      <div className="guide-section">
        <h2>{t("home.guide_heading")}</h2>
        <div className="guide-grid">
          <div className="guide-card">
            <img src={icon1} alt="Register Icon" />
            <h3>{t("home.register_title")}</h3>
            <p>{t("home.register_desc")}</p>
          </div>
          <div className="guide-card">
            <img src={icon2} alt="Dashboard Icon" />
            <h3>{t("home.dashboard_title")}</h3>
            <p>{t("home.dashboard_desc")}</p>
          </div>
          <div className="guide-card">
            <img src={icon3} alt="AI Assistant Icon" />
            <h3>{t("home.assistant_title")}</h3>
            <p>{t("home.assistant_desc")}</p>
          </div>
          <div className="guide-card">
            <img src={icon4} alt="Tools Icon" />
            <h3>{t("home.tools_title")}</h3>
            <p>{t("home.tools_desc")}</p>
          </div>
        </div>
      </div>

      {/* Chatbot Floating Button */}
      <div className="chatbot-float" onClick={() => navigate("/chatbot")}>
        <div className="chatbot-bubble">{t("chatbot.floatMessage")}</div>
        <img src={chatbotIcon} alt={t("chatbot.altText")} />
      </div>
    </div>
  );
};

export default Home;
