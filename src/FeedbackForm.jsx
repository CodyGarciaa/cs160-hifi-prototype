import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./FeedbackForm.css";
import Button from "./Button.jsx";

export default function FeedbackForm({ onSubmit }) {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState(null);
  const [textFeedback, setTextFeedback] = useState("");
  const [timeInputs, setTimeInputs] = useState([
    { id: 1, popUpTime: "", vanishTime: "" },
  ]);

  const location = useLocation();
  const { movie_data } = location.state || {};

  const title = movie_data["tmdb_data"]["title"];
  const phobia = movie_data["phobia"];
  const scenes = movie_data["scenes"];

  const goToFeedbackMessage = () => {
    navigate("/FeedbackMessage", { state: { movie_data: movie_data } });
  };

  const goToMovieDescription = () => {
    navigate("/MovieDescription", { state: { movie_data: movie_data } });
  };

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const handleAddTimeInput = () => {
    setTimeInputs([
      ...timeInputs,
      { id: timeInputs.length + 1, popUpTime: "", vanishTime: "" },
    ]);
  };

  const handleTimeInputChange = (id, field, value) => {
    setTimeInputs(
      timeInputs.map((input) =>
        input.id === id ? { ...input, [field]: value } : input
      )
    );
  };

  const timeFormat = /^([0-1]?[0-9]|2[0-3]):([0-5]?[0-9]):([0-5]?[0-9])$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    for (const input of timeInputs) {
      if (
        !timeFormat.test(input.popUpTime) ||
        !timeFormat.test(input.vanishTime)
      ) {
        alert(
          "Invalid time format. Please use HH:MM:SS format for all time inputs."
        );
        return;
      }
    }

    const correctness = selectedButton;
    const textfeedback = textFeedback;
    const timeinterval = timeInputs.map((input) => ({
      popUpTime: input.popUpTime,
      vanishTime: input.vanishTime,
    }));

    const feedback = { correctness, textfeedback, timeinterval };

    onSubmit(title, feedback);
    goToFeedbackMessage();
  };

  return (
    <>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <Button className="back-btn" onClick={goToMovieDescription}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/566/566002.png"
            style={{ width: "20px", height: "20px" }}
          />
        </Button>
        <h1>Phobia Feedback</h1>
        <p>Is the phobia information for this movie accurate?</p>
        <div className="button-group">
          <button
            type="button"
            className={`feedback-button ${
              selectedButton === "correct" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("correct")}
          >
            <span role="img" aria-label="smile">
              😊
            </span>{" "}
            Seems fine
          </button>
          <button
            type="button"
            className={`feedback-button ${
              selectedButton === "wrong" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("wrong")}
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
          value={textFeedback}
          onChange={(e) => setTextFeedback(e.target.value)}
        />
        <div className="time-question">
          <div>If your trigger pops up in the movie unfortunately...</div>
          {timeInputs.map((input) => (
            <div key={input.id} className="time-inputs">
              <div className="time-input-container">
                <label htmlFor={`pop-up-time-${input.id}`}>pop-up</label>
                <input
                  type="text"
                  id={`pop-up-time-${input.id}`}
                  placeholder="00:00:00"
                  value={input.popUpTime}
                  onChange={(e) =>
                    handleTimeInputChange(input.id, "popUpTime", e.target.value)
                  }
                />
              </div>
              <>———</>
              <div className="time-input-container">
                <label htmlFor={`vanish-time-${input.id}`}>vanished</label>
                <input
                  type="text"
                  id={`vanish-time-${input.id}`}
                  placeholder="00:00:00"
                  value={input.vanishTime}
                  onChange={(e) =>
                    handleTimeInputChange(
                      input.id,
                      "vanishTime",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            className="add-button"
            onClick={handleAddTimeInput}
          >
            +
          </button>
        </div>
        <button type="submit" className="submit-button">
          submit
        </button>
      </form>
    </>
  );
}
