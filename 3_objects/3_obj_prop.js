'use strict'
// each object property has 4 attributes

let obj = {
    firstName: 'John',
    lastName: 'Doe'
}

Object.defineProperty(obj, 'ssn', {
    configurable: false, // can not be redifined or removed
    enumerable:true, // can not be lsited
    writable: false, // can't be modified
    value: '012-38-9119',
});

console.log(obj.hasOwnProperty('ssn')) // true

// loop over an object
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        console.log(value);
    }
}
// or 
let props = Object.values(obj)
//console.log(props)


// return key-value pair of the object
console.log(Object.entries(obj))


// merge object
let box = {
    height: 10,
    width: 20
};

let style = {
    color: 'Red',
    borderStyle: 'solid'
};

let styleBox = Object.assign({name : "aziz"}, box, style);

console.log(styleBox);


