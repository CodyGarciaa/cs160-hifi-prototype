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

// const DropDownDescription = ({ buttonText, popuptime, description }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="container">
//       <button onClick={toggleDropdown} className="button">
//         {buttonText}
//         <span className="popuptime">{popuptime}</span> {/* Wrapped in span */}
//         <span className="icon">{isOpen ? "▲" : "▼"}</span>
//       </button>
//       {isOpen && (
//         <div className="dropdown">
//           <p className="description">{description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

export default DropDownDescription;
