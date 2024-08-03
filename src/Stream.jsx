import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button.jsx';


export default function Stream( {} ) {
 const navigate = useNavigate();


 const location = useLocation();
 const { id, title, poster } = location.state || {};
 const titleNoPlus = title.replace('+', / /g);
 const videoSRC = "https://multiembed.mov/?video_id=" + id


 const goToMovie = () => {
   navigate('/MovieDescription', { state: { title: title, poster: poster } })
 }


 return (
   <div className="video-page-container">
     <h1 className="video-title">{titleNoPlus}</h1>
     <iframe src={videoSRC}></iframe>
     <Button className="back-btn" onClick={goToMovie}>
       <img src="https://cdn-icons-png.flaticon.com/512/566/566002.png"
       style={{ width: '20px', height: '20px' }}/>
     </Button>
   </div>
 );
};
