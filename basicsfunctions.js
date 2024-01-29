//Old Way 
function sum(a, b) {
    return a + b;
}
console.log(sum(9, 5));
//Ananymous function: no name, more like function expression 
//1
let sum1 = function (a, b) {
    return a + b;
}
console.log(sum1(9, 5));
//2
let sum2 = (a, b) => a + b;
console.log(sum1(5, 15));

// Use var for variables with function-level scope (avoid if possible).
// Use let for variables with block-level scope that may be reassigned.
// Use const for variables with block-level scope that should not be reassigned.
// var v = 76;
// let l = 88;
// const c = 90;


if (true) {
    var v = 76;
    let l = 88;
    const c = 90;
}
console.log(v); //v is  76   
console.log(l); //l is not defined   
console.log(c);//c is not defined   
function varScope() {
    var v = 76;
    let l = 88;
    const c = 90;
}
console.log(v); //v is not defined   
console.log(l); //l is not defined   
console.log(c);//c is not defined   

