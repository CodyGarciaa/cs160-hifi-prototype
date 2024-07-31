import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieDescription() {
    return (
        <div className="movie-detail-container">
          <header className="movie-header">
            <Link to="/" className="back-button">&#8592;</Link>
            <h1 className="movie-title">Zootopia</h1>
            <p className="movie-year">2016 PG 1hr 48m</p>
            <p className="movie-director">Byron Howard, Rich Moore, Jared Bush</p>
            <div className="rating-container">
              <div className="stars">
                {[...Array(4)].map((_, index) => (
                  <span key={index} className="star">&#9733;</span>
                ))}
                <span className="star">&#9734;</span>
              </div>
              <p className="average-rating">Average rating: 4/5</p>
            </div>
          </header>
    
          <div className="movie-poster-container">
            <img
              className="movie-poster"
              src="https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_SX300.jpg"
              alt="Holes Movie Poster"
            />
          </div>
    
          <div className="movie-controls">
            <button className="trailer-button">See trailer &#9654;</button>
            <button className="add-to-list-button">+ Add to list</button>
          </div>
    
          <div className="trigger-warning">
            <p>This movie has 5 scenes with your triggers</p>
            <button className="scene-descriptions-button">
              See scene descriptions &#10140;
            </button>
            <button className="feedback-button">Give feedback</button>
          </div>
    
          <Link to="/Stream" className="watch-movie-button">Watch Movie</Link>
    
          <div className="movie-info">
            <p className="prominent-actors">
              <strong>Prominent Actors/Actresses:</strong> Ginnifer Goodwin, Jason Bateman, Idris Elba
            </p>
            <p className="synopsis">
              <strong>Synopsis:</strong> In a city of anthropomorphic animals, a rookie bunny cop and 
              a cynical con artist fox must work together to uncover a conspiracy.
            </p>
          </div>
        </div>
      );
}