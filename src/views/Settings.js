import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Routes, Route, useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#D9D9D9",
    ...theme.typography.body2,
    textAlign: "left",
    margin: 10,
    padding: 10,
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ display: "flex" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <Item>
            <Typography variant="h6">Asetukset</Typography>
          </Item>
        </Grid>
        <Grid item xs={6} lg={6}>
          <Item>
            <Grid>
              <Button>Vaihda salasana</Button>
            </Grid>
            <Grid>
              <Button>Ilmoitukset</Button>
            </Grid>
          </Item>
          <Item>
            <Grid>
              <Button onClick={() => navigate("/aboutus")}>Tietoa meistä</Button>
            </Grid>
            <Grid>
              <Button>Tieto- ja yksityisyyssuoja</Button>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
};