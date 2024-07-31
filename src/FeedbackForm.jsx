import React from "react";
import { useNavigate } from "react-router-dom";

export default function FeedbackForm() {
  const navigate = useNavigate();

  const goToFeedbackMessage = () => {
    navigate('/FeedbackMessage')
  }

  const goToMovieDescription = () => {
    navigate('/MovieDescription')
  }

  return (
    <div>
      <form className="feedback-form">
        <button className="back-button" onClick={goToMovieDescription}>&#8592;</button>
        <h1>Phobia Feedback</h1>
        <button>Seems Fine</button>
        <button>There are errors</button><br />
        <input
          type="text"
          id="text-feedback"
          placeholder="Your feedback is helpful for us!"
        />
        <div>If your trigger pop up in the movie unfortunately......</div>
        <label htmlFor="pop-up-time">pop-up</label>
        <input type="text" id="pop-up-time" placeholder="00:00:00" />
        <label htmlFor="vanish-time">vanish</label>
        <input type="text" id="vanish-time" placeholder="00:00:00" /><br />
        <button>+</button><br />
        <button type="submit" onClick={goToFeedbackMessage}>submit</button>
      </form>
    </div>
  );
}
