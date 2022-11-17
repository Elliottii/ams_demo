import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";

export default function Reviews() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#D9D9D9",
    ...theme.typography.body2,
    borderRadius: 15,
    textAlign: "left",
    margin: 10,
    padding: 10,
    color: "black",
  }));

  return (
    <Box sx={{ display: "flex" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <Item>
            <Typography variant="body1" gutterBottom>
              Palautteet
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Item>
            <Typography display="block" variant="body1" gutterBottom>
              B
            </Typography>
            <Typography display="block" variant="body1" gutterBottom>
              Asunto-Oy Ruohis
            </Typography>
            <Typography display="block" variant="body1" gutterBottom>
              Peltokaarenkatu 5
            </Typography>
            <Typography display="block" variant="body1" gutterBottom>
              00200, Helsinki
            </Typography>
            <Typography display="block" variant="body1" gutterBottom>
              0104759294
            </Typography>
            <Typography display="block" variant="body1" gutterBottom>
              juhis.talkkari@gmail.com
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Item>
            <Box>
              <Rating name="read-only" value={4} readOnly />
              <Typography>Oikein nopea ja hyvä palvelu</Typography>
            </Box>
          </Item>
          <Item>
            <Box>
              <Rating name="read-only" value={5} readOnly />
              <Typography>Täydellinen laatu hiekoituksessa!</Typography>
            </Box>
          </Item>
          <Item>
            <Box>
              <Rating name="read-only" value={3} readOnly />
              <Typography>Hiekoitus tuli myöhässä.</Typography>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
