import React from "react";
import { Modal, Box } from "@mui/material";

export default function Zelda({ status, close }) {
  return (
    <Modal
      open={status}
      onClose={close}
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
        <h1>Zelda</h1>
      </Box>
    </Modal>
  );
}
