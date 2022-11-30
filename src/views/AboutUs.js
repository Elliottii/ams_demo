import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
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
            <Typography variant="h6">Tietoa meistä</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Item>
            <Typography gutterBottom>
              Hei, Olemme Metropolian opiskelijoita tuotantotalouden,
              mediatekniikan ja tieto- ja viestintätekniikan aloilta. Olemme
              mukana SAM-hankkeessa, jonka tavoitteena on luoda uutta
              liiketoimintaa sekä kehittää jo olemassa olevaa liiketoimintaa
              autonomisten ajoneuvojen ja liikenteen valvonnan alalle. Kehitämme
              autonomisilla roboteilla toimivaa palvelua ulkotöiden hoitoon.
              Palvelu huoltoyhtiöille kattaisi nurmikonleikkuun, lehtien
              puhaltamisen, hiekoituksen ja lakaisun sekä lumitöiden hoitamisen.
              Palveluun sisältyy sovellus, jonka kautta taloyhtiö pystyy
              tilaamaan haluamalleen taloyhtiölle tarvittavia toimenpiteitä.
            </Typography>
            <Typography align="center" gutterBottom>
              Ystävällisin terveisin,
            </Typography>
            <Typography align="center" gutterBottom>
              Diyar Dogru, Eeli Klemettilä, Niko Saikko, Ville Ravila
            </Typography>
          </Item>
        </Grid>

        <Grid item xs={12} lg={12}>
          <Item>
            <Typography gutterBottom>Lue lisää hankkeesta:</Typography>
            <Link href="https://www.metropolia.fi/fi/tutkimus-kehitys-ja-innovaatiot/hankkeet/sam">
              Metropolia SAM
            </Link>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
