'use strict'

// object are comared with respect to the return value of the valueOf function
let apple = {
    valueOf: function () {
      return 10;
    },
  };
  
  let orange = {
    toString: function () {
      return '20';
    },
  };
  console.log(apple > 10); // false
  console.log(orange == 20); // true

// ********************************strict comparaison
// no type conversion before the comparaison
  console.log("10" == 10); // true
  console.log("10" === 10); // false 



const name = null ?? 'John';
console.log(name); // 'John'