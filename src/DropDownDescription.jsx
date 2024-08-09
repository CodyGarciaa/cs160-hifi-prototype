import React, { useState } from "react";
import "./DropDownDescription.css";

const DropDownDescription = ({ sceneNumber, time, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown-description">
      <div className="dropdown-header" onClick={toggleOpen}>
        <div>Scene {sceneNumber}</div>
        <div>{time}</div>
        <div>{isOpen ? '▲' : '▼'}</div>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default DropDownDescription;
