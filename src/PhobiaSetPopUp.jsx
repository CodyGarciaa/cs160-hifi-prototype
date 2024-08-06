import React from "react";
import { useNavigate } from "react-router-dom";
import "./PhobiaSetPopUp.css";
import ToggleButton from "./ToggleButton.jsx";
import Button from "./Button.jsx";

const PhobiaSetPopUp = ({
  isVisible,
  onClose,
  phobia,
  togglePhobia,
  triggers,
}) => {
  const navigate = useNavigate();
  const goToCustomTriggers = () => {
    navigate("/CustomTriggers");
  };

  const phobiaArray = phobia.split(",").filter(Boolean); // Split phobia string into an array

  return (
    <div className="popup">
      <div
        className={`popup-overlay ${isVisible ? "visible" : ""}`}
        onClick={onClose}
      >
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <h2>Common Phobia Triggers</h2>
          <div className="phobia-toggles-popup">
            <ToggleButton
              className="phobia-toggle-btn"
              onClick={() => togglePhobia("spiders")}
              isToggled={phobiaArray.includes("spiders")}
            >
              spiders
            </ToggleButton>
            <ToggleButton
              className="phobia-toggle-btn"
              onClick={() => togglePhobia("snakes")}
              isToggled={phobiaArray.includes("snakes")}
            >
              snakes
            </ToggleButton>
            <ToggleButton
              className="phobia-toggle-btn"
              onClick={() => togglePhobia("blood")}
              isToggled={phobiaArray.includes("blood")}
            >
              blood
            </ToggleButton>
            <ToggleButton
              className="phobia-toggle-btn"
              onClick={() => togglePhobia("heights")}
              isToggled={phobiaArray.includes("heights")}
            >
              heights
            </ToggleButton>
            <ToggleButton
              className="phobia-toggle-btn"
              onClick={() => togglePhobia("flying")}
              isToggled={phobiaArray.includes("flying")}
            >
              flying
            </ToggleButton>
          </div>

          <h2>Your Custom Phobia Triggers</h2>
          <div className="custom-phobia-btns">
            {triggers.map((trigger) => (
              <ToggleButton
                key={trigger.id}
                className="custom-phobia-toggle-btn"
                onClick={() => togglePhobia(trigger.triggertitle)}
                isToggled={phobiaArray.includes(trigger.triggertitle)}
              >
                {trigger.triggertitle}
              </ToggleButton>
            ))}
            <Button
              className="pop-up-add-phobia-btn"
              onClick={goToCustomTriggers}
            >
              +
            </Button>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default PhobiaSetPopUp;
