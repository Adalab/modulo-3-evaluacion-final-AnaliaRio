function FilterYear(props) {
  const handleChange = (ev) => {
    props.handleFilterYear(ev.target.value);
  };

  const getYear = () => {
    const movieYear = props.movieScenes.map((movie) => movie.year);
    const uniqueYear = movieYear.filter((movie, index) => {
      return movieYear.indexOf(movie) === index;
    });
    return uniqueYear;
  };

  const renderYear = () => {
    return getYear().map((year, index) => {
      return <option key={index}>{year}</option>;
    });
  };



  return (
    <>
      <label htmlFor="yearselect">Filtrar por año</label>
      <select
        name="yearselect"
        onChange={handleChange}
        value={props.filterYears}
      >
        <option value="all">All</option>
        {renderYear()}
      </select>
    </>
  );
}


export default FilterYear;