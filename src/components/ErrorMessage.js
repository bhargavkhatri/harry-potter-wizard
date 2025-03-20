import React from "react";
import { Alert, AlertTitle } from "@mui/material";

const ErrorMessage = ({ title, message }) => {
  return (
    <Alert severity="error">
      {title && <AlertTitle>{title}</AlertTitle>}
      {message}
    </Alert>
  );
};

export default ErrorMessage;
