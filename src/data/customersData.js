// Generate Customers Data
function createData(id, name, address, region) {
  return { id, name, address, region };
}

export function addCustomer() {
  customers.push({
    id: 10,
    name: "Asunto Oy Uasdasdasdasdtamontalo",
    address: "Fredriasdasdinkatu 24",
    region: "asdasdC",
  });
  console.log("toimii");
  console.log(customers);
}

export const customers = [
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
