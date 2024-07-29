import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ToggleButton from './ToggleButton';
import SearchBar from './SearchBar';
import GeneralButton from './GeneralButton';
import FeedbackForm from './FeedbackForm.js';
import youtubeplayer from './youtubeplayer.js';
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

                <h2>Primary Button</h2>
                <GeneralButton onClick={handleClick1} className="primary">Primary</GeneralButton>
                <h2>Secondary Button</h2>
                <GeneralButton onClick={handleClick2} className="secondary">Secondary</GeneralButton>
                <h2>Success Button</h2>
                <GeneralButton onClick={handleClick1} className="success">Success</GeneralButton>
                <h2>Danger Button</h2>
                <GeneralButton onClick={handleClick2} className="danger">Danger</GeneralButton>

                <h2>New Releases</h2>
                <h2>Browse</h2>
                <div id="test-playing">
                  {/* <h1>My YouTube Player</h1>
                  <youtubeplayer videoId={"H7Apf1NxXkY"} /> */}
                </div>
              </div>
              <nav>
                <Link to="/FeedbackForm">FeedbackForm</Link>
              </nav>
              </main>
              </div>
              } />
            <Route path="/FeedbackForm" element={<FeedbackForm />} />
      </Routes>
    </Router>
  )
}

export default App;
