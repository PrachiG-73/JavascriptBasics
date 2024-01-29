//1. //const strings = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
//get strings with a in it ,then get there size and add all of them

/*const strings = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
//filter strings with 'a'
let fruits = strings.filter(fruit=>fruit.includes('a'));
console.log(fruits);
//add there sizes
let sum = fruits.map(fruit =>fruit.length).reduce((acc,val)=>acc+val,0);
console.log(sum);*/


//2.//String names = "sURESH rAMESH dINESH";
//make caps to small and vice versa
// let names = "sURESH rAMESH dINESH";
//string to array : split
let names = "sURESH rAMESH dINESH AAA";
let chars = names.split("");
let res = chars.map(callback);
function callback(chars) {
    if (chars === chars.toUpperCase()) {
        return chars.toLowerCase();
    } else {
        return chars.toUpperCase();
    }
}
let res2 = chars.map(chars =>(chars=== chars.toUpperCase()) ? chars.toLowerCase() : chars.toUpperCase())
console.log(res2.join(''));
console.log(res.join(''));
let res3 = chars.reduce((acc,val)=>
acc+(val===val.toUpperCase()?val.toLowerCase():val.toUpperCase()),'');
console.log(res3);

/*let toggledCase = names
  .split('')
  .map(char => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  })
  .join('');

console.log(toggledCase);*/
