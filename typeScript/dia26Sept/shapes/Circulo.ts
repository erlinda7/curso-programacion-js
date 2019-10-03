import { FiguraGeometrica } from "./FiguraGeometrica";

export class Circulo extends FiguraGeometrica{
    private _radio: number;

    constructor(nom:string,px:number, py:number, r:number){
        super(nom,px,py);
        this._radio=r;
    }

    getRadio(): number {
        return this._radio;
    }
    setRadio(value: number) {
        this._radio = value;
    }

    public area():number{
        let area=Math.round(Math.PI*(Math.pow(this._radio,2)));
        return area;
    }
    
    public perimetro():number{
        return 0;
    }
}