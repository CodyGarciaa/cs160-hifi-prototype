import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css';




const MovieCard2 = ({movie_data}) => {


const movieDetails = {
  'title': 'title',
  'poster': 'https://placehold.co/600x400'
}
const [data, setData] = useState(movieDetails);




useEffect(() => {
  const fetchData = async () => {
    var newMovieDetails = { ...movieDetails };
    newMovieDetails['title'] = movie_data['tmdb_data']['title'];
    newMovieDetails['poster'] = movie_data['poster'];
    setData(newMovieDetails);
  };
 //  console.log('updated');
  fetchData();
}, [movie_data['poster']]);


const navigate = useNavigate();
const goToMovie = () => {
 navigate('/MovieDescription', { state: { movie_data: movie_data } })
};
 return (
  <div className="movie-card" onClick={goToMovie}>
      <img
            className="movie-poster"
            src={data['poster']}
          />
      <div>{data['title']}</div>
  </div>
);
};




export default MovieCard2;