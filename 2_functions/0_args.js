'use strict'
// return undefined by default
function test() {
    return 0
}
function test_2(a) {
    console.log(`argument: ${arguments.length}`)
    console.log(a)
    return 1
}

console.log(test(2))   // valid call
console.log(test_2(2,5)) // valid call a=2
console.log(test_2()) // valid call a=undefined

const compare = function (a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }
    return 0;
}
 let compare_2 = test // valid
 console.log(compare_2())