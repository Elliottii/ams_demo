import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { eventsReady } from "../data/eventsData";

export default function Events() {
  const [events, setEvents] = useState([]);

  const [customer, setCustomer] = React.useState("");

  const handleChange = (event) => {
    setCustomer(event.target.value);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#D9D9D9",
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    fetch("https://amsdemo123-default-rtdb.firebaseio.com/events/.json")
      .then((response) => response.json())
      .then((data) => addKeys(data))
      .catch((err) => console.error(err));
  };

  const addKeys = (data) => {
    const keys = Object.keys(data);
    const valueKeys = Object.values(data).map((item, index) =>
      Object.defineProperty(item, "id", { value: keys[index] })
    );
    setEvents(valueKeys);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <Item>
            <FormControl fullWidth>
              <InputLabel variant="filled">Tapahtumat</InputLabel>
              <Select value={customer} onChange={handleChange}>
                <MenuItem value={0}>As Oy Bulevardi</MenuItem>
                <MenuItem value={1}>As Oy Aapola</MenuItem>
              </Select>
            </FormControl>
          </Item>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Item>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Tapahtumat</TableCell>
                  <TableCell align="right">Aika</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Mapping Events Data with id to make tablecells */}
                {events.map((events) => (
                  <TableRow key={events.id}>
                    <TableCell>{events.event}</TableCell>
                    <TableCell align="right">{events.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Item>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Item>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Valmiit</TableCell>
                  <TableCell align="right">Aika</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Mapping eventsReady Data with id to make tablecells */}
                {eventsReady.map((eventsReady) => (
                  <TableRow key={eventsReady.id}>
                    <TableCell>{eventsReady.event}</TableCell>
                    <TableCell align="right">{eventsReady.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
