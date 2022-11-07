import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddBoxIcon from "@mui/icons-material/AddBox";

function AddCustomer(props) {
  const [open, setOpen] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    region: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    props.addCustomer(customer);
    handleClose();
  };

  const inputChanged = (event) => {
    setCustomer({ ...customer, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <IconButton variant="outlined" color="primary" onClick={handleOpen}>
        <AddBoxIcon />
      </IconButton>
      <Dialog open={open}>
        <DialogTitle>Uusi asiakas</DialogTitle>
        <DialogContent>
          <TextField
            name="name"
            value={customer.name}
            onChange={inputChanged}
            margin="dense"
            label="Nimi"
            fullWidth
          />
          <TextField
            name="address"
            value={customer.address}
            onChange={inputChanged}
            margin="dense"
            label="Osoite"
            fullWidth
          />
          <TextField
            name="region"
            value={customer.region}
            onChange={inputChanged}
            margin="dense"
            label="Alue"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Peruuta
          </Button>
          <Button color="primary" onClick={handleSave}>
            Tallenna
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddCustomer;
