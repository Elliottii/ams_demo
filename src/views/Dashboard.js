import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Map from "../components/GoogleMap";
import Events from "./Events";
import Orders from "./Orders";
import Reviews from "../components/Reviews";

export default function Dashboard() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#D9D9D9",
    ...theme.typography.body2,
    borderRadius: 15,
    height: "44vh",
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ display: "flex" }}>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <Map />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <Item>
            <Events />
          </Item>
        </Grid>
        <Grid item lg={6}>
          <Item>
            <Orders />
          </Item>
        </Grid>
        <Grid item lg={12}>
          <Item>
            <Reviews />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
