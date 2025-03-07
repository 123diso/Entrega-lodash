import _ from 'lodash';

/*1. 
const numeros = [1, 2, 3, 4, 5];
console.log(_.reverse([...numeros]));
*/


/*2. 
const valores = [0, "Hola", false, 42, "", null, "Mundo", undefined, NaN, true];
console.log(_.compact(valores));
*/

/*3. 
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
console.log(_.union(array1, array2));
*/

/*4. 
const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];
console.log(_.countBy(palabras));
*/

/*5. 
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
console.log(_.difference(arr1, arr2));
*/

/*6. 
const personas = [
{ nombre: "Ana", edad: 25 },
{ nombre: "Luis", edad: 22 },
{ nombre: "Juan", edad: 30 }
];
console.log(_.sortBy(personas, 'edad'));
*/

/* 7. 
const numerosRepetidos = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
console.log(_.uniq(numerosRepetidos));
*/

/*8. 
const n = 3;
const elementos = ["a", "b", "c", "d", "e", "f", "g", "h"];
console.log(_.chunk(elementos, n));
*/

/*9. 
const persona = { nombre: "Carlos", apellido: "Pérez", edad: 28 };
console.log(_.mapKeys(persona, (value, key) => key.toUpperCase()));
*/

/*10. 
const anidado = [1, [2, [3, [4, 5]]], 6];
console.log(_.flattenDeep(anidado));
*/

/* 11. 
const lista1 = [1, 2, 3, 4, 5];
const lista2 = [3, 4, 5, 6, 7];
const lista3 = [5, 6, 7, 8, 9];
console.log(_.intersection(lista1, lista2, lista3));
*/

/* 12. 
const clave = "curso";
const estudiantes = [
{ nombre: "Mario", curso: "Matemáticas" },
{ nombre: "Lucía", curso: "Historia" },
{ nombre: "Juan", curso: "Matemáticas" },
{ nombre: "Elena", curso: "Historia" }
];
console.log(_.groupBy(estudiantes, clave));
*/