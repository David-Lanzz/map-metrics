import { Route,Routes } from "react-router-dom";
import Header from "./routes/Header";
import Home from "./routes/Home";

function App() {
  return (
    <div className="App">
<Routes>
  <Route path="/" element={<Header />}>
    <Route index element={<Home />} />
  </Route>
</Routes>
    </div>
  );
}

export default App;
