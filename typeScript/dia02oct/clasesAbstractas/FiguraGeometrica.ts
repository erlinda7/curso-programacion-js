export abstract class FiguraGeometrica{
        /*
        private _ancho:number;
        private _alto:number;
        constructor(_ancho:number, _alto:number){
            this._ancho=_ancho;
            this._alto=_alto;
        }
        */


    //otra forma de implemtar constructor
    constructor(private _ancho: number, private _alto: number){}

    public get ancho(): number {
        return this._ancho;
    }
    public set ancho(ancho: number) {
        this._ancho = ancho;
    }
    public get alto(): number {
        return this._alto;
    }
    public set alto(alto: number) {
        this._alto = alto;
    }

    abstract getArea():number;
    abstract getVolumen():number;
}

export class Rectangulo extends FiguraGeometrica{
    constructor( ancho:number, alto:number, private _profundidad:number){
        super(ancho,alto);
    }

    get profundidad(){
        return this._profundidad;
    }

    set profundidad(profundidad){
        this._profundidad=profundidad;
    }

    getArea():number{
        let area=this.ancho*this.alto;
        return area;
    }
    getVolumen():number{
        let volumen=this.ancho* this.alto*this.profundidad;
        return volumen;
    }
}


export class Triangulo extends FiguraGeometrica{
    constructor(base:number, alto:number, private _altura:number){
        super(base,alto);
    }

    get altura():number{
        return this._altura;
    }

    set altura(altura){
        this._altura=altura;
    }

    getArea():number{
        let area = (this.ancho*this.alto)/2;
        return area;
    }

    getVolumen():number{
        let volumen =this.getArea()*this.altura;
        return volumen;
    }
}

let triangulo1:Triangulo=new Triangulo(10,20,30);
console.log('area del triangulo: '+triangulo1.getArea());
console.log('volumen del triangulo: '+triangulo1.getVolumen());

let rectagulo1:Rectangulo=new Rectangulo(30,40,10);
console.log('area del rectagulo: '+rectagulo1.getArea());
console.log('volumen de rectagulo: '+rectagulo1.getVolumen());


