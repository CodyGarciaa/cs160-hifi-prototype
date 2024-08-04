import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "./CustomTriggers.css";

export default function CustomTriggers({ triggers }) {
  const navigate = useNavigate();

  const goToAddCustomTrigger = () => {
    navigate("/AddCustomTriggerForm");
  };

  const goToEditCustomTrigger = (id) => {
    navigate(`/EditCustomTrigger/${id}`); // Navigate to the specific trigger's edit page
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
        {triggers.length === 0 ? (
          <p className="no-triggers-message">
            You currently have no custom phobia triggers added.
          </p>
        ) : (
          <ul className="trigger-list">
            {triggers.map((trigger) => (
              <li key={trigger.id} className="list-trigger-item">
                <div className="trigger-item-text">
                  <div className="trigger-item-name">
                    {trigger.triggertitle}
                  </div>
                  <div className="trigger-item-description">
                    {trigger.triggersummary}
                  </div>
                </div>
                <button
                  className="edit-custom-trigger-btn"
                  onClick={() => goToEditCustomTrigger(trigger.id)} // Pass the trigger ID
                >
                  🖊️
                </button>
              </li>
            ))}
          </ul>
        )}
      </ul>
      <button className="add-custom-trigger-btn" onClick={goToAddCustomTrigger}>
        <span className="circle-icon">+</span>
        <span className="button-text">New Trigger</span>
      </button>
    </div>
  );
}
