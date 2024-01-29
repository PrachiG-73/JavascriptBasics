module.exports = class Person {

    //class properties
    age = 88;
    get country() {
        return "India";
    }
    constructor(firstname, lastname) {

        //instance property/var
        this.firstname = firstname;
        this.lastname = lastname;
    }
    fullName() {
        let fullname = this.firstname + this.lastname;
        return fullname;
    }
}

/*commenting as need to export this class
let person = new Person();
console.log(person.age);
console.log(person.country);

let fullNamePerson1 = new Person("john", "doe");
let fullNamePerson2 = new Person("jenni", "fer");
console.log(fullNamePerson1.fullName());
console.log(fullNamePerson2.fullName());

console.log("NOTE : from object and class js, we can see that Using class, with just one blueprint we can create as many objects with single block of code");*/