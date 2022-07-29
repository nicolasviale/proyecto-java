debugger;

let seguimos = true;
let numero = parseInt(prompt("Ingrese un numero deseado:"));
let multi = 1;

while (seguimos) {
  console.log("resultado", numero * multi);
  seguimos = confirm("desea seguir multiplicando?");
  if (seguimos) {
    multi++;
  }
}
