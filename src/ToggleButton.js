import React, { useState } from 'react';
import './ToggleButton.css';

const ToggleButton = ({ children }) => {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn);
    };

    return (
        <button 
            className={`toggle-button ${isOn ? 'on': 'off'}`}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default ToggleButton;