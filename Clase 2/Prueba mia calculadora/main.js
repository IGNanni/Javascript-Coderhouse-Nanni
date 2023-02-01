let numero1 = parseInt(prompt("Elige un número entero inicial"));

let operacion = prompt("Elige una operación, puedes elegir entre restar,sumar,dividir,multiplicar");
while (operacion.toLowerCase() != "restar" && operacion.toLowerCase() != "sumar" && operacion.toLowerCase() != "dividir" && operacion.toLowerCase() != "multiplicar") {
    alert(`${operacion} no es una operacion valida`);
    operacion = prompt("Elige una operación, puedes elegir entre restar,sumar,dividir,multiplicar");
}

switch (operacion.toLowerCase()) {
    case "restar":
        operacion = "-"
        break;
    case "sumar":
        operacion = "+"
        break;
    case "dividir":
        operacion = "/"
        break;
    case "multiplicar":
        operacion = "*"
        break;    
}

let numero2 = parseInt(prompt(`Elige el numero que va a ${operacion} a ${numero1}`));


alert(`La operación que elegiste es ${numero1} ${operacion} ${numero2}`);

if (operacion == "-") {
    resultado = numero1 - numero2 ;
} else if (operacion == "+") {
    resultado = numero1 + numero2;
} else if (operacion == "*") {
    resultado = numero1 * numero2;
} else if (operacion == "/") {
    resultado = numero1 / numero2;
}else {
    alert("algo no funcionó")
}

alert(`Tu resultado es ${resultado}`)