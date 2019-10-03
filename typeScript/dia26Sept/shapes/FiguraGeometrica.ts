export abstract class FiguraGeometrica{
    protected _nombre: string
    protected _posX: number;   
    protected _posY: number;  //solo dentro de sus clases hijas 
    
    public constructor(nombre:string,posx:number, posy:number){
        this._nombre=nombre;
        this._posX=posx;
        this._posY=posy;
    }

    public abstract area():number;
    public abstract perimetro():number;

    public desplazar(posXnew:number, posYnew:number):void{
        this._posX=posXnew;
        this._posY=posYnew;
    }

    public mostrarInformacion():string{
        return `Nombre: ${this._nombre}
        posicion X: ${this._posX}
        posicion Y: ${this._posY}`;
    }
}