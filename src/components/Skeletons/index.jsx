import { Box, CircularProgress, Container } from "@mui/material";
import React from "react";

export const Skeletons = () => {
  return (
    <Container maxWidth="xxl">
      <Box display="flex" alignItems="center">
      <h1>Loading...</h1>
      <CircularProgress sx={{ color: "black"}}/>
      </Box>
    </Container>
  );
};
