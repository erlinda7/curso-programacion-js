/**
 * determinar la cantidad y mostrar los numeros primos entre 1 y 100
 */
var cant=0;
for(var i=3; i<=100; i++ ){

    if(esprimo(i)){
        console.log(i);
        cant++;
    }
}
function esprimo(numero){
    var cont=0;
    var primo=false;
    for(var j=1; j<=numero; j++){
        if(numero%j==0){
            cont++;
        }
    }
    if(cont==2){
        primo=true;
    }
    return primo;
}
console.log("cantidad de primos: "+cant);