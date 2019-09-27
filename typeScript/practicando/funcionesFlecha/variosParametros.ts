

let variosParametros=(x:string, esContinente:boolean)=>{
    if(esContinente){
        return 'si';
    }
    return x.toUpperCase();
}

console.log(`${variosParametros('Africa',true)}`);