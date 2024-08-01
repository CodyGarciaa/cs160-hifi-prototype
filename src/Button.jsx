import React from 'react';
import './Button.css';

const Button = ({ onClick, children, className = '', type = 'button' }) => {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
