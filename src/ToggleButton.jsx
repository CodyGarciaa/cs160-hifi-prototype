import React, { useState, useEffect } from 'react';
import './ToggleButton.css';

const ToggleButton = ({ children, className, onClick, isToggled}) => {
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        setIsOn(isToggled);
    }, [isToggled])

    const handleClick = () => {
        setIsOn(!isOn);
        onClick(children);
    };

    return (
        <button 
            className={`toggle-button ${isOn ? 'on': 'off'} ${className}`}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default ToggleButton;