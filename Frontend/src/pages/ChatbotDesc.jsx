import React from 'react';
import './ChatbotDesc.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ChatbotDesc() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="chatbot">
      <h2 className="chatbot-heading">{t('chatbot.title')}</h2>
      <div className="boxes">
        <div className="features">
          <h3>{t('chatbot.features_title')}</h3>
          <ul>
            <li>{t('chatbot.feature_1')}</li>
            <li>{t('chatbot.feature_2')}</li>
            <li>{t('chatbot.feature_3')}</li>
            <li>{t('chatbot.feature_4')}</li>
            <li>{t('chatbot.feature_5')}</li>
          </ul>
        </div>

        <div className="guide">
          <h3>{t('chatbot.how_to_use_title')}</h3>
          <ol>
            <li>{t('chatbot.step_1')}</li>
            <li>{t('chatbot.step_2')}</li>
            <li>{t('chatbot.step_3')}</li>
            <li>{t('chatbot.step_4')}</li>
            <li>{t('chatbot.step_5')}</li>
          </ol>
        </div>
      </div>

      <button className="start-btn" onClick={() => navigate('/chatbot')}>
        {t('chatbot.start_using')}
      </button>
    </div>
  );
}

export default ChatbotDesc;
