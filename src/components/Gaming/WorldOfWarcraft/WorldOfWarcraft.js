import React from "react";
import { Modal, Box } from "@mui/material";

export default function WorldOfWarcraft({ status, close }) {
  function handleBoxClick(event) {
    event.stopPropagation();
  }
  return (
    <Modal
      open={status}
      onClose={close}
      slotProps={{ backdrop: { onClick: close } }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        onClick={handleBoxClick}
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
        <h1>World Of Warcraft</h1>
      </Box>
    </Modal>
  );
}
