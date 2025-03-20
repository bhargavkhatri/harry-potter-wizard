import React from "react";
import { CircularProgress, Box } from "@mui/material";

const Loader = () => (
  <Box display="flex" justifyContent="center" mt={2}>
    <CircularProgress />
  </Box>
);

export default Loader;
