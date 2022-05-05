const getApiData = () => {


  return fetch('https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50')
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((movie, index) => {
        return {
          id: index,
          poster: movie.poster,
          movie: movie.movie,
          full_line: movie.full_line,
          year: movie.year,
          director: movie.director,
          audio: movie.video.audio,
        };
      });
      console.log(dataClean);
      return dataClean;
    });
};


export default getApiData;