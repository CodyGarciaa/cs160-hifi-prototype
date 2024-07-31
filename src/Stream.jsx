import React from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';

export default function Stream() {
  const videoId = 'lfaK3RQhIEw';                        // random characters at the end of youtube link after "v="

  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div className="video-page-container">
      <h1 className="video-title">Zootopia</h1>
      <div className="video-wrapper">
        <YouTube
          videoId={videoId}
          opts={{
            height: '390',
            width: '640',
            playerVars: {
              autoplay: 1,
            },
          }}
          onReady={onPlayerReady}
        />
      </div>
      <Link to="/MovieDescription" className="back-to-home-button">
        Back
      </Link>
    </div>
  );
};