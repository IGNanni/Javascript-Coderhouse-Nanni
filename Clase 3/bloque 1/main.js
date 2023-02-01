//arrow function
// const suma = (a, b) => a + b;
// const resta = (a, b) => a - b;
// const iva = x => x * 0.21;

// let precioProducto = 1000; // podria ir un prompt aca
// let descuento = 10;

// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);

//-------------------------------------------------------

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const porcentaje = x => x / 100;
const iva = x => x * 0.21;

let precioProducto = parseInt (prompt("Ingrese el valor del producto sin IVA"));
let descuento = parseInt(prompt("Posee algun descuento?"));

let nuevoPrecio = suma(resta(precioProducto , multiplicacion(precioProducto, porcentaje(descuento))), iva(precioProducto));
let mensaje = `El precio final del producto es ${nuevoPrecio}`;
alert(mensaje);

