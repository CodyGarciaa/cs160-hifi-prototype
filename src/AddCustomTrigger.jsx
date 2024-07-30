import React from "react";

export default function AddCustomTriggerForm() {
  return (
    <div>
      <form className="AddCustomTriggerForm">
        <h1>Add Custom Trigger</h1>
        <label htmlFor="trigger-description">
          Describe your phobia, and anything else you want us to know, and we’ll
          tailor your results accordingly!
        </label>
        <input type="text" id="trigger-description" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
