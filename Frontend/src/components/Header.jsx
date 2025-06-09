import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import logo from '/logo.png'
import "./Header.css";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowDropdown(false); 
  };

  return (
    <header className="header">
      <div className="header-left">
        <img
    src={logo}
    alt="KrishiHelp Logo"
    className="logo-img"
  />
        <h1 className="logo">{t("krishi_help")}</h1>
      </div>

      <nav className="header-center">
        <Link to="/">{t("nav.home")}</Link>
        <Link to="/tools">{t("nav.tools")}</Link>
        <Link to="/register">{t("nav.register")}</Link>
        <Link to="/chatbot">{t("nav.chatbot")}</Link>
        <Link to="/dashboard">{t("nav.dashboard")}</Link>
      </nav>

      <div className="header-right">
        <Globe
          size={24}
          className="language-icon"
          title="Change Language"
          onClick={() => setShowDropdown(!showDropdown)}
        />
        {showDropdown && (
          <div className="language-dropdown">
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("hi")}>हिन्दी</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
