import React from "react";
import { Modal, Box } from "@mui/material";
import cover from "../../../assets/gaming/halo-3.jpg";

export default function Halo({ status, close }) {
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
          <h3>My favorite Halo game is:</h3>
          <h2 style={{ fontStyle: "italic" }}>Halo 3</h2>
          <img src={cover} alt="Halo 3" className="art" />
        </div>
      </Box>
    </Modal>
  );
}
