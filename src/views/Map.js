import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Map from "../components/GoogleMap";

export default function Mapbox() {
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
        <Grid item xs={12} lg={12}>
          <Item>
            <Map />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}