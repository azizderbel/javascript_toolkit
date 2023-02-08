'use strict'
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    // automatically automatically when the attribute is wanted
    get name() {
        return this._name;
    }
    // automatically called when the atrribute is modified
    set name(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this._name = newName;
    }
}
let p = new Person()
console.log(p instanceof Person); // true
console.log(p instanceof Object); // true

