var numeros1=[2,45,6,2,7,8,98];

//recorrer con for of
//crear una variable elemento
//of donde vas recorrer
for( var elemento of numeros1 ){
    console.log(elemento);
}





///.forEach(callback)   elemento y indice
console.log('forEach');
numeros1.forEach((el,i) => {
    console.log(i +'   ' +el)
  //  console.log(i)
});

//.some(callback)      si tienes algun o al menos un elemento    devuelve boolean
/// .every(callback)      pide que todos cumplan con la condicion


var resp= numeros1.some(el =>  el===8);
console.log(resp);


// crean automaticamente un array nuevo ..no es necesario crear un array vacio
// .map(callback)      transforma un array
// .filter(callback)    filtra segun una condicion
// .reduce(callback)    reduce los elementos a un solo valor

console.log(numeros1.map(el => el*el));

console.log(numeros1.filter(el => el>5))

console.log(numeros1.reduce((a,b) => (a+b)))