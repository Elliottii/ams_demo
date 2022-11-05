import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { events, eventsReady } from "../data/eventsData";

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
