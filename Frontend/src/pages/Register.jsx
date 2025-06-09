import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log(t("register.loggingIn"), formData);
    } else {
      console.log(t("register.registering"), formData);
    }
    navigate("/");
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>{isLogin ? t("register.login") : t("register.register")}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder={t("register.fullName")}
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder={t("register.email")}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder={t("register.password")}
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">
            {isLogin ? t("register.login") : t("register.register")}
          </button>
        </form>
        <p>
          {isLogin
            ? t("register.noAccount")
            : t("register.alreadyHaveAccount")}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? t("register.register") : t("register.login")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
