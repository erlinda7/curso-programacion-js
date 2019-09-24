var arreglo='hola mama'.split('');
console.log(arreglo.reverse());

console.log(arreglo.reverse().join(''));

//reverse invierte
//join une  o separa
//split separa


///ordenar solo cadenas
var arreglo2=['z','e','t','a'];

console.log(arreglo2.sort()); //ascendente
console.log(arreglo2.sort().reverse());  //descendente


//ordenar numeros

var numeros=[1,4,22,3,2,4,24,98,3];

console.log(numeros.sort((a,b)=>a-b))

//join tambien separa con espacios ó , ó . ó como quieras

console.log(numeros.join(' '));


//concat  une dos arrays no modifica el array crea un nuevo array

var arreglo2=[300,534,123,345];
console.log(arreglo.concat(arreglo2));

console.log(arreglo.concat('aaa','fff'));


///otros metodos
//      .indexof(12)  devuelve la posicion
//      .find(callback)  le pasamos una funcion flecha para 
//      que devuelva el elemento que cumpla con la condicion



//eliminar elementos duplicados
var numeros3=[1,4,22,3,22,4,24,98,3];

console.log(new Set(numeros3) );  //problema convierte en objeto

//      ...       spret operator

console.log([...new Set(numeros3) ]);  //un arreglo es ahora



//funcion para eliminar duplicados
const eliminarDuplicados=arr =>[...new Set(arr)];

console.log(eliminarDuplicados(['a','b','a']));  //le pasamos un array

//spread operator en arrays ... expande 

var numeros4=[10,20,30,1];

console.log(Math.min(...numeros4));







