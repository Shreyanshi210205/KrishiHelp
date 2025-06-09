import React from "react";
import { useTranslation } from "react-i18next";
import githubIcon from "../assets/icons/githubicon.png";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>{t("appName")}</h3>
        <p>{t("tagline")}</p>
      </div>

      <div className="footer-right">
        <a
          href="https://github.com/akkii1306/KrishiHelp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt={t("githubAlt")} className="github-icon" />
        </a>
        <p>{t("copyright", { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
};

export default Footer;
