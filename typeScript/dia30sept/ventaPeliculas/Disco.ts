export class Disco{
    private nombre: string;
    private precio: number;
    private stock: number;

    constructor(nom:string, pre:number, s:number){
        this.nombre=nom;
        this.precio=pre;
        this.stock=s;
    }

    public getPrecio():number{
        return this.precio;
    }

    public setStock(cant:number){
        this.stock-=cant;
    }
}