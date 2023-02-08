'use strict'

let propName = 'c';

const rank = {
  a: 1,
  b: 2,
  [propName]: 3,
};

console.log(rank.c);

class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    get [propName]() {
      return `${this.firstName} ${this.lastName}`;
    }
}