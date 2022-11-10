import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Map from "./Map";
import Customers from "./Customers";
import Events from "./Events";
import Orders from "./Orders";

export default function Dashboard() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    borderRadius: 15,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ display: "flex" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}> {/* tähän muuttamalla arvoja saa muokattua card koko */}
          <Item>
            <Map />
          </Item>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Item>
            <Events />
          </Item>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Item>
            <Customers />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
