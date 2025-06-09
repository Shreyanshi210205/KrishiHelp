import React from "react";
import "./AiDesc.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AiDesc() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="ai-desc">
      <h2 className="ai-heading">{t("ai_farm_advisor.title")}</h2>
      <div className="boxes">
        <div className="features">
          <h3>{t("ai_farm_advisor.features_title")}</h3>
          <ul>
            <li>{t("ai_farm_advisor.feature_1")}</li>
            <li>{t("ai_farm_advisor.feature_2")}</li>
            <li>{t("ai_farm_advisor.feature_3")}</li>
            <li>{t("ai_farm_advisor.feature_4")}</li>
            <li>{t("ai_farm_advisor.feature_5")}</li>
          </ul>
        </div>

        <div className="guide">
          <h3>{t("ai_farm_advisor.how_to_use")}</h3>
          <ol>
            <li>{t("ai_farm_advisor.step_1")}</li>
            <li>{t("ai_farm_advisor.step_2")}</li>
            <li>{t("ai_farm_advisor.step_3")}</li>
            <li>{t("ai_farm_advisor.step_4")}</li>
            <li>{t("ai_farm_advisor.step_5")}</li>
          </ol>
        </div>
      </div>

      <button className="start-btn" onClick={() => navigate("/ai")}>
        {t("ai_farm_advisor.start_using")}
      </button>
    </div>
  );
}

export default AiDesc;
