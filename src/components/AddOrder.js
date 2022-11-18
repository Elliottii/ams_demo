import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddBoxIcon from "@mui/icons-material/AddBox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function AddOrder() {
  const [open, setOpen] = useState(false);
  const [customer, setCustomer] = React.useState("");
  const [order, setOrder] = React.useState("");
  const [automate, setAutomate] = React.useState("");

  const handleCustomer = (event) => {
    setCustomer(event.target.value);
  };

  const handleOrder = (event) => {
    setOrder(event.target.value);
  };

  const handleAutomate = (event) => {
    setAutomate(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    handleClose();
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        sx={{ backgroundColor: "#D9D9D9", color: "#306DE2" }}
        onClick={handleOpen}
      >
        Uusi tilaus
      </Button>
      <Dialog fullWidth open={open}>
        <DialogTitle>Uusi tilaus</DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <InputLabel variant="filled">Asiakas</InputLabel>
            <Select value={customer} onChange={handleCustomer}>
              <MenuItem value={0}>As Oy Bulevardi</MenuItem>
              <MenuItem value={1}>As Oy Aapola</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel variant="filled">Palvelu</InputLabel>
            <Select value={order} onChange={handleOrder}>
              <MenuItem value={0}>Hiekoitus</MenuItem>
              <MenuItem value={1}>Lakaisu</MenuItem>
              <MenuItem value={2}>Hiekoituslaatikon täyttö</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel variant="filled">Automaattinen uusiutuminen</InputLabel>
            <Select value={automate} onChange={handleAutomate}>
              <MenuItem value={6}>Kyllä</MenuItem>
              <MenuItem value={7}>Ei</MenuItem>
            </Select>
          </FormControl>
          <TextField variant="filled" type="date"></TextField>
          <TextField variant="filled" type="time"></TextField>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Peruuta
          </Button>
          <Button color="primary" onClick={handleSave}>
            Tilaa
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddOrder;
