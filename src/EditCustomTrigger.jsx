import React from "react";
import { useNavigate } from "react-router-dom";
import "./EditCustomTrigger.css";

export default function EditCustomTriggerForm() {
  const navigate = useNavigate();

  const goToCustomTriggers = () => {
    navigate("/CustomTriggers");
  };

  return (
    <div className="edit-custom-trigger">
      <form className="EditCustomTriggerForm">
        <h1>Edit Custom Trigger</h1>
        <div>
          Feel free to edit your description of the phobia, and we’ll update
          your results accordingly!
        </div>
        <div className="input-container">
          <label htmlFor="trigger-description">Holes/small patterns</label>
          <input
            type="text"
            id="trigger-description"
            placeholder="new description of the trigger"
          />
        </div>
        <br />
        <button className="delete-button" onClick={goToCustomTriggers}>
          delete
        </button>
        <button
          className="submit-button"
          type="submit"
          onClick={goToCustomTriggers}
        >
          submit
        </button>
      </form>
    </div>
  );
}
