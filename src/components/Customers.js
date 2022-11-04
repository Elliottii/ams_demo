import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";

// Generate Customers Data
function createData(id, name, address, region) {
  return { id, name, address, region };
}

const customers = [
  createData(0, "As Oy Bulevardi", "Bulevardi 34b", "A"),
  createData(1, "As Oy Aapola", "Runeberginkatu 15", "B"),
  createData(2, "As Oy Tellus Bostadsaktiebolag", "Pietarinkatu 18", "C"),
  createData(3, "Oy Vilhola", "Mikonkatu 18", "A"),
  createData(4, "Asunto-osakeyhtiö Jukola", "Yrjönkatu 25", "B"),
  createData(5, "As Oy Kotirinne", "Pohjoinen Rautatienkatu 11", "C"),
  createData(6, "As Oy Aquila Bostads Ab", "Annankatu 20", "A"),
  createData(7, "Asunto-osakeyhtiö Mullo", "Jääkärinkatu 2", "B"),
  createData(8, "Asunto Oy Untamontalo", "Fredrikinkatu 24", "C"),
  createData(
    9,
    "Asunto-osakeyhtiö Lönnrotinkatu 33-35",
    "Lönnrotinkatu 33-35",
    "A"
  ),
];

export default function Customers() {
  return (
    <Table size="small">
      <TableHead>
        <TableCell>Asiakkaat</TableCell>
        <TableCell></TableCell>
        <TableCell>
          <IconButton>
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
