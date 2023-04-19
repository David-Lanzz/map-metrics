import Homepage from '../components/Homepage';
import '../styles/home.css';

const Home = () => (
  <section className="parent">
    <div className="board flex col">
      {' '}
      <h1>GLOBAL COVID-19 STATS</h1>
      <br />
      <article className="sig flex">
        <div className="box" />
        <p> Confirmed Cases</p>
      </article>
    </div>
    <Homepage />
  </section>
);

export default Home;
