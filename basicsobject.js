let person = {
    firstName: "john",
    lastName: "Doe",
    age: 23,
    fullName: function () {
        return this.firstName + " "+ this.lastName
    }

};
console.log(person);
console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.fullName());
person.firstName = "David";
console.log(person.firstName);
person.gender = "Male";
console.log(person);
delete person.lastName;
console.log(person);
console.log('gender' in person);
//properties in object
for (let key in person) {
    if(person.hasOwnProperty(key)){
        console.log(person[key]);
    }
}
