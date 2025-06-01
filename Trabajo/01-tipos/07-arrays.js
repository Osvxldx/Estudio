// Este archivo muestra cómo crear y manipular arreglos (arrays) en JavaScript
let animales = ["Perro", "Gato", "Conejo", "Tortuga"]; // Crea un arreglo con 4 elementos
console.log(animales); // Muestra el arreglo completo en la consola
console.log(animales[0]); // Muestra el primer elemento del arreglo
animales[4] = "Elefante"; // Agrega un nuevo elemento en la posición 4
console.log(animales);  // Muestra el arreglo actualizado

animales [10] = "León"; // Agrega un elemento en la posición 10 (deja espacios vacíos)
console.log(animales[7]); // Muestra el valor en la posición 7 (undefined)

console.log(typeof animales); // Muestra el tipo de la variable animales (object)
console.log(animales.length); // Muestra la cantidad de elementos (incluyendo vacíos)

