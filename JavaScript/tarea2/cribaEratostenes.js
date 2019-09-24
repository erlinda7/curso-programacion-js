//var n=20;
var primo=[];



function cribaAretostenes(n){
    var rc=parseInt(Math.sqrt(n));
    for(var i=1; i<n; i++){
         primo.push(true);
    }

    for(var i=2; i<=rc; i++){
        if(primo[i]){
          for(var j=i*i; j<primo.length; j=j+i){
             primo[j]=false;    
        }
    }
}

for(var k=2; k<primo.length;k++){
    if(primo[k]){
        console.log(k);
    }
}
}

console.log(cribaAretostenes(30));