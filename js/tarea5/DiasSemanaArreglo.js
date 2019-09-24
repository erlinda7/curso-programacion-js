

function dia(x){
    var dias=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
    if(x<=7 && x>=1){
        return dias[x-1];
    }else{
        return "ERROR";
    }
}

console.log(dia(7));