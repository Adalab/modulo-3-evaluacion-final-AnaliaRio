function FilterTotalWow(props) {

  const handleChange = (ev) => {
    props.handleFilterTotalWow(ev.target.value);
  };



  return (
    <>
    <form className='form'>
      <label htmlFor="wow" className='form__label'>Total "wows" in movie</label>
      <select
        name="wow"
        onChange={handleChange}
        value={props.filterTotalWow}
        className='form__input'
      >
        <option value="0">All</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      </form>
    </>
  );
}


export default FilterTotalWow;