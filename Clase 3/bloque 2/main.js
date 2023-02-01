//Forma normal

// let nombre = "Luis";
// let edad = 30;
// let direccion = "Avenida";

//----como objeto

// const persona1 = {
//     nombre: "Luis",
//     edad: 30,
//     direccion: "Avenida"
// };
//------formas de llamar propiedades del objeto

// console.log (persona1.nombre);
// console.log (persona1.edad);
// console.log (persona1.direccion);

// console.log (persona1["nombre"])
// console.log (persona1["edad"])
// console.log (persona1["direccion"])

//------------------------------------
// ---------- funciones constructoras----

// function PersonaCrear (nombrePersona, edadPersona , direccionPersona){
//     this.nombre = nombrePersona;
//     this.edad = edadPersona;
//     this.direccion = direccionPersona;
// };

// const persona1 = new PersonaCrear ("Luis", 30, "Avenida");
// const persona2 = new PersonaCrear ("Mariana", 45, "calle 2");
// const persona3 = new PersonaCrear ("Pepito", 15, "Calle 45");

// console.log (persona1)
// console.log (persona2.edad)
// console.log(persona3.nombre,persona3.edad)

//-----------------------------------------------------------------------

//----maquina para crear productos como ejemplo:------------

// function Producto(nombre, imagen, precio){
//     this.nombre = nombre;
//     this.imagen = imagen;
//     this.precio = precio;
// }
// const producto1 = new Producto("monitor", "http.xxxxxx", "$1500")
// console.log (producto1)

//--------------------------------------------------------------------

//--------crear con funcion constructora y declaracion con objeto (se usa cuando son muchas propiedades de objeto)

// function Producto(info){
//     this.nombre = info.nombre;
//     this.imagen = info.imagen;
//     this.precio = info.precio;
// }
// const producto1 = new Producto ( 
//     {
//         nombre: "monitor",
//         imagen: "http.xxxxxx",
//         precio: "$15000",
//     }
// );

// console.log(producto1) 

//---------------------------------------------------------------------

//- Metodo clasico de JS--------------------------------------------

// function Persona (nombre, edad, direccion){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//     this.hablar = function() {console.log("Hola soy",this.nombre);}
// }

// const persona1 = new Persona ("Jose", 45, "Avenida");

// for(const clave in persona1) {
//     // console.log(persona1[propiedad]);
//     console.log("clave", clave);
//     console.log("valor",persona1[clave]);
// }

//-------------------------------------------------------------------
// Metodo con clases-----------

class Persona{
    constructor (nombre, edad, direccion){
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }

    hablar() {
        console.log ("Hola soy", this.nombre)
    }
}

const persona1 = new Persona("Andres", 45, "Avenida")
console.log(persona1)
persona1.hablar()


//------------------------------------------------------------------