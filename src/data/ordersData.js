// Generate Orders Data
function createData(id, event, time, customer) {
  return { id, event, time, customer };
}

export const ordersReady = [
  createData(0, "Hiekoitus", "01.01.2022 klo 14:45", "As Oy Bulevardi"),
  createData(
    1,
    "Hiekoituslaatikon täyttö",
    "02.01.2022 klo 13:30",
    "As Oy Bulevardi"
  ),
  createData(2, "Hiekoitus", "03.01.2022 klo 12:45", "As Oy Aapola"),
];
