//------------ CREACION de usuario y salida de sesion------------------

// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario");

// if(usuarioStorage){
//     usuario = usuarioStorage;
//     let div = document.createElement("div");
//     div.innerHTML = `<h1 id="saludo1">Hola ${usuario}</h1>`;
//     document.body.append(div);
// }else{
//     usuario = prompt("Por favor ingrese su nombre");
//     sessionStorage.setItem ("usuario", usuario);
//     let div = document.createElement("div");
//     div.innerHTML = `<h1 id="saludo2">Bienvenid@ por primera vez ${usuario}</h1>`;
//     document.body.append(div);
// };

// if (usuario){
//     let div2 = document.createElement ("button");
//     div2.innerHTML = `<button id= "cerrar">Cerrar sesión</button>`;
//     document.body.append(div2);
//     let cerrar = document.getElementById("cerrar");
// };


// cerrar.addEventListener("click" , () => {
//     sessionStorage.removeItem("usuario");
//     let div = document.createElement("div");
//     div.innerHTML = `<h2>Sesion cerrada exitosamente</h2>`;
//     document.body.append(div);
// })


//------Carrito de compras---------------


const productos = [
    { id: 1, nombre: "camisa", precio: 1000 },
    { id: 2, nombre: "pantalon", precio: 700 },
    { id: 3, nombre: "media", precio: 850 },
    { id: 4, nombre: "zapato", precio: 1200 },
];

const agregar = (id) => {
    let encontrado = productos.find(item => item.id === id);
};

carrito.push(agregar);

productos.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
        <h3>${item.nombre}</h3>
        <h3>${item.precio}</h3>
        <button id="boton${item.id}">Agregar</button>
    `;
    document.append(div);
    
    let boton = document.getElementById(`boton${item.id}`);
    boton.addEventListener("click", () => agregar(item.id));
})
// REVEEEEEEEER TODO ESTE CODIGO/-----------