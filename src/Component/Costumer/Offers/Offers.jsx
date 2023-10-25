import * as React from "react";
import { Box, Container } from "@mui/material";
import CardOffer from "./Card";
import "../style/CardOffer.css";
import Header from "../header/header";
export default function Offers() {
  return (
    <div style={{}}>
      <Header />
      <Container sx={{ position: "relative" }}>
        <Box className="CardOffer mt-4 mb-4">
          <div className="mb-3">
            <CardOffer />
          </div>
        </Box>
      </Container>
    </div>
  );
}
