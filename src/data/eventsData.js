// Generate Events Data
function createData(id, event, time, customer) {
  return { id, event, time, customer };
}

export const eventsReady = [
  createData(0, "Hiekoituslaatikko täytetty", "14:55", "As Oy Bulevardi"),
  createData(1, "Hiekoitus toimitettu", "14:45", "As Oy Bulevardi"),
  createData(2, "Hiekoitus toimitettu", "11:25", "As Oy Aapola"),
];
