import { useSelector } from 'react-redux';
import '../styles/details.css';
import { NavLink } from 'react-router-dom';

const CountryData = () => {
  const store = useSelector((store) => store.homeReducer);
  const { states, country } = store.details;
  return (
    <section>
      <div className="board flex col">
        {' '}
        <NavLink to="/" className="homekey"><i className="fa-sharp fa-solid fa-chevron-left homekey" /></NavLink>
        {' '}
        <h1 className="country2">{country}</h1>
      </div>
      <ul className="detailsparent">
        {
 states.map((element) => (
   <li key={element.index} className="detail flex col elements">
     <h2 className="green">{element.state ? element.state : element.country}</h2>
     <article className="grid art">
       <p className="confirmed">
         Confirmed Cases:
         {element.confirmed}
       </p>
       <p className="deaths">
         Recorded Deaths:
         {element.deaths}
       </p>
     </article>
   </li>
 ))
     }
      </ul>
    </section>
  );
};

export default CountryData;
