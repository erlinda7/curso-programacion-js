var edad=5;
var esAdulto = edad >= 18
                ? 'Eres mayor de edad'
                : 'Aun eres un niño' ;
console.log(esAdulto);

/*
 expresion que devuelve valor boolean
 ? valor si es true
 : valor si es false
*/


console.log("\nProbando con if\n");

var isAdult;
if(edad>=18){
    isAdult='Eres mayor de edad';
}else{
    isAdult='Aun eres un niño';
}
console.log(isAdult);




//////////////// CORTO CIRCUITO
var a;
var b=a || 'juan';  //evalua si a es true como no asigna juan
                    //si el primer valor es verdadero se queda con eso sino evalua el segundo
console.log(b);

var c=null && '5' //se queda con el falso ..entonces se queda con el primero null
var d='hola' && 'mundo' // como el primero es verdadero se queda con el segundo