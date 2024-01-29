//Ways to define arrays
//With Values
var marks1 = Array(10, 55, 98, 45, 75, 100);
console.log(marks1);
//With Size of array
var marks1 = Array(6);
console.log(marks1);
//With Values- most common
let marks = [10, 55, 98, 45, 75, 100];
console.log(marks);
console.log("Get value by index of array with marks(2) is " + marks[2]); //98
marks[4] = 77;
console.log("Get value with reassigned marks(4) " + marks); //[10,55,98,45,77,100]
console.log("Get value with reassigned marks(4) with join method" + marks.join('_')); //[10,55,98,45,77,100]

console.log("Length of array is " + marks.length); // 6
marks.push(66); //this appends and return length
console.log("Append item at the end of array with PUSH,new array is " + marks);//[10,55,98,45,77,100,66],no comma required
console.log("New Length of array is " + marks.length); //7
marks.pop();
console.log("Remove last element of array with POP " + marks); //[10,55,98,45,77,100]
console.log("New Length of array is " + marks.length); //6
marks.unshift(88)
console.log("Append First new element to array with UNSHIFT " + marks); //[88,10,55,98,45,77,100]
console.log("New Length of array is " + marks.length); //7
console.log(marks.indexOf(98)); //3
console.log("Check if any value is present in array or not with INCLUDES: " + marks.includes(77));//true
console.log("Divide array into subarray with SLICE: " + marks.slice(1, 5))  // starting is inclusive and end is exclusive , 10,55,98,45
console.log("*********************************");
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
}
console.log("Sum of all values in array is " + sum);
