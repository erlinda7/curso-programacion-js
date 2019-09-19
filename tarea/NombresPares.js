/**
 * llenar el arreglo con 20 nombres y mostrar los elementos de las posiciones pares
 */

 var nombres=[];

 nombres.push('Ana','Juana','Gladys','Luis','Maria','Limber','Jorge','Miriam','Ariel','Giovana','Daniel','Maira','Faviola','Miguel','Raul','Samuel','Felix','Nelson','Remberto','Viviana');

 for(var i=0; i<nombres.length; i+=2){
    console.log('['+i+']  '+nombres[i] );
    
 }

