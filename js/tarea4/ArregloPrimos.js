
function primoArreglo(arreglo){
    var cant=0;
    for(var j=0; j<arreglo.length;j++){
         cant=contDivisores(arreglo[j]);
        if(cant==2){
            console.log(arreglo[j]);
        }
    }
}

function contDivisores(numero){
    var cont=0;
    for(var i=1; i<=numero;i++){
        if(numero%i==0){
            cont++;
        }
    }
    return cont;
}

var array=[3,56,7,23,12,45,13,9];
console.log(array);
primoArreglo(array);