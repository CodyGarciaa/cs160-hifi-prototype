import React from 'react';
import MovieCard from './MovieCard';
import "./App.css";

const MovieList = ({ movieList, phobiaResults }) => {
  return (
    <div className="movie-list">
      {movieList.map((movie, index) => {
        const result = phobiaResults[index];
        let posterSrc = movie.src;

        if (result) {
          if (result.posterHasPhobia) {
            posterSrc = ''; // if poster has phobia, censor it (grey box for now)
          } else if (result.movieHasPhobia) {
            posterSrc = 'yellow'; // if movie has phobia, give warning (yellow box for now)
          }
        }

        return (
          <MovieCard key={index} image={posterSrc} title={movie.title} />
        );
      })}
    </div>
  );
};

export default MovieList;
