
function ordenar(list){
    var aux=0;
    for(i=0; i<list.length;i++){
        for(j=i+1; j<list.length;j++){
            if(list[i]>list[j]){
            aux=list[j];
            list[j]=list[i];
            list[i]=aux;
            }
        }
    }
}

var numeros=[2,5,1,56,23,21,45];
console.log('sin ordenar    '  +numeros);
ordenar(numeros);
console.log('ordenado       '  +numeros);