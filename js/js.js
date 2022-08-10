const productos = [];

function creoID() {
  return parseInt(Math.random() * 100000);
}

class Producto {
  constructor(id, nombre, importe) {
    this.id = creoID();
    this.nombre = nombre;
    this.importe = importe;
  }
}

function produ() {
  productos.push(new productos(id, nombre, importe));
}

function generarProductos() {
  productos.push(
    new Producto(creoID(), "Mouse Logitech Pro Series Pro X Superlight", 19.399)
  );
  productos.push(new Producto(creoID(), "Mouse Razer Viper Mini", 7.199));
  productos.push(
    new Producto(creoID(), "Mouse HyperX Pulsefire Haste negro", 10.999)
  );
  productos.push(
    new Producto(
      creoID(),
      "Teclado bluetooth Logitech Master Series MX Keys QWERTY",
      21.228
    )
  );
  productos.push(
    new Producto(
      creoID(),
      "Teclado gamer Razer BlackWidow V3 QWERTY Green",
      25.999
    )
  );
  productos.push(
    new Producto(
      creoID(),
      "Teclado gamer HyperX Alloy Origins 60 QWERTY HyperX",
      13.999
    )
  );
  productos.push(
    new Producto(
      creoID(),
      "pad Logitech Desk Mat Studio Series 300x700 Colores Xl",
      3.999
    )
  );
  productos.push(
    new Producto(
      creoID(),
      "Pad gamer Razer Gigantus V2 de tela y caucho xxl 410mm x 940mm x 4mm",
      8.673
    )
  );
  productos.push(
    new Producto(
      creoID(),
      "Pad gamer HyperX Speed Edition Fury S Pro de caucho y tela xl 420mm x 900mm x 4mm",
      4.998
    )
  );

  console.table(productos);
}

function buscarProducto() {
  let prod = prompt("ingrese el producto que busca:");
  const resultado = productos.filter((elemento) =>
    elemento.nombre.includes(prod)
  );
  console.table(resultado);
}

function calcularProductos() {
  let total = productos.reduce(
    (acumulador, producto) => acumulador + producto.importe,
    0
  );
  console.log("total valor de prodctos $:", total);
}
