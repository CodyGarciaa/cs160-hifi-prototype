import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css';


const MovieCard2 = ({tmdb_details, scenes}) => {
 const navigate = useNavigate();
 const movieDetails = {
   'title': 'title',
   'poster': 'https://placehold.co/600x400'
 }
 const [data, setData] = useState(movieDetails);


 useEffect(() => {
   const fetchData = async () => {
     var newMovieDetails = { ...movieDetails };
     newMovieDetails['title'] = tmdb_details['title'];
     newMovieDetails['poster'] = "https://image.tmdb.org/t/p/w500" + tmdb_details['poster_path'];
     setData(newMovieDetails);
   };
   fetchData();
 }, [tmdb_details, scenes]);


 const goToMovie = () => {
   navigate('/MovieDescription', { state: { tmdb_details: tmdb_details, scenes: scenes } })
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