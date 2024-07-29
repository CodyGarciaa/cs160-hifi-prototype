// src/GeneralButton.js
import React from 'react';
import './GeneralButton.css';

const GeneralButton = ({ onClick, children, className = '', type = 'button' }) => {
  return (
    <button
      type={type}
      className={`general-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default GeneralButton;
