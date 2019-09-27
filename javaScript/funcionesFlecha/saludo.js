
let nom='erlinda'
 function saludar1(nombre) {
    return `Hola ${nombre}`;
}


console.log(`funcion normal:  ${saludar1(nom)}`);


//  nom_funcion  valor que recibe    cuerpo de la funcion
let saludar2   =  nombre        =>    `Hola  ${nom}`;

console.log(`funcion flecha:  ${saludar2('Erlinda')}`);

