import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "./CustomTriggers.css";

export default function CustomTriggers({ triggers, onAddTrigger }) {
  // Accept triggers and onAddTrigger as props
  const navigate = useNavigate();

  const goToAddCustomTrigger = () => {
    navigate("/AddCustomTriggerForm");
  };

  const goToEditCustomTrigger = () => {
    navigate("/EditCustomTrigger");
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="custom-triggers">
      <Button className="back-btn" onClick={goToHome}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/566/566002.png"
          style={{ width: "20px", height: "20px" }}
        />
      </Button>

      <h1>Custom Triggers</h1>
      <ul className="trigger-list">
        {triggers.map((trigger, index) => (
          <li key={index} className="list-trigger-item">
            <div className="trigger-item-text">
              <div className="trigger-item-name">{trigger.triggertitle}</div>
              <div className="trigger-item-description">
                {trigger.triggersummary}
              </div>
            </div>
            <button
              className="edit-custom-trigger-btn"
              onClick={goToEditCustomTrigger}
            >
              🖊️
            </button>
          </li>
        ))}
      </ul>
      <button className="add-custom-trigger-btn" onClick={goToAddCustomTrigger}>
        <span className="circle-icon">+</span>
        <span className="button-text">New Trigger</span>
      </button>
    </div>
  );
}
