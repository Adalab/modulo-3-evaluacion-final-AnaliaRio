import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { matchPath, useLocation } from "react-router";

import getApiData from "../services/wowApi";
import "../styles/App.scss";
import Header from "./Header";
import Filters from "./Filters";
import MovieSceneList from "./MovieSceneList";
import MovieSceneDetail from "./MovieSceneDetail";
import Footer from "./Footer";
import NotFoundPage from "./NotFoundPage";


// Load data from localStorage
// This file contains the functions to modify and get the data from localStorage
import ls from "../services/localStorage";

function App() {
  const [movieScenes, setMovieScenes] = useState([]);
  const [filterYear, setFilterYear] = useState(0);
  const [filterMovie, setFilterMovie] = useState("");

  useEffect(() => {
    getApiData().then((dataApi) => {
      setMovieScenes(dataApi);
    });
  }, []);

  // Save data in local storage with useEffect so that local storage stays updated after changing
  // Read local storage data and save it in useState so that they are available upon opening the page
  useEffect(() => {
    ls.set("users", movieScenes);
    ls.set("filterMovie", filterMovie);
  }, [movieScenes, filterMovie]);

  // ---------- FUNCTION - FILTER BY YEAR ----------
  const handleFilterYear = (value) => {
    setFilterYear(parseInt(value));
  };
  // The value needs to be parsed to match the type of value given by the API (number)

  // ---------- FUNCTION- FILTER BY MOVIE ----------
  const handleFilterMovie = (value) => {
    setFilterMovie(value.toLowerCase());
  };

  // ----- SAVE LIST OF FILTERED SCENES IN A CONSANT -----
  const movieSceneFilters = movieScenes

    // ---------- METHOD - FILTER BY MOVIE ----------
    .filter((movie) => {
      return movie.movie.toLowerCase().includes(filterMovie.toLowerCase());
    })

    // ---------- METHOD - FILTER BY YEAR ----------
    .filter((movie) => {
      return filterYear === 0 ? true : movie.year === filterYear;
    });

  // ---------- FUNCTION TO NOT REPEAT YEARS ----------
  const getYear = () => {
    const movieYear = movieScenes.map((oneYear) => oneYear.year);

    const unrepeatedYear = movieYear.filter((movie, index) => {
      return movieYear.indexOf(movie) === index;
    });

    return unrepeatedYear;
  };

  // -------------------- ROUTES --------------------
  const { pathname } = useLocation();
  const dataPath = matchPath("/movie/:movieId", pathname);
  console.log(dataPath);

  const movieId = dataPath !== null ? dataPath.params.movieId : null;
  const movieFound = movieScenes.find(
    (movie) => movie.id === parseInt(movieId)
  );
  console.log(movieId);
  console.log(movieFound);

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='container'>
                <Header />
                <Filters
                  handleFilterMovie={handleFilterMovie}
                  handleFilterYear={handleFilterYear}
                  year={getYear()}
                />
                <MovieSceneList movieScenes={movieSceneFilters} />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path='/movie/:movieId'
          element={
            <>
              <div className='container'>
                <Header />
                <MovieSceneDetail movie={movieFound} />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />

      </Routes>
    </>
  );
}


export default App;