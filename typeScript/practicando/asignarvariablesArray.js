var input = [1, 2];
var first = input[0], second = input[1];
console.log('first ', first);
console.log('second ', second);
var first1 = input[0];
var second1 = input[1];
console.log('first1 ', first);
console.log('second ', second);
function arreglos(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
arreglos(input);
//////////////// syntax ...
var _a = [11, 22, 33, 44], primero = _a[0], rest = _a.slice(1);
console.log('primero', primero);
console.log('rest', rest);
var primer = [7, 8, 9, 0][0];
console.log('first', primer);
