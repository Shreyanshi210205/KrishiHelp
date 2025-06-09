import React, { useEffect, useState } from 'react';
import './FlashCard.css';

function FlashCard() {
  const [visible, setVisible] = useState(false);
  const [randomTip,setRandomTip]=useState(null)

  useEffect(() => {
    fetch('/eco_farming_tips.json')
    .then((res)=>res.json())
    .then((data)=>{
      const randomIndex=Math.floor(Math.random()*data.length)
      setRandomTip(data[randomIndex])
    })
    const hasSeenFlashCard = sessionStorage.getItem('hasSeenFlashCard');

    if (!hasSeenFlashCard) {
      setVisible(true);
    }

    const hideCard = () => {
      setVisible(false);
      sessionStorage.setItem('hasSeenFlashCard', 'true'); 
    };

    if (visible) {
      document.addEventListener('click', hideCard);
    }

    return () => document.removeEventListener('click', hideCard);
  }, [visible]);

  if (!visible || !randomTip) return null;

  return (
    <div className="flash-overlay">
      <div className="flash-card">
        <h2>{randomTip.title}</h2>
        <p>{randomTip.description}</p>
        <p className='gray-text'>Click anywhere to begin.</p>
      </div>
    </div>
  );
}

export default FlashCard;