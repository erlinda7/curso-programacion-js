export class Cliente{
    private _codigo: number;
    private _nombre: string;


    constructor(cod:number, nom:string){
        this.codigo=cod;
        this.nombre=nom;
    }
    public get codigo(): number {
        return this._codigo;
    }
    public set codigo(cod: number) {
        this._codigo = cod;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(nom: string) {
        this._nombre = nom;
    }

}