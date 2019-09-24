var list=[];
list.push('Ana', 'Jorge','Luis','Juan','Saul','Rosa','Danna');
function buscar(nombre, lista){

    var encontrado=false;
    var i=0;
    while(i<lista.length && !encontrado){
        if(lista[i]=='Luis'){
            encontrado=true;

        }
        i++;
    }
    if(encontrado){
        console.log('El nombre se encuentra en la lista  ' + lista[i-1]);
    }else{
        console.log('El nombre no se encuentra en la lista')
    }
}

buscar('Luis',list);