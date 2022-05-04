import MovieSceneItem from "./MovieSceneItem";


function MovieSceneList(props) {
  const movieElements = props.movieScenes.map((movie) => {
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