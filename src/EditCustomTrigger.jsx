import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditCustomTrigger.css";

export default function EditCustomTriggerForm({
  triggers,
  onDeleteTrigger,
  onUpdateTrigger,
}) {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the trigger ID from the URL
  const triggerId = parseInt(id, 10); // Convert ID to an integer

  // Find the trigger with the matching ID
  const trigger = triggers.find((t) => t.id === triggerId);

  // State for editing the trigger description
  const [description, setDescription] = useState(
    trigger ? trigger.triggersummary : ""
  );

  const goToCustomTriggers = () => {
    navigate("/CustomTriggers");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const triggerData = {
      triggerdescription: description, // Send the updated description
    };

    try {
      const response = await fetch(
        "https://noggin.rea.gent/abstract-pig-8251",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer rg_v1_njski8sl6g80j0lidbm8bjmx3xc80ao806ak_ngk",
          },
          body: JSON.stringify(triggerData), // Send the JSON data
        }
      );

      // Expecting a JSON response containing 'triggertitle' and 'triggersummary'
      const data = await response.json();
      console.log(data); // For debugging purposes

      if (data.triggertitle && data.triggersummary) {
        // Call the onUpdateTrigger function with the updated trigger data
        onUpdateTrigger(triggerId, {
          triggertitle: data.triggertitle,
          triggersummary: data.triggersummary,
        });
      }

      goToCustomTriggers(); // Navigate after submitting
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleDelete = () => {
    if (trigger) {
      onDeleteTrigger(trigger.id); // Call the delete function with the trigger ID
    }
    goToCustomTriggers();
  };

  return (
    <div className="edit-custom-trigger">
      <form className="EditCustomTriggerForm" onSubmit={handleSubmit}>
        <h1>Edit Custom Trigger</h1>
        <div>
          Feel free to edit your description of the phobia, and we’ll update
          your results accordingly!
        </div>
        <div className="input-container">
          <label htmlFor="trigger-description">{trigger?.triggertitle}</label>
          <input
            type="text"
            id="trigger-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="new description of the trigger"
          />
        </div>
        <br />
        <button className="delete-button" type="button" onClick={handleDelete}>
          delete
        </button>
        <button className="submit-button" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}
