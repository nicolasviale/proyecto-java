//SUMA DE PRODUCTOS
let producto1;
let producto2;
let condition = true;
let suma = 0;
debugger;
do {
  suma = 0;
  producto1 = "";
  producto2 = "";
  producto1 = prompt(
    "Ingrese el producto que desea comprar (campera, remera, zapatillas)"
  ).toLowerCase();
  producto2 = prompt(
    "Ingrese el producto que desea comprar (camepra, remera, zapatillas)"
  ).toLowerCase();
  if (producto1 === "campera") {
    suma += 8500;
  } else if (producto1 === "remera") {
    suma += 12000;
  } else if (producto1 === "zapatillas") {
    suma += 50000;
  }

  if (producto2 === "campera") {
    suma += 8500;
  } else if (producto2 === "remera") {
    suma += 12000;
  } else if (producto2 === "zapatillas") {
    suma += 50000;
  }
  if (
    (producto1 === "campera",
    producto1 === "remera",
    producto1 === "zapatillas") &&
    (producto2 === "campera",
    producto2 === "remera",
    producto2 === "zapatillas")
  ) {
    condition = false;
  }
} while (condition === false);

console.log("El precio total es: $" + suma);

//SWITCH DE COLORES

let color = prompt(
  "Ingrese el color del producto que desee (Negro, Blanco, Gris)"
);
color = color.toLowerCase();

switch (color) {
  case "negro":
    console.log("Si, tenemos el color $", { color }, "disponible");
    break;
  case "gris":
    console.log("Si, tenemos el color $", { color }, "disponible");
    break;
  case "blanco":
    console.log("Si, tenemos el color $", { color }, "disponible");
    break;
  default:
    alert("Seleccione un color disponible (Negro, Blanco, Gris)");
}
