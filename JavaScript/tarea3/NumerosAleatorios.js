/**
 * RETO:
 * LLenar un arreglo con 20 numeros aleatorios
 * usando el ciclo while y la libreria Math(Math.random)
 */

 function numerosaleatorios(){
    var numeros=[];
     var cont=0;
     while(cont<20){
         numeros[cont]=parseInt(Math.random()*100);
         cont++;
     }
     console.log(numeros);
 }

numerosaleatorios();