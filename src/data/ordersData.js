// Generate Events Data
function createData(id, event, time, customer) {
  return { id, event, time, customer };
}

export const ordersReady = [
  createData(0, "Hiekoitus toimitettu", "14:45", "As Oy Bulevardi"),
  createData(1, "Hiekoituslaatikko täytetty", "13:30", "As Oy Bulevardi"),
  createData(2, "Hiekoitus toimitettu", "12:45", "As Oy Aapola"),
];
