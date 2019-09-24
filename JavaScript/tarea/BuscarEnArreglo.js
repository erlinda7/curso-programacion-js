var nombres=[];
var nombreBuscar='Ariel';
var existe=false;

 nombres.push('Ana','Juana','Gladys','Luis','Maria','Limber','Jorge','Miriam','Ariel','Giovana','Daniel','Maira','Faviola','Miguel','Raul','Samuel','Felix','Nelson','Remberto','Viviana');

 
 for(var i=0; i<nombres.length; i++){

    if(nombres[i].localeCompare(nombreBuscar))
        existe=true;
 }
 
 if(existe)
    console.log('\nEl nombre se encuentra en la lista\n');
 else
     console.log('\nEl nombre no se encuentra en la lista\n');