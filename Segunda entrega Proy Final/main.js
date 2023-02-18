const servicios = [
    { id: 1, nombre: "Primer Service", precio: 5000, comprado: 0 },
    { id: 2, nombre: "Segundo Service", precio: 8000, comprado: 0 },
    { id: 3, nombre: "Service Completo", precio: 10000, comprado: 0 },
    { id: 4, nombre: "revision", precio: 5000, comprado: 0 },
    { id: 5, nombre: "revision chasis", precio: 2000, comprado: 0 },
];

function saludar() {
    let quien = prompt("Por favor indicanos tu nombre");
    while (quien == "") {
        alert("Necesitamos tu nombre para poder atenderte mejor");
        quien = prompt("Por favor indicanos tu nombre");
    };
    alert(`Hola ${quien} bienvenido a nuestro taller`);
};

function listado() {
    nombres = [];
    precios = [];
    servicios.forEach(element => {
        nombres.push(element.nombre)
    });
    servicios.forEach(element => {
        precios.push(element.precio)
    });
    mensajeListado(nombres, precios);
};

function mensajeListado(n, p) {
    let mensaje = [];
    for (let index = 0; index < n.length; index++) {
        mensaje.push("-" + n[index] + "------$" + p[index] + "\n");
    }
    alert(mensaje);
}

function filtrado() {
    let precioFiltro = parseInt(prompt("Ingrese el monto maximo a gastar"));
    let filtrados = servicios.filter((item) => item.precio <= precioFiltro);
    let mensajeFiltrado = "";

    filtrados.forEach((item) => {
        mensajeFiltrado += `- ${item.nombre}------ $${item.precio}\n`;
    });

    alert(mensajeFiltrado);
};

function pedido() {
    let pregunta = prompt("Queres conocer nuestros productos?");
    while ((pregunta.toLowerCase() != "si") && (pregunta.toLowerCase() != "no")) {
        alert("Por favor indicanos con SI o NO");
        pregunta = prompt("Queres conocer nuestros productos?");
    }
    if (pregunta.toLowerCase() == "si") {
        listado();
        filtrado();        
    } else if (pregunta.toLowerCase() == "no") {
        alert(`Muchas gracias por tu visita`);
    }
}




saludar();
pedido();






