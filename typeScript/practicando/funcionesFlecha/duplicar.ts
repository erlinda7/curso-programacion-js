function duplica(x:number):number{
    return x*2;
}

let duplicar=(x:number)=>x*2;

console.log(`funcion normal:  ${duplica(4)}`);
console.log(`funcion flecha ${duplicar(6)}`);