import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/portfolio" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
