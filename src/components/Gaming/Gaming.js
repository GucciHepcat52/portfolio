import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import pokemon from "../../assets/gaming/pokemon.png";
import zelda from "../../assets/gaming/zelda.png";
import halo from "../../assets/gaming/halo.png";
import wow from "../../assets/gaming/world-of-warcraft.png";

import "./Gaming.css";

export default function Gaming() {
  return (
    <div className="gaming-main">
      <div className="gaming-intro">
        <section className="about-me">
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.6",
              padding: "2rem",
              margin: "0",
              color: "white",
            }}
          >
            Gaming has always been a big part of my life. As a hobby, I like to
            find time to relax and play with my friends and family.
          </p>
        </section>
      </div>
      <div
        style={{
          boxSizing: "border-box",
          width: "100%",
          height: "3rem",
          display: "flex",
          justifyContent: "center",
          padding: "5px",
        }}
      >
        <Link to="/portfolio">
          <Button variant="contained" style={{ backgroundColor: "gray" }}>
            Return Home
          </Button>
        </Link>
      </div>
      <div className="favorite-franchises">
        <section className="franchise">
          <section className="icon-box">
            <img
              src={pokemon}
              alt="Pokemon"
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </section>
        </section>
        <section className="franchise">
          <section className="icon-box">
            <img
              src={zelda}
              alt="Pokemon"
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </section>
        </section>
        <section className="franchise">
          <section className="icon-box">
            <img
              src={halo}
              alt="Pokemon"
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </section>
        </section>
        <section className="franchise">
          <section className="icon-box">
            <img
              src={wow}
              alt="Pokemon"
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </section>
        </section>
      </div>
    </div>
  );
}
