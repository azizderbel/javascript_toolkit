'use strict'

/*console.log(typeof(2 + '')) // string = '2'
console.log(typeof(10 + '20')) // concat
console.log(typeof(10 + null)) // number = 10
console.log(typeof(10 + undefined)) // number = 10
console.log(typeof(10 + NaN)) // number = NaN


console.log(2 - '') // number = '2'
console.log(10 - '20') // number = -10
console.log(typeof(10 - null)) // number = 10
console.log(typeof(10 - undefined)) // number = 10
console.log(typeof(10 - NaN)) // number = NaN

console.log(2 * '') // number = 0
console.log(10 * '20') // number = 200
console.log(10 * null) // number = 0
console.log(10 * undefined) // number = NAN
console.log(10 * NaN) // number = NaN */

console.log(0/0) // number = NaN
//console.log(typeof(0/0) === 'number') // true
console.log((10/0)) // number = Infinity
console.log((10/0) === Infinity) // true


// division
console.log(7/2) // simple division
console.log(Math.floor(7/2)) // floor division
console.log(-7%-2) // the remainder follow the first nuber sign
console.log(Math.abs(-7%3)) // the modulo

// **************************** WITH object

// The object must have the valueOf() or toString() methods