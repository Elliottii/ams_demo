import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ordersReady } from "../data/ordersData";

export default function Orders() {
  const [orders, setOrders] = useState([]);

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
    fetch("https://amsdemo123-default-rtdb.firebaseio.com/orders/.json")
      .then((response) => response.json())
      .then((data) => addKeys(data))
      .catch((err) => console.error(err));
  };

  const addKeys = (data) => {
    const keys = Object.keys(data);
    const valueKeys = Object.values(data).map((item, index) =>
      Object.defineProperty(item, "id", { value: keys[index] })
    );
    setOrders(valueKeys);
  };
  return (
    <Item>
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
    </Item>
  );
}
