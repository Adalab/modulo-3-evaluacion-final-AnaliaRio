function MovieSceneDetail(props) {
  //console.log(props);


  return (
    <section className='cards'>
      <img className='card__poster' alt={props.movie.poster} src={props.movie.poster} />
      <h4 className='card__title'>{props.movie.movie}</h4>
      <p className='card__description line'>{props.movie.full_line}</p>
      <p className='card__description'>{props.movie.director}</p>
      <p className='card__description'><a href={props.movie.audio} target="_blank" rel="noreferrer">Escuchar audio</a></p>
    </section>
  );
}


export default MovieSceneDetail;