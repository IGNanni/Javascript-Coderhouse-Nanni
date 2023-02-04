// -----------------------------arreglos----------------

// [elemento1,elemento2,elemento3]


// const nombres = ["Juan" , "Ivan" , "Camila" , "Agustina"];
// console.log (nombres[0]);
// console.log (nombres[1]);
// console.log (nombres[2]);
// console.log (nombres[3]);

// const numeros = [1,2,3,4,5,4,3,2];
// let resultado = numeros[1] + numeros [3];
// console.log(resultado);

// const nombres = ["Juan" , "Ivan" , "Camila" , "Agustina"];

// for(let index = 0; index < nombres.length ; index++){
//     console.log(nombres[index])
// };

// const nombres = ["Juan", "Camila" , "sofia"];
// nombres.push("Lina"); // agrega un nuevo elemento al final del array
// console.log(nombres);

// nombres.unshift ("Lidia"); // agrega un nuevo elemento al principio del array
// console.log(nombres)

// nombres.pop(); // quita el ultimo elemento del array
// console.log(nombres);

// nombres.shift(); // elimina el elemento inicial del array
// console.log(nombres);

// const nombres = ["Juan", "Camila", "Ana"];
// nombres.splice (1,2); // se para en la posicion indicada y borra la cantidad de elementos indicados
// console.log(nombres)

// const nombres = ["Juan", "Camila", "Ana"];
// console.log(nombres.join("====")); // genera un string con los elementos del array separados por lo pasado como parametro 

// const nombres = ["Juan", "Camila", "Ana"];
// const animales = ["perro", "gato", "rana"];
// const varios = animales.concat(nombres); // genera un nuevo arreglo con los arreglos combinados
// console.log(varios);

// const nombres = ["Juan", "Camila", "Ana", "Juliana"];
// const copia = nombres.slice(1,3); // toma un fragmento de un array y crea otro array con esa parte
// console.log(copia)

// const nombres = ["Juan", "Camila", "Ana", "Juliana"];
// console.log (nombres.indexOf("Camila")); // te dice la posicion del dato dado como parametro dentro de un array

// const nombres = ["Juan", "Camila", "Ana", "Juliana"];
// console.log(nombres.includes("Juan")); // valida si el dato esta dentro del array o no (devuleve un valor booleano)
// console.log(nombres.includes("Ivan"));

//--------------- una forma de crear un includes a mano

// const nombres = ["Juan", "Camila", "Ana", "Juliana"];
// const nombre = "Mariana";
// let indicador = false;

// for (let index = 0; index < nombres.length; index++){
//     if(nombres[index]=== nombre){
//         indicador = true;
//     }
// }

//----------Ejemplo real de busqueda de stock------------------

// const productos = ["cafe" , "yerba"];
// const producto = prompt("Ingrese el producto a buscar");

// if (productos.includes(producto)){
//     alert(`Hay ${producto} en existencia`)
// }else {
//     alert(`No hay ${producto} en existencia`)
// }

//--------------------------------------------------------

//--------ejemplo para eliminar un dato segun su valor y no posicion---

// const nombres = ["Juan", "Camila", "Ana", "Juliana"];
// const eliminar = (nombre) => {
//     let index = nombres.indexOf(nombre);

//     if(index !== -1){
//         nombres.splice(index , 1);
//         console.log (nombres);
//     }
// }

// eliminar("Ana");

//-----------------------------------------------

//-----------Arreglos con Objetos-----------

// const productos = [
//     {id: 1, nombre: "pantalon" , precio: 1000 },
//     {id: 2, nombre: "camisa" , precio: 500},
//     {id: 3, nombre: "zapato" , precio: 700},
//     {id: 4, nombre: "gorra" , precio: 1750},
// ];

// for (index = 0 ; index < productos.length ; index++){
//     const elemento = productos[index];
//     console.log(elemento.precio)
// }

//--------------------------------------------------