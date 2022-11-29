import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function AboutUs() {
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
            <Grid container spacing={1}>
                <Grid item xs={12} lg={12}>
                    <Item>
                        <Typography variant="h2">Tietoa meistä</Typography>
                    </Item>
                </Grid>
                <Grid item xs={6} lg={6}>
                    <Item>
                        <Grid>
                            <Typography>
                                Hei,

                                Olemme Metropolian opiskelijoita tuotantotalouden, mediatekniikan ja tieto- ja viestintätekniikan aloilta.<br></br>
                                Olemme mukana SAM-hankkeessa, jonka tavoitteena on luoda uutta liiketoimintaa<br></br>
                                sekä kehittää jo olemassa olevaa liiketoimintaa autonomisten ajoneuvojen ja liikenteen valvonnan alalle.<br></br>


                                Kehitämme autonomisilla roboteilla toimivaa palvelua ulkotöiden hoitoon.<br></br>
                                Palvelu huoltoyhtiöille kattaisi nurmikonleikkuun, lehtien puhaltamisen, hiekoituksen ja lakaisun sekä lumitöiden hoitamisen. Palveluun sisältyy sovellus, jonka kautta taloyhtiö pystyy tilaamaan haluamalleen taloyhtiölle tarvittavia toimenpiteitä.

                            </Typography>
                        </Grid>
                    </Item>
                    <Item>
                        <Grid>
                            <Typography>
                                Lue lisää hankkeesta: https://www.metropolia.fi/fi/tutkimus-kehitys-ja-innovaatiot/hankkeet/sam
                            </Typography>
                        </Grid>
                    </Item>
                </Grid>
                <Grid item xs={6} lg={12}>
                    <Item>
                        <Typography variant="h6">Ystävällisin terveisin:
                            Diyar Dogru, Eeli Klementtilä, Niko Saikko, Ville Ravila</Typography>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}