import React from "react";

import "./Home.css";

export default function Home() {
  return (
    <div className="main">
      <div className="top">
        <h1>Top</h1>
      </div>
      <div className="bottom">
        <div className="section" id="software">
          <button>Software</button>
        </div>
        <div className="section" id="fitness">
          <button>Fitness</button>
        </div>
        <div className="section" id="gaming">
          <button>Gaming</button>
        </div>
      </div>
    </div>
  );
}
