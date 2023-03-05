//--------------variables
let filtrador = document.getElementById("filtrador");
let boton = document.getElementById("comenzar");
let nombre = document.getElementById("nombre");
let persona = nombre.value
let contenedorPregunta = document.getElementById("pregunta");
let contenedorRespuesta = document.getElementById("contenedorRespuesta");
let salir = document.getElementById("salir");

//--------- saludo inicial (con DOM y localStorage)
//--------No logro que me tome el valor cargado en input text, como si fuera asincronica la respuesta----


boton.addEventListener("click", () => {
    let usuario = persona;
    let usuarioStorage = usuario;
    usuarioStorage = localStorage.setItem("usuario", usuario);
    contenedorPregunta.style.display = "none";
    contenedorRespuesta.style.display = "block";
    const saludo = document.getElementById("respuesta");
    saludo.innerText = `Bienvenido ${persona}`;
})

salir.addEventListener("click", () => {
    localStorage.clear()
    contenedorPregunta.style.display = "flex";
    contenedorRespuesta.style.display = "none";
});

//--------------------------------------------------------
//----------Caraga de listado de servicios-------

const listado = document.getElementById("listadoServicios");

serviciosOfrecidos.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <div class="card">
            <h3>${item.nombre}</h3>
            <h3>$${item.precio}</h3>
            <hr></hr>
            </div>
            `;
    listado.append(li);
})

//-----------Intento de filtro pero no me toma el value del input number(mismo problema que arriba)


// const listado = document.getElementById("listadoServicios");
// let precioInput = document.getElementById("filtro")

// function filtrado() {
//     let precioFiltro = parseInt(precioInput.value);
//     let filtrados = serviciosOfrecidos.filter((item) => item.precio <= precioFiltro);
// }

// filtrado();
// filtrados.forEach((item) => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//             <div class="card">
//             <h3>${item.nombre}</h3>
//             <h3>$${item.precio}</h3>
//             </div>
//             `;
//     listado.append(li);
// }) 

