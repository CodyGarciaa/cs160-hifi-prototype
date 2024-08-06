import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "./Button.jsx";
import { FaStar } from "react-icons/fa";
import "./MovieDescription.css";

export default function MovieDescription({ phobiaArray }) {
  const navigate = useNavigate();

  const [sceneTimes, setSceneTimes] = useState([]);
  const [sceneDescriptions, setSceneDescriptions] = useState([]);

  const [scenesByPhobia, setScenesByPhobia] = useState({});
  const [updated, setUpdated] = useState(false);

  const [totalScenes, setTotalScenes] = useState(0);

  const movieDetails = {
    runtime: "24hrs",
    actors: "actors",
    directors: "directors",
    year: "year",
    rated: "N/A",
    genres: "genres",
    stars: "N/A",
  };

  const [response, setResponse] = useState(movieDetails);
  const location = useLocation();
  const { movie_data } = location.state || {};

  const title = movie_data["tmdb_data"]["title"];
  const poster = movie_data["poster"];
  const overview = movie_data["tmdb_data"]["overview"];

  const [newMovie_data, setNewMovie_data] = useState(movie_data);

  let starRating;
  if (response["stars"] == "N/A") {
    starRating = "N/A";
  } else {
    starRating = response["stars"] / 2 + "/5";
  }

  useEffect(() => {
    myFunction();
  }, []);

  useEffect(() => {
    console.log("starting " + phobiaArray.length);
    console.log(phobiaArray);

    if (phobiaArray.length == 1 && phobiaArray[0] == "") {
      console.log("quit");
      return;
    }

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
      ).then((response) => response.json());

      const data_copy_helper = { ...newMovie_data };
      data_copy_helper["scenes"] = response;
      data_copy_helper["updated"] = true;

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

      const total = Object.values(groupedScenes).reduce(
        (sum, scenes) => sum + scenes.length,
        0
      );
      setTotalScenes(total);
    };

    if (title && (phobiaArray.length > 0) & !updated) {
      fetchSceneDescriptions();
    }
  }, [title, phobiaArray]);

  const myFunction = async () => {
    var newMovieDetails = { ...movieDetails };

    const urlTitle = encodeURIComponent(title).replace(/%20/g, "+");
    const res = await fetch(
      "http://www.omdbapi.com/?t=" + urlTitle + "&apikey=a470af76"
    );
    const data = await res.json();
    newMovieDetails["actors"] = data["Actors"];
    newMovieDetails["directors"] = data["Director"];
    newMovieDetails["year"] = data["Year"];
    newMovieDetails["rated"] = data["Rated"];
    newMovieDetails["genres"] = data["Genre"];
    newMovieDetails["stars"] = data["imdbRating"];
    data["Runtime"] = parseInt(data["Runtime"]);
    if (Math.floor(data["Runtime"] / 60) == 1) {
      newMovieDetails["runtime"] =
        Math.floor(data["Runtime"] / 60) +
        "hr " +
        (data["Runtime"] % 60) +
        "mins";
    } else {
      newMovieDetails["runtime"] =
        Math.floor(data["Runtime"] / 60) +
        "hrs " +
        (data["Runtime"] % 60) +
        "mins";
    }
    setResponse(newMovieDetails);
  };

  const goToHome = () => {
    navigate("/", { state: { movie_data: movie_data } });
  };

  const goToFeedbackForm = () => {
    navigate("/FeedbackForm", { state: { movie_data: movie_data } });
  };

  const goToPhobiaSceneDescription = () => {
    navigate("/PhobiaSceneDescription", { state: { movie_data: movie_data } });
  };

  const goToStream = () => {
    navigate("/Stream", { state: { movie_data: movie_data } });
  };

  return (
    <div className="movie-detail-container">
      <Button className="back-btn" onClick={goToHome}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/566/566002.png"
          style={{ width: "20px", height: "20px" }}
        />
      </Button>
      <div className="movie-header-trigger-btns">
        <header className="movie-header">
          {/* <button className="back-button" onClick={goToHome}>&#8592;</button> */}

          <div className="movie-header-text">
            <div className="movie-title">{title}</div>
            <div className="under-title">
              <div className="year-director">
                <div className="movie-year">{response["year"]}</div>
                <div className="movie-director">{response["directors"]}</div>
              </div>
              <div className="age-rating-runtime">
                <div className="movie-rated">Rated {response["rated"]}</div>
                <div className="movie-runtime">{response["runtime"]}</div>
              </div>
              <div className="movie-genre">{response["genres"]}</div>
              <div className="movie-controls">
                <Button className="trailer-button">See trailer &#9654;</Button>
                <Button className="add-to-list-button">+ Add to list</Button>
              </div>

              {/* <div className="rating-set">
                <div class="stars">
                  {[...Array(5)].madiv((star, index) => {
                    const ratingValue = index + 1;
                    return (
                      <FaStar
                        key={index}
                        size={24}
                        color={ratingValue <= (response['stars']/2) ? "#ffc107" : "#e4e5e9"}
                      />
                    );
                  })}
                </div>
                <p>Average rating: {starRating}</p>
              </div> */}
            </div>
          </div>
          <div className="poster-container">
            <img
              className={`movie-poster ${movie_data.cssClass || ""}`}
              src={poster}
              alt={title}
            />
            {movie_data.showWarningSymbol && (
              <div className="warning-overlay">
                <div className="warning-symbol"></div>
              </div>
            )}
          </div>
        </header>

        <div className="trigger-warning">
          <div id="trigger-number">
            This movie has {totalScenes} scenes with your trigger{" "}
          </div>
          <div className="trigger-warning-btns">
            <Button
              className="scene-descriptions-button"
              onClick={goToPhobiaSceneDescription}
            >
              See scene descriptions &gt;
            </Button>
            <Button className="give-feedback-button" onClick={goToFeedbackForm}>
              ⚑ Give feedback
            </Button>
          </div>
        </div>
      </div>

      <Button className="watch-button" onClick={goToStream}>
        Watch Movie
      </Button>

      <div className="movie-info">
        <p className="prominent-actors">
          <strong>Prominent Actors/Actresses:</strong> {response["actors"]}
        </p>
        <p className="synopsis">
          <strong>Synopsis:</strong> {overview}
        </p>
      </div>
    </div>
  );
}
