import logo from "./logo.svg";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import ToggleButton from "./ToggleButton.jsx";
import SearchBar from "./SearchBar.jsx";
import Button from "./Button.jsx";
import FeedbackForm from "./FeedbackForm.jsx";
import FeedbackMessage from "./FeedbackMessage.jsx";
import CustomTriggers from "./CustomTriggers.jsx";
import MovieDescription from "./MovieDescription.jsx";
import Stream from "./Stream.jsx";
import AddCustomTriggerForm from "./AddCustomTriggerForm.jsx";
import EditCustomTriggerForm from "./EditCustomTrigger.jsx";
import Account from "./Account.jsx";
import PhobiaSceneDescription from "./PhobiaSceneDescription.jsx";
import MovieCard from "./MovieCard.jsx";
import MovieCard2 from "./MovieCard2.jsx";
import React from "react";
import { useNavigate } from "react-router-dom";
import PhobiaSetPopUp from "./PhobiaSetPopUp.jsx";
import MovieList from "./MovieList.jsx";

function App() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [phobiaResults1, setPhobiaResults1] = useState([]);
  const [phobiaResults2, setPhobiaResults2] = useState([]);
  const [phobiaResults3, setPhobiaResults3] = useState([]);

  const openPopUp = () => {
    setIsPopUpVisible(true);
  };

  const closePopUp = () => {
    setIsPopUpVisible(false);
  };

  const handleSearch = (query) => {
    console.log(`Search query: ${query}`);
    // replace this with  actual search logic
  };

  const phobia = "snake"; // phobia to test for now

  const helperLabel = [
    "m0",
    "m1",
    "m2",
    "m3",
    "m4",
    "m5",
    "m6",
    "m7",
    "m8",
    "m9",
  ];
  const movieList = {};
  helperLabel.forEach((key) => {
    // movieList[key] = {'title': 'title', 'poster': 'https://placehold.co/600x400'};
    movieList[key] = {
      tmdb_data: { title: "title", poster: "https://placehold.co/600x400" },
      phobia: phobia,
      scenes: {},
    };
  });

  const [movieIDs, setMovieIDs] = useState(movieList);

  useEffect(() => {
    const handleClick = async () => {
      var newMovieList = { ...movieList };
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=71b2121843b62cdfd9813cba9fdf7fe3"
      );
      const data = await res.json();
      for (let i = 0; i < 10; i++) {
        newMovieList["m" + i]["tmdb_data"] = data["results"][i];
      }
      setMovieIDs(newMovieList);
    };
    handleClick();
  }, []);

  const kungFuPanda =
    "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg";
  const insideOut2 = "https://m.media-amazon.com/images/I/714xn6rxXSL.jpg";
  const jaws = "https://m.media-amazon.com/images/I/616z7DnWGmL.jpg";
  const snakesOnAPlane =
    "https://m.media-amazon.com/images/M/MV5BZDY3ODM2YTgtYTU5NC00MTE4LTkzNjktMzNhZWZmMzJjMWRjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg";
  const indianaJones =
    "https://m.media-amazon.com/images/I/81UOBSDQh0L._AC_UF894,1000_QL80_.jpg";

  const moviePostersBrowseList1 = [
    { src: kungFuPanda, title: "Kung Fu Panda" },
    { src: insideOut2, title: "Inside Out 2" },
    { src: jaws, title: "Jaws" },
    { src: snakesOnAPlane, title: "Snakes On A Plane" },
    { src: indianaJones, title: "Indiana Jones Raiders of the Lost Ark" },
  ];

  const fetchPhobiaResultsForList = async (movieList, phobia) => {
    const results = [];

    for (let i = 0; i < movieList.length; i++) {
      const movie = movieList[i];
      try {
        const response = await fetch(
          "https://noggin.rea.gent/meaningful-wallaby-5570",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer rg_v1_8knokoxa4241zf4bc9w2nibk21i3r2a6m9m7_ngk",
            },
            body: JSON.stringify({
              moviePoster: movie.src,
              phobia: phobia,
              movie: movie.title,
            }),
          }
        );
        const data = await response.json();
        results[i] = data;
      } catch (error) {
        console.error("Error fetching phobia results:", error);
        results[i] = { movieHasPhobia: false, posterHasPhobia: false };
      }
    }

    return results;
  };

  const fetchPhobiaResults = async () => {
    const results1 = await fetchPhobiaResultsForList(
      moviePostersBrowseList1,
      phobia
    );
    // const results2 = await fetchPhobiaResultsForList(moviePostersBrowseList2, phobia);
    // const results3 = await fetchPhobiaResultsForList(moviePostersBrowseList3, phobia);

    setPhobiaResults1(results1);
    // setPhobiaResults2(results2);
    // setPhobiaResults3(results3);
  };

  const [triggers, setTriggers] = useState([
    {
      id: 1, // Assign a unique id for each trigger
      triggertitle: "Holes/small patterns",
      triggersummary:
        "deep fear of holes or small patterns, including cartoon depictions",
    },
    // Add more triggers if needed
  ]);

  const handleAddTrigger = (newTrigger) => {
    setTriggers((prevTriggers) => [
      ...prevTriggers,
      { id: prevTriggers.length + 1, ...newTrigger },
    ]);
  };

  const handleDeleteTrigger = (id) => {
    setTriggers((prevTriggers) =>
      prevTriggers.filter((trigger) => trigger.id !== id)
    );
  };

  const handleUpdateTrigger = (id, updatedData) => {
    setTriggers((prevTriggers) =>
      prevTriggers.map((trigger) =>
        trigger.id === id ? { ...trigger, ...updatedData } : trigger
      )
    );
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <header>
                <div className="title">
                  <h1>
                    Phobia Free <br></br>Films 🎬
                  </h1>
                </div>
                <div className="profile-button">
                  {/* (profile button) */}
                  {/* <Button>(O)</Button> */}
                  <Button className="back-btn">👤</Button>
                </div>
              </header>

              <main>
                <div>
                  <div className="phobia-toggles">
                    <ToggleButton className="phobia-toggle-btn">
                      spiders
                    </ToggleButton>
                    <ToggleButton className="phobia-toggle-btn">
                      snakes
                    </ToggleButton>
                    <ToggleButton className="phobia-toggle-btn">
                      blood
                    </ToggleButton>
                    <Button className="add-phobia-btn" onClick={openPopUp}>+</Button>
                  </div>

                  <SearchBar onSearch={handleSearch} />
                  <button onClick={fetchPhobiaResults}>Check Phobias</button>

                  <h2>New Releases</h2>
                  <div className="new-releases-list">
                    <div className="movie-list">
                      <MovieCard2 movie_data={movieIDs["m0"]} />
                      <MovieCard2 movie_data={movieIDs["m1"]} />
                      <MovieCard2 movie_data={movieIDs["m2"]} />
                      <MovieCard2 movie_data={movieIDs["m3"]} />
                      <MovieCard2 movie_data={movieIDs["m4"]} />
                    </div>
                  </div>

                  <h2 id="browse-header">Browse</h2>
                  <div className="browse-list">
                    <div className="movie-list">
                      {/* {moviePostersBrowseList.map((movie, index) => {
                        const result = phobiaResults[index];
                        let posterSrc = movie.src;
                        console.log('DEBUG: before posterSrc=' + posterSrc);

                        if (result) {
                          if (result.posterHasPhobia) {
                            posterSrc = ''; // Set to empty string for gray box
                          } else if (result.movieHasPhobia) {
                            posterSrc = 'yellow'; // Set to 'yellow' for yellow box
                          }
                        }
                        console.log('DEBUG: after posterSrc=' + posterSrc);

                        return (
                          <MovieCard key={index} image={posterSrc} title={movie.title} />
                        );
                      })}        */}

                      <MovieList
                        movieList={moviePostersBrowseList1}
                        phobiaResults={phobiaResults1}
                      />
                      {/* <MovieList
                        movieList={moviePostersBrowseList2}
                        phobiaResults={phobiaResults2}
                      /> */}
                    </div>
                    <div className="movie-list">
                      <MovieCard2 movie_data={movieIDs["m5"]} />
                      <MovieCard2 movie_data={movieIDs["m6"]} />
                      <MovieCard2 movie_data={movieIDs["m7"]} />
                      <MovieCard2 movie_data={movieIDs["m8"]} />
                      <MovieCard2 movie_data={movieIDs["m9"]} />
                    </div>
                  </div>

                  {/* <div id="test-playing">
                      <h1>My YouTube Player</h1>
                      <youtubeplayer videoId={"H7Apf1NxXkY"} />
                    </div> */}
                </div>

                <nav>
                  <Link to="/FeedbackForm">FeedbackForm</Link>
                  <br />
                  <Link to="/FeedbackMessage">FeedbackMessage</Link>
                  <br />
                  <Link to="/CustomTriggers">CustomTriggers</Link>
                  <br />
                  <Link to="/AddCustomTriggerForm">AddCustomTriggerForm</Link>
                  <br />
                  <Link to="/Account">Account</Link>
                  <br />
                  <Link to="/PhobiaSceneDescription">
                    PhobiaSceneDescription
                  </Link>
                </nav>
              </main>
              <PhobiaSetPopUp isVisible={isPopUpVisible} onClose={closePopUp} />
            </div>
          }
        />
        <Route path="/FeedbackForm" element={<FeedbackForm />} />
        <Route path="/FeedbackMessage" element={<FeedbackMessage />} />
        <Route
          path="/CustomTriggers"
          element={
            <CustomTriggers
              triggers={triggers}
              onAddTrigger={handleAddTrigger}
            />
          }
        />
        <Route
          path="/EditCustomTrigger/:id"
          element={
            <EditCustomTriggerForm
              triggers={triggers}
              onDeleteTrigger={handleDeleteTrigger}
              onUpdateTrigger={handleUpdateTrigger}
            />
          }
        />{" "}
        <Route
          path="/AddCustomTriggerForm"
          element={<AddCustomTriggerForm onAddTrigger={handleAddTrigger} />}
        />
        <Route path="/Account" element={<Account />} />
        <Route
          path="/PhobiaSceneDescription"
          element={<PhobiaSceneDescription />}
        />
        <Route path="/MovieDescription" element={<MovieDescription />} />
        <Route path="/Stream" element={<Stream />} />
      </Routes>
    </Router>
  );
}

export default App;
