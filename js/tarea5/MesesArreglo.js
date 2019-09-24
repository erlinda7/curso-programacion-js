
function mes(x){
    var meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre', 'Octubre','Noviembre','Diciembre'];
    if(x<=12 && x>=1){
        return meses[x-1];
    }else{
        return "ERROR";
    }
}

console.log(mes(7));