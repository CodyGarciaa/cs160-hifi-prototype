import React, { useState } from "react";
import "./DropDownDescription.css";

const DropDownDescription = ({ buttonText, popuptime, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <button onClick={toggleDropdown} className="button">
        {buttonText}
        <span className="popuptime">{popuptime}</span> {/* Wrapped in span */}
        <span className="icon">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="dropdown">
          <p className="description">{description}</p>
        </div>
      )}
    </div>
  );
};

export default DropDownDescription;
