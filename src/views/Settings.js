import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import AboutUs from "./AboutUs";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import TermsOfService from "./TermsOfService";

export default function Settings() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#D9D9D9",
    ...theme.typography.body2,
    textAlign: "left",
    padding: 10,
    color: theme.palette.text.secondary,
  }));

  const [state, setState] = useState(0);

  return (
    <Box sx={{ display: "flex" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <Item>
            <Typography variant="h6">Tilin asetukset</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Item>
            <Grid>
              <Button onClick={() => setState({ view: 1 })}>
                Muokkaa profiilia
              </Button>
            </Grid>
            <Grid>
              <Button onClick={() => setState({ view: 2 })}>
                Vaihda salasana
              </Button>
            </Grid>

            <Grid>
              <Button onClick={() => setState({ view: 3 })}>
                Tietoa meistä
              </Button>
            </Grid>
            <Grid>
              <Button onClick={() => setState({ view: 4 })}>
                Tieto- ja yksityisyyssuoja
              </Button>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={12} lg={6}>
          {state.view === 1 ? <EditProfile /> : ""}
          {state.view === 2 ? <ChangePassword /> : ""}
          {state.view === 3 ? <AboutUs /> : ""}
          {state.view === 4 ? <TermsOfService /> : ""}
        </Grid>
      </Grid>
    </Box>
  );
}
