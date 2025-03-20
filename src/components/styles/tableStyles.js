import styled from "styled-components";
import { TableContainer, TableHead, TableRow } from "@mui/material";

export const StyledTableContainer = styled(TableContainer)`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

export const StyledTableHead = styled(TableHead)`
  background-color: #3f51b5;
  & th {
    color: white;
    font-weight: bold;
  }
`;

export const StyledTableRow = styled(TableRow)`
  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  &:hover {
    background-color: #e1e1e1;
    transition: background-color 0.3s ease;
  }
`;
