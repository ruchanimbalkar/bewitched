import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const getCharacters = async () => {
    try {
      const response = await fetch("/api/get-all-characters");
      if (!response.ok) {
        console.error(`Response status: ${response.status}`);
        return;
      }
      const data = await response.json();
      console.log("data : ", data);
      console.table(data);
      setCharacters(data);
      console.log("typeof animalData : ", typeof animalData);
    } catch (error) {
      console.error("Error Fetching API : ", error.message);
    }
  };

  // write your useEffect here
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <>
      <header>
        <div className="logo-h1">
          <img src="/logo.png" alt="witch's hat" />
          <h1>Bewitched</h1>
        </div>
        <div className="nav-div">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/characters">Characters</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={<Characters characters={characters} />}
        />
      </Routes>
    </>
  );
}

export default App;
