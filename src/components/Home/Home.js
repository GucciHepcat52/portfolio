import React from "react";
import { Link } from "react-router-dom";
import Profile from "../../assets/homepage/profile.jpg";

import "./Home.css";

export default function Home() {
  return (
    <div className="home-main">
      <div className="left">
        <img className="profile" src={Profile} alt="Dallin Breen" />
      </div>
      <div className="right">
        <div className="title">
          <p style={{ fontSize: "2rem" }}>Dallin Breen</p>
          <h1 style={{ fontSize: "4rem", fontStyle: "italic" }}>
            Software Developer
          </h1>
        </div>
        <div className="topics">
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
    </div>
  );
}
