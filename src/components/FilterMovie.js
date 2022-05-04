function FilterMovie(props) {
  const handleChange = (ev) => {
    props.handleFilterMovie(ev.target.value);
  };
  const renderMovies = () => {
    return props.movies.map((movie, index) => {
      return (
        <li key={index}>
          <form action=''>
            <label htmlFor=''>{movie}</label>
            <input
              type='search'
              name='movie'
              onChange={handleChange}
              value={props.filterMovie}
              className='header__search'
              autoComplete='off'
              placeholder='Search a movie'
            />
          </form>
        </li>
      );
    });
  };


  return (
    <>
      <label className='form__label display-block'>Movie</label>
      <ul>{renderMovies()}</ul>
    </>
  );
}

export default FilterMovie;