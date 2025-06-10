import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./Analysis.css";

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Analysis = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state;

  useEffect(() => {
    if (!formData) {
      alert(t("analysis.alert"));
      navigate("/dashboard");
    }
  }, [formData, navigate, t]);

  if (!formData) return null;

  const pieData = {
    labels: [t("analysis.nitrogen"), t("analysis.phosphorus")],
    datasets: [
      {
        data: [formData.nitrogen, formData.phosphorus],
        backgroundColor: ["#4CAF50", "#2196F3"],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const barData = {
    labels: [t("analysis.temperature"), t("analysis.humidity"), t("analysis.rainfall")],
    datasets: [
      {
        label: t("analysis.environmentStats"),
        data: [formData.temperature, formData.humidity, formData.rainfall],
        backgroundColor: ["#FF5722", "#FFC107", "#00BCD4"],
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="analysis-page">
      <h1 className="page-title">{t("analysis.title")}</h1>

      <div className="chart-section">
        <div className="chart-box">
          <h3>{t("analysis.nutrientComposition")}</h3>
          <div className="chart-wrapper">
            <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="chart-box">
          <h3>{t("analysis.environmentalFactors")}</h3>
          <div className="chart-wrapper">
            <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </div>

      <button onClick={() => navigate("/dashboard")} className="back-btn">
        🔙 {t("analysis.backToDashboard")}
      </button>
    </div>
  );
};

export default Analysis;
