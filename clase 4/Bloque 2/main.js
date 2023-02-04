// funcion de orden superior-------------------

// function mayorQue (n){
//     return m => m > n;
// }

// let mayorQueCinco = mayorQue (5); // m => m > 5
// console.log(mayorQueCinco(6)); // el parametro que le doy acá es el "m"
// console.log(mayorQueCinco(4));
// console.log(mayorQueCinco(5));

//------------------------------

// function operaciones (op) {
//     if (op === "sumar"){
//         return (a , b) => a + b;
//     }
//     if (op === "restar"){
//         return (a , b) => a - b;
//     }
//     if (op === "multiplicar"){
//         return (a , b) => a * b;
//     }
//     if (op === "dividir"){
//         return (a , b) => a / b;
//     }
// }

// let resta = operaciones ("restar"); // retorna la funcion de alto orden de op:  (a , b) => a - b
// console.log(resta(10 , 5));

// let multiplicar = operaciones ("multiplicar");
// console.log (multiplicar(4 , 3));

// let nombreOperacion = prompt("ingrese la operacion");
// let numero1 = parseInt(prompt("ingrese el Numero 1"));
// let numero2 = parseInt(prompt("ingrese el Numero 2"));

// let operacion = operaciones(nombreOperacion);
// let resultado = `El resultado de la operacion es ${operacion(numero1 , numero2)}`;
// alert(resultado)

//-----------------funcion de orden superior

// function recorrer (arreglo , funcion){
//     for(const numero of arreglo){
//         funcion(numero);
//     }
// }

// recorrer([1,4,5,7,8] , console.log)

//---------------------------------------------------

//-----METODOS IMPORTANTES--------------

//----------FOREACH----------------

// let numeros = [1, 2, 3, 4, 5, 6, 7];

// numeros.forEach(numero => console.log(numero)); // recibe una funcion como parametro, itera el numero por todo el array. (numero es el iterador)

// numeros.forEach((numero) => {  // misma forma de antes
//     console.log(numero);
// }
// )
//-------------------------------------
//-------FIND--(muestra el primer elemento del array que cumpla la condicion)----------------------

// const productos = [
//     { id: 1, nombre: "pantalon", precio: 1000 },
//     { id: 2, nombre: "camisa", precio: 500 },
//     { id: 3, nombre: "zapato", precio: 700 },
//     { id: 4, nombre: "gorra", precio: 1750 },
// ];

// let producto = prompt("por favor ingrese el nombre a buscar")
// const resultado = productos.find(item => item.nombre === producto);

// let mensaje = `
//     id: ${resultado.id}
//     nombre: ${resultado.nombre}
//     precio: $${resultado.precio}    
// `;

// alert(mensaje);

//--------------------------------------------
//---------FILTER (trae todos los resultados que cumplan la condicion)


// const productos = [
//     { id: 1, nombre: "pantalon", precio: 1000 },
//     { id: 2, nombre: "camisa", precio: 500 },
//     { id: 3, nombre: "zapato", precio: 700 },
//     { id: 4, nombre: "gorra", precio: 1750 },
// ];

// let precioBuscado = parseInt(prompt("Ingrese el precio minimo"));
// let filtrados = productos.filter(item => item.precio > precioBuscado);

// filtrados.forEach(item => {
//     let mensaje = `
//         ID: ${item.id}
//         Nombre: ${item.nombre}
//         Precio: ${item.precio}
//         ---------------------
//     `;
//     alert(mensaje);
// });


//-----------------------------------
//--------SOME (te dice si hay algun item con ese nombre)

// const productos = [
//     { id: 1, nombre: "pantalon", precio: 1000 },
//     { id: 2, nombre: "camisa", precio: 500 },
//     { id: 3, nombre: "zapato", precio: 700 },
//     { id: 4, nombre: "gorra", precio: 1750 },
// ];

