// src/PopUp.jsx
import React from 'react';
import { useNavigate } from "react-router-dom";
import './PhobiaSetPopUp.css';
import ToggleButton from './ToggleButton.jsx';
import Button from "./Button.jsx";

const PhobiaSetPopUp = ({ isVisible, onClose }) => {

    const navigate = useNavigate();
    const goToAddCustomTriggerForm = () => {
        navigate("/AddCustomTriggerForm");
    };

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
                        <Button className="pop-up-add-phobia-btn" onClick={goToAddCustomTriggerForm}>+</Button>
                    </div>
                    <br/>
                    <br/>

                </div>
            </div>
        </div>
    );
};

export default PhobiaSetPopUp;
