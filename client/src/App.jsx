import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import "./App.css";

function App() {
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
          </Routes>
        </div>
      </header>
    </>
  );
}

export default App;
