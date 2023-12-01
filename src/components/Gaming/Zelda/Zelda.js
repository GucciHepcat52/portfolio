import React from "react";
import { Modal, Box } from "@mui/material";
import cover from "../../../assets/gaming/tears-of-the-kingdom.jpeg";

export default function Zelda({ status, close }) {
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
      <Box className="game" onClick={handleBoxClick}>
        <div className="game-cover">
          <h3>My favorite Zelda game is:</h3>
          <h2 style={{ fontStyle: "italic" }}>
            The Legend of Zelda: Tears of the Kingdom
          </h2>
          <img src={cover} alt="Tears of the Kingdom" className="art" />
        </div>
      </Box>
    </Modal>
  );
}
