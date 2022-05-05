function FilterMovie (props) {
  
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleFilterMovie(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
    <form className="form" action="" onSubmit={handleSubmit}>
      <label htmlFor='movie'>Movie </label>
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
    </>
  );
};


export default FilterMovie;