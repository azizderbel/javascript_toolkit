'use strict'

// An array is a complew data type that can hold mixed type of data
// therefore is stored in the heap memory (varibale size)
// are mutable data structure

let x = new Array(5) // allocate an array of 5 element
let scores = new Array(9,10,8,7,6); // array element

let y = [] //empty array

//add item to the right
y.push(5)
y.push(10)
console.log(y.length)


// add item to the left
y.unshift('aziz')
console.log(y)

//delete item from the end (right)
y.pop()
console.log(y)

//delete item at the begining
y.shift()
console.log(y)


// return an index of an el
console.log(scores.indexOf(10))  // 1
console.log(scores.indexOf(100)) // -1 not found

// check if a var is an array
console.log(Array.isArray(y)) // true
