const importedClassPerson = require('./basicsclass.js');
let string = "Tuesday ";
console.log(string + " with length " + string.length);
let slicedString = string.slice(0, 4);
console.log("sliced String is " + slicedString + " with length " + slicedString.length);
console.log("Char at index 1 is " + string[1]);
let subString = string.split("s");
console.log("substring at index 1 is " + subString[1]);
console.log("substring length before trim is " + subString[1].length);
console.log("substring length after trim is " + subString[1].trim().length);

//Parse 
let date = '7';
let nextDay = '5';
let difference = parseInt(date) - parseInt(nextDay);
console.log(difference);
//toString
console.log(difference.toString());

//Occurence of word in string
//let string = "Tuesday ";
let sentence = string + "is funday among all days";
console.log(sentence);
console.log("Index of Day is " + sentence.indexOf("day"));
//Get no. of times day present in sentence 
let count = 0;
let index = sentence.indexOf("day");
while(index != -1) {
    count++;
    index = sentence.indexOf("day", index + 1);
}
console.log("No. of times day is present in sentence is : " + count);

//imported person class and printed its property
let person = new importedClassPerson("New","Name");
console.log(person.fullName());



