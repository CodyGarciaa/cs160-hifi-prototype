import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FeedbackForm.css"; // Import the CSS file
import Button from './Button.jsx';

export default function FeedbackForm() {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState(null);

  const goToFeedbackMessage = () => {
    navigate("/FeedbackMessage");
  };

  const goToMovieDescription = () => {
    navigate("/MovieDescription");
  };

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <>
      <form className="feedback-form">
        {/* <button className="back-button" onClick={goToMovieDescription}>
          ←
        </button> */}
        <Button className="back-btn" onClick={goToMovieDescription}>
          <img src="https://cdn-icons-png.flaticon.com/512/566/566002.png"
          style={{ width: '20px', height: '20px' }}/>
        </Button>
        <h1>Phobia Feedback</h1>
        <p>Is the phobia information for this movie accurate?</p>
        <div className="button-group">
          <button
            type="button"
            className={`feedback-button ${
              selectedButton === "seemsFine" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("seemsFine")}
          >
            <span role="img" aria-label="smile">
              😊
            </span>{" "}
            Seems fine
          </button>
          <button
            type="button"
            className={`feedback-button ${
              selectedButton === "errors" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("errors")}
          >
            <span role="img" aria-label="sad">
              😢
            </span>{" "}
            There are errors
          </button>
        </div>
        <textarea
          id="text-feedback"
          placeholder="Your feedback is helpful for us!"
        />
        <div className="pop-up-time">
          <div>If your trigger pop up in the movie unfortunately...</div>
          <div className="time-inputs">
            <label htmlFor="vanish-time">vanished</label>
            <input type="text" id="vanish-time" placeholder="00:00:00" />
            <>———</>
            <label htmlFor="pop-up-time">pop-up</label>
            <input type="text" id="pop-up-time" placeholder="00:00:00" />
          </div>
          <button className="add-button">+</button>
        </div>
        <button
          type="submit"
          className="submit-button"
          onClick={goToFeedbackMessage}
        >
          submit
        </button>
      </form>
    </>
  );
}
