import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddCustomTriggerForm.css";
import Button from "./Button";

export default function AddCustomTriggerForm({ onAddTrigger }) {
  const [triggerDescription, setTriggerDescription] = useState("");
  const navigate = useNavigate();

  const goToCustomTriggers = () => {
    // Navigate to the correct path for CustomTriggers
    navigate("/CustomTriggers"); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const triggerData = {
      triggerdescription: triggerDescription,
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
        // Call the onAddTrigger function with the new trigger data
        onAddTrigger({
          triggertitle: data.triggertitle,
          triggersummary: data.triggersummary,
        });
      }

      goToCustomTriggers(); // Navigate after submitting
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="add-custom-trigger">
      <Button className="back-btn" onClick={goToCustomTriggers}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/566/566002.png"
          style={{ width: "20px", height: "20px" }}
        />
      </Button>
      <form className="AddCustomTriggerForm" onSubmit={handleSubmit}>
        <h1 className="add-trigger-h1">Add Custom Trigger</h1>
        <div>
          Describe your phobia, and anything else you want us to know, and we’ll
          tailor your results accordingly!
        </div>
        <textarea
          id="trigger-description"
          value={triggerDescription}
          onChange={(e) => setTriggerDescription(e.target.value)}
          required
        />
        <button className="submit-button" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}
