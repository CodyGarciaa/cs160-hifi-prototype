import React from "react";

export default function EditCustomTriggerForm() {
  return (
    <div>
      <form className="EditCustomTriggerForm">
        <h1>Edit Custom Trigger</h1>
        <div>
          Feel free to edit your description of the phobia, and we’ll update
          your results accordingly!{" "}
        </div>
        <label htmlFor="trigger-description">phobia name</label>
        <input type="text" id="trigger-description" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
