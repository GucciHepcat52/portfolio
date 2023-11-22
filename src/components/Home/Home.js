import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

export default function Home() {
  return (
    <div className="main">
      <div className="top">
        <h1>Top</h1>
      </div>
      <div className="bottom">
        <div className="section" id="software">
          <Link to="/portfolio/software" className="link-style">
            <div>
              <h1>Software</h1>
            </div>
          </Link>
        </div>
        <div className="section" id="fitness">
          <Link to="/portfolio/fitness" className="link-style">
            <div>
              <h1>Fitness</h1>
            </div>
          </Link>
        </div>
        <div className="section" id="gaming">
          <Link to="/portfolio/gaming" className="link-style">
            <div>
              <h1>Gaming</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
