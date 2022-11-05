import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { orders, ordersReady } from "../data/ordersData";

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
        {/* Mapping Orders Data with id to make tablecells */}
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
        {/* Mapping ordersReady Data with id to make tablecells */}
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
