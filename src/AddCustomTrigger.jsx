import React from "react";
import { useNavigate } from "react-router-dom";


export default function AddCustomTriggerForm() {
  const navigate = useNavigate();

  const goToCustomTriggers = () => {
    navigate('/CustomTriggers')
  }
  return (
    <div>
      <form className="AddCustomTriggerForm">
        <h1>Add Custom Trigger</h1>
        <div>Describe your phobia, and anything else you want us to know, and we’ll
        tailor your results accordingly!</div>
        <input type="text" id="trigger-description" />
        <button type="submit" onClick={goToCustomTriggers}>submit</button>
      </form>
    </div>
  );
}
