//------------Variables--------------------------
let precioService = 0;
let precioService1 = 0;
let nombre = prompt("Por favor indicanos tu nombre");
let nServicio = "";
let nServicio1 = "";
//---------Bienvenida---------------------------------

function programaCompleto() {   
while (nombre == "") {
    alert("Por favor coloca tu nombre, de esa manera vamos a poder orientarte mejor a futuro");
    nombre = prompt("Por favor indicanos tu nombre");
}
if(nombre != "salir"){
    alert(`¡Hola ${nombre}, bienvenid@ a nuestro taller!\n\Tenemos dos opciones de servicios para vos`);

//-------Listado Productos----------------------------

alert(`¡${nombre} vas a poder crear tu propio servicio!\n\Nuestras opciones de servicio son:\n\ - Service completo segun kilometraje\n\ - Revisión completa`);

//-------Queres comparar?----------

let prospecto = prompt(`¿Queres crear un servicio con turno?\n\  SI / NO`);

while ((prospecto.toLowerCase() !== "si") && (prospecto.toLowerCase() !== "no")) {
    alert(`${nombre}, no entendimos tu respuesta\n\Por favor indicanos con SI o NO`);
    prospecto = prompt(`¿Queres crear un servicio con turno?\n\  SI / NO`);
}

switch (prospecto.toLowerCase()) {
    //---------------------- Eleccion 1° servicio-----------------------------
    case "si":
        let servicioElegido = prompt(`¿Cuál de los servicios queres adquirir?\n - Service\n - Revisión`);
        while ((servicioElegido.toLowerCase() !== "service") && (servicioElegido.toLowerCase() !== "revision")) {
            alert(`${nombre}, no entendimos tu respuesta\n\Por favor indicanos con SERVICE / REVISION`);
            servicioElegido = prompt(`¿Cuál de los servicios queres adquirir?\n - Service\n - Revisión`);
        }
        if (servicioElegido.toLowerCase() == "service") {
            alert(`${nombre}:\nvamos a hacerte unas preguntas para poder darte una mejor guía de precios`);
            let kilometraje = parseInt(prompt("¿Cuantos Kilometros tiene tu moto?"));
            if ((kilometraje >= 0) && (kilometraje <= 5000)) {
                nServicio = "1° Service"
                precioService = 8000
                alert(`Tu moto está para hacerle el ${nServicio} que cuenta de:\n - Cambio de Aceite\n - Cambio de filtros\n - Servicio transmision\n \n El costo es de $${precioService}`);
            } else if ((kilometraje > 5000) && (kilometraje <= 10000)) {
                nServicio = "2° Service"
                precioService = 10000
                alert(`Tu moto está para hacerle el ${nServicio} que cuenta de:\n - Cambio de Aceite\n - Cambio de filtros\n - Servicio transmision\n - Cambio bujias\n \n El costo es de $${precioService}`);
            } else {
                nServicio = "Service Completo"
                precioService = 15000
                alert(`Tu moto está para hacerle un ${nServicio} que cuenta de:\n - Cambio de Aceite\n - Cambio de filtros\n - Servicio transmision\n - Cambio bujias\n - Carburacion\n - Regulación válvulas\n \n El costo es de $${precioService}`)
            }
        } else if (servicioElegido.toLowerCase() == "revision") {
            nServicio = "Revisión Completa"
            precioService = 5000
            alert(`Tu moto está para hacerle la ${nServicio} que cuenta de revisar:\n - Fluidos\n - Frenos\n - Transmisión\n - Ruedas\n - Suspensión\n \n El costo es de $${precioService}`);
        }

        //-------------------Elección 2° servicio---------------------------------

        let prospecto1 = prompt(`¿Querés agregar otro servicio para tu moto?\n SI / NO`);
        while ((prospecto1.toLowerCase() !== "si") && (prospecto1.toLowerCase() !== "no")) {
            alert(`${nombre}, no entendimos tu respuesta\n\Por favor indicanos con SI o NO`);
            prospecto1 = prompt(`¿Querés agregar otro servicio para tu moto?\n SI / NO`);
        }
        switch (prospecto1.toLowerCase()) {
            case "si":
                let servicioElegido1 = prompt(`¿Cuál de los servicios queres agregar?\n - Service\n - Revisión`);
                while ((servicioElegido1.toLowerCase() !== "service") && (servicioElegido1.toLowerCase() !== "revision")) {
                    alert(`${nombre}, no entendimos tu respuesta\n\Por favor indicanos con SERVICE / REVISION`);
                    servicioElegido1 = prompt(`¿Cuál de los servicios queres adquirir?\n - Service\n - Revisión`);
                }
                if (servicioElegido1.toLowerCase() == "service") {
                    alert(`${nombre}:\nvamos a hacerte unas preguntas para poder darte una mejor guía de precios`);
                    let kilometraje = parseInt(prompt("¿Cuantos Kilometros tiene tu moto?"));
                    if ((kilometraje >= 0) && (kilometraje <= 5000)) {
                        nServicio1 = "1° Service"
                        precioService1 = 8000
                        alert(`Tu moto está para hacerle el ${nServicio1} que cuenta de:\n - Cambio de Aceite\n - Cambio de filtros\n - Servicio transmision\n \n El costo es de $${precioService1}`);
                    } else if ((kilometraje > 5000) && (kilometraje <= 10000)) {
                        nServicio1 = "2° Service"
                        precioService1 = 10000
                        alert(`Tu moto está para hacerle el ${nServicio1} que cuenta de:\n - Cambio de Aceite\n - Cambio de filtros\n - Servicio transmision\n - Cambio bujias\n \n El costo es de $${precioService1}`);
                    } else {
                        nServicio1 = "Service Completo"
                        precioService1 = 15000
                        alert(`Tu moto está para hacerle un ${nServicio1} que cuenta de:\n - Cambio de Aceite\n - Cambio de filtros\n - Servicio transmision\n - Cambio bujias\n - Carburacion\n - Regulación válvulas\n \n El costo es de $${precioService1}`)
                    }
                } else if (servicioElegido1.toLowerCase() == "revision") {
                    nServicio1 = "Revisión Completa"
                    precioService1 = 5000
                    alert(`Tu moto está para hacerle la ${nServicio1} que cuenta de revisar:\n - Fluidos\n - Frenos\n - Transmisión\n - Ruedas\n - Suspensión\n \n El costo es de $${precioService1}`);
                }

                //----------------mensaje final --------------------------

                let precioFinal = precioService + precioService1
                alert(`Los servicios contratados son:\n - ${servicioElegido}\n - ${servicioElegido1}\nEl costo final es de $${precioFinal}`);
                break;
            case "no":
                alert(`El único servicio contratado es: \n - ${servicioElegido} \nEl costo final es de $${precioService}`);
                break;
        }
        break;
    //---------------------No quiere Servicios-----------------------------------------    
    case "no":
        alert(`¡${nombre}, agradecemos tu visita!\n\Dentro de nuestra página vas a encontrar más información sobre nuestros servicios\n\ \n\Si cambiaste de parecer, solo refrescá la página`);
        break;
}
}else {
    alert("Gracias Admin por terminar el programa")
}
}

programaCompleto()