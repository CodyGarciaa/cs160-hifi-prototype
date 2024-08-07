import React, { useEffect, useState } from "react";
import DropDownDescription from "./DropDownDescription.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "./Button.jsx";
import "./PhobiaSceneDescription.css";
import WarningSign from "./warning-sign-icon-transparent-background-free-png 2.png";

export default function PhobiaSceneDescription({ phobiaArray }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { movie_data, scenesByPhobia = {} } = location.state || {};

  const [totalScenes, setTotalScenes] = useState(0);

  const title = movie_data["tmdb_data"]["title"];

  useEffect(() => {
    const total = Object.values(scenesByPhobia).reduce(
      (sum, scenes) => sum + scenes.length,
      0
    );
    setTotalScenes(total);
  }, [scenesByPhobia]);

  const goToMovieDescription = () => {
    navigate("/MovieDescription", { state: { movie_data: movie_data } });
  };

  return (
    <div className="phobia-scene-description">
      <Button className="back-btn" onClick={goToMovieDescription}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/566/566002.png"
          style={{ width: "20px", height: "20px" }}
        />
      </Button>

      <h1 className="phobia-scene-desc-h1">{title}</h1>
      <div className="scene-desc-warnings">
        <div className="scene-desc-warnings-text">
          <div className="num-scenes">
            This movie has {totalScenes} scenes with your trigger
          </div>
          <div className="spoiler-warning">
            Scene descriptions may contain spoilers!
          </div>
        </div>
        <div className="scene-desc-warnings-img">
          <img src={WarningSign} className="warning-sign" />
        </div>
      </div>
      {Object.keys(scenesByPhobia).map(
        (phobia) =>
          scenesByPhobia[phobia].length > 0 && (
            <div key={phobia} className="phobia-section">
              <h2 className="phobia-scene-desc-h2">Scenes with {phobia}</h2>
              <div className="phobia-dropdowns">
                {scenesByPhobia[phobia].map((scene, index) => (
                  <DropDownDescription
                    key={index}
                    sceneNumber={index + 1}
                    time={scene.time}
                    description={scene.description}
                  />
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
}
