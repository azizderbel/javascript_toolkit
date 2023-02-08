'use strict'

// the object itself is stored in the heap memory
// its label is tored in the stack

let person = {
    firstName: 'John',
    lastName: 'Doe',
    login() {
        return 0
    }
};

console.log(person.name) // undefined
console.log('login' in person) // true

// add new prop
person.age = 15
console.log(person)

//delete a property
delete person.age
delete person.login
console.log(person)

// check if a property exist
console.log('login' in person) // true