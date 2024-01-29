const array = ['banana', 'apple', 'guava', 'pomogrenate', 'date'];
console.log(array.sort());
console.log(array.reverse());

const numArray = [4561, 5, 9, 3, 55, 1100];

function compareFunction(a, b) {
    //output of this sort will decide ..
    //< 0 ..a will come first
    // 0 ..nothing will change 
    //>0 ..b will come first 
    return a - b;
}
console.log(numArray.sort(compareFunction));
console.log(numArray.sort((a,b)=>b-a));
console.log(numArray.reverse());


