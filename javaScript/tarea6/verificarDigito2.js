
/*
desarrolle dos  funciones, ambas reciben como parametro un numero entero n
la primera debe retornar true si el entero inicia con 9
la segunda retorna true si el numero termina con 9
*/

function empiezaNueve(numero){

    var num=numero.split('');   
    if(num[0]==9){
        return true;
    }else{
        return false;
    }
}

function terminaNueve(numero){
    var num=numero.split('');   
    if(num.length-1==9){
        return true;
    }else{
        return false;
    }
}

console.log('termina en 9: ' +terminaNueve('4569'));
console.log('empieza en 9: '+ empiezaNueve('96543'));
//empiezaNueve('96783')