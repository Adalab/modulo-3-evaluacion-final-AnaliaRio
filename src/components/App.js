import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';


import getApiData from '../services/wowApi';
import '../styles/App.scss'
import Filters from './Filters';
import MovieSceneList from './MovieSceneList';
import MovieSceneDetail from './MovieSceneDetail';



// Load data from localStorage
// This file contains the functions to modify and get the data from localStorage
import ls from '../services/localStorage';

function App() {

  // Using localStorage
  //Ahora necesitamos verificar si hay datos en localstorage y de ser afirmativo ese datos son lo que agregamos a la variable usuario y  sino vacio, hacemos lo mismo para las variables de estado de los filtros,

  const [movieScenes, setMovieScenes] = useState([]);
  const [filterYear, setFilterYear] = useState('');
  const [filterMovie, setFilterMovie] = useState(['']);

  useEffect(() => {
    if (movieScenes.length === 0) {
      getApiData().then((dataFromApi) => {
        console.log(dataFromApi);
        setMovieScenes(dataFromApi);
      });
    }
  }, []);

  // Save data in local storage with useEffect so that local storage stays updated after changes
  // Read local storage data and save it in useState so that they are available upon opening the page
  useEffect(() => {
    ls.set('users', movieScenes);
    ls.set('filterMovie', filterMovie);
  }, [movieScenes, filterMovie]);


  // ---------- FUNCTION - FILTER BY YEAR ----------
  const handleFilterYear = (value) => {
    setFilterYear(value);
  };

  // ---------- FUNCTION- FILTER BY MOVIE ----------
  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };


  const movieSceneFilters = movieScenes

    // ---------- METHOD - FILTER BY YEAR ----------
    .filter((movie) => {
      return filterYear === '' ? true : movie.year === filterYear;
    })

    // ---------- METHOD - FILTER BY MOVIE ----------
    .filter((movie) => {
      return movie.movie.toLowerCase().includes().toLowerCase;
    });

  const { pathname } = useLocation();
  const dataPath = matchPath('/movie/:movieId', pathname);
  console.log(dataPath);

  const movieId = dataPath !== null ? dataPath.params.movieId : null;
  const movieFound = movieScenes.find((item) => item.id === movieId);

  return (
    <>
      <h1>Owen Wilson's "Wow!"</h1>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleFilterMovie={handleFilterMovie}
                  handleFilterYear={handleFilterYear}
                />
                <MovieSceneList movieScenes={movieSceneFilters} />
              </>
            }
          />
          <Route
            path="/movie/:movieId"
            element={<MovieSceneDetail movie={movieFound} />}
          />
        </Routes>
      </div>


    </>
  );
}

export default App;