import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddCustomTrigger.css";
import Button from "./Button";

export default function AddCustomTriggerForm() {
  const navigate = useNavigate();

  const goToCustomTriggers = () => {
    navigate("/CustomTriggers");
  };
  return (
    <div className="add-custom-trigger">
      <form className="AddCustomTriggerForm">
        <h1>Add Custom Trigger</h1>
        <div>
          Describe your phobia, and anything else you want us to know, and we’ll
          tailor your results accordingly!
        </div>
        <input type="text" id="trigger-description" />
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
