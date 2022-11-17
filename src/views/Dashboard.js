import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Map from "../components/GoogleMap";
import Events from "./Events";
import Orders from "./Orders";

export default function Dashboard() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#D9D9D9",
    ...theme.typography.body2,
    borderRadius: 15,
    textAlign: "center",
    color: theme.palette.text.secondary,
    style: { fontFamily: "Calibri Light" }
  }));

  return (
    <Box sx={{ display: "flex" }}>
      <Grid container spacing={3}>
        <Grid item xs={10} lg={6}>
          <Item>
            <Map />
          </Item>
        </Grid>
        <Grid item xs={10} lg={3}>
          <Item>
            <Events />
          </Item>
        </Grid>
        <Grid item xs={10} lg={3}>
          <Item>
            <Orders />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
