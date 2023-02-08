'use strict'

console.log(typeof(Object)) // function

console.log(Object.prototype); // object


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function() {
    return 0;
}
let p1 = new Person()
console.log(Object.getPrototypeOf(p1))