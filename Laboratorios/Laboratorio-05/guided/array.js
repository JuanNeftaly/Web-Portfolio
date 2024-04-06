// Ejercicio propuesto de Array
let arr = [1, 2, 3];

// Push, mete algo al array
arr.push(4);
console.log("Push: ", arr);

// Pop, borra el ultimo del array
let removedElement = arr.pop();
console.log("Pop: ", arr);

// Unshift, añade elementos al inicio y devuelve la longitud del array
let arr1 = [2, 3, 4];
arr1.unshift(1);
console.log("Unshift: ", arr1);

// Shift, elimina el primer elemento del array y lo devuelve
let removedElement1 = arr.shift();
console.log("Shit: ", removedElement1);

// Concat, combina dos o mas arrays y los une en uno solo 
let arr2 = [1, 2];
let arr3 = [3, 4];
let newArr = arr2.concat(arr3);
console.log("Concat: ", newArr);

// Splice, cambia el contenido del array eliminando, reemplazando o añadiendo elementos.
arr.splice(2, 2, 'a', 'b');
console.log("Splice: ", arr);

// Join, une todos los elementos del array en una cadena de texto.
let array = ['Hola', 'Mundo'];
let joinedString = array.join(', ');
console.log("Join: ", array);

// Reverse, da vuelta a los elementos de array
arr.reverse();
console.log("Reverse: ", arr);

// isArray, comprueba si el valor dado es un array
let isArr = Array.isArray(arr);
console.log("isArray: ", isArr);

// toString, representa en texto el array
let arrString = arr.toString();
console.log("toString: ", arrString);