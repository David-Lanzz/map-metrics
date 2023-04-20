import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { displaydata } from '../redux/home/homeSlice';

const Filteredcountries = ({ filtered, input, handlechange }) => {
  const dispatch = useDispatch();
  const dispatchdata = (country) => {
    dispatch(displaydata(country));
  };
  const searched = filtered.filter((element) => element.country.includes(input)
   || element.country.toLocaleLowerCase().includes(input));
  return (
    <section>
      <input placeholder="search by country" defaultValue={input} onChange={handlechange} />
      <ul className="grid">
        {searched.map((element) => (
          <NavLink to="details" className="elements flex col" key={element.index} onClick={() => dispatchdata(element.country)}>
            <i className="fa-solid fa-arrow-up-from-bracket absolute" />
            <section className="data">
              <div>
                <h4 className="country">{element.country}</h4>
              </div>
              <article className="flex article"><p>{element.confirmed}</p></article>
            </section>
          </NavLink>
        ))}
      </ul>
    </section>
  );
};

Filteredcountries.propTypes = {
  filtered: PropTypes.arrayOf(PropTypes.shape({
    confirmed: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  })).isRequired,
  input: PropTypes.string.isRequired,
  handlechange: PropTypes.func.isRequired,
};

export default Filteredcountries;
