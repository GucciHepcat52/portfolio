import React from "react";
import { Link } from "react-router-dom";
import Profile from "../../assets/profile.jpg";

import "./Home.css";

export default function Home() {
  return (
    <div className="main">
      <div className="top">
        <img className="profile" src={Profile} alt="Dallin Breen" />
        <div>
          <p>Software Developer</p>
          <p>Gym Lover</p>
          <p>Gamer</p>
        </div>
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
