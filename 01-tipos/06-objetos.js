// Este archivo muestra cómo crear y manipular objetos en JavaScript
//Personaje de TV
let nombre = "Goku"; // Variable con el nombre del personaje
let edad = 40;  // Variable con la edad del personaje
let anime = "Dragon Ball"; // Variable con el nombre del anime

let personaje = {
    nombre: "Goku", // Propiedad nombre del objeto
    edad: 40, // Propiedad edad del objeto
    anime: "Dragon Ball", // Propiedad anime del objeto
   
};
console.log(personaje); // Muestra el objeto completo en la consola
console.log(personaje.nombre); // Muestra la propiedad nombre del objeto
console.log(personaje["edad"]); // Muestra la propiedad edad usando notación de corchetes

personaje.edad = 41; // Modifica la propiedad edad del objeto

let llave ="edad"; // Variable con el nombre de la propiedad a modificar
personaje[llave] = 42; // Modifica la propiedad edad usando una variable como llave

delete personaje.anime; // Elimina la propiedad anime del objeto
console.log(personaje); // Muestra el objeto modificado en la consola
