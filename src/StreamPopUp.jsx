import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button.jsx";
import "./StreamPopUp.css";

const StreamPopUp = ({ onClose, scene_data }) => {

  const [showDetails, setShowDetails] = useState(false);
  const sceneStarter = {
    'currentTimeSec': 60,
    'currentSkipTime': 120,
    'currentTime': '00:01:00 - 00:02:00',
    'currentDescription': 'something'
  }
  const [newSceneData, setNewSceneData] = useState(sceneStarter);

  useEffect(() => {
    const fetchData = async () => {
      let helperScene = { ...newSceneData };
      helperScene['currentTimeSec'] = scene_data['currentTimeSec'];
      let helperSkip = scene_data['currentTime'].split(' - ')[1];
      let timeParts = helperSkip.split(':');
      helperScene['currentSkipTime'] = (parseInt(timeParts[0], 10) * 3600) + (parseInt(timeParts[1], 10) * 60) + parseInt(timeParts[2], 10);
      helperScene['currentTime'] = scene_data['currentTime'];
      helperScene['currentDescription'] = scene_data['currentDescription'];
      setNewSceneData(helperScene);
    };
    fetchData();
  }, [scene_data['currentTimeSec']]);

  const handleSeeDetails = () => {
    setShowDetails(true);
  };

  const handleSkipScene = () => {
    // Implement scene skipping logic here
    console.log("Scene skipped");
  };

  const handleCloseCurrent = () => {
    onClose(newSceneData['currentTimeSec']);
  }

  const handleCloseNext = () => {
    onClose(newSceneData['currentSkipTime']);
  }

  return (
    <div className="stream-pop-up">
      <div className="pop-up-content">
        {showDetails ? (
          <>
            <div className="scene-details">
                <div className="time-details">
                    <strong>Time: </strong> {newSceneData['currentTime']}
                </div>
                <div className="description-details">
                    <strong>Description: </strong> <br/> {newSceneData['currentDescription']}
                </div>
            </div>
            <div className="scene-pop-up-btns">
              {/* <Button className="scene-pop-up-skip-btn" onClick={onClose(newSceneData['currentSkipTime'])}>Skip Scene</Button> */}
              <Button className="scene-pop-up-skip-btn" onClick={handleCloseNext}>Skip Scene</Button>
              {/* <Button className="scene-pop-up-cont-btn" onClick={onClose(newSceneData['currentTimeSec'])}>Continue &nbsp; &#9654;</Button> */}
              <Button className="scene-pop-up-cont-btn" onClick={handleCloseCurrent}>Continue &nbsp; &#9654;</Button>
            </div>
          </>
        ) : (
          <>
            <div className="scene-pop-up-warning">The next scene may contain:</div>
            <div className="scene-pop-up-btns">
              <Button className="scene-pop-up-skip-btn" onClick={handleSeeDetails}>See Details</Button>
              {/* <Button className="scene-pop-up-cont-btn" onClick={onClose(newSceneData['currentTimeSec'])}>Continue &nbsp; &#9654;</Button> */}
              <Button className="scene-pop-up-cont-btn" onClick={handleCloseCurrent}>Continue &nbsp; &#9654;</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StreamPopUp;
