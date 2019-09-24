/**
 * // TAREA: HACER UNA CLASE QUE SE LLAME "Auto" 
 * el cual reciba como parametros (ruedas, color, puertas, marca, modelo)
 */

 export class Auto{
     ruedas:number;
     color:string;
     puertas:number;
     marca:string;
     modelo:string;

     constructor(ruedas:number,color:string,puertas:number,marca:string,modelo:string){
         this.ruedas=ruedas;
         this.color=color;
         this.puertas=puertas;
         this.marca=marca;
         this.modelo=modelo;
     }

     mostrarDetalles(){
         return `
        Ruedas:   ${this.ruedas}
        Color:    ${this.color}
        Puertas:  ${this.puertas}
        Marca:    ${this.marca}
        Modelo:   ${this.modelo}` ;
     }
 }


let auto: Auto = new Auto(4,'Blanco',5, 'Ferrari','F12berlinetta');
console.log(auto.mostrarDetalles());