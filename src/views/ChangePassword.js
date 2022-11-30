import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function ChangePassword() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#D9D9D9",
    ...theme.typography.body2,
    textAlign: "left",
    alignItems: "right",
    padding: 10,
    color: theme.palette.text.secondary,
  }));

  const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#D9D9D9",
    ...theme.typography.body2,
    textAlign: "center",
    alignItems: "center",
    margin: 10,
    padding: 10,
    color: theme.palette.text.secondary,
  }));

  const [state, setState] = useState(0);

  return (
    <Box sx={{ display: "flex" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <Item>
            <Typography variant="h6">Vaihda salasana</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Item>
            <TextField
              variant="filled"
              fullWidth
              required
              type="password"
              label="Nykyinen salasana:"
            />
            <TextField
              variant="filled"
              fullWidth
              required
              type="password"
              label="Kirjoita uusi salasana:"
            />
            <TextField
              variant="filled"
              fullWidth
              required
              type="password"
              label="Kirjoita uusi salasana uudelleen"
            />

            <Grid margin="10px" align="center" item xs={12} lg={12}>
              <Button onClick={() => setState({ view: 1 })} variant="contained">
                Tallenna
              </Button>
              {state.view === 1 ? <Item2>Salasana tallennettu!</Item2> : ""}
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
