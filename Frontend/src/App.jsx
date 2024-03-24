import { Route, Routes, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="homeContainer">
            <Link to={"/release"}>
              <h1 className="logo">IDEOS</h1>
            </Link>
            <p className="logoSubheading">
              LAUNCHING S<span>OO</span>N<span>!</span>
            </p>
          </div>
        }
      />
      <Route
        path="/release"
        element={
          <div className="homeContainer">
            <Link to={"/"}>
              <h1 className="logo">IDEOS</h1>
            </Link>
            <p className="logoSubheading">
              RELEASING S<span>OO</span>N<span>!</span>
            </p>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
