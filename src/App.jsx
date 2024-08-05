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

  // const phobia = "snake"; // phobia to test for now

  // phobia contains a string with all phobias
  // ex. phobia = "snakes, holes, blood"
  const [phobia, setPhobia] = useState("");

  const togglePhobia = (phobiaName) => {
    setPhobia((prevPhobias) => {
      const phobiaArray = prevPhobias.split(",").filter(Boolean);
      if (phobiaArray.includes(phobiaName)) {
        return phobiaArray.filter((p) => p !== phobiaName).join(",");
      } else {
        return [phobiaName, ...phobiaArray].join(",");
      }
    });
  };

  const getDisplayPhobias = () => {
    const originalPhobias = ["spiders", "snakes", "blood"];
    const phobiaArray = phobia.split(",").filter(Boolean);
    const toggledPhobias = phobiaArray.filter(
      (p) => !originalPhobias.includes(p)
    );

    if (toggledPhobias.length > 0) {
      return [...toggledPhobias, ...originalPhobias].slice(0, 3);
    } else {
      return originalPhobias;
    }
  };

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
      original_poster: 'https://placehold.co/600x400',
      poster: 'https://placehold.co/600x400',
      phobia: "snakes",
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
      for (let i = 0; i < 9; i++) {
        newMovieList["m" + i]["tmdb_data"] = data["results"][i];
        newMovieList["m" + i]["poster"] = "https://image.tmdb.org/t/p/w500" + data["results"][i]['poster_path'];
        newMovieList["m" + i]["original_poster"] = "https://image.tmdb.org/t/p/w500" + data["results"][i]['poster_path'];
      }
 
 
      const test = await fetch (
        'https://api.themoviedb.org/3/movie/9502?language=en-US&api_key=71b2121843b62cdfd9813cba9fdf7fe3'
      );
      const test_data = await test.json();
      newMovieList['m9']['tmdb_data'] = test_data;
      newMovieList['m9']['poster'] = "https://image.tmdb.org/t/p/w500" + test_data['poster_path'];
      newMovieList['m9']['original_poster'] = "https://image.tmdb.org/t/p/w500" + test_data['poster_path'];
      setMovieIDs(newMovieList);
    };
    handleClick();
  }, []);
 

  const fetchPhobiaResultsForList = async () => {
    let movieList = [];
    let moviePosterList = [];
    let phobiaList = [];
    let newMovieIDs = { ...movieIDs };
   
    console.log('start function');
    console.log(newMovieIDs);
 
 
    for (let i=7; i < Object.keys(newMovieIDs).length; i++) {   
      movieList.push(newMovieIDs['m' + i]['tmdb_data']['title']);
      moviePosterList.push(newMovieIDs['m' + i]['original_poster']);
      phobiaList.push(phobia);
    };
 
 
    console.log('finished making lists');
    console.log(movieList);
    console.log(moviePosterList);
    console.log(phobiaList);
 
 
    async function fetchData(movies, moviePosters, phobias) {
      if (movies.length !== moviePosters.length || movies.length !== phobias.length) {
          throw new Error("Movies, moviePosters, and phobias arrays must have the same length");
      }
 
 
      console.log('start noggin');
 
 
      const fetchPromises = movies.map((movie, index) => {
          return fetch('https://noggin.rea.gent/depressed-fowl-5744', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer rg_v1_d6e1hm3iojgqhgr434h84t27d44p9dxaj3a2_ngk',
              },
              body: JSON.stringify({
                  movie: movie,
                  moviePoster: moviePosters[index],
                  phobia: phobias[index],
              }),
          }).then(response => response.json());
      });
 
 
      const responseList = await Promise.all(fetchPromises);
      return responseList;
    }
 
 
    const responseList = await fetchData(movieList, moviePosterList, phobiaList);
 
 
    for (let i=7; i < (responseList.length + 7); i++) {
      if (responseList[i-7]['movieHasPhobia'] && !responseList[i-7]['posterHasPhobia']) {
        newMovieIDs['m' + i]['poster'] = 'https://placehold.co/600x400/yellow/black';
      } else if (responseList[i-7]['posterHasPhobia'] && !responseList[i-7]['movieHasPhobia']) {
        newMovieIDs['m' + i]['poster'] = 'https://placehold.co/600x400/red/white';
      } else if (responseList[i-7]['posterHasPhobia'] && responseList[i-7]['movieHasPhobia']) {
        newMovieIDs['m' + i]['poster'] = 'https://placehold.co/600x400/red/black';
      }
    }
 
 
    setMovieIDs(newMovieIDs);
    console.log('finished noggin');
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
    setPhobia((prevPhobias) => {
      const phobiaArray = prevPhobias.split(",").filter(Boolean);
      return [...phobiaArray, newTrigger.triggertitle].join(",");
    });
  };

  const handleDeleteTrigger = (id) => {
    const triggerToDelete = triggers.find((trigger) => trigger.id === id);
    if (triggerToDelete) {
      setPhobia((prevPhobias) => {
        const phobiaArray = prevPhobias.split(",").filter(Boolean);
        return phobiaArray
          .filter((phobia) => phobia !== triggerToDelete.triggertitle)
          .join(",");
      });
    }
    setTriggers((prevTriggers) =>
      prevTriggers.filter((trigger) => trigger.id !== id)
    );
  };

  const handleUpdateTrigger = (id, updatedData) => {
    const trigger = triggers.find((trigger) => trigger.id === id);
    const newTriggerTitle = updatedData.triggertitle;
    if (trigger) {
      // Remove the old trigger title from the phobia array
      setPhobia((prevPhobias) => {
        const phobiaArray = prevPhobias.split(",").filter(Boolean);
        const index = phobiaArray.indexOf(trigger.triggertitle);
        if (index !== -1) {
          phobiaArray.splice(index, 1);
        }
        return phobiaArray.join(",");
      });
    }

    // Update the triggers state
    const updatedTriggers = triggers.map((trigger) =>
      trigger.id === id ? { ...trigger, ...updatedData } : trigger
    );
    setTriggers(updatedTriggers);

    // Add the new trigger title to the phobia array
    setPhobia((prevPhobias) => {
      const phobiaArray = prevPhobias.split(",").filter(Boolean);
      return [...phobiaArray, newTriggerTitle].join(",");
    });
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
                    {getDisplayPhobias().map((phobiaName) => (
                      <ToggleButton
                        key={phobiaName}
                        className="phobia-toggle-btn"
                        onClick={() => togglePhobia(phobiaName)}
                        isToggled={phobia.includes(phobiaName)}
                      >
                        {phobiaName}
                      </ToggleButton>
                    ))}
                    <Button className="add-phobia-btn" onClick={openPopUp}>
                      +
                    </Button>
                  </div>

                  <SearchBar onSearch={handleSearch} />
                  {/* <button onClick={fetchPhobiaResults}>Check Phobias</button> */}
                  <button onClick={console.log(phobia)}>
                    Print current phobia
                  </button>

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
                      {/* <MovieList
                        movieList={moviePostersBrowseList1}
                        phobiaResults={phobiaResults1}
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
                </div>

                <nav>
                  <button onClick={fetchPhobiaResultsForList}> testing </button>
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
              <PhobiaSetPopUp
                isVisible={isPopUpVisible}
                onClose={closePopUp}
                phobia={phobia}
                togglePhobia={togglePhobia}
                triggers={triggers}
              />
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
          element={<PhobiaSceneDescription phobiaArray={phobia.split(",")} />} // Pass phobiaArray as prop
        />
        <Route path="/MovieDescription" element={<MovieDescription />} />
        <Route path="/Stream" element={<Stream />} />
      </Routes>
    </Router>
  );
}

export default App;
