import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from './Button.jsx';


export default function MovieDescription() {
  const navigate = useNavigate();

  const movieDetails = {
    'title': 'title',
    'overview': 'overview',
    'poster': 'https://placehold.co/600x400'
  };

  const [response, setResponse] = useState(movieDetails);
  const test_id = "269149";
  
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/MovieDesription') {
      console.log('Navigated to /MovieDesription');
      // Call your function here
      myFunction();
    }
  }, [location]);

  const myFunction = () => {
    console.log('Function called on /specific page load');
    // Add your specific logic here
  };


  const handleClick = async () => {
    try {
      var newMovieDetails = { ...movieDetails };

      const res = await fetch('https://api.themoviedb.org/3/movie/269149?language=en-US&api_key=71b2121843b62cdfd9813cba9fdf7fe3');
      const data = await res.json();
      newMovieDetails['title'] = data['title'];
      newMovieDetails['overview'] = data['overview'];
      newMovieDetails['poster'] = "https://image.tmdb.org/t/p/w500" + data['poster_path'];
      console.log(newMovieDetails['poster']);
      console.log(data)
      setResponse(newMovieDetails);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
    navigate('/Stream', { state: { id: 'yourmom' } })
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
              // src="https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_SX300.jpg"
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
              <strong>Prominent Actors/Actresses:</strong> Ginnifer Goodwin, Jason Bateman, Idris Elba
            </p>
            <p className="synopsis">
              <strong>Synopsis:</strong> {response['overview']}
            </p>
          </div>
          <button onClick={handleClick}>test toggle informationSs</button>
        </div>
      );
}