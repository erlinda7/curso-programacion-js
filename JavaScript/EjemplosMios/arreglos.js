/**
 * Para añadir y quitar al final del arreglo
 *          .push(Valor)  
 *          .pop()
 * 
 *  Para añadir y quitar al principio del arreglo
 *          .unshift(valor)   //añade
 *          .shift()            //quita
 */

 var arreglo=[1,3,5,6,23];

 //slice para insertar en una posicion
arreglo.splice(2,0,"hola") //para insertar en la posicion 2 y 0 para no eliminar ningun elemento

console.log(arreglo);

arreglo.splice(3,1); //elimina en la posicion 3 un 1 elemento
console.log(arreglo);

//slice estrae sin modificar el arreglo sino crea otro
console.log(arreglo.slice(2,4)); //4 es excluyente


