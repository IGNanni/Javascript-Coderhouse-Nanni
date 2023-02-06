// let varios = [1, 2, 3, 4, 5, 4, 3, 2];

// console.log(varios.length);

// varios.push("Fabian");
// console.log(varios);

// varios.unshift("Andres");
// console.log(varios);

// varios.pop();
// console.log(varios);

// varios.shift();
// console.log(varios);

// varios.splice(1 , 0, "matias"); // se para en la posicion 1, borra cero datos y agrega "matias"
// console.log(varios);

// console.log(varios.join("*"));

// const copia = varios.slice(1, 4);
// console.log(copia);

// console.log(varios.indexOf("matias")); // si no encontraba el valor buscado tira -1

// console.log(varios.includes("matias"));
// console.log(varios.includes("Hugo"));

// //--------------------------------
// //----EJEMPLO DE RUN FUNCTION----------(movimiento en eje X y Y)
// //------------------------------
// let posicion = [0, 0];

// const desplazamiento = (movimiento) => {
//     if(movimiento == "derecha"){
//         posicion[0] +=1;
//     }else if(movimiento == "izquierda"){
//         posicion[0] -=1;
//     }else if (movimiento == "arriba"){
//         posicion[1] +=1;
//     }else{
//         posicion[1] -=1;
//     }
// };

// desplazamiento("derecha");
// console.log(posicion);


//-------------DIFERENCIA ENTRE FILTER Y FIND-----


// const arreglo = [1, 2, 3, 4, 1];

// const encontrar = arreglo.find(item => item === 1); // busca solo el primer match
// console.log(encontrar);

// const filtrar = arreglo.filter(item => item === 1); // busca todos los match
// console.log(filtrar);


//-----------------FILTRADO DE UN ARRAY con objetos--------


const usuarios = [
    {id: 1 , nombre: "juan", edad: 10},
    {id: 2 , nombre: "Maria", edad: 15},
    {id: 3 , nombre: "Jose", edad: 25},
];

const filtrados = usuarios.filter(usuario => usuario.edad > 12);
// console.log(filtrados);

const transformado = usuarios.map(usuario => {
    return {
        nombre: usuario.nombre,
        edad: usuario.edad
    }
});

// console.log(transformado);

usuarios.forEach(element => {
    console.log(element.edad)
});