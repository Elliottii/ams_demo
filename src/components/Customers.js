import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddCustomer from "./AddCustomer";

export default function Customers() {
  const [customers, setCustomer] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    fetch("https://amsdemo123-default-rtdb.firebaseio.com/customers/.json")
      .then((response) => response.json())
      .then((data) => addKeys(data))
      .catch((err) => console.error(err));
  };

  const addKeys = (data) => {
    const keys = Object.keys(data);
    const valueKeys = Object.values(data).map((item, index) =>
      Object.defineProperty(item, "id", { value: keys[index] })
    );
    setCustomer(valueKeys);
  };

  const addCustomer = (newCustomer) => {
    fetch("https://amsdemo123-default-rtdb.firebaseio.com/customers/.json", {
      method: "POST",
      body: JSON.stringify(newCustomer),
    })
      .then((response) => fetchItems())
      .catch((err) => console.error(err));
  };

  const deleteCustomer = (id) => {
    fetch(
      "https://amsdemo123-default-rtdb.firebaseio.com/customers/${id}.json",
      {
        method: "DELETE",
      }
    )
      .then((response) => fetchItems())
      .catch((err) => console.error(err));
  };

  return (
    <Table size="small">
      <TableHead>
        <TableCell>Asiakkaat</TableCell>
        <TableCell></TableCell>
        <TableCell>
          <AddCustomer addCustomer={addCustomer} />
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
