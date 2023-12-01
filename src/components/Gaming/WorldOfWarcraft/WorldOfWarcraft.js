import React from "react";
import { Modal, Box } from "@mui/material";
import char from "../../../assets/gaming/character.png";

import "./WorldOfWarcraft.css";

export default function WorldOfWarcraft({ status, close }) {
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
      <Box className="character" onClick={handleBoxClick}>
        <div className="character-profile">
          <h3>My World of Warcraft character is:</h3>
          <h2 style={{ fontStyle: "italic" }}>Guccihepcat</h2>
          <img src={char} alt="Guccihepcat" className="asset" />
        </div>
      </Box>
    </Modal>
  );
}