// console.log (productos.some(item => item.nombre === "manga")); // verifica si "manga esta dentro de los nombres del array"


//--------------------------------------------------
//--------MAP (te muestra un array con cierto formato)

// const productos = [
//     { id: 1, nombre: "pantalon", precio: 1000 },
//     { id: 2, nombre: "camisa", precio: 500 },
//     { id: 3, nombre: "zapato", precio: 700 },
//     { id: 4, nombre: "gorra", precio: 1750 },
// ];

// const nombres = productos.map(item => item.nombre);
// const precios = productos.map(item => item.precio);
// console.log(nombres);
// console.log(precios);

//---Usar un MAP para modificar un array y que te muestre formateado ese nuevo array-----

// const productos = [
//     { id: 1, nombre: "pantalon", precio: 1000 },
//     { id: 2, nombre: "camisa", precio: 500 },
//     { id: 3, nombre: "zapato", precio: 700 },
//     { id: 4, nombre: "gorra", precio: 1750 },
// ];

// const preciosActualizados = productos.map (item => {
//     return {
//         id: item.id,
//         nombre: item.nombre,
//         precio: item.precio - item.precio * 0.21
//     };
// });

// console.log(preciosActualizados);

//------------------------------------------------
//-----REDUCE--(reduce todo el array a un solo valor, usa un acumulador y los items)------------------------

// const numeros = [1, 2, 3, 4, 5, 6];

// const total = numeros.reduce((acum, item) => acum + item, 0); // el cero es el iniciador del acumulador, El acum es el resultado de la anterior iteracion
// console.log(total)

//---------Ej REDUCE con un carrito que te sume todos los precios de un array----

// const productos = [
//         { id: 1, nombre: "pantalon", precio: 1000 },
//         { id: 2, nombre: "camisa", precio: 500 },
//         { id: 3, nombre: "zapato", precio: 700 },
//         { id: 4, nombre: "gorra", precio: 1750 },
//     ];

// const total = productos.reduce ((acum , item) => acum + item.precio , 0);
// console.log (total);


//-------------------------------------------------------
//--------SORT (ordena de menor a mayor o al reves)


// const numeros = [40,1,5,200];

// console.log(numeros.sort((a,b) => a-b)); // menor a mayor
// console.log(numeros.sort((a,b) => b-a)); // mayor a menor


// tambien se puede ordenar alfabeticamente (buscar la forma)

//------------------------------------------------------------
//-----------------METODO MATH-----------------

// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.max(3, 7, 8, 100, 500, 758, 5));
// console.log(Math.min(3, 7, 8, 100, 500, 758, 5));
// console.log(Math.ceil(3.24)); // redondea para arriba al numero entero mas cercano
// console.log(Math.floor(3.7)); // redondea para abajo al numero entero mas cercano
// console.log(Math.round(3.7)); //redondea al mas cercano
// console.log(Math.sqrt(9)); //raiz cuadrada
// console.log(Math.round(math.random() * 10));

//--------------------------------------------------
//--METODO DATE----------------------------------

// console.log(new Date (2023 , 1 , 4)); // Año , mes , dia , hora , min,  seg. (si no aclaras toma valor 0)

// const casiNavidad = new Date(2023 , 2023 , 12 , 24 , 23, 59 , 59);
// console.log(casiNavidad);

// const hoy = new Date ("February 4, 2023");
// console.log(hoy.toDateString());
// console.log(hoy.toLocaleString());
// console.log(hoy.toLocaleDateString());
// console.log(hoy.toTimeString());
// console.log(hoy.getFullYear());
// console.log(hoy.getMonth());
// console.log(hoy.getDay());


// const navidad = new Date ("December 25, 2023");
// const hoy = new Date("February 4, 2023");

// // console.log(navidad - hoy);
// const milisegundosPorDia = 86400000;
// console.log((navidad - hoy)/ milisegundosPorDia);

//--------------------------------------------------------
//--------------------------------------------------------
