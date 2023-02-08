//'use strict'

// usually used as callbacks functions

// Immediat invoked of anonymous functions
(function() {
    console.log('IIFE');
})();

let x = () => {
    console.log("Hi")
}