import { Link } from 'react-router-dom';


function MovieSceneItem (props) {


  return (
    <Link to={`/movie/${props.movie.id}`}>
      <li key={props.movie.index}>
      <img
        className=""
        alt={props.movie.poster}
        src={props.movie.poster}
      />
      <h4 className="card__title">{props.movie.movie}</h4>
      <p className="card__description">{props.movie.full_line}</p>
      <p className="card__description">{props.movie.director}</p>
      <p className="card__description">{props.movie.year}</p>
      </li>
    </Link>
  );
}


export default MovieSceneItem;