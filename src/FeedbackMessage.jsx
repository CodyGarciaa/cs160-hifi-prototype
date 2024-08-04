import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./FeedbackMessage.css"; // Import the CSS file

export default function FeedbackMessage() {
  const navigate = useNavigate();

  const location = useLocation();
  const { movie_data } = location.state || {};

  const goToMovieDescription = () => {
    navigate("/MovieDescription", { state: { movie_data: movie_data } });
  };

  return (
    <div className="feedback-message">
      <h1>Phobia Feedback</h1>
      <div>Thank you for your feedback! 🥳</div>
      <div>Your feedback is being learned by our AI. 🦾</div>
      <div>
        We appreciate you helping us give more accurate info in the future! 🤩
      </div>
      <button onClick={goToMovieDescription}>Go back</button>
    </div>
  );
}
