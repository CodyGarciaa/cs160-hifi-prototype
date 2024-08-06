import React, { useEffect, useState } from "react";
import DropDownDescription from "./DropDownDescription.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "./Button.jsx";
import "./PhobiaSceneDescription.css";
import WarningSing from "./warning-sign-icon-transparent-background-free-png 2.png";

export default function PhobiaSceneDescription({ phobiaArray }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { movie_data } = location.state || {};

  const [sceneTimes, setSceneTimes] = useState([]);
  const [sceneDescriptions, setSceneDescriptions] = useState([]);

  const [scenesByPhobia, setScenesByPhobia] = useState({});
  const [updated, setUpdated] = useState(false);

  const [newMovie_data, setNewMovie_data] = useState(movie_data);
  const [totalScenes, setTotalScenes] = useState(0);

  const title = movie_data["tmdb_data"]["title"];
  // var updated = movie_data['updated'];

  const goToMovieDescription = () => {
    navigate("/MovieDescription", { state: { movie_data: newMovie_data } });
  };

  useEffect(() => {
    const fetchSceneDescriptions = async () => {
      const response = await fetch(
        "https://noggin.rea.gent/used-cricket-6900",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer rg_v1_lf8ch4gi35mohmffoivb4zemgniuoagqe5n8_ngk",
          },
          body: JSON.stringify({
            movie: title,
            phobia: phobiaArray.join(","),
          }),
        }
      ).then(response => response.json());

      const data_copy_helper = { ...newMovie_data };
      data_copy_helper['scenes'] = response;
      data_copy_helper['updated'] = true;

      // console.log("Fetched data:", response);
      // setSceneTimes(response.time_list);
      // setSceneDescriptions(response.description_list);
      const groupedScenes = response.triggers.reduce((acc, trigger, index) => {
        const { time_list, description_list } = response.outputs[index];
        acc[trigger] = time_list.map((time, i) => ({
          time,
          description: description_list[i],
        }));
        return acc;
      }, {});

      setScenesByPhobia(groupedScenes);
      setUpdated(true);

      setNewMovie_data(data_copy_helper);

      const total = Object.values(groupedScenes).reduce((sum, scenes) => sum + scenes.length, 0);
      setTotalScenes(total);
    };

    if (title && phobiaArray.length > 0 & !updated) {
      fetchSceneDescriptions();
    }
  }, [title, phobiaArray]);

  return (
    <div className="phobia-scene-description">
      <Button className="back-btn" onClick={goToMovieDescription}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/566/566002.png"
          style={{ width: "20px", height: "20px" }}
        />
      </Button>

      <h1>{title}</h1>
      <div>
      {/* <p> */}
        This movie has {totalScenes} scenes with your trigger
        <br />
        <br />
        <div className="warning">
          <img src={WarningSing} className="warning-sign" />
          Scene descriptions may contain spoilers!
        </div>
      {/* </p> */}
      </div>
      {/* {sceneTimes.map((time, index) => (
        <DropDownDescription
          key={index}
          buttonText={`Scene ${index + 1}`}
          popuptime={`${time}`}
          description={sceneDescriptions[index]}
        />
      ))} */}
      {Object.keys(scenesByPhobia).map(phobia => (
        <div key={phobia} className="phobia-section">
          <h2>{phobia}</h2>
          {scenesByPhobia[phobia].map((scene, index) => (
            <DropDownDescription
              key={index}
              sceneNumber={index + 1}
              time={scene.time}
              description={scene.description}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
