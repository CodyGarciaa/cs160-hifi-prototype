// src/PopUp.jsx
import React from 'react';
import './PhobiaSetPopUp.css';

const PhobiaSetPopUp = ({ isVisible, onClose }) => {
  return (
    <div className={`popup-overlay ${isVisible ? 'visible' : ''}`} onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>Pop-Up Content</h2>
        <p>This is the content of the pop-up.</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default PhobiaSetPopUp;
