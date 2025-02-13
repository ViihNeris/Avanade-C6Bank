import React, { useState } from "react";
import { Stack, Snackbar as Container, AlertColor } from "@mui/material";
import Alert from "../utils/Alert";
import { color } from "@mui/system";
import Link from "next/link";

type SnackbarProps = {
  open: boolean;
  hide: number;
  message: string;
  severity: AlertColor;
};

export default function Snackbar(props: SnackbarProps) {
  const [open, setOpen] = useState<boolean>(props.open);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack>
      <Container
        open={open}
        autoHideDuration={props.hide * 1000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={props.severity ? props.severity : "success"}
          sx={{ width: "100%" }}
        >
          {props.message}{" "}
          <Link href="/" style={{ color: "#b9ebd8" }}>
            Clique aqui para acessar a Home: https://gitbank.vercel.app
          </Link>
        </Alert>
      </Container>
    </Stack>
  );
}
