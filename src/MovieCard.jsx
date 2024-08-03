import React from 'react';
import './MovieCard.css';

const MovieCard = ({ image, title }) => {
  let style = {};
  if (image === '') {
    style = { backgroundColor: 'gray' };
  } else if (image === 'yellow') {
    style = { backgroundColor: 'yellow' };
  } else {
    style = { backgroundImage: `url(${image})` };
  }
  return (
    <div className="movie-card">
        <div className="movie-poster"
             style={style}
        ></div>
        <div>{title}</div>
    </div>
  );
};

export default MovieCard;
