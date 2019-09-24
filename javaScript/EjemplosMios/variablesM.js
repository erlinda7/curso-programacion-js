let edad=24;
var nombre=`Hola tengo ${edad}`; //``bagtics
console.log(nombre);

// cuando una variable existe pero no tiene asignado un valor es undefined 
//caundo la variable no existe  es null

console.log(typeof edad); //devuelve el tipo de dato de la variable 

console.log(typeof 5.78); 

console.log(typeof Symbol()); 

console.log(typeof undefined);

console.log(typeof null); 

console.log(typeof {}); //objeto 

console.log(typeof []); 

console.log(typeof function(){}); 


/*
primitivos
    null
    undefined
    number
    string
    boolean
    symbol

object

*/

//type coertion
//concatenacion
console.log('5' + 10); //+ concatenacion
console.log('5' * 10); //convierte a entero
console.log('5' * " soy cinco"); //no puede realizar

console.log(true + 'hola'); 

console.log(true + 1); //lo suma
