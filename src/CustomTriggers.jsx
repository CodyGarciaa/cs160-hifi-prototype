import React from "react";
import { useNavigate } from "react-router-dom";


export default function CustomTriggers() {
  const navigate = useNavigate();

  const goToAddCustomTrigger = () => {
    navigate('/AddCustomTrigger')
  }

  const goToEditCustomTrigger = () => {
    navigate('/EditCustomTrigger')
  }

  
  const goToHome = () => {
    navigate('/')
  }

  return (
    <>
      <button className="back-button" onClick={goToHome}>&#8592;</button>

      <h1>Custom Triggers</h1>
      <ul className="trigger-list">
        <li class="list-trigger-item">
          <label>Holes/small patterns</label>
          <button onClick={goToEditCustomTrigger}>🖊️</button>
        </li>
      </ul>
      <button onClick={goToAddCustomTrigger}>+ New Trigger</button>
    </>
  );
}
