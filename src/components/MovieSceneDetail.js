function MovieSceneDetail(props) {
  //console.log(props);


  return (
    <section>
      <img className='' alt={props.movie.poster} src={props.movie.poster} />
      <h4 className='card__title'>{props.movie.movie}</h4>
      <p className='card__description'>{props.movie.full_line}</p>
      <p className='card__description'>{props.movie.director}</p>
      <p className='card__description'>{props.movie.year}</p>
    </section>
  );
}


export default MovieSceneDetail;