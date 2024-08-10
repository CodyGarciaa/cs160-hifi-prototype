import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button.jsx';
import './Stream.css';

export default function Stream( {} ) {
  const navigate = useNavigate();
  const location = useLocation();

  const { movie_data } = location.state || {};
  const title = movie_data['tmdb_data']['title'];
  const id = movie_data['tmdb_data']['id'];
  const videoSRC = "https://multiembed.mov/?video_id=" + id + "&tmdb=1"

  const goToMovie = () => {
    navigate('/MovieDescription', { state: { movie_data: movie_data } })
  }

  return (
    <div className="stream-container">
      <div className={'video-page-container'}>
        <div className='iframe-container'>
          <iframe className="streamIframe" src={videoSRC}></iframe>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Button className="back-btn" onClick={goToMovie}>
          <img src="https://cdn-icons-png.flaticon.com/512/566/566002.png"
          style={{ width: '20px', height: '20px' }}/>
        </Button>
      </div>
    </div>
 );
};
