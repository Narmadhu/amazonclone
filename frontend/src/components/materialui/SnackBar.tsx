import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export interface SnackBarModel {
  severity: "error" | "info" | "success" | "warning" | undefined;
  handleClose: (event: Event | React.SyntheticEvent<any, Event>) => void;
  message: string;
  openSnackbar: boolean;
}

export default function SnackBar({
  openSnackbar,
  handleClose,
  severity,
  message,
}: SnackBarModel) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={openSnackbar}
      onClose={handleClose}
      key={"top" + "center"}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
