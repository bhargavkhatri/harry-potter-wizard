import React from "react";
import { Table, TableBody, TableCell, TableRow, Paper } from "@mui/material";
import {
  StyledTableContainer,
  StyledTableHead,
  StyledTableRow,
} from "./styles/tableStyles";

const ElixirTable = ({ elixirs }) => {
  return (
    <StyledTableContainer component={Paper}>
      <Table>
        <StyledTableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Difficulty</TableCell>
            <TableCell>Ingredients</TableCell>
            <TableCell>Inventor</TableCell>
            <TableCell>Manufacturer</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {elixirs?.length > 0 ? (
            elixirs.map((elixir, index) => (
              <StyledTableRow key={index}>
                <TableCell>{elixir?.name}</TableCell>
                <TableCell>{elixir?.difficulty || "N/A"}</TableCell>
                <TableCell>
                  {elixir?.ingredients
                    ?.map((ingredient) => ingredient?.name)
                    ?.join(", ") || "N/A"}
                </TableCell>
                <TableCell>
                  {" "}
                  {elixir?.inventors?.map(
                    (inventor) => `${inventor?.firstName} ${inventor?.lastName}`
                  ) || "N/A"}
                </TableCell>
                <TableCell>{elixir?.manufacturer || "N/A"}</TableCell>
              </StyledTableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={5}
                sx={{
                  textAlign: "center",
                  padding: "20px",
                  fontSize: "16px",
                  color: "#888",
                }}
              >
                No elixirs found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default ElixirTable;
