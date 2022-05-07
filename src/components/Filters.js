import FilterYear from './FilterYear';
import FilterMovie from './FilterMovie';


function Filters (props) {



  return (
    <section className="filters">
        <FilterMovie
          filterMovie={props.filterMovie}
          handleFilterMovie={props.handleFilterMovie}
        />

        <FilterYear
        handleFilterYear={props.handleFilterYear}
        year={props.year}/>
    </section>
  );
}


export default Filters;