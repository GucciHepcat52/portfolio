import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Fab, Modal, Box, Button } from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";
import Profile from "../../assets/homepage/profile.jpg";
import resumé from "../../assets/homepage/Dallin Breen Resumé.pdf";
import "./Home.css";

export default function Home() {
  const [modal, setModal] = useState(false);

  function handleModal() {
    setModal((prevModal) => !prevModal);
  }

  return (
    <div className="home-main">
      <Modal
        open={modal}
        onClose={handleModal}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            boxSizing: "border-box",
            padding: "3rem",
            backgroundColor: "lightgray",
            height: "20rem",
            width: "35rem",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3>Check out my work experience:</h3>
          <div
            style={{
              display: "flex",
              width: "100%",
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <section>
              <Button variant="contained">
                <a
                  href={resumé}
                  download={"Dallin Breen Resumé"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Resumé
                </a>
              </Button>
            </section>
            <section>
              <Button variant="contained">
                <a
                  href={"https://www.linkedin.com/in/dallin-breen/"}
                  target="blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  LinkedIn
                </a>
              </Button>
            </section>
          </div>
        </Box>
      </Modal>
      <div className="left">
        <img className="profile" src={Profile} alt="Dallin Breen" />
        <Fab
          color="info"
          size="large"
          disableRipple="true"
          onClick={handleModal}
          style={{ position: "absolute", bottom: "20px", left: "20px" }}
        >
          <InfoOutlined />
        </Fab>
      </div>
      <div className="right">
        <div className="title">
          <p style={{ fontSize: "2rem" }}>Dallin Breen</p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                fontSize: "4rem",
                fontStyle: "italic",
                margin: 0,
                padding: 0,
              }}
            >
              Software Developer
            </h1>
            <h3 style={{ margin: 0, padding: 0 }}>Orem, UT</h3>
          </div>
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
