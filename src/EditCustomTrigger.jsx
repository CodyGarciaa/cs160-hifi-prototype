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
        <label htmlFor="trigger-description">Holes/small patterns</label>
        <input type="text" id="trigger-description" placeholder="new description of the trigger"/>
        <br /><button>delete</button>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
