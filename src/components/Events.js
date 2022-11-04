import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// Generate Events Data
function createData(id, event, time, customer) {
  return { id, event, time, customer };
}

const events = [
  createData(0, "Hiekoituslaatikon täyttö tilattu", "14:25", "As Oy Bulevardi"),
  createData(1, "Hiekoituslaatikko 25%", "14:15", "As Oy Bulevardi"),
  createData(2, "Hiekoitus käynnissä", "14:05", "As Oy Bulevardi"),
];

const eventsReady = [
  createData(0, "Hiekoituslaatikko täytetty", "14:55", "As Oy Bulevardi"),
  createData(1, "Hiekoitus toimitettu", "14:45", "As Oy Bulevardi"),
  createData(2, "Hiekoitus toimitettu", "11:25", "As Oy Aapola"),
];

export default function Events() {
  return (
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
  );
}
