import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { eventsReady } from "../data/eventsData";

export default function Events() {
  const [events, setEvents] = useState([]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#D9D9D9",
    ...theme.typography.body2,
    borderRadius: 15,
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
    <Item>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Tapahtumat</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Mapping Events Data with id to make tablecells */}
          {events.map((events) => (
            <TableRow key={events.id}>
              <TableCell>{events.event}</TableCell>
              <TableCell>{events.time}</TableCell>
              <TableCell>{events.customer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableHead>
          <TableRow>
            <TableCell>Valmiit</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Mapping eventsReady Data with id to make tablecells */}
          {eventsReady.map((eventsReady) => (
            <TableRow key={eventsReady.id}>
              <TableCell>{eventsReady.event}</TableCell>
              <TableCell>{eventsReady.time}</TableCell>
              <TableCell>{eventsReady.customer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Item>
  );
}
