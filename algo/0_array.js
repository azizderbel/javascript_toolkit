'use strict'

var array = ['B25811C','V05471A','T84720P','B85214O','I88475L','B52214O']


function compare(a,b) {
    if(a[0].toLowerCase() === b[0].toLowerCase()) {
        const l = a[0].length
        if(a[l-1].toLowerCase() === b[l-1].toLowerCase()) {
            let firstNumber = parseInt(a.slice(1,l-1))
            let secondNumber = parseInt(b.slice(1,l-1))
            return firstNumber < secondNumber ? -1 : 0
        }
        return a[l-1].toLowerCase() < b[l-1].toLowerCase() ? 0 : -1
    }
    return a[0].toLowerCase() < b[0].toLowerCase() ?   0 : -1
}


array.sort(compare2)
console.log(array)






