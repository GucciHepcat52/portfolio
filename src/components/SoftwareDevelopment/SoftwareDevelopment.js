import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import react from "../../assets/software/react.png";
import node from "../../assets/software/node.jpeg";
import postgresql from "../../assets/software/postgresql.png";
import gcp from "../../assets/software/gcp.png";

import "./SoftwareDevelopment.css";

export default function SoftwareDevelopment() {
  return (
    <div className="software-main">
      <div className="software-intro">
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
      <div
        style={{
          boxSizing: "border-box",
          // height: "20rem",
          padding: "1rem",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          backgroundColor: "gray",
        }}
      >
        <section
          style={{
            boxSizing: "border-box",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <section
            style={{
              height: "10rem",
              width: "10rem",
              overflow: "hidden",
            }}
          >
            <img
              src={react}
              alt="React Icon"
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </section>
        </section>
        <section
          style={{
            boxSizing: "border-box",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <section
            style={{
              height: "10rem",
              width: "10rem",
            }}
          >
            <img
              src={node}
              alt="Node Icon"
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </section>
        </section>
        <section
          style={{
            boxSizing: "border-box",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <section
            style={{
              height: "10rem",
              width: "10rem",
            }}
          >
            <img
              src={postgresql}
              alt="Postgresql Icon"
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </section>
        </section>
        <section
          style={{
            boxSizing: "border-box",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <section
            style={{
              height: "10rem",
              width: "10rem",
            }}
          >
            <img
              src={gcp}
              alt="GCP Icon"
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </section>
        </section>
      </div>
      <div className="software-body">
        <h2>Here are a few of my favorite projects:</h2>
        <section className="project-descriptions">
          <div id="card">
            <h3>UrQuest</h3>
            <h4 style={{ fontStyle: "italic", margin: 0, padding: 0 }}>
              Javascript
            </h4>
            <p>
              A character manager intended to keep track of your characters in
              an MMO. By entering your individual characters information, the
              user can see what current and future tasks that character needs to
              do.
            </p>
            <section
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Button variant="contained">
                <a
                  href="https://github.com/GucciHepcat52/UrQuest"
                  target="blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Source Code
                </a>
              </Button>
            </section>
          </div>
          <div id="card">
            <h3>Gamerank</h3>
            <h4 style={{ fontStyle: "italic", margin: 0, padding: 0 }}>
              React
            </h4>
            <p>
              A personal database for tracking the best games by metacritic
              ratings. Users can search for top games, add them to a game list,
              and navigate to purchasing a game once on the list.
            </p>
            <section
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Button variant="contained">
                <a
                  href="https://github.com/GucciHepcat52/Gamerank"
                  target="blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Source Code
                </a>
              </Button>
              <Button variant="contained" color="success">
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:6925955098640596992/"
                  target="blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Demo
                </a>
              </Button>
            </section>
          </div>
          <div id="card">
            <h3>Breen Chat</h3>
            <h4 style={{ fontStyle: "italic", margin: 0, padding: 0 }}>
              React Native
            </h4>
            <p>
              A family chat app built in React Native and Firebase. Family
              members can chat in a private family chatroom.
            </p>
            <section
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Button variant="contained">
                <a
                  href="https://github.com/GucciHepcat52/breen-chat"
                  target="blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Source Code
                </a>
              </Button>
              <Button variant="contained" color="success">
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:6938962298598281216/"
                  target="blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Demo
                </a>
              </Button>
            </section>
          </div>
          <div id="card">
            <h3>My Money Map</h3>
            <h4 style={{ fontStyle: "italic", margin: 0, padding: 0 }}>
              React Native
            </h4>
            <p>
              A finance app, built for a friends business, used by her clients
              to manage and track incomes and expenses. Users can track their
              money better to stay financially stable.
            </p>
            <section
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Button variant="contained">
                <a
                  href="https://github.com/GucciHepcat52/financial_optimist"
                  target="blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Source Code
                </a>
              </Button>
              <Button variant="contained" color="success">
                <a
                  href="https://apps.apple.com/us/app/my-money-map/id6467692819"
                  target="blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Demo
                </a>
              </Button>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
