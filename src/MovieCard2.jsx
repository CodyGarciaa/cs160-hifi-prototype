import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css';


const MovieCard2 = ({title, poster}) => {
 const navigate = useNavigate();
 const movieDetails = {
   'title': 'title',
   'poster': 'https://placehold.co/600x400'
 }
 const [data, setData] = useState(movieDetails);


 useEffect(() => {
   const fetchData = async () => {
     var newMovieDetails = { ...movieDetails };
     newMovieDetails['title'] = title;
     newMovieDetails['poster'] = poster;
     setData(newMovieDetails);
   };
   fetchData();
 }, [title, poster]);


 const goToMovie = () => {
   navigate('/MovieDescription', { state: { title: title, poster: poster } })
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