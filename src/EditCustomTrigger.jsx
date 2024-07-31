import React from "react";
import { useNavigate } from "react-router-dom";


export default function EditCustomTriggerForm() {
  const navigate = useNavigate();

  const goToCustomTriggers = () => {
    navigate('/CustomTriggers')
  }
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
        <br /><button onClick={goToCustomTriggers}>delete</button>
        <button type="submit" onClick={goToCustomTriggers}>submit</button>
      </form>
    </div>
  );
}
