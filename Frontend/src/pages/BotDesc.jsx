import React from 'react';
import './BotDesc.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function BotDesc() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="bot-desc">
      {/* Main heading */}
      <h2 className="bot-heading">{t('bot.title_1')}</h2>
      
      <div className="boxes">
        {/* Features Section */}
        <div className="features">
          <h3>{t('bot.features_title')}</h3>
          <ul>
            <li>{t('bot.feature_1')}</li>
            <li>{t('bot.feature_2')}</li>
            <li>{t('bot.feature_3')}</li>
            <li>{t('bot.feature_4')}</li>
            <li>{t('bot.feature_5')}</li>
          </ul>
        </div>

        {/* How to Use Section */}
        <div className="guide">
          <h3>{t('bot.how_to_use')}</h3>
          <ol>
            <li>{t('bot.step_1')}</li>
            <li>{t('bot.step_2')}</li>
            <li>{t('bot.step_3')}</li>
            <li>{t('bot.step_4')}</li>
            <li>{t('bot.step_5')}</li>
          </ol>
        </div>
      </div>

      {/* Button to navigate */}
      <button className="start-btn" onClick={() => navigate('/bot')}>
        {t('bot.start_using')}
      </button>
    </div>
  );
}

export default BotDesc;
