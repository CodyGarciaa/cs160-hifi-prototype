import React from "react";
import DropDownDescription from "./DropDownDescription.jsx";
import { useNavigate } from "react-router-dom";
import Button from "./Button.jsx";
import "./PhobiaSceneDescription.css";
import WarningSing from "./warning-sign-icon-transparent-background-free-png 2.png";

export default function PhobiaSceneDescription() {
  const navigate = useNavigate();

  const goToMovieDescription = () => {
    navigate("/MovieDescription");
  };

  return (
    <div className="phobia-scene-description">
      <Button className="back-btn" onClick={goToMovieDescription}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/566/566002.png"
          style={{ width: "20px", height: "20px" }}
        />
      </Button>

      <h1>Holes</h1>
      <p>
        This movie has 5 scenes with your trigger
        <br />
        <br />
        <div className="warning">
          <img src={WarningSing} className="warning-sign" />
          Scene descriptions may contain spoilers!
        </div>
      </p>
      <DropDownDescription
        buttonText="Scene 1"
        popuptime="- 00:00:00"
        description="This is a description of scene1"
      />
    </div>
  );
}
