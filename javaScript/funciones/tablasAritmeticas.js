//multiplicacion
function mostrarTablaMultiplicar(numero){

    for(var i=0; i<10; i++){
        console.log(i + ' * '+ numero+ ' = ' + i*numero);
    }
}


//suma
function mostrarTablaSumar(numero){
    for(var i=0; i<10; i++){
        console.log(i + ' + '+ numero + ' = ' + (i+numero));
    }
}


//Resta
function mostrarTablaRestar(numero){
    cont=0;
    minuendo=numero;
    while(cont<10){
        restar(numero,minuendo);
        minuendo++;
        cont++;
    }
}

function restar(numero,num){
    console.log(num+ ' - '+ numero+ '='+ (num-numero));
}



//Division
function mostrarTablaDividir(numero){
    cont=0;
    dividendo=0;
    while(cont<10){
        dividir(dividendo, numero);
        dividendo=dividendo+numero;
        cont++;
    }
}

function dividir(dividendo,numero){
    console.log(dividendo+ ' ÷ '+ numero+ '='+ (dividendo/numero));
}



module.exports ={
    mostrarTablaMultiplicar: mostrarTablaMultiplicar,
    mostrarTablaDividir: mostrarTablaDividir,
    mostrarTablaRestar: mostrarTablaRestar,
    mostrarTablaSumar: mostrarTablaSumar
}