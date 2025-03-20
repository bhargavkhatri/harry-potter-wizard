import React from "react";
import {
  TextField,
  Button,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const FilterBar = ({ filters, onFilterChange }) => {
  const handleChange = (event) => {
    onFilterChange({ ...filters, [event.target.name]: event.target.value });
  };

  const handleReset = () => {
    onFilterChange({
      name: "",
      difficulty: "",
      ingredient: "",
      inventor: "",
      manufacturer: "",
    });
  };

  const handleClear = (field) => {
    onFilterChange({ ...filters, [field]: "" });
  };

  return (
    <Box sx={{ display: "flex", gap: "10px", margin: "30px 0" }}>
      {["name", "difficulty", "ingredient", "inventors", "manufacturer"].map(
        (field) => (
          <TextField
            key={field}
            label={field?.charAt(0)?.toUpperCase() + field?.slice(1)}
            name={field}
            value={filters[field]}
            onChange={handleChange}
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: filters[field] && (
                <InputAdornment position="end">
                  <IconButton onClick={() => handleClear(field)} size="small">
                    <ClearIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )
      )}
      <Button variant="contained" color="primary" onClick={handleReset}>
        Reset
      </Button>
    </Box>
  );
};

export default FilterBar;
