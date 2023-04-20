import { useSelector } from 'react-redux';
import { useState } from 'react';
import Filteredcountries from './Filteredcountries';

const Homepage = () => {
  const store = useSelector((store) => store.homeReducer);
  const { data, loading } = store;
  const filtered = data.filter((element) => !element.state);
  const [input, changeInput] = useState('');
  const handlechange = (e) => {
    changeInput(e.target.value);
  };
  if (loading) {
    return (
      <div>
        <Filteredcountries filtered={filtered} handlechange={handlechange} input={input} />
        <p className="loading">Loading...</p>
      </div>
    );
  }
  return (
    (<Filteredcountries filtered={filtered} handlechange={handlechange} input={input} />)
  );
};
export default Homepage;
