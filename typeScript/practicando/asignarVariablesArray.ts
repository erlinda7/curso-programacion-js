let input:[number,number]=[1,2];
let [first, second]=input;
console.log('first ', first);
console.log('second ', second);


let first1=input[0];
let second1=input[1];
console.log('first1 ', first);
console.log('second ', second);


function arreglos([first,second]:[number,number]){
    console.log(first);
    console.log(second);

}

arreglos(input);


//////////////// syntax ...
let [primero, ...rest]=[11,22,33,44];
console.log('primero', primero);
console.log('rest',rest);


let [primer]=[7,8,9,0];
console.log('first',primer);



