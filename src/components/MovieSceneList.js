import MovieSceneItem from "./MovieSceneItem";


function MovieSceneList(props) {

  // Pending - SORT ALPHABETICALLY
  const movieElements = props.movieScenes

  .sort((a, b) => a.movie.localeCompare(b.movie))

  .map((movie) => {
    return (
      <li className="card" key={movie.index}>
        <MovieSceneItem movie={movie} />
      </li>
    );
  });


  
  return (
    <section>
      <ul className="cards">{movieElements}</ul>
    </section>
  );
}


export default MovieSceneList;