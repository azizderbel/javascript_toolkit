'use strict'
// A constructor function start with capital letter
// should be called only after the new key word

function Person(firstName, lastName) {
    // this = {}
    this.firstName = firstName;
    this.lastName = lastName;
    // add methods
    this.login = function () {
        return 0
    }
    // this methods get duplicated in each instance which is not memory efficient
    // we can use the prototype 
    //return this
}
// the new key word create an empty object and assign it to this
// 
 let p = new Person('aziz')
 console.log(p)
 console.log(p.login())
 //console.log(Person.prototype) empty