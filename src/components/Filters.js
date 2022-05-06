import FilterYear from './FilterYear';
import FilterMovie from './FilterMovie';


function Filters (props) {



  return (
    <section className="filters">
        <FilterMovie
          movies={props.movies}
          handleFilterMovie={props.handleFilterMovie}
        />

        <FilterYear
        handleFilterYear={props.handleFilterYear}
        year={props.year}/>
    </section>
  );
}


export default Filters;