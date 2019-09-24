console.log("\ncontinue\n");

for(var i=0; i<=30; i++){
    if(i%7!==0){
        continue
    }
    console.log("Multiplos de 7: "+i);
}

console.log("\nbreak\n");
var n=0;
for(var j=0; j<=100; j++){

    if(j%7===0){
        console.log("multiplo: "+j);
        n++;
    }

    if(n>=5){
        break;
    }

}
