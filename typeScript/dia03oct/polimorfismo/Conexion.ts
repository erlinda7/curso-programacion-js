export interface Conexion{
    conectar():string;
}


export class ConexionWifi implements Conexion{

    public conectar():string{
        return `
        * Conexion via wifi
        * Obtener contraseña 
        * Conectado`;
    }
}

export class ConexionBluetooth implements Conexion{
    
    public conectar():string{
        return `
        * Conexion via bluetooth
        * Emparejar con PIN
        * Conectado`;
    }
}


export class Sistema{

    mostrarConexion(conexion:Conexion):string{
       return conexion.conectar();
    }

}



let conexionWifi:Conexion=new ConexionWifi();
let conexionBluetooth:Conexion=new ConexionBluetooth();


let sistema:Sistema=new Sistema();

console.log(sistema.mostrarConexion(conexionBluetooth));

/////////////////////////////////


