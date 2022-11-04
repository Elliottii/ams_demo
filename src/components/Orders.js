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

const orders = [
  createData(0, "Hiekoitus tilattu", "13:45", "As Oy Bulevardi"),
  createData(1, "Hiekoituslaatikon täyttö tilattu", "12:30", "As Oy Bulevardi"),
  createData(2, "Hiekoitus tilatttu", "11:45", "As Oy Aapola"),
];

const ordersReady = [
  createData(0, "Hiekoitus toimitettu", "14:45", "As Oy Bulevardi"),
  createData(1, "Hiekoituslaatikko täytetty", "13:30", "As Oy Bulevardi"),
  createData(2, "Hiekoitus toimitettu", "12:45", "As Oy Aapola"),
];

export default function Orders() {
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Tilaukset</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orders.map((orders) => (
          <TableRow key={orders.id}>
            <TableCell>{orders.event}</TableCell>
            <TableCell>{orders.time}</TableCell>
            <TableCell>{orders.customer}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableHead>
        <TableRow>
          <TableCell>Toimitetut</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {ordersReady.map((ordersReady) => (
          <TableRow key={ordersReady.id}>
            <TableCell>{ordersReady.event}</TableCell>
            <TableCell>{ordersReady.time}</TableCell>
            <TableCell>{ordersReady.customer}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
