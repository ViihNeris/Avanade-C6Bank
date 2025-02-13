import React, { useEffect, useState, FormEvent } from "react";
import {
  Typography,
  Container,
  Button,
  TextField,
  Checkbox,
  Box,
  FormControlLabel,
  CssBaseline,
  Stack,
} from "@mui/material";
import Snackbar from "../../Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Login() {
  const [email, setEmail] = useState<string | undefined | null>("");
  const [password, setPassword] = useState<
    string | undefined | null | FormDataEntryValue
  >("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    setPassword(data.get("password"));

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  useEffect(() => {
    if (password && password.length < 6) {
      setError(true);
      setErrorMessage(`Senha muito curta. Insira, no mínimo, 6 caracteres.`);
    } else if (password) {
      setError(false);
      setErrorMessage("");
      setOpen(true);
    }
  }, [password]);

  return (
    <Box
      sx={{
        mt: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "white",
        padding: "10%",
        borderRadius: "10px",
        boxShadow: "1px 1px 10px 5px #032859",
      }}
    >
      <div>
        <small>Desenvolvido por ViihNeris</small>
      </div>
      <br />
      <Typography component="h1" variant="h5" sx={{ color: "#032859" }}>
        Tela de Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          /*ref={inputLogin}*/ margin="normal"
          required
          id="email"
          name="email"
          fullWidth
          label="Digite seu Login"
          autoComplete="email"
        />
        <TextField
          margin="normal"
          fullWidth
          id="password"
          required
          name="password"
          type="password"
          label="Digite a senha"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Lembrar-me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
        {error && <Typography color="error">{errorMessage}</Typography>}
        {open && (
          <Snackbar
            open={open}
            hide={5}
            message={"Usuário logado! "}
            severity="success"
          />
        )}
      </Box>
    </Box>
  );
}
