let anyValue:any ='Welcome to TS';
let anyValueLent :number=(<string>anyValue).length;


let anyvalue2:any='Welcome to TS';
let anyValueLent2= (anyValue as string).length;

console.log(anyValueLent);
console.log(anyValueLent2);