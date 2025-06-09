import React from 'react';
import './Tools.css';
import tool1 from '../assets/images/toolChat.png';
import tool2 from '../assets/images/toolPredict.png';
import tool3 from '../assets/images/toolRobot.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Tools() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const toolsData = [
    {
      title: t('tools.tool_1.title'),
      description: t('tools.tool_1.description'),
      image: tool1,
      button: '/chatbot-desc',
    },
    {
      title: t('tools.tool_2.title'),
      description: t('tools.tool_2.description'),
      image: tool2,
      button: '/ai-desc',
    },
    {
      title: t('tools.tool_3.title'),
      description: t('tools.tool_3.description'),
      image: tool3,
      button: '/bot-desc',
    },
  ];

  return (
    <div className="tools">
      <div className="tools-section">
        <h2 className="heading-tools">{t('tools.heading')}</h2>
      </div>
      <div className="card-container">
        {toolsData.map((tool, index) => (
          <div className="tool-card" key={index}>
            <img src={tool.image} alt={tool.title} className="card-image" />
            <div className="card-gradient">
              <div className="card-text">
                <h2>{tool.title}</h2>
                <p>{tool.description}</p>
                <button onClick={() => navigate(tool.button)} className="start-button">
                  {t('tools.start_button')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tools;
