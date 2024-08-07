import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button.jsx";
import "./StreamPopUp.css";

const StreamPopUp = ({ onClose }) => {

  const [showDetails, setShowDetails] = useState(false);

  const handleSeeDetails = () => {
    setShowDetails(true);
  };

  const handleSkipScene = () => {
    // Implement scene skipping logic here
    console.log("Scene skipped");
  };

  return (
    <div className="stream-pop-up">
      <div className="pop-up-content">
        {showDetails ? (
          <>
            <div className="scene-details">
                <div className="tldr-details">
                    <strong>TLDR: </strong> tldr here
                </div>
                <div className="time-details">
                    <strong>Time: </strong> time here
                </div>
                <div className="description-details">
                    <strong>Description: </strong> <br/> description here
                </div>
            </div>
            <div className="scene-pop-up-btns">
              <Button className="scene-pop-up-skip-btn" onClick={handleSkipScene}>Skip Scene</Button>
              <Button className="scene-pop-up-cont-btn" onClick={onClose}>Continue &nbsp; &#9654;</Button>
            </div>
          </>
        ) : (
          <>
            <div className="scene-pop-up-warning">The next scene may contain:</div>
            <div className="scene-pop-up-btns">
              <Button className="scene-pop-up-skip-btn" onClick={handleSeeDetails}>See Details</Button>
              <Button className="scene-pop-up-cont-btn" onClick={onClose}>Continue &nbsp; &#9654;</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StreamPopUp;
