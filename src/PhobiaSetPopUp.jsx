// src/PopUp.jsx
import React from 'react';
import './PhobiaSetPopUp.css';
import ToggleButton from './ToggleButton.jsx';

const PhobiaSetPopUp = ({ isVisible, onClose }) => {
  return (
    <div className="popup">
        <div className={`popup-overlay ${isVisible ? 'visible' : ''}`} onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <h2>Common Phobia Triggers</h2>
                <div className="phobia-toggles-popup">
                    <ToggleButton className="phobia-toggle-btn">spiders</ToggleButton>
                    <ToggleButton className="phobia-toggle-btn">snakes</ToggleButton>
                    <ToggleButton className="phobia-toggle-btn">blood</ToggleButton>
                    <ToggleButton className="phobia-toggle-btn">heights</ToggleButton>
                    <ToggleButton className="phobia-toggle-btn">flying</ToggleButton>
                </div>

                <h2>Your Custom Phobia Triggers</h2>
                <div className="custom-phobia-btns">
                    <ToggleButton className="phobia-toggle-btn">holes/small patterns</ToggleButton>
                    
                </div>

            </div>
        </div>
    </div>
  );
};

export default PhobiaSetPopUp;
