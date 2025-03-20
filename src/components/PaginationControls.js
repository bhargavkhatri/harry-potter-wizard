import React from "react";
import { Pagination, Box } from "@mui/material";

const PaginationControls = ({ count, page, onChange }) => {
  return (
    <Box display="flex" justifyContent="center" mt={2}>
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        color="primary"
      />
    </Box>
  );
};

export default PaginationControls;
