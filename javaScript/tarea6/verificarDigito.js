/*
desarrolle dos  funciones, ambas reciben como parametro un numero entero n
la primera debe retornar true si el entero inicia con 9
la segunda retorna true si el numero termina con 9
*/

function empiezaNueve(numero){
    while(numero>0){
        var mod=numero%10;
        numero=parseInt(numero/10);
    }
    return(mod==9);
}

function terminaNueve(numero){
    var mod=numero%10;
    return (mod==9);
}

console.log('termina en 9: ' +terminaNueve(4569));
console.log('empieza en 9: '+ empiezaNueve(96543));
