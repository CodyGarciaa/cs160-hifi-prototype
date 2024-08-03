import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button.jsx';
import { FaStar } from 'react-icons/fa';




export default function MovieDescription() {
 const navigate = useNavigate();


 const movieDetails = {
   'title': 'title',
   'overview': 'overview',
   'poster': 'https://placehold.co/600x400',
   'runtime': '24hrs',
   'actors': 'actors',
   'directors': 'directors',
   'id': 'id',
   'year': 'year',
   'rated': 'N/A',
   'genres': 'genres',
   'stars': 'N/A'
 };


 const [response, setResponse] = useState(movieDetails);
 const location = useLocation();
 const { title, poster } = location.state || {};
  let starRating;
 if (response['stars'] == 'N/A') {
   starRating = 'N/A';
 } else {
   starRating = (response['stars']/2) + '/5';
 }


 useEffect(() => {
   myFunction();
 }, []);


 const myFunction = async () => {
     var newMovieDetails = { ...movieDetails };


     const urlTitle = encodeURIComponent(title).replace(/%20/g, '+');
     const res = await fetch('http://www.omdbapi.com/?t=' + urlTitle + '&apikey=a470af76');
     const data = await res.json();
     newMovieDetails['title'] = title;
     newMovieDetails['overview'] = data['Plot'];
     newMovieDetails['poster'] = poster;
     newMovieDetails['actors'] = data['Actors'];
     newMovieDetails['directors'] = data['Director'];
     newMovieDetails['id'] = data['imdbID'];
     newMovieDetails['year'] = data['Year'];
     newMovieDetails['rated'] = data['Rated'];
     newMovieDetails['genres'] = data['Genre'];
     newMovieDetails['stars'] = data['imdbRating'];
     data['Runtime'] = parseInt(data['Runtime']);
     if (Math.floor(data['Runtime'] / 60) == 1) {
       newMovieDetails['runtime'] = Math.floor(data['Runtime'] / 60) + 'hr ' + (data['Runtime'] % 60) + 'mins';
     } else {
       newMovieDetails['runtime'] = Math.floor(data['Runtime'] / 60) + 'hrs ' + (data['Runtime'] % 60) + 'mins';
     }
     setResponse(newMovieDetails);
 };


 const goToHome = () => {
   navigate('/')
 }


 const goToFeedbackForm = () => {
   navigate('/FeedbackForm')
 }


 const goToPhobiaSceneDescription = () => {
   navigate('/PhobiaSceneDescription')
 }


 const goToStream = () => {
   navigate('/Stream', { state: { id: response['id'], title: title, poster: poster } })
 }


   return (
       <div className="movie-detail-container">
         <header className="movie-header">
           {/* <button className="back-button" onClick={goToHome}>&#8592;</button> */}
          
           <Button className="back-btn" onClick={goToHome}>
             <img src="https://cdn-icons-png.flaticon.com/512/566/566002.png"
             style={{ width: '20px', height: '20px' }}/>
           </Button>


           <h1 className="movie-title">{response['title']}</h1>
           <p className="movie-year">{response['year']}</p>
           <p className="movie-rated">{response['rated']}</p>
           <p className="movie-genre">{response['genres']}</p>
           <p className="movie-runtime">{response['runtime']}</p>
           <p className="movie-director">{response['directors']}</p>
           <div>
             {[...Array(5)].map((star, index) => {
               const ratingValue = index + 1;


               return (
                 <FaStar
                   key={index}
                   size={24}
                   color={ratingValue <= (response['stars']/2) ? "#ffc107" : "#e4e5e9"}
                 />
               );
             })}
             <p>Average rating: {starRating}</p>
           </div>
         </header>
  
         <div className="movie-poster-container">
           <img
             className="movie-poster"
             src={response['poster']}
             alt="Holes Movie Poster"
           />
         </div>
  
         <div className="movie-controls">
           <button className="trailer-button">See trailer &#9654;</button>
           <button className="add-to-list-button">+ Add to list</button>
         </div>
  
         <div className="trigger-warning">
           <p>This movie has 5 scenes with your triggers</p>
           <button className="scene-descriptions-button" onClick={goToPhobiaSceneDescription}>
             See scene descriptions &#10140;
           </button>
           <button className="feedback-button" onClick={goToFeedbackForm}>Give feedback</button>
         </div>
  
         <button onClick={goToStream}>Watch Movie</button>
  
         <div className="movie-info">
           <p className="prominent-actors">
             <strong>Prominent Actors/Actresses:</strong> {response['actors']}
           </p>
           <p className="synopsis">
             <strong>Synopsis:</strong> {response['overview']}
           </p>
         </div>
       </div>
     );
}
