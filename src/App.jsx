import logo from './logo.svg';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ToggleButton from './ToggleButton.jsx';
import SearchBar from './SearchBar.jsx';
import Button from './Button.jsx';
import FeedbackForm from './FeedbackForm.jsx';
import FeedbackMessage from './FeedbackMessage.jsx';
import CustomTriggers from './CustomTriggers.jsx';
import MovieDescription from './MovieDescription.jsx';
import Stream from './Stream.jsx';
import YoutubePlayer from './YoutubePlayer.jsx';
import AddCustomTriggerForm from './AddCustomTrigger.jsx';
import EditCustomTriggerForm from './EditCustomTrigger.jsx';
import TriggerFilter from './TriggerFilter.jsx';
import Account from './Account.jsx';
import PhobiaSceneDescription from './PhobiaSceneDescrption.jsx';
import MovieCard from './MovieCard.jsx'
import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";
import PhobiaSetPopUp from './PhobiaSetPopUp.jsx';


function App() {

  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

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


  const moviePosters = [
    '/movie-posters/kung-fu-panda.jpg',
    '/movie-posters/inside-out-2.jpg',
    '/movie-posters/jaws.jpg',
    '/movie-posters/snakes-on-a-plane.jpg',
    '/movie-posters/indiana-jones.jpg'
  ];


  return (
    <Router>
      <Routes>
        <Route path="/" element={
          
          <div className="App">
            <header>
              <div className="title">
                <h1>Phobia Free <br></br>Films 🎬</h1>
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
                  <ToggleButton className="phobia-toggle-btn">spiders</ToggleButton>
                  <ToggleButton className="phobia-toggle-btn">snakes</ToggleButton>
                  <ToggleButton className="phobia-toggle-btn">blood</ToggleButton>
                  {/* <button onClick={openPopUp}>+</button> */}
                  <Button className="add-phobia-btn" onClick={openPopUp}>+</Button>
                </div>

                <SearchBar onSearch={handleSearch} />

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
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
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
                <Link to="/FeedbackForm">FeedbackForm</Link><br />
                <Link to="/FeedbackMessage">FeedbackMessage</Link><br />
                <Link to="/CustomTriggers">CustomTriggers</Link><br />
                <Link to="/EditCustomTrigger">EditCustomTrigger</Link><br />
                <Link to="/AddCustomTrigger">AddCustomTrigger</Link><br />
                <Link to="/TriggerFilter">TriggerFilter</Link><br />
                <Link to="/Account">Account</Link><br />
                <Link to="/PhobiaSceneDescription">PhobiaSceneDescription</Link><br />
                <Link to="/MovieDescription">Movie Description</Link><br />
                {/* <Link to="/Stream">Stream</Link><br /> */}
              </nav>

            </main>
            <PhobiaSetPopUp isVisible={isPopUpVisible} onClose={closePopUp} />

          </div>
          } />
        <Route path="/FeedbackForm" element={<FeedbackForm />} />
        <Route path="/FeedbackMessage" element={<FeedbackMessage />} />
        <Route path='/CustomTriggers' element={<CustomTriggers />} />
        <Route path='/EditCustomTrigger' element={<EditCustomTriggerForm />} />
        <Route path='/AddCustomTrigger' element={<AddCustomTriggerForm />} />
        <Route path='/TriggerFilter' element={<TriggerFilter />} />
        <Route path='/Account' element={<Account />} />
        <Route path='/PhobiaSceneDescription' element={<PhobiaSceneDescription />} />
        <Route path='/MovieDescription' element={<MovieDescription />} />
        <Route path='/Stream' element={<Stream />} />




      </Routes>
    </Router>
  )
}

export default App;
