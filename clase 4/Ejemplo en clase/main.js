const servicios = [
    { id: 1, nombre: "Primer Service", precio: 5000 },
    { id: 2, nombre: "Segundo Service", precio: 8000 },
    { id: 3, nombre: "Service Completo", precio: 10000 },
    { id: 4, nombre: "revision", precio: 5000 },
];

function saludar() {
    let quien = prompt("Por favor indicanos tu nombre");
    while (quien == "") {
        alert("Necesitamos tu nombre para poder atenderte mejor");
        quien = prompt("Por favor indicanos tu nombre");
    };
    alert(`Hola ${quien} bienvenido a nuestro taller`);
};

function mostrarItems() {
    for (let index = 0; index < servicios.length; index++) {
        const elemento = servicios[index];
        alert(elemento.nombre);
    };
    
}

function pedido() {
    let pregunta = prompt("Queres conocer nuestros productos?");
    while ((pregunta.toLowerCase() != "si") && (pregunta.toLowerCase() != "no")){
        alert("Por favor indicanos con SI o NO");
        pregunta = prompt("Queres conocer nuestros productos?");
    }
    if(pregunta.toLowerCase() == "si") {
            mostrarItems(servicios);
    }else if (pregunta.toLowerCase() == "no"){
            alert(`Muchas gracias por tu visita`);
    }
}



saludar();
pedido();

