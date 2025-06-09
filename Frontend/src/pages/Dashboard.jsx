import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Dashboard.css";

const Dashboard = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    waterUsage: "",
    fertilizerUsed: "",
    fertilizerQty: "",
    cropImage: null,
    farmLocation: "",
    additionalDetails: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cropImage") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t("dashboard.alertMessage"));
  };

  return (
    <div className="dashboard-container">
      <section className="welcome-section">
        <h1>{t("dashboard.title")}</h1>
        <p>{t("dashboard.subtitle")}</p>
      </section>

      <section className="form-section">
        <form className="analysis-form" onSubmit={handleSubmit}>
          <label>{t("dashboard.waterUsage")}</label>
          <input
            type="number"
            name="waterUsage"
            value={formData.waterUsage}
            onChange={handleChange}
            required
          />

          <label>{t("dashboard.fertilizerUsed")}</label>
          <input
            type="text"
            name="fertilizerUsed"
            value={formData.fertilizerUsed}
            onChange={handleChange}
            required
          />

          <label>{t("dashboard.fertilizerQty")}</label>
          <input
            type="number"
            name="fertilizerQty"
            value={formData.fertilizerQty}
            onChange={handleChange}
            required
          />

          <label>{t("dashboard.cropImage")}</label>
          <input
            type="file"
            name="cropImage"
            accept="image/*"
            onChange={handleChange}
            required
          />

          <label>{t("dashboard.farmLocation")}</label>
          <input
            type="text"
            name="farmLocation"
            value={formData.farmLocation}
            onChange={handleChange}
            required
          />

          <label>{t("dashboard.additionalDetails")}</label>
          <textarea
            name="additionalDetails"
            rows="4"
            value={formData.additionalDetails}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="submit-btn">
            {t("dashboard.submit")}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Dashboard;
