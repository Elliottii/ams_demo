import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ordersReady } from "../data/ordersData";
import AddOrder from "../components/AddOrder";

export default function Orders() {
  const [orders, setOrders] = useState([]);

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
    <Box sx={{ display: "flex" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <Item>
            <FormControl fullWidth>
              <InputLabel variant="filled">Tilaukset</InputLabel>
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
                  <TableCell>Tilaukset</TableCell>
                  <TableCell align="right">Aika</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Mapping Orders Data with id to make tablecells */}
                {orders.map((orders) => (
                  <TableRow key={orders.id}>
                    <TableCell>{orders.event}</TableCell>
                    <TableCell align="right">{orders.time}</TableCell>
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
                  <TableCell>Toimitetut</TableCell>
                  <TableCell align="right">Aika</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Mapping ordersReady Data with id to make tablecells */}
                {ordersReady.map((ordersReady) => (
                  <TableRow key={ordersReady.id}>
                    <TableCell>{ordersReady.event}</TableCell>
                    <TableCell align="right">{ordersReady.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Item>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Item>
            <AddOrder />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
