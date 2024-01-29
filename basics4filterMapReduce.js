//Reduce() : sum of array values
console.log("*********************************");
console.log("Reduce function starts here..")
let marksheet = [1, 2, 3, 4, 5, 6]; //total = 21
let total = marksheet.reduce(callback, 0);
function callback(accumulator, arrayElement) {
    accumulator = accumulator + arrayElement;
    return accumulator;
}
console.log("Sum of array is " + total);
let total1 = marksheet.reduce((accumulator, mark) => accumulator + mark);
console.log("Sum of array is " + total1);

console.log("*********************************");
let numberArray = [10, 12, 13, 14, 15, 16]; //[10,12,14,16]
let newArray = [];
for (let index = 0; index < numberArray.length; index++) {
    if (numberArray[index] % 2 == 0) {
        newArray.push(numberArray[index]);
    }
}
console.log("even numbers array is " + newArray);
//Filter() : print even number 
let filteredEvenArray = numberArray.filter(value => value % 2 == 0)
console.log("even numbers are " + filteredEvenArray.join(" "));
console.log(filteredEvenArray);
console.log("KEYNOTE: if you want to accumulate values like sum,multiply the use REDUCE()")
console.log("KEYNOTE: if you want to filter values like even number or any special condition the use FILTER()")

console.log("*********************************");
//map()
// After printing even number multiple each with 3
let mappedArray = filteredEvenArray.map(value => value * 3);
console.log("Multiply even numbers with 3: " + mappedArray);
// After printing even number multiple each with 3 and them sum them 
let sumNewArray = mappedArray.reduce((accumulator, value) => accumulator + value, 0); //156
console.log("Step by step answer is "+sumNewArray);

//Oneliner
let chainedArray = numberArray.filter(value => value % 2 == 0).map(value => value * 3).reduce((acc, value) => acc + value, 0);
console.log("Chained answer is "+chainedArray);





