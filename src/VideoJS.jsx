import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './VideoJS.css'; // Import the CSS file

export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const {options, onReady} = props;

  React.useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);
      });
    } else {
      const player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div className="video-wrapper"> {/* Add a wrapper div */}
      <div data-vjs-player>
        <div ref={videoRef} />
      </div>
      <div className="overlay-text">This is overlay text</div> {/* Add the overlay text div */}
    </div>
  );
}

export default VideoJS;