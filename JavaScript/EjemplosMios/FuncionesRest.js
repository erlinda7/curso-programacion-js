//permite mandar cualquier cantidad de parametros
//devuelve 
const sumarTodos=(...numeros) =>{
    console.log('\narreglo ');
    console.log(numeros); //guarda en un arreglo
    var resultado=0;
    for(var i=0; i<numeros.length;i++){
        resultado+=numeros[i];
    }
    return resultado;
}

console.log( 'suma total: '+sumarTodos(1,2,3,4,5,6,7,8,9,0)); 

