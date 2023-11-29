import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import pokemon from "../../assets/gaming/pokemon.png";
import zelda from "../../assets/gaming/zelda.png";
import halo from "../../assets/gaming/halo.png";
import wow from "../../assets/gaming/world-of-warcraft.png";

import Pokemon from "./Pokemon/Pokemon";
import Zelda from "./Zelda/Zelda";
import Halo from "./Halo/Halo";
import WorldOfWarcraft from "./WorldOfWarcraft/WorldOfWarcraft";

import "./Gaming.css";

export default function Gaming() {
  const [pokeModal, setPokeModal] = useState(false);
  const [zeldaModal, setZeldaModal] = useState(false);
  const [haloModal, setHaloModal] = useState(false);
  const [wowModal, setWowModal] = useState(false);

  function handlePokeModal() {
    setPokeModal((prevModal) => !prevModal);
  }

  function handleZeldaModal() {
    setZeldaModal((prevModal) => !prevModal);
  }

  function handleHaloModal() {
    setHaloModal((prevModal) => !prevModal);
  }

  function handleWowModal() {
    setWowModal((prevModal) => !prevModal);
  }

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
        <section className="franchise" onClick={handlePokeModal}>
          <section className="icon-box">
            <img
              src={pokemon}
              alt="Pokemon"
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </section>
          <Pokemon status={pokeModal} close={handlePokeModal} />
        </section>
        <section className="franchise" onClick={handleZeldaModal}>
          <section className="icon-box">
            <img
              src={zelda}
              alt="Zelda"
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </section>
          <Zelda status={zeldaModal} close={handleZeldaModal} />
        </section>
        <section className="franchise" onClick={handleHaloModal}>
          <section className="icon-box">
            <img
              src={halo}
              alt="Halo"
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </section>
          <Halo status={haloModal} close={handleHaloModal} />
        </section>
        <section className="franchise" onClick={handleWowModal}>
          <section className="icon-box">
            <img
              src={wow}
              alt="World of Warcraft"
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </section>
          <WorldOfWarcraft status={wowModal} close={handleWowModal} />
        </section>
      </div>
    </div>
  );
}
