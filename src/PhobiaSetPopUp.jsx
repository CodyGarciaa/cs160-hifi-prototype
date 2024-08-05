// src/PopUp.jsx
import React from 'react';
import { useNavigate } from "react-router-dom";
import './PhobiaSetPopUp.css';
import ToggleButton from './ToggleButton.jsx';
import Button from "./Button.jsx";

const PhobiaSetPopUp = ({ isVisible, onClose, phobia, togglePhobia }) => {

    const navigate = useNavigate();
    const goToCustomTriggers = () => {
        navigate("/CustomTriggers");
    };

    return (
        <div className="popup">
            <div className={`popup-overlay ${isVisible ? 'visible' : ''}`} onClick={onClose}>
                <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                    <h2>Common Phobia Triggers</h2>
                    <div className="phobia-toggles-popup">
                        <ToggleButton className="phobia-toggle-btn" onClick={togglePhobia} isToggled={phobia.includes("spiders")}>spiders</ToggleButton>
                        <ToggleButton className="phobia-toggle-btn" onClick={togglePhobia} isToggled={phobia.includes("snakes")}>snakes</ToggleButton>
                        <ToggleButton className="phobia-toggle-btn" onClick={togglePhobia} isToggled={phobia.includes("blood")}>blood</ToggleButton>
                        <ToggleButton className="phobia-toggle-btn" onClick={togglePhobia} isToggled={phobia.includes("heights")}>heights</ToggleButton>
                        <ToggleButton className="phobia-toggle-btn" onClick={togglePhobia} isToggled={phobia.includes("flying")}>flying</ToggleButton>
                    </div>

                    <h2>Your Custom Phobia Triggers</h2>
                    <div className="custom-phobia-btns">
                        <ToggleButton className="phobia-toggle-btn">holes/small patterns</ToggleButton>
                        <Button className="pop-up-add-phobia-btn" onClick={goToCustomTriggers}>+</Button>
                    </div>
                    <br/>
                    <br/>

                </div>
            </div>
        </div>
    );
};

export default PhobiaSetPopUp;
