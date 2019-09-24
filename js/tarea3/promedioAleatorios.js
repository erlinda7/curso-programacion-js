/**
 * RETO:
 * LLenar un arreglo con 20 numeros aleatorios
 * usando el ciclo while y la libreria Math(Math.random)
 * y calcular el promedio de los numeros.
 */

function promedioaleatorios(){
    var numeros=[];
     var cont=0;
     var suma=0;
     while(cont<20){
         numeros[cont]=parseInt(Math.random()*100);
         suma=suma+numeros[cont];
         cont++;
     }
     var prom=suma/numeros.length;

     console.log(numeros);
     console.log('Promedio:  '+ prom);
 }

promedioaleatorios();