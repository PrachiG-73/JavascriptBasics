const Person = require('./basicsclass');
class child extends Person {

    gender = 'male';
    //override
    // get country() {
    //     return "Korea";
    // }
    constructor(firstname, lastname) {
        super(firstname, lastname);
    }
    
}

let c = new child("subname","lastname");
console.log(c.gender);
console.log(c.fullName());
console.log(c.age);
console.log(c.country);

