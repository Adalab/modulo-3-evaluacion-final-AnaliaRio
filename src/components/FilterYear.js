function FilterYear(props) {
  const handleChange = (ev) => {
    props.handleFilterYear(ev.target.value);
  };


  const renderYear = () => {
    return props.year.map((year, index) => {
      return <option key={index}>{year}</option>;
    });
  };



  return (
    <>
    <form>
      <label htmlFor="year">Year</label>
      <select
        name="year"
        onChange={handleChange}
        value={props.filterYears}
      >
        <option value="0">All</option>
        {renderYear()}
      </select>
      </form>
    </>
  );
}


export default FilterYear;