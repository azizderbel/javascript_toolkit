// console.log(this === window) // window is not defined


function show() {
    console.log(this); // refer to the gloqbql object
}
// with use strict, this insde a function refers to undefined


function Car() {
    this.speed = 120;
  }
  
  Car.prototype.getSpeed = function () {
    return this.speed;
  };
  
  var car = new Car();
  console.log(car.getSpeed()); // undefined