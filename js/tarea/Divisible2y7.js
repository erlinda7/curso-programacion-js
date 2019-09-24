var numero=21;


if(numero%2===0){
    if(numero%7===0){
        console.log("El numero es divisible entre 2 y 7");
    }else{
        console.log("El numero es divisible entre 2 pero no entre 7");
    }

}else{
    console.log("No es divisible entre 2");
}


////////////////////
console.log("\nVersion 2 \n")
if(numero%2===0 && numero%7===0){
    console.log("Es divisible entre 2 y 7");
}else{
    console.log("No es divisible ni entre 2 ni 7");
}

