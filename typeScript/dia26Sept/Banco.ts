/**
 * Crea una cuenta con los metodos ingreso, reintegro y transferencia
 * un constructor con parametros y getters y setters
 */

export class Banco{

    private _saldo: number;
    private _movimientos: string[];

    public constructor(saldo:number, mov:string[]){
        this._saldo=saldo;
        this._movimientos=mov;
    }

    public getSaldo(): number {
        return this._saldo;
    }
    public setSaldo(value: number) {
        this._saldo = value;
    }

    public getMovimientos(): string[] {
        return this._movimientos;
    }
    public setMovimientos(value: string[]) {
        this._movimientos = value;
    }

    public ingreso(monto:number):void{
        this._saldo+=monto;
        this._movimientos.push('Ingreso de' + monto + 'bs');
    }

    public reintegro(montoR:number){
        this._saldo+=montoR;
        this._movimientos.push(`Reintegro de ${montoR} bs`);
    }

    public transferencia(montoT:number){
        this._saldo-=montoT;
        this._movimientos.push(`transferencia de ${montoT} bs`);
    }

}


let banco:Banco=new Banco(0,[]);


banco.ingreso(300);
banco.reintegro(200);
banco.transferencia(100);
console.log(banco);