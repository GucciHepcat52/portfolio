import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import "./Fitness.css";

export default function Fitness() {
  return (
    <div className="fitness-main">
      <div className="fitness-intro">
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
            Fitness is a huge outlet for me. Football got me into fitness and
            when I finished college football, I have strived to stay active as a
            software developer. A strong body builds a strong mind.
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
    </div>
  );
}
