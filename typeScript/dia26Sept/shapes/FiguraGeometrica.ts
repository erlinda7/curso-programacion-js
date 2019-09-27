export abstract class FiguraGeometrica{
    private _posX: number;   
    private _posY: number;
    
    public constructor(posx:number, posy:number){
        this._posX=posx;
        this._posY=posy;
    }

    public getPosX(): number {
        return this._posX;
    }
    public setPosX(value: number) {
        this._posX = value;
    }
    public getPosY(): number {
        return this._posY;
    }
    public setPosY(value: number) {
        this._posY = value;
    }

    public abstract area():number;
    public abstract perimetro():number;

    public desplazar(posXnew:number, posYnew:number):void{
        this._posX=posXnew;
        this._posY=posYnew;
    }
}