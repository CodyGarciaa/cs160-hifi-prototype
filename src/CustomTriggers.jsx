import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "./CustomTriggers.css";

export default function CustomTriggers() {
  const navigate = useNavigate();

  const goToAddCustomTrigger = () => {
    navigate("/AddCustomTrigger");
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
        <li class="list-trigger-item">
          <div className="trigger-item-text">
            <div className="trigger-item-name">Holes/small patterns</div>
            <div className="trigger-item-description">
              deep fear of holes or small patterns, including cartoon depictions
            </div>
          </div>
          <button
            className="edit-custom-trigger-btn"
            onClick={goToEditCustomTrigger}
          >
            🖊️
          </button>
        </li>
      </ul>
      <button className="add-custom-trigger-btn" onClick={goToAddCustomTrigger}>
        <span className="circle-icon">+</span>
        <span className="button-text">New Trigger</span>
      </button>
    </div>
  );
}
