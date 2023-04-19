import { Route, Routes } from 'react-router-dom';
import Header from './routes/Header';
import Home from './routes/Home';
import Details from './routes/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
