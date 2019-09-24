class Animal{
   name:string;
   color:string;
    constructor(name, color){
        //console.log(name,color);
        this.name=name;
        this.color=color;
    }
    
    mostrarColor(){
        console.log(this.color);
    }

    caminar(){
        console.log('Esta caminando');
    }
}

let perro: Animal= new Animal('firulas','negro');

perro.mostrarColor();
perro.caminar();
console.log(perro.name + ' ' + perro.color);

