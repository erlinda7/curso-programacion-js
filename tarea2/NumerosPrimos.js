/**
 * determinar la cantidad y mostrar los numeros primos entre 3 y 100
 */
var cant=0;
for(var i=3; i<=100; i++ ){
    var cont=0;
    for(var j=1; j<=i; j++){
        if(i%j==0){
            cont++;
        }
    }
    if(cont==2){
        console.log(i);
        cant++;
    }
}


console.log("cantidad de primos: "+cant);