import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button.jsx";
import "./StreamPopUp.css";

const StreamPopUp = ({ onClose }) => {

  const navigate = useNavigate();
  const goToCustomTriggers = () => {
    navigate("/CustomTriggers");
  };

  return (
    <div className="stream-pop-up">
      <div className="pop-up-content">
        <button onClick={onClose}>close pop up</button>
        <div className="scene-pop-up-warning">The next scene may contain:</div>
        <div className="scene-pop-up-btns">
            <Button className="scene-pop-up-skip-btn ">See Details</Button>
            <Button className="scene-pop-up-cont-btn">Continue &nbsp; &#9654;</Button>
        </div>
      </div>
    </div>
  );
};

export default StreamPopUp;
