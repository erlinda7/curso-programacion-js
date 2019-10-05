export class Largometraje{

}

export class Pelicula extends Largometraje{

}

export class Documental extends Largometraje{

}



export class Cine{

    reproducir(largometraje: Largometraje):string{
        return `
        * Poner el largometraje en el proyector
        * Dar play
        * Crear un registro con el número de entradas vendidas
        * Parar la cinta cuando llega al final
        `
    }

    
}

let pelicula: Largometraje=new Pelicula();

let documental: Largometraje=new Documental();

let cine:Cine=new Cine();

console.log(cine.reproducir(pelicula));
