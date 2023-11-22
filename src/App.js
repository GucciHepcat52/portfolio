import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import SoftwareDevelopment from "../src/components/SoftwareDevelopment/SoftwareDevelopment";
import Fitness from "../src/components/Fitness/Fitness";
import Gaming from "../src/components/Gaming/Gaming";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/software" element={<SoftwareDevelopment />} />
        <Route path="/portfolio/fitness" element={<Fitness />} />
        <Route path="/portfolio/gaming" element={<Gaming />} />
      </Routes>
    </div>
  );
}

export default App;
