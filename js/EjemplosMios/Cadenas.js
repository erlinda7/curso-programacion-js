var nombre='Erlinda    ';

console.log(nombre.length);

console.log(nombre.trim());
console.log(nombre.toUpperCase());


var frase='Hola mundo caotico';
//console.log(frase.indexOf('a',3); // 3 desde la posicion 3 empieza a buscar  
console.log('posicion  '+frase.indexOf('a',frase.indexOf('a')+1)); //despues de que encuentre el primer m

//lastIndexOf('o')  empieza a buscar desde el ultimo

/*

.includes('blog')  devuelve true o false
.startsWith(' ')   si empieza
.endsWith(' ')    si finaliza
*/

//empieza a contar desde atras 5 posiciones, y luego desde el final hacia atras desde el final 2 
//y lo queda muestra ----mun 
console.log('Hola mundo'.slice(-5,-2));

//.slice(0,-1)
