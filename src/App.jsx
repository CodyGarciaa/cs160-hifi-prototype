import logo from "./logo.svg";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ToggleButton from "./ToggleButton.jsx";
import SearchBar from "./SearchBar.jsx";
import Button from "./Button.jsx";
import FeedbackForm from "./FeedbackForm.jsx";
import FeedbackMessage from "./FeedbackMessage.jsx";
import CustomTriggers from "./CustomTriggers.jsx";
import MovieDescription from "./MovieDescription.jsx";
import Stream from "./Stream.jsx";
import YoutubePlayer from "./YoutubePlayer.jsx";
import AddCustomTriggerForm from "./AddCustomTrigger.jsx";
import EditCustomTriggerForm from "./EditCustomTrigger.jsx";
import Account from "./Account.jsx";
import PhobiaSceneDescription from "./PhobiaSceneDescription.jsx";
import MovieCard from "./MovieCard.jsx";
import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import PhobiaSetPopUp from "./PhobiaSetPopUp.jsx";



function App() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [phobiaResults, setPhobiaResults] = useState([]);

  const openPopUp = () => {
    setIsPopUpVisible(true);
  };

  const closePopUp = () => {
    setIsPopUpVisible(false);
  };

  const handleSearch = (query) => {
    console.log(`Search query: ${query}`);
    // replace this with  actual search logic
  };

  const kungFuPanda = 'https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg';
  const insideOut2 = 'https://m.media-amazon.com/images/I/714xn6rxXSL.jpg';
  const jaws = 'https://m.media-amazon.com/images/I/616z7DnWGmL.jpg';
  const snakesOnAPlane = 'https://m.media-amazon.com/images/M/MV5BZDY3ODM2YTgtYTU5NC00MTE4LTkzNjktMzNhZWZmMzJjMWRjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg';
  const indianaJones = 'https://m.media-amazon.com/images/I/81UOBSDQh0L._AC_UF894,1000_QL80_.jpg';

  const moviePostersBrowseList = [
    { src: kungFuPanda, title: 'Kung Fu Panda' },
    { src: insideOut2, title: 'Inside Out 2' },
    { src: jaws, title: 'Jaws' },
    { src: snakesOnAPlane, title: 'Snakes On A Plane' },
    { src: indianaJones, title: 'Indiana Jones Raiders of the Lost Ark' },
  ];

  const phobia = 'snake'; // phobia to test for now

  const fetchPhobiaResults = async () => {
    const results = [];

    for (let i = 0; i < moviePostersBrowseList.length; i++) {
      const movie = moviePostersBrowseList[i];
      try {
        const response = await fetch(
          'https://noggin.rea.gent/meaningful-wallaby-5570',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer rg_v1_8knokoxa4241zf4bc9w2nibk21i3r2a6m9m7_ngk',
            },
            body: JSON.stringify({
              moviePoster: movie.src, // Ensure this is not empty
              phobia: phobia,
              movie: movie.title,
            }),
          }
        );
        const data = await response.json();
        results[i] = data;
      } catch (error) {
        console.error('Error fetching phobia results:', error);
        results[i] = { movieHasPhobia: false, posterHasPhobia: false }; // Handle error case
      }
    }

    setPhobiaResults(results);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <header>
                <div className="title">
                  <h1>
                    Phobia Free <br></br>Films 🎬
                  </h1>
                </div>
                <div className="profile-button">
                  {/* (profile button) */}
                  {/* <Button>(O)</Button> */}
                  <Button className="back-btn">O</Button>
                </div>
              </header>

              <main>
                <div>
                  <div className="phobia-toggles">
                    <ToggleButton className="phobia-toggle-btn">
                      spiders
                    </ToggleButton>
                    <ToggleButton className="phobia-toggle-btn">
                      snakes
                    </ToggleButton>
                    <ToggleButton className="phobia-toggle-btn">
                      blood
                    </ToggleButton>
                    <button onClick={openPopUp}>+</button>
                  </div>

                  <SearchBar onSearch={handleSearch} />
                  <button onClick={fetchPhobiaResults}>Check Phobias</button>

                  <h2>New Releases</h2>
                  <div className="new-releases-list">
                    <div className="movie-list">
                      <MovieCard />
                      <MovieCard />
                      <MovieCard />
                      <MovieCard />
                      <MovieCard />
                    </div>
                  </div>

                  <h2 id="browse-header">Browse</h2>
                  <div className="browse-list">
                    <div className="movie-list">
                      {/* <MovieCard />
                      <MovieCard />
                      <MovieCard />
                      <MovieCard />
                      <MovieCard /> */}
                      {/* {moviePostersBrowseList.map((movie, index) => (
                        <MovieCard key={index} image={movie.src} title={movie.title} />
                      ))} */}

                      {moviePostersBrowseList.map((movie, index) => {
                        const result = phobiaResults[index];
                        let posterSrc = movie.src;
                        console.log('DEBUG: before posterSrc=' + posterSrc);

                        if (result) {
                          if (result.posterHasPhobia) {
                            posterSrc = ''; // Set to empty string for gray box
                          } else if (result.movieHasPhobia) {
                            posterSrc = 'yellow'; // Set to 'yellow' for yellow box
                          }
                        }
                        console.log('DEBUG: after posterSrc=' + posterSrc);

                        return (
                          <MovieCard key={index} image={posterSrc} title={movie.title} />
                        );
                      })}       



                    </div>
                    <div className="movie-list">
                      <MovieCard />
                      <MovieCard />
                      <MovieCard />
                      <MovieCard />
                      <MovieCard />
                    </div>
                  </div>

                  {/* <div id="test-playing">
                      <h1>My YouTube Player</h1>
                      <youtubeplayer videoId={"H7Apf1NxXkY"} />
                    </div> */}
                </div>

                <nav>
                  <Link to="/FeedbackForm">FeedbackForm</Link>
                  <br />
                  <Link to="/FeedbackMessage">FeedbackMessage</Link>
                  <br />
                  <Link to="/CustomTriggers">CustomTriggers</Link>
                  <br />
                  <Link to="/EditCustomTrigger">EditCustomTrigger</Link>
                  <br />
                  <Link to="/AddCustomTrigger">AddCustomTrigger</Link>
                  <br />
                  <Link to="/Account">Account</Link>
                  <br />
                  <Link to="/PhobiaSceneDescription">
                    PhobiaSceneDescription
                  </Link>
                  <br />
                  <Link to="/MovieDescription">Movie Description</Link>
                  <br />
                  {/* <Link to="/Stream">Stream</Link><br /> */}
                </nav>
              </main>
              <PhobiaSetPopUp isVisible={isPopUpVisible} onClose={closePopUp} />
            </div>
          }
        />
        <Route path="/FeedbackForm" element={<FeedbackForm />} />
        <Route path="/FeedbackMessage" element={<FeedbackMessage />} />
        <Route path="/CustomTriggers" element={<CustomTriggers />} />
        <Route path="/EditCustomTrigger" element={<EditCustomTriggerForm />} />
        <Route path="/AddCustomTrigger" element={<AddCustomTriggerForm />} />
        <Route path="/Account" element={<Account />} />
        <Route
          path="/PhobiaSceneDescription"
          element={<PhobiaSceneDescription />}
        />
        <Route path="/MovieDescription" element={<MovieDescription />} />
        <Route path="/Stream" element={<Stream />} />
      </Routes>
    </Router>
  );
}

export default App;
