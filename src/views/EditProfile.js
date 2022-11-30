import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function EditProfile() {
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
            <Typography variant="h6">Muokkaa profiilia</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Item>
            <TextField
              variant="filled"
              fullWidth
              required
              label="Etunimi:"
              defaultValue="Juhis"
            />
            <TextField
              variant="filled"
              fullWidth
              required
              label="Sukunimi:"
              defaultValue="Talkkari"
            />
            <TextField
              variant="filled"
              fullWidth
              required
              label="Osoite:"
              defaultValue="Peltokaarenkatu 5"
            />
            <TextField
              variant="filled"
              fullWidth
              required
              label="Postinumero:"
              defaultValue="00200"
            />
            <TextField
              variant="filled"
              fullWidth
              required
              label="Toimipaikka:"
              defaultValue="Helsinki"
            />
            <TextField
              variant="filled"
              fullWidth
              required
              label="Puhelin:"
              defaultValue="0104759294"
            />
            <TextField
              variant="filled"
              fullWidth
              required
              label="Sähköposti:"
              defaultValue="juhis.talkkari@gmail.com"
            />
            <Grid margin="10px" align="center" item xs={12} lg={12}>
              <Button onClick={() => setState({ view: 1 })} variant="contained">
                Tallenna
              </Button>
              {state.view === 1 ? <Item2>Tallennettu!</Item2> : ""}
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
