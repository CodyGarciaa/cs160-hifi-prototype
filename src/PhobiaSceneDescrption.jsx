import React from "react";
import DropDownDescription from "./DropDownDescription"
import { useNavigate } from "react-router-dom";
import Button from './Button.jsx';

export default function PhobiaSceneDescription() {
    const navigate = useNavigate();
  
    const goToMovieDescription = () => {
      navigate('/MovieDescription')
    }

    return (
        <>
            {/* <button className="back-button" onClick={goToMovieDescription}>&#8592;</button> */}
            <Button className="back-btn" onClick={goToMovieDescription}>
              <img src="https://cdn-icons-png.flaticon.com/512/566/566002.png"
              style={{ width: '20px', height: '20px' }}/>
            </Button>



            <h1>Holes</h1>
            <div>This movie has 5 scenes with your triggers</div>
            <div>Warning: Scene descriptions may contain spoilers!⚠️</div>
            <DropDownDescription 
                buttonText="scene1"
                popuptime="-00:00:00"
                description="This is a description of scene1"
            />
        </>
    )
}