// Generate Events Data
function createData(id, event, time, customer) {
  return { id, event, time, customer };
}

export const orders = [
  createData(0, "Hiekoitus tilattu", "13:45", "As Oy Bulevardi"),
  createData(1, "Hiekoituslaatikon täyttö tilattu", "12:30", "As Oy Bulevardi"),
  createData(2, "Hiekoitus tilatttu", "11:45", "As Oy Aapola"),
];

export const ordersReady = [
  createData(0, "Hiekoitus toimitettu", "14:45", "As Oy Bulevardi"),
  createData(1, "Hiekoituslaatikko täytetty", "13:30", "As Oy Bulevardi"),
  createData(2, "Hiekoitus toimitettu", "12:45", "As Oy Aapola"),
];
