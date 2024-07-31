import React from "react";
import { useNavigate } from "react-router-dom";

export default function FeedbackMessage() {
  const navigate = useNavigate();

  const goToMovieDescription = () => {
    navigate('/MovieDescription')
  }

  return (
    <>
      <h1>Phobia Feedback</h1>
      <div>Thank you for your feedback! 🥳</div>
      <div>Your feedback is being learned by our AI. 🦾</div>
      <div>
        We appreciate you helping us give more accurate info in the future! 🤩
      </div>
      <button onClick={goToMovieDescription}>Back</button>
    </>
  );
}
