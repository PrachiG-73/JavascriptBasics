//if
const flag = true;
if (flag) {
    console.log("condition statisfied");
} else {
    console.log("Condition not satisfied");
}

//while
let i = 0;
while (i < 10) {
    console.log("while loop output is " + i);
    i += 3;
}

//do while 
let j = 0;
do {
    console.log(j);
    j += 2;
} while (j < 10);


//for
for (let k = 0; k < 10; k += 4) {
    console.log("for loop output is " + k);
}
console.log("*******************************************************************************");

console.log("Key Take Away: When you know how many times loop needs to run, use FOR Loop");
console.log("If you need to wait or perform action till any condition become false, use WHILE Loop")

console.log("*******************************************************************************");
//Print common multiple of 2 and 5 in between 5 to 250 and print only first 5 values
let num = 0;
for (let i = 5; i <= 250; i++) {

    if (i % 2 == 0 && i % 5 == 0) {
        num++;
        console.log("Common multiple of 2 and 5 between 5 to 250 is " + i);
        if (num == 5) {
            break;
        }
    }
}
