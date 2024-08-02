import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="video-player">
      <video width="600" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default function Stream() {
  const test_id = "269149";
  const location = useLocation();
  const { id } = location.state || {};

  const [videoLink, setVideoLink] = useState('https://www.w3schools.com/html/mov_bbb.mp4');

  const changeVideo = () => {
    setVideoLink('https://multiembed.mov/?video_id=269149&tmdb=1');
  };

  const videoUrl = 'https://multiembed.mov/?video_id=269149&tmdb=1';

  return (
    <div className="video-page-container">
      <h1 className="video-title">Zootopia</h1>
      <iframe src="https://multiembed.mov/?video_id=269149&tmdb=1"></iframe>
      <Link to="/MovieDescription" className="back-to-home-button">
        Back
      </Link>
    </div>
  );
};