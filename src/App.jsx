import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ToggleButton from './ToggleButton.jsx';
import SearchBar from './SearchBar.jsx';
import GeneralButton from './GeneralButton.jsx';
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

function App() {
  const handleSearch = (query) => {
    console.log(`Search query: ${query}`);
    // You can replace this with your actual search logic
  };

  const handleClick1 = () => {
    console.log('Button 1 clicked');
    // Add your specific logic for Button 1 here
  };

  const handleClick2 = () => {
    console.log('Button 2 clicked');
    // Add your specific logic for Button 2 here
  };

  return (
    // <div className="App">
    //   <header>
    //     <div class="title">
    //         <h1>Phobia Free Films</h1>
    //     </div>
    //     <div class="profile-button">
    //         (profile button)
    //     </div>
    //   </header>
    //   <main>
    //       <ToggleButton>spiders</ToggleButton>
    //       <ToggleButton>snakes</ToggleButton>
    //       <ToggleButton>blood</ToggleButton>

    //       <SearchBar onSearch={handleSearch} />

    //       <h2>Primary Button</h2>
    //       <GeneralButton onClick={handleClick1} className="primary">Primary</GeneralButton>
    //       <h2>Secondary Button</h2>
    //       <GeneralButton onClick={handleClick2} className="secondary">Secondary</GeneralButton>
    //       <h2>Success Button</h2>
    //       <GeneralButton onClick={handleClick1} className="success">Success</GeneralButton>
    //       <h2>Danger Button</h2>
    //       <GeneralButton onClick={handleClick2} className="danger">Danger</GeneralButton>

    //       <h2>New Releases</h2>
    //       <h2>Browse</h2>
    //       <div id="test-playing"></div>
    //   </main>
    // </div>
    // );
    <Router>
          <Routes>
            <Route path="/" element={
              <div className="App">
                <header>
                <div className="title">
                  <h1>Phobia Free Films</h1>
                </div>
                <div className="profile-button">
                  (profile button)
                </div>
              </header>
              <main>

              <div>
                <ToggleButton>spiders</ToggleButton>
                <ToggleButton>snakes</ToggleButton>
                <ToggleButton>blood</ToggleButton>

                <SearchBar onSearch={handleSearch} />

                {/* <h2>Primary Button</h2>
                <GeneralButton onClick={handleClick1} className="primary">Primary</GeneralButton>
                <h2>Secondary Button</h2>
                <GeneralButton onClick={handleClick2} className="secondary">Secondary</GeneralButton>
                <h2>Success Button</h2>
                <GeneralButton onClick={handleClick1} className="success">Success</GeneralButton>
                <h2>Danger Button</h2>
                <GeneralButton onClick={handleClick2} className="danger">Danger</GeneralButton> */}

                <h2>New Releases</h2>
                <div className="movie-list">
                  <MovieCard />
                  <MovieCard />
                  <MovieCard />
                  <MovieCard />
                  <MovieCard />
                </div>

                <h2>Browse</h2>
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


                <div id="test-playing">
                  {/* <h1>My YouTube Player</h1>
                  <youtubeplayer videoId={"H7Apf1NxXkY"} /> */}
                </div>
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
