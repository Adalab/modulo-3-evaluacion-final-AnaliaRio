import { Link } from 'react-router-dom';


function MovieSceneItem (props) {
console.log(props);

  return (
    <Link to={`/movie/${props.movie.id}`}>
      <img
        className="card__poster"
        alt={props.movie.poster}
        src={props.movie.poster}
      />
      <h4 className="card__title">{props.movie.movie}</h4>
      <p className="card__description line">"{props.movie.full_line}"</p>
      <p className="card__description">{props.movie.director}</p>
      <p className="card__description">{props.movie.year}</p>
    </Link>
  );
}


export default MovieSceneItem;