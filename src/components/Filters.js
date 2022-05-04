import FilterYear from './FilterYear';
import FilterMovie from './FilterMovie';


function Filters (props) {
  return (
    <section className="col2">
      <form>
        <FilterYear handleFilterYear={props.handleFilterYear} />

        <FilterMovie
          movies={props.movies}
          handleFilterMovie={props.handleFilterMovie}
        />
      </form>
    </section>
  );
}


export default Filters;