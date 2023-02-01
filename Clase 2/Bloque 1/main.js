/*
Estructura condicional IF

if(condicion){
    codigo a ejecutar en caso de que la condicion sea verdadera
}
*/
//--------------------------------------------------------------

// if(true){
//     console.log("entramos");
// }

//----------------------------------------------------------------

/* para ver el valor de False o True de un elemento uso----> !!elemento
*/

//-----------------------------------------------------------
/*
=  --> asigna un valor a una variable o constante.
==  --> compara valor solo
===  --> compara valor y tipo de dato
*/

//------------------------------------------------------------

// let numero = 10;

// if(numero===5){
//     console.log("el numero es el 5");
// }

//-------------------------------------------------------------

/*
Estructura If else

if(condicion){
    codifgo a ejecutar cuando la condicion es verdadera
}else{
    codigo a ejecutar cuando la condicion es falsa
}

*/

//-------------------------------------------------------

// let color= "azul"

// if(color==="rojo"){
//     console.log("El color es Rojo");
// }else{
//     console.log("el color no es rojo");
// }

//------------------------------------------------------

/*estructura if else if (mas compleja)

if(condicion1){
    codigo a ejecutar cuando la condicion1 es verdadera
}else if (condicion2){
    codigo a ejecutar cuando la condicion2 es verdadera
}else if (condicion3){
    codigo a ejecutar cuando la condicion3 es verdadera
}else{
    codigo a ejecutar cuando ninguna de las anteriores condiciones es verdadera
}

*/
//------------------------------------------------------------


// let edad = prompt(parseInt =("Ingrese su edad"))

// if(edad<=0){
//     alert("Ingrese una edad correcta");
// }else if (edad<18){
//     alert("Todavia no sos adulto responsable");
// }else if (edad<25){
//     alert("Sos adulto pero claramente no sos responsable");
// }else if (edad<40){
//     alert("Sos adulto y la estas pasando mal con la ansiedad");
// }else {
//     alert("Solo te queda sentarte a esperar morir");
// }

//--------------------------------------------------------------

// let piso = prompt(parseInt = ("En que piso vivis?"))

// if (piso != isNaN) {
//     if (piso <= 0) {
//         alert("No tenes mucha vista pero disfrutas no tener nadie debajo");
//     } else if (piso < 3) {
//         alert("Tenes gente debajo pero aun no ves por arriba del resto");
//     } else if (piso < 10) {
//         alert("Ya estas cerca de los pajaros");
//     } else {
//         alert("Guarda con los aviones");
//     }
// } else {
//     alert("Por favor indicame con numeros enteros")
// }

//-------------------------------------------------------------------

// let piso = parseInt(prompt("En que piso vivis?"))

// if (!isNaN(piso) && piso != "") {
//     if (piso <= 0) {
//         alert("No tenes mucha vista pero disfrutas no tener nadie debajo");
//     } else if (piso < 3) {
//         alert("Tenes gente debajo pero aun no ves por arriba del resto");
//     } else if (piso < 10) {
//         alert("Ya estas cerca de los pajaros");
//     } else {
//         alert("Guarda con los aviones");
//     }
// }else {
//     alert("Por favor colocalo en numeros enteros");
// }   

//-----------------------------------------------------------------------------------------

// let pregunta1 = prompt("Tenes animales?");

// if (pregunta1.toLowerCase() == "si") {
//     alert("Bien, sos una persona confiable");
//     puntaje1 = 100;
//     let pregunta2 = parseInt(prompt("Cuantos tenes?"))
//     if (pregunta2 < 2) {
//         alert("estas dentro del promedio general");
//         puntaje2 = 50;
//     } else if (pregunta2 < 5) {
//         alert("Vivis en el quilombo pero feliz");
//         puntaje2 = 100;
//     } else {
//         alert("Tu casa es un caos");
//         puntaje2 = 500;
//     }


// } else {
//     alert("No me generas confianza");
//     puntaje1 = 0;
//     alert("No mereces vivir");
// }

// alert("Tu puntaje como persona es de "+ (puntaje1+puntaje2));

//----------------------------------------------------------------------------------------