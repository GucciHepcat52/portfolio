import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import "./SoftwareDevelopment.css";

export default function SoftwareDevelopment() {
  return (
    <div className="software-main">
      <div className="software-intro">
        <section className="about-me">
          <p
            style={{
              color: "black",
              fontSize: "1.2rem",
              lineHeight: "1.6",
              padding: "2rem",
              margin: "0",
            }}
          >
            I love software and tech. Seeing how much technology can improve the
            lives of others is why I am in this industry. I seek to exemplify
            myself in work ethic, moral standing, decisive management and a
            visionary approach to product and technical development. I have
            worked hard to build myself into someone who is coachable, reliable
            and adaptable to any business environment.
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
      <div className="software-body">
        <section></section>
      </div>
    </div>
  );
}
