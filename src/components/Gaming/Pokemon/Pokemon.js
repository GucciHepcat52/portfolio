import React, { useState, useEffect } from "react";
import { Modal, Box } from "@mui/material";

import "./Pokemon.css";

export default function Pokemon({ status, close }) {
  const [pokemon, setPokemon] = useState(null);

  // useEffect(() => {
  //   let isMounted = true;

  //   const cachedPokemon = localStorage.getItem("cachedPokemon");

  //   if (cachedPokemon) {
  //     setPokemon(JSON.parse(cachedPokemon));
  //   } else {
  //     const fetchPokemon = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://pokeapi.co/api/v2/pokemon/lugia"
  //         );
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }

  //         const result = await response.json();

  //         if (isMounted) {
  //           console.log(result);
  //           setPokemon(result);

  //           localStorage.setItem("cachedPokemon", JSON.stringify(result));
  //         }
  //       } catch (error) {
  //         console.error("Error fetching data: ", error);
  //       }
  //     };

  //     fetchPokemon();
  //   }

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  function handleBoxClick(event) {
    event.stopPropagation();
  }

  return (
    <Modal
      className="modal"
      open={status}
      onClose={close}
      slotProps={{ backdrop: { onClick: close } }}
    >
      <Box className="pokemon" onClick={handleBoxClick}>
        <div className="favorite-pokemon">
          <h3>My Favorite Pokemon is:</h3>
          <section
            className="sprite"
            // style={{
            //   backgroundImage: `url(${pokemon.sprites.front_default})`,
            // }}
          >
            <h2 style={{ fontStyle: "italic" }}>Lugia</h2>
          </section>
        </div>
      </Box>
    </Modal>
  );
}
