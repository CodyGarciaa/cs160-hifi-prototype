import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button.jsx';


export default function Stream( {} ) {
 const navigate = useNavigate();


 const location = useLocation();
 const { id, tmdb_details, scenes } = location.state || {};
 const title = tmdb_details['title'];
 const videoSRC = "https://multiembed.mov/?video_id=" + id


 const goToMovie = () => {
   navigate('/MovieDescription', { state: { tmdb_details: tmdb_details, scenes: scenes } })
 }


 return (
   <div className="video-page-container">
     <h1 className="video-title">{title}</h1>
     <iframe src={videoSRC}></iframe>
     <Button className="back-btn" onClick={goToMovie}>
       <img src="https://cdn-icons-png.flaticon.com/512/566/566002.png"
       style={{ width: '20px', height: '20px' }}/>
     </Button>
   </div>
 );
};
