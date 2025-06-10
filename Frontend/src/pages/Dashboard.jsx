import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    temperature: "",
    humidity: "",
    rainfall: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/analysis", { state: formData });
  };

  return (
    <div className="dashboard-container">
      <section className="welcome-section">
        <h1>{t("dashboard.title")}</h1>
        <p>{t("dashboard.subtitle")}</p>
      </section>

      <section className="form-section">
        <form className="analysis-form" onSubmit={handleSubmit}>
          <label>{t("dashboard.nitrogen")}</label>
          <input
            type="number"
            name="nitrogen"
            value={formData.nitrogen}
            onChange={handleChange}
            required
          />

          <label>{t("dashboard.phosphorus")}</label>
          <input
            type="number"
            name="phosphorus"
            value={formData.phosphorus}
            onChange={handleChange}
            required
          />

          <label>{t("dashboard.temperature")}</label>
          <input
            type="number"
            name="temperature"
            value={formData.temperature}
            onChange={handleChange}
            required
          />

          <label>{t("dashboard.humidity")}</label>
          <input
            type="number"
            name="humidity"
            value={formData.humidity}
            onChange={handleChange}
            required
          />

          <label>{t("dashboard.rainfall")}</label>
          <input
            type="number"
            name="rainfall"
            value={formData.rainfall}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn">
            {t("dashboard.submit")}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Dashboard;
