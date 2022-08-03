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
    "Ingrese el producto que desea comprar (Mouse, Teclado, Monitor)"
  ).toLowerCase();
  producto2 = prompt(
    "Ingrese el producto que desea comprar (Mouse, Teclado, Monitor)"
  ).toLowerCase();
  if (producto1 === "mouse") {
    suma += 8500;
  } else if (producto1 === "teclado") {
    suma += 12000;
  } else if (producto1 === "monitor") {
    suma += 50000;
  }

  if (producto2 === "mouse") {
    suma += 8500;
  } else if (producto2 === "teclado") {
    suma += 12000;
  } else if (producto2 === "monitor") {
    suma += 50000;
  }
  if (
    (producto1 === "mouse", producto1 === "teclado", producto1 === "monitor") &&
    (producto2 === "mouse", producto2 === "teclado", producto2 === "monitor")
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
