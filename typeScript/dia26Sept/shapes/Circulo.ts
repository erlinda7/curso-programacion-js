import { FiguraGeometrica } from "./FiguraGeometrica";

export class Circulo extends FiguraGeometrica{
    private _radio: number;

    constructor(px:number, py:number, r:number){
        super(px,py);
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
let circulo:Circulo=new Circulo(50,50,10);

console.log(`Circulo: 
posicion en x: ${circulo.getPosX()}
posicion en y: ${circulo.getPosY()}
radio:        ${circulo.getRadio()}
area:          ${circulo.area()}
perimetro:     ${circulo.perimetro()}` 
            );