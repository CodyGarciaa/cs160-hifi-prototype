import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button.jsx';
import { FaStar } from 'react-icons/fa';
import "./MovieDescription.css";


export default function MovieDescription() {
 const navigate = useNavigate();


 const movieDetails = {
   'runtime': '24hrs',
   'actors': 'actors',
   'directors': 'directors',
   'year': 'year',
   'rated': 'N/A',
   'genres': 'genres',
   'stars': 'N/A'
 };


 const [response, setResponse] = useState(movieDetails);
 const location = useLocation();
 const { movie_data } = location.state || {};
 
 const title = movie_data['tmdb_data']['title'];
 const poster = "https://image.tmdb.org/t/p/w500" + movie_data['tmdb_data']['poster_path'];
 const overview = movie_data['tmdb_data']['overview'];

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
     newMovieDetails['actors'] = data['Actors'];
     newMovieDetails['directors'] = data['Director'];
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
   navigate('/FeedbackForm', { state: { movie_data: movie_data } })
 }


 const goToPhobiaSceneDescription = () => {
   navigate('/PhobiaSceneDescription', { state: { movie_data: movie_data } })
 }


 const goToStream = () => {
   navigate('/Stream', { state: { movie_data: movie_data } })
 }


  return (
    <div className="movie-detail-container">
      <Button className="back-btn" onClick={goToHome}>
          <img src="https://cdn-icons-png.flaticon.com/512/566/566002.png"
          style={{ width: '20px', height: '20px' }}/>
      </Button>
      <div className="movie-header-trigger-btns">
        <header className="movie-header">
          {/* <button className="back-button" onClick={goToHome}>&#8592;</button> */}
        
        
          <div className="movie-header-text">
            <div className="movie-title">{title}</div>
            <div className="under-title">
              <div className="year-director">
                <div className="movie-year">{response['year']}</div>
                <div className="movie-director">{response['directors']}</div>
              </div>
              <div className="age-rating-runtime">
                <div className="movie-rated">Rated {response['rated']}</div>
                <div className="movie-runtime">{response['runtime']}</div>
              </div>
              <div className="movie-genre">{response['genres']}</div>
              <div className="movie-controls">
                <Button className="trailer-button">See trailer &#9654;</Button>
                <Button className="add-to-list-button">+ Add to list</Button>
              </div>
        
              {/* <div className="rating-set">
                <div class="stars">
                  {[...Array(5)].madiv((star, index) => {
                    const ratingValue = index + 1;
                    return (
                      <FaStar
                        key={index}
                        size={24}
                        color={ratingValue <= (response['stars']/2) ? "#ffc107" : "#e4e5e9"}
                      />
                    );
                  })}
                </div>
                <p>Average rating: {starRating}</p>
              </div> */}
            </div>
          </div>
        
          <div className="movie-poster-container">
            <img
              className="movie-poster-other"
              src={poster}
              alt={`${title} Poster`}
            />
          </div>
        
        </header>
        
        
        <div className="trigger-warning">
          <div id="trigger-number">This movie has 5 scenes with your triggers</div>
          <div className="trigger-warning-btns">
          <Button className="scene-descriptions-button" onClick={goToPhobiaSceneDescription}>
            See scene descriptions &gt;
          </Button>
          <Button className="give-feedback-button" onClick={goToFeedbackForm}>⚑ Give feedback</Button>
          </div>
        </div>
      </div>

      <Button className="watch-button" onClick={goToStream}>Watch Movie</Button>

      <div className="movie-info">
        <p className="prominent-actors">
          <strong>Prominent Actors/Actresses:</strong> {response['actors']}
        </p>
        <p className="synopsis">
          <strong>Synopsis:</strong> {overview}
        </p>
      </div>
    </div>
  );
}
