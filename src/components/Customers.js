import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { customers, addCustomer } from "../data/customersData";

export default function Customers() {
  return (
    <Table size="small">
      <TableHead>
        <TableCell>Asiakkaat</TableCell>
        <TableCell></TableCell>
        <TableCell>
          <IconButton onClick={addCustomer}>
            <AddBoxIcon />
          </IconButton>
        </TableCell>
      </TableHead>
      <TableHead>
        <TableRow>
          <TableCell>Nimi</TableCell>
          <TableCell>Osoite</TableCell>
          <TableCell>Alue</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* Mapping Customers Data with id to make tablecells */}
        {customers.map((customers) => (
          <TableRow key={customers.id}>
            <TableCell>{customers.name}</TableCell>
            <TableCell>{customers.address}</TableCell>
            <TableCell>{customers.region}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
