import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function AboutUs() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#D9D9D9",
    ...theme.typography.body2,
    textAlign: "left",
    padding: 10,
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ display: "flex" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <Item>
            <Typography variant="h6">Tieto- ja yksityisyyssuoja</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Item>
            <Typography gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              congue fringilla ante, nec blandit leo varius ut. Vestibulum at
              condimentum magna, quis condimentum nunc. Pellentesque nec felis
              non leo varius vehicula non eu odio. Phasellus diam sem, commodo
              sed viverra vel, maximus vel justo. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos. Nam
              tellus massa, tempor nec sagittis in, fringilla sit amet augue.
              Curabitur non euismod orci. Curabitur et lacus nisi. Nulla
              fermentum, lectus nec lobortis auctor, enim enim facilisis nunc, a
              viverra mi urna varius dolor. Morbi venenatis dolor ipsum. Duis at
              gravida nunc. Sed ut nunc dui. In hac habitasse platea dictumst.
            </Typography>
            <Typography gutterBottom>
              Sed suscipit eros non elit malesuada, vitae porttitor nulla
              hendrerit. Mauris ut euismod diam. Donec sed nibh porttitor,
              lobortis ligula eget, sodales arcu. Phasellus nec venenatis massa.
              Vestibulum elit ex, tincidunt id ultricies sit amet, rutrum id
              arcu. Curabitur nec leo varius, blandit metus eget, rutrum nibh.
              Phasellus lacus est, suscipit vitae justo eu, auctor faucibus
              risus. Suspendisse semper sit amet massa nec auctor.
            </Typography>
            <Typography gutterBottom>
              Curabitur nulla nisi, porta vel nunc ac, volutpat sodales massa.
              Fusce placerat tortor in sodales luctus. Mauris faucibus commodo
              libero. Praesent rhoncus sed elit eget sodales. Mauris interdum
              pharetra eros, quis sollicitudin mi. Sed luctus ex turpis. Vivamus
              porta commodo est, congue scelerisque dui laoreet at. Fusce
              porttitor neque eget quam laoreet scelerisque. Proin quis odio
              gravida velit varius sagittis at et dui. Donec non elit molestie,
              placerat nibh sed, accumsan velit.
            </Typography>
            <Typography gutterBottom>
              Nunc iaculis erat pellentesque feugiat porttitor. Nulla dictum
              massa et nulla fermentum facilisis. Nullam pharetra ac mi in
              luctus. Sed nec elit ac nulla vulputate commodo. Etiam elementum
              quis elit quis ultricies. Nunc id tortor nibh. Etiam sollicitudin
              mi at velit placerat fringilla.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
