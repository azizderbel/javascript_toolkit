'use strict'

// string is a immutable primitive value


//template literal
let x = 4
global.console.log(`Hi, I'm ${x}.`) // string interpolation

// convert to string
global.console.log(x.toString())  // String()

// js compares strings based on the numeric values of the character
global.console.log('a' < 'b') // true
global.console.log("aziz" == 'aziz')
global.console.log("aziz" === 'aziz')