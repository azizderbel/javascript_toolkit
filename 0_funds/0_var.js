'use strict' // disable hoisting
//camelCase convention
//primitives data types
//null/undefined/string/number/symbol/boolean
var x = 0;let y =2.6;let w=null;let z // w = undefined

global.console.log(typeof(x)) // number
global.console.log(typeof(y)) // number
global.console.log(typeof(w)) // object
global.console.log(typeof(z)) // undefined

//js exception
global.console.log(z==w) // true
global.console.log(undefined==null) // true
global.console.log(z===w) // false
global.console.log(undefined===null) // false
// null represent an empty value
// undefined represents the absence of value

console.log(NaN == NaN); // false
console.log(typeof(NaN) === 'number') // true

// strings are immutable data type

//ES6
let s1 = Symbol();
console.log()


let obj = {
    name:"aziz"
}
global.console.log(typeof(obj)) // object
global.console.log(typeof(obj.name)) // string


// numeric seperator
let n = 1_2 // valid
global.console.log(n)








