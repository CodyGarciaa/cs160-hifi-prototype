import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button.jsx';
import StreamPopUp from './StreamPopUp.jsx';
import './Stream.css';
import VideoJS from './VideoJS';
import videojs from 'video.js';

export default function Stream({}) {
  const playerRef = useRef(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const sceneStarter = {
    'currentTimeSec': 60,
    'currentSkipTime': 120,
    'currentTime': '00:01:00 - 00:02:00',
    'currentDescription': 'something',
    'phobia': 'something'
  }
  const [pauseData, setPauseData] = useState(sceneStarter);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    liveui: true,
    playsinline: true,
    sources: [{
      src: `${process.env.PUBLIC_URL}/theMatrix30mins.mp4`,
      type: 'video/mp4'
    }]
  };

  const navigate = useNavigate();
  const location = useLocation();

  const { movie_data, scenesByPhobia } = location.state || {};
  const title = movie_data['tmdb_data']['title'];
  // console.log(scenesByPhobia);
  let scenetime = [];
  let scenetimesec = [];
  let scenedescription = [];
  let scenephobia = [];
  Object.keys(scenesByPhobia).forEach(key => {
    scenesByPhobia[key].forEach(element => {
      scenetime.push(element['time']);
      let timeParts = element['time'].split(':');
      let totalSeconds = (parseInt(timeParts[0], 10) * 3600) + (parseInt(timeParts[1], 10) * 60) + parseInt(timeParts[2], 10);
      scenetimesec.push(totalSeconds);
      scenedescription.push(element['description']);
      scenephobia.push(key);
    }); 
  });
  let combined = scenetimesec.map((t, i) => [t, scenetime[i], scenedescription[i]]);
  combined.sort((a, b) => a[0] - b[0]);
  scenetimesec = combined.map(item => item[0]);
  scenetime = combined.map(item => item[1]);
  scenedescription = combined.map(item => item[2]);
  console.log(scenetime);
  console.log(scenephobia);

  const handlePlayerReady = (player) => {
    playerRef.current = player;
    setIsPlayerReady(true);

    player.on('timeupdate', () => {
      const currentTime = player.currentTime();
      if (scenetimesec.includes(Math.floor(currentTime))) {
        player.pause();
        openPopUp(Math.floor(currentTime));
        videojs.log(`Paused at ${currentTime}`);
      }
    });

    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };
  

  const goToMovie = () => {
    navigate('/MovieDescription', { state: { movie_data: movie_data } })
  }

  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const openPopUp = (currentTime) => {
    let helperIndex = scenetimesec.indexOf(currentTime);
    let currentStamp = scenetime[helperIndex];
    let currentDescription = scenedescription[helperIndex];
    let currentPhobia = scenephobia[helperIndex];
    
    let helperScene = { ...pauseData };
    helperScene['phobia'] = currentPhobia;
    helperScene['currentTimeSec'] = currentTime;
    helperScene['currentTime'] = currentStamp;
    helperScene['currentDescription'] = currentDescription;
    setPauseData(helperScene);
    setIsPopUpVisible(true);
    console.log('finished open');
  };

  const closePopUp = (currentTime) => {
    console.log('fucking uppppppp');
    setIsPopUpVisible(false);
    if (isPlayerReady && playerRef.current) {
      console.log('working');
      playerRef.current.pause();

      // Use a slight delay to ensure the seek operation is handled
      setTimeout(() => {
        playerRef.current.currentTime(currentTime + 1);
        playerRef.current.play();
        console.log('working 2');
      }, 100);
    }
    console.log('finished fuck up');
  };

  return (
    <div className="stream-container">
      <div className={`video-page-container ${isPopUpVisible ? 'blur-background' : ''}`}>
        {/* <h1 className="video-title">Testing {title}</h1> */}
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        <Button className="back-btn matrix" onClick={goToMovie}>
          <img src="https://cdn-icons-png.flaticon.com/512/566/566002.png"
          style={{ width: '20px', height: '20px' }}/>
        </Button>
      </div>
      {isPopUpVisible && <div className="dark-overlay"></div>}
      {isPopUpVisible && <StreamPopUp onClose={closePopUp} scene_data={pauseData}/>}
    </div>
  );
};