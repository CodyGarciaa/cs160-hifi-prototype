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

  const title = movie_data["tmdb_data"]["title"];

  const goToMovieDescription = () => {
    navigate("/MovieDescription", { state: { movie_data: movie_data } });
  };

  useEffect(() => {
    const fetchSceneDescriptions = async () => {
      try {
        const response = await fetch(
          "https://noggin.rea.gent/used-cricket-6900",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer rg_v1_fzspyc2lma89i8v5ebsr7o7tmwy4yhurvbl7_ngk",
            },
            body: JSON.stringify({
              movie: title,
              phobia: phobiaArray.join(","),
            }),
          }
        );
        const data = await response.json();
        console.log("Fetched data:", data); // Log the fetched data
        setSceneTimes(data.time_list);
        setSceneDescriptions(data.description_list);
      } catch (error) {
        console.error("Error fetching scene descriptions:", error);
      }
    };

    if (title && phobiaArray.length > 0) {
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
      <p>
        This movie has {sceneTimes.length} scenes with your trigger
        <br />
        <br />
        <div className="warning">
          <img src={WarningSing} className="warning-sign" />
          Scene descriptions may contain spoilers!
        </div>
      </p>
      {sceneTimes.map((time, index) => (
        <DropDownDescription
          key={index}
          buttonText={`Scene ${index + 1}`}
          popuptime={`- ${time}`}
          description={sceneDescriptions[index]}
        />
      ))}
    </div>
  );
}
