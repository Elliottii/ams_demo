import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Login() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          height: "100%",
          marginTop: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ mt: 1 }}>
          <TextField
            sx={{
              input: {
                background: "#D9D9D9",
              },
            }}
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="account"
            label="Käyttäjätunnus:"
            name="account"
          />

          <TextField
            sx={{
              input: {
                background: "#D9D9D9",
              },
            }}
            variant="filled"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Salasana:"
            type="password"
            id="password"
          />
          <Button
            onClick={() => navigate("/dashboard")}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "#D9D9D9", color: "#306DE2", mt: 3, mb: 2 }}
          >
            Kirjaudu sisään
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
