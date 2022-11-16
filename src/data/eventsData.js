// Generate Events Data
function createData(id, event, time, customer) {
  return { id, event, time, customer };
}

export const eventsReady = [
  createData(
    0,
    "Hiekoituslaatikko täytetty",
    "01.01.2022 klo 14:55",
    "As Oy Bulevardi"
  ),
  createData(
    1,
    "Hiekoitus toimitettu",
    "02.01.2022 klo 14:45",
    "As Oy Bulevardi"
  ),
  createData(2, "Hiekoitus toimitettu", "03.01.2022 klo 11:25", "As Oy Aapola"),
  createData(3, "Hiekoitus toimitettu", "04.01.2022 klo 11:25", "As Oy Aapola"),
];
