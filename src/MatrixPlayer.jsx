import React, { useRef, useEffect, useState } from 'react';
import './MatrixPlayer.css';
import 'video.js/dist/video-js.css';


const MatrixPlayer = ({ videoSrc, markers }) => {
  const videoRef = useRef(null);
  const seekBarRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const handleSeekBarClick = (e) => {
    const seekBar = seekBarRef.current;
    const rect = seekBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newTime = (offsetX / rect.width) * duration;
    videoRef.current.currentTime = newTime;
  };

  const handleMarkerClick = (time) => {
    videoRef.current.currentTime = time;
  };

  return (
    <div className="video-player-container">
      <video class="test-videojs video-js" data-setup='{}' controls>
        <source src={videoSrc} type="video/mp4" />
      </video>
      
      <video ref={videoRef} controls width="300">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="seek-bar-container"
        ref={seekBarRef}
        onClick={handleSeekBarClick}
      >
        <div className="seek-bar" style={{ width: `${progress}%` }}></div>
        {markers.map((marker, index) => (
          <div
            key={index}
            className="marker"
            style={{ left: `${(marker.time / duration) * 100}%` }}
            title={marker.label}
            onClick={() => handleMarkerClick(marker.time)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MatrixPlayer;
